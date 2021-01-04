import { Middleware, Dispatch, MiddlewareAPI } from 'redux'

import qs from 'qs'

import { ApiAction, ApiOnStatusAction, ResBody, Settings, StageActionTypes } from './type.d'

export const REST_API = 'REST_API'

export type Errorable = {
  error: ''
}

export type Requestable = Errorable & {
  loading: Record<string, false | string>
}

export class Api {
  next!: Dispatch<ApiAction>

  action!: ApiAction

  onRequestAbort?: Settings['onRequestAbort']

  onResposeHasError?: Settings['onResposeHasError']

  refreshActionTypes?: StageActionTypes

  constructor(settings?: Settings) {
    this.onRequestAbort = settings?.onRequestAbort
    this.onResposeHasError = settings?.onResposeHasError
    this.refreshActionTypes = settings?.refreshActionTypes
  }

  public middleware = (): Middleware<Dispatch<ApiAction>> => {
    return (api) => (next) => async (action: ApiAction): Promise<ApiAction | ApiOnStatusAction> => {
      if (action.type !== REST_API) {
        return next(action)
      }

      if (action.mockBody) return this.mockRequest(action, api)

      return this.request(action, api)
    }
  }

  private async request(action: ApiAction, api: MiddlewareAPI): Promise<ApiOnStatusAction> {
    const { buildOnStatusAction } = this

    const abortController = new AbortController()

    api.dispatch(buildOnStatusAction({ stage: 'START', action, abortController }))

    try {
      const response = await this.fetch(action, abortController)

      if (response.status === 204) throw Error('No content returned')
      if (response.status === 500) throw Error('Внутренняя ошибка сервера')
      if (response.status === 401 && this.refreshActionTypes) this.refreshToken(api)

      const responseBody = await Api.getResponseBody(response)

      const callbackName = response.ok ? 'onSuccess' : 'onFail'
      const stage = response.ok ? 'SUCCESS' : 'FAIL'

      // emit onSuccess or onFail callbacks
      action[callbackName]?.(responseBody, response)

      return api.dispatch(buildOnStatusAction({ stage, action, responseBody, response }))
    } catch (e) {
      const responseBody = e.toString()
      return api.dispatch(buildOnStatusAction({ stage: 'FAIL', action, responseBody }))
    }
  }

  private async mockRequest(action: ApiAction, api: MiddlewareAPI): Promise<ApiOnStatusAction> {
    const { buildOnStatusAction } = this

    try {
      const abortController = {
        abort: () => {
          throw Error('Request aborted by user')
        },
      }

      api.dispatch(
        buildOnStatusAction({
          stage: 'START',
          action,
          abortController: (abortController as unknown) as AbortController,
        }),
      )

      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 200,
            ok: true,
            body: action.mockBody,
          })
        }, 1000)
      })

      action.onSuccess?.()

      return api.dispatch(
        buildOnStatusAction({
          action,
          response: response as Response,
          stage: 'SUCCESS',
          responseBody: action.mockBody,
        }),
      )
    } catch (e) {
      const responseBody = e.toString()
      return api.dispatch(buildOnStatusAction({ stage: 'FAIL', action, responseBody }))
    }
  }

  private async refreshToken(api: MiddlewareAPI): Promise<ApiAction> {
    const { action } = this

    await api.dispatch({
      type: REST_API,
      url: '/api/v1/refresh',
      method: 'post',
      stageActionTypes: this.refreshActionTypes,
    })

    return api.dispatch(action)
  }

  // eslint-disable-next-line class-methods-use-this
  private async fetch(action: ApiAction, controller: AbortController): Promise<Response> {
    const defaultHeaders = {
      Authorization: '',
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    const token = /refresh$/.test(action.url)
      ? localStorage.getItem('refresh_token')
      : localStorage.getItem('access_token')

    const body: string = typeof action.body !== 'string' ? JSON.stringify(action.body) : action.body

    const credentials = 'same-origin'

    const { headers = defaultHeaders, method = 'get', url, query } = action

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const stringifiedQuery = qs.stringify(query, { arrayFormat: 'repeat', skipNulls: true, addQueryPrefix: true })

    const response = await fetch(`${url}${stringifiedQuery}`, {
      signal: controller.signal,
      method,
      credentials,
      headers,
      body,
    })

    return response
  }

  private static async getResponseBody(response: Response): Promise<ResBody> {
    const contentType = response.headers.get('Content-Type') || ''

    let data: ResBody

    if (/json/.test(contentType)) {
      data = await response.json()
    } else if (!response.ok && /text/.test(contentType)) {
      throw Error(await response.text())
    } else {
      throw Error('Response is not JSON')
    }

    return data
  }

  private buildOnStatusAction = ({
    stage,
    action,
    responseBody,
    response,
    abortController,
  }: ActionBuilderParams): ApiOnStatusAction => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = (isString(responseBody) && !response?.ok ? { error: responseBody } : responseBody) as any

    if (body?.error) {
      if (/The user aborted a request/.test(body.error)) {
        this.onRequestAbort?.()
      } else {
        this.onResposeHasError?.()
      }
    }

    return {
      type: action.stageActionTypes[stage],
      payload: {
        action,
        response,
        body,
        abortController,
      },
    }
  }
}

function isString(smth: unknown): smth is string {
  return typeof smth === 'string'
}

type ActionBuilderParams = {
  stage: keyof StageActionTypes
  action: ApiAction
  responseBody?: ResBody
  response?: Response
  abortController?: AbortController
}
