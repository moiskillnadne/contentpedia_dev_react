import { DeepReadonly } from './util.d'

type Permission = 'DEALER_DATA'

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
export type VideoModel = DeepReadonly<{ _id: string } & VideoFormModel>
export type VideoFormModel = DeepReadonly<{
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
    age?: string | null
    profession?: string | null
    recommendation: {
      videoContent: Content[] | []
      audioContent: Content[] | []
      textContent: Content[] | []
    }
  }
  general: {
    description: string
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

export type VideoParamsModel = DeepReadonly<{
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
    age?: string | null
    profession?: string | null
  }
  general: {
    description: string
  }
}>
