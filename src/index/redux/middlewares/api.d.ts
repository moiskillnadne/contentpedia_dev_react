export type StageActionTypes = {
  START: string
  FAIL: string
  SUCCESS: string
}

export type ApiAction<Body = unknown> = {
  type: string
  url: string
  body?: Body
  method?: string
  headers?: { [key: string]: string }
  stageActionTypes: StageActionTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onStart?: onStatus<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess?: onStatus<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFail?: onStatus<any>
}

export type onStatus<ResponseData = unknown> = (responseData: ResponseData, response: Response) => void

export interface ApiEndAction<D = unknown> {
  type: string
  payload: {
    body: {
      error?: string
      data?: D
    }
    action: ApiAction
    response?: Response
  }
}

export type Settings = {
  refreshActionTypes: StageActionTypes
  devHostname?: string
}
