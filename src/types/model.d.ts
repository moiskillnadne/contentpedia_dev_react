import { DeepReadonly } from './util.d'

type Role = 'PORTAL_ADMIN' | 'TEST'

export type UserModel = DeepReadonly<{
  id: 0
  firstName: string
  lastName: string
  middleName: string
  authServiceId: string
  createdTimestamp: string
  emailVerified: boolean
  enabled: boolean
  permissions: Permission[]
  role: Role
  username: string
}>

export type VideoModel = DeepReadonly<
  {
    _id: string
    recommendation: {
      videoContent: Content[] | []
      audioContent: Content[] | []
      textContent: Content[] | []
    }
    timestamp: string
  } & VideoDetailsModel
>

export type VideoFormModel = DeepReadonly<
  {
    recommendation: {
      videoContent: Content[] | []
      audioContent: Content[] | []
      textContent: Content[] | []
    }
  } & VideoDetailsFormModel
>

export type VideoDetailsModel = DeepReadonly<{
  channel: {
    name: string
  }
  video: {
    name: string
    url: string
    previewUrl: string
  }
  guest: {
    name: string
    age?: string
    profession?: string
  }
}>

export type VideoDetailsFormModel = DeepReadonly<{
  channel: {
    name: string
  }
  video: {
    name: string
    url: string
  }
  guest: {
    name: string
    age?: string
    profession?: string
  }
}>

export type Content = DeepReadonly<{
  id: string
  type: string
  title: string
  timecode: string
  url?: string
  comment?: string
  tags: string
}>

export type ChannelBlockOption = DeepReadonly<{
  defaultValue: 'true' | 'false'
  value: string
  text: string
}>
