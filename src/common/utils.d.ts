export type Writeable<T> = { -readonly [P in keyof T]-?: T[P] }

export type ChannelBlockOption = DeepReadonly<{
  defaultValue: 'true' | 'false'
  value: string
  text: string
}>
