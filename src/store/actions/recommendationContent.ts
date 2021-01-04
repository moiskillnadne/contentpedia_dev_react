import { Action } from '@/common/types/basic.d'
import * as recommendation from '@/store/constants/recommendationContent'
import { RecommendationContentModel, RecommendationModel } from '@/common/types/videoModel'

export const videoAdd = (content: RecommendationContentModel): Action => ({
  type: recommendation.ADD_VIDEO_CONTENT,
  payload: content,
})
export const videoRemove = (id: string): Action => ({
  type: recommendation.REMOVE_VIDEO_CONTENT,
  payload: id,
})

export const audioAdd = (content: RecommendationContentModel): Action => ({
  type: recommendation.ADD_AUDIO_CONTENT,
  payload: content,
})
export const audioRemove = (id: string): Action => ({
  type: recommendation.REMOVE_AUDIO_CONTENT,
  payload: id,
})

export const textAdd = (content: RecommendationContentModel): Action => ({
  type: recommendation.ADD_TEXT_CONTENT,
  payload: content,
})
export const textRemove = (id: string): Action => ({
  type: recommendation.REMOVE_TEXT_CONTENT,
  payload: id,
})

export const contentClear = (): Action => ({
  type: recommendation.CLEAR_ENTIRE_CONTENT,
  payload: undefined,
})

export const contentUpdate = (recommendationContentState: RecommendationModel): Action => ({
  type: recommendation.UPDATE_ENTIRE_CONTENT,
  payload: recommendationContentState,
})
