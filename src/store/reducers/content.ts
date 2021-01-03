import { Action } from '@/types/common.d'
import { combine } from '@/index/redux/middlewares/api/helper'
import { RecommendationContentModel, RecommendationModel } from '@/common/videoModel.d'
import {
  ADD_VIDEO_CONTENT,
  REMOVE_VIDEO_CONTENT,
  ADD_AUDIO_CONTENT,
  REMOVE_AUDIO_CONTENT,
  ADD_TEXT_CONTENT,
  REMOVE_TEXT_CONTENT,
  CLEAR_ENTIRE_CONTENT,
} from '@/store/constants/content'

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
    case ADD_VIDEO_CONTENT:
      const videoContent = state.videoContent.filter((i: RecommendationContentModel) => i)
      videoContent.push(payload)
      return { ...state, ...{ videoContent } }
    case ADD_AUDIO_CONTENT:
      const audioContent = state.audioContent.filter((i: RecommendationContentModel) => i)
      audioContent.push(payload)
      return { ...state, ...{ audioContent } }
    case ADD_TEXT_CONTENT:
      const textContent = state.textContent.filter((i: RecommendationContentModel) => i)
      textContent.push(payload)
      return { ...state, ...{ textContent } }
  }
}

function removeContent(state: RecommendationModel, { type, payload }: Action): RecommendationModel | void {
  switch (type) {
    case REMOVE_VIDEO_CONTENT:
      const videoContent = state.videoContent.filter((item) => item.id === payload.id)
      return { ...state, ...{ videoContent } }
    case REMOVE_AUDIO_CONTENT:
      const audioContent = state.audioContent.filter((item) => item.id === payload.id)
      return { ...state, ...{ audioContent } }
    case REMOVE_TEXT_CONTENT:
      const textContent = state.textContent.filter((item) => item.id === payload.id)
      return { ...state, ...{ textContent } }
  }
}

function clearContent(state: RecommendationModel, { type }: Action): RecommendationModel | void {
  switch (type) {
    case CLEAR_ENTIRE_CONTENT:
      return { ...state, ...{ videoContent: [], audioContent: [], textContent: [] } }
  }
}

export default combine(initialState, addContent, removeContent, clearContent)
