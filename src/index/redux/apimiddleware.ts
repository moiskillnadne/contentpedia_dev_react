import { LoginResBody } from '@/store/actions/auth'
import { APIAction, APIMiddleware, REST_API } from '@savchenko91/rc-redux-api-mw'

const url = '/api/v1/auth/refresh'

export const api = new APIMiddleware({
  headers: ({ action }) => {
    return new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(url === action.url ? 'refresh' : 'token')}`,
    })
  },
  handleFailedRequest: async ({ response, store, action, request }) => {
    const refreshToken = localStorage.getItem('refresh')

    if (response?.status === 401 && refreshToken && url !== action.url) {
      const result = await store.dispatch({
        type: REST_API,
        url,
        method: 'post',
        stageActionTypes: { START: 'start', FAIL: 'fail', SUCCESS: 'success' },
      } as APIAction)

      if (result.payload?.body) {
        const body = result.payload.body as LoginResBody
        localStorage.setItem('token', body.token)
        localStorage.setItem('refresh', body.refreshToken)
        console.log(body)

        request.headers.set('Authorization', `Bearer ${body.token}`)
        return new Request(request)
      }
    }
  },
})

export const TEST = 'test'
