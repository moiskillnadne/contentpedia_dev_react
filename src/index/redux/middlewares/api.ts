import { MiddlewareAPI, Middleware, Dispatch } from 'redux'

import { isFunction } from 'lodash'

import { ApiAction, StageActionTypes, ApiEndAction, Settings } from './api.d'

export const REST_API = 'REST_API'

export class Api {
  api!: MiddlewareAPI

  next!: Dispatch<ApiAction>

  action!: ApiAction

  response!: Response

  hostname: string

  refreshActionTypes: StageActionTypes

  constructor(settings: Settings) {
    this.refreshActionTypes = settings.refreshActionTypes
    this.hostname = settings?.devHostname || window.location.origin
  }

  public middleware = (): Middleware<Dispatch<ApiAction>> => {
    return (api) => (next) => async (action): Promise<ApiAction | ApiEndAction> => {
      if (action.type !== REST_API) {
        return next(action)
      }

      this.action = action
      this.api = api

      return this.request()
    }
  }

  private async request(): Promise<ApiEndAction> {
    const { api, action, buildStageAction } = this

    api.dispatch(buildStageAction('START', action))

    try {
      const response = await this.fetch()

      if (response.status === 401) this.refreshToken()
      if (response.status === 204) throw Error('No content returned')

      const responseBody = await this.getResponseBody()

      const callbackName = response.ok ? 'onSuccess' : 'onFail'
      const stageActionType = response.ok ? 'SUCCESS' : 'FAIL'

      const onStatus = action[callbackName]

      if (isFunction(onStatus)) onStatus(responseBody, response)

      return api.dispatch(buildStageAction(stageActionType, action, responseBody, response))
    } catch (e) {
      return api.dispatch(buildStageAction('FAIL', action, e.toString()))
    }
  }

  private async fetch(): Promise<Response> {
    const { action, hostname } = this

    const defaultHeaders = {
      Authorization: '',
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    const body: string = typeof action.body !== 'string' ? JSON.stringify(action.body) : action.body

    const token = /refresh$/.test(action.url) ? localStorage.getItem('refreshToken') : localStorage.getItem('token')

    const credentials = 'same-origin'

    const { headers = defaultHeaders, method = 'get', url } = action

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${hostname}${url}`, {
      method,
      credentials,
      headers,
      body,
    })

    this.response = response

    return response
  }

  private async getResponseBody(): Promise<unknown> {
    const { response } = this

    let data: unknown = {}

    if (/json/.test(response.headers.get('Content-Type') || '')) {
      data = await response.json()
    } else {
      throw Error('Response is not JSON')
    }

    return data
  }

  private async refreshToken(): Promise<ApiAction> {
    const { api, action } = this

    await api.dispatch({
      type: REST_API,
      url: '/api/v1/refresh',
      method: 'post',
      stageActionTypes: this.refreshActionTypes,
    })
    return api.dispatch(action)
  }

  private buildStageAction = (
    stage: keyof StageActionTypes,
    action: ApiAction,
    responseBody?: string | unknown,
    response?: Response,
  ): ApiEndAction => ({
    type: action.stageActionTypes[stage],
    payload: {
      action,
      response,
      body: (isString(responseBody) ? { error: responseBody } : responseBody) as Record<string, unknown>,
    },
  })
}

function isString(value: unknown): boolean {
  return typeof value === 'string'
}
