import { DeepReadonly } from './util.d'

export type AuthForm = DeepReadonly<{
  email: string
  password: string
}>
