import { Requestable } from '@/index/redux/middlewares/api'

import { UserModel, VideoModel } from './model.d'

export type UserState = Requestable & {
  UserList: UserModel[]
}

export type VideoState = Requestable & {
  VideoList: VideoModel[]
  Video: VideoModel | null
}

export type RootState = {
  userState: UserState
  videoState: VideoState
}
