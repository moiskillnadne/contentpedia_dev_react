// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action<P = any> = {
  type: string
  payload: P
}
