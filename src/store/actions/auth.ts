import { REST_API, APIAction, OnSuccess } from '@savchenko91/rc-redux-api-mw'
import { LOGIN } from '@/store/constants/auth'

// eslint-disable-next-line import/prefer-default-export
export const login = (body: unknown, onSuccess: OnSuccess): APIAction => ({
  type: REST_API,
  stageActionTypes: LOGIN,
  url: `/api/v1/auth/login`,
  method: 'POST',
  body,
  onSuccess,
})
