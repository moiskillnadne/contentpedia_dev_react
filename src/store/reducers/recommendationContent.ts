import { Action } from '@/common/types/basic'
import { combine } from '@savchenko91/rc-redux-api-mw'
import { RecommendationContentModel, RecommendationModel } from '@/common/types/videoModel.d'
import * as recommendation from '@/store/constants/recommendationContent'

const initialState: RecommendationModel = {
  video: [],
  audio: [],
  text: [],
}

function addContent(
  state: RecommendationModel,
  { type, payload }: Action<RecommendationContentModel>,
): RecommendationModel | void {
  switch (type) {
    case recommendation.ADD_VIDEO_CONTENT:
      const videoContent = state.video.filter((i: RecommendationContentModel) => i)
      videoContent.push(payload)
      return { ...state, ...{ videoContent } }
    case recommendation.ADD_AUDIO_CONTENT:
      const audioContent = state.audio.filter((i: RecommendationContentModel) => i)
      audioContent.push(payload)
      return { ...state, ...{ audioContent } }
    case recommendation.ADD_TEXT_CONTENT:
      const textContent = state.text.filter((i: RecommendationContentModel) => i)
      textContent.push(payload)
      return { ...state, ...{ textContent } }
  }
}

function removeContent(state: RecommendationModel, { type, payload }: Action): RecommendationModel | void {
  switch (type) {
    case recommendation.REMOVE_VIDEO_CONTENT:
      const videoContent = state.video.filter((item) => item.id === payload.id)
      return { ...state, ...{ videoContent } }
    case recommendation.REMOVE_AUDIO_CONTENT:
      const audioContent = state.audio.filter((item) => item.id === payload.id)
      return { ...state, ...{ audioContent } }
    case recommendation.REMOVE_TEXT_CONTENT:
      const textContent = state.text.filter((item) => item.id === payload.id)
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
