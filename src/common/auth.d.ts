import { DeepReadonly } from './util'

export type AuthForm = DeepReadonly<{
  email: string
  password: string
}>

export type TokenModel = DeepReadonly<{
  token: string
  refreshToken: string
}>
