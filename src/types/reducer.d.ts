import { UserModel } from './models.d'

export type ValidationError = {
  timestamp: string
  status: string
  type: string
  message: string
  detail: string
  field: string
  value: string
}

export type Errorable = {
  error: string
}

export type Requestable = Errorable & {
  isLoading: boolean
}

export type Validatable = {
  validationErrors: ValidationError[]
}

export type UserState = Requestable &
  Validatable & {
    User: UserModel
  }

export type AuthState = Requestable & Validatable

export interface RootState {
  authState: AuthState
  recordState: Errorable & Requestable
  userState: UserState
}
