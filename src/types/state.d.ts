import { Requestable } from '@/index/redux/middlewares/api'

import { UserModel, VideoModel, Content } from './model.d'

export type UserState = Requestable & {
  UserList: UserModel[]
}

export type VideoState = Requestable & {
  VideoList: VideoModel[]
  Video: VideoModel | null
  validation: {
    previewLink: string | null
  }
}

export type ContentState = {
  videoContent: Content[]
  audioContent: Content[]
  textContent: Content[]
}

export type RootState = {
  userState: UserState
  videoState: VideoState
  contentState: ContentState
}
