import { Action } from '@/common/basic.d'
import { combine } from '@/index/redux/middlewares/api/helper'
import { RecommendationContentModel, RecommendationModel } from '@/common/videoModel.d'
import * as recommendation from '@/store/constants/content'

const initialState: RecommendationModel = {
  videoContent: [],
  audioContent: [],
  textContent: [],
}

function addContent(
  state: RecommendationModel,
  { type, payload }: Action<RecommendationContentModel>,
): RecommendationModel | void {
  switch (type) {
    case recommendation.ADD_VIDEO_CONTENT:
      const videoContent = state.videoContent.filter((i: RecommendationContentModel) => i)
      videoContent.push(payload)
      return { ...state, ...{ videoContent } }
    case recommendation.ADD_AUDIO_CONTENT:
      const audioContent = state.audioContent.filter((i: RecommendationContentModel) => i)
      audioContent.push(payload)
      return { ...state, ...{ audioContent } }
    case recommendation.ADD_TEXT_CONTENT:
      const textContent = state.textContent.filter((i: RecommendationContentModel) => i)
      textContent.push(payload)
      return { ...state, ...{ textContent } }
  }
}

function removeContent(state: RecommendationModel, { type, payload }: Action): RecommendationModel | void {
  switch (type) {
    case recommendation.REMOVE_VIDEO_CONTENT:
      const videoContent = state.videoContent.filter((item) => item.id === payload.id)
      return { ...state, ...{ videoContent } }
    case recommendation.REMOVE_AUDIO_CONTENT:
      const audioContent = state.audioContent.filter((item) => item.id === payload.id)
      return { ...state, ...{ audioContent } }
    case recommendation.REMOVE_TEXT_CONTENT:
      const textContent = state.textContent.filter((item) => item.id === payload.id)
      return { ...state, ...{ textContent } }
  }
}

function clearContent(state: RecommendationModel, { type }: Action): RecommendationModel | void {
  switch (type) {
    case recommendation.CLEAR_ENTIRE_CONTENT:
      return { ...state, ...{ videoContent: [], audioContent: [], textContent: [] } }
  }
}

export default combine(initialState, addContent, removeContent, clearContent)
