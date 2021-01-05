import { REST_API, APIAction, OnSuccess } from '@savchenko91/rc-redux-api-mw'
import { LOGIN } from '@/store/constants/auth'

export type LoginResBody = {
  token: string
  refreshToken: string
}

// eslint-disable-next-line import/prefer-default-export
export const login = (
  body: Record<string, string>,
  onSuccess: OnSuccess<LoginResBody>,
): APIAction<unknown, LoginResBody> => ({
  type: REST_API,
  stageActionTypes: LOGIN,
  url: `/api/v1/auth/login`,
  method: 'POST',
  body,
  onSuccess,
})
