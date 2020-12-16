import { REST_API } from '@/index/redux/middlewares/api'
import { ApiAction, OnStatus } from '@/index/redux/middlewares/api/type.d'
import { LOGIN } from '@/store/constants/auth'

// eslint-disable-next-line import/prefer-default-export
export const login = (body: unknown, onSuccess: OnStatus): ApiAction => ({
  type: REST_API,
  stageActionTypes: LOGIN,
  url: `/api/v1/auth/login`,
  method: 'POST',
  body,
  onSuccess,
})
