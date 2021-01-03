import { Requestable } from '@/index/redux/middlewares/api'

import { ReleaseModel, RecommendationContentModel } from './videoModel.d'

export type RootState = {
  userState: UserState
  releaseState: ReleaseState
  recommendationContentState: RecommendationContentState
}

export type UserState = Requestable & {
  UserList: UserModel[]
}

type UserModel = {
  _id: string
  email: string
  password: string
  timestamp: string
}

export type ReleaseState = Requestable & {
  VideoList: ReleaseModel[]
  Video: ReleaseModel | null
  validation: {
    previewLink: string | null
  }
}

type RecommendationContentState = {
  videoContent: RecommendationContentModel[] | []
  audioContent: RecommendationContentModel[] | []
  textContent: RecommendationContentModel[] | []
}
