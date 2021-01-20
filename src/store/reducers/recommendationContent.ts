import { Action } from '@/common/types/basic'
import { combine } from '@savchenko91/rc-redux-api-mw'
import { RecommendationContentModel, RecommendationModel } from '@/common/types/release'
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
      const video = state.video.filter((i: RecommendationContentModel) => i)
      video.push(payload)
      return { ...state, ...{ video } }
    case recommendation.ADD_AUDIO_CONTENT:
      const audio = state.audio.filter((i: RecommendationContentModel) => i)
      audio.push(payload)
      return { ...state, ...{ audio } }
    case recommendation.ADD_TEXT_CONTENT:
      const text = state.text.filter((i: RecommendationContentModel) => i)
      text.push(payload)
      return { ...state, ...{ text } }
  }
}

function removeContent(state: RecommendationModel, { type, payload }: Action): RecommendationModel | void {
  switch (type) {
    case recommendation.REMOVE_VIDEO_CONTENT:
      const video = state.video.filter((item: RecommendationContentModel) => {
        return (item._id ? item._id : item.id) !== payload
      })
      return { ...state, ...{ video } }
    case recommendation.REMOVE_AUDIO_CONTENT:
      const audio = state.audio.filter((item: RecommendationContentModel) => {
        return (item._id ? item._id : item.id) !== payload
      })
      return { ...state, ...{ audio } }
    case recommendation.REMOVE_TEXT_CONTENT:
      const text = state.text.filter((item: RecommendationContentModel) => {
        return (item._id ? item._id : item.id) !== payload
      })
      return { ...state, ...{ text } }
  }
}

function clearContent(state: RecommendationModel, { type }: Action): RecommendationModel | void {
  switch (type) {
    case recommendation.CLEAR_ENTIRE_CONTENT:
      return { ...state, ...{ video: [], audio: [], text: [] } }
  }
}

function updateContent(state: RecommendationModel, { type, payload }: Action): RecommendationModel | void {
  switch (type) {
    case recommendation.UPDATE_ENTIRE_CONTENT:
      return { ...state, ...{ video: payload.video, audio: payload.audio, text: payload.text } }
  }
}

export default combine(initialState, addContent, removeContent, clearContent, updateContent)
