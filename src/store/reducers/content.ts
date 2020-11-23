import { Action } from '@/types/common.d'
import { combine } from '@/index/redux/middlewares/api/helper'
import { Content } from '@/types/model'
import {
  ADD_VIDEO_CONTENT,
  REMOVE_VIDEO_CONTENT,
  ADD_AUDIO_CONTENT,
  REMOVE_AUDIO_CONTENT,
  ADD_TEXT_CONTENT,
  REMOVE_TEXT_CONTENT,
  CLEAR_ENTIRE_CONTENT,
} from '@/store/constants/content'
import { ContentState } from '@/types/state'

const initialState: ContentState = {
  videoContent: [],
  audioContent: [],
  textContent: [],
}

function addContent(state: ContentState, { type, payload }: Action<Content>): ContentState | void {
  switch (type) {
    case ADD_VIDEO_CONTENT:
      state.videoContent.push(payload)
      return { ...state }
    case ADD_AUDIO_CONTENT:
      state.audioContent.push(payload)
      return { ...state }
    case ADD_TEXT_CONTENT:
      state.textContent.push(payload)
      return { ...state }
  }
}

function removeContent(state: ContentState, { type, payload }: Action): ContentState | void {
  switch (type) {
    case REMOVE_VIDEO_CONTENT:
      state.videoContent = state.videoContent.filter((item) => item.id === payload.id)
      return { ...state }
    case REMOVE_AUDIO_CONTENT:
      state.audioContent = state.audioContent.filter((item) => item.id === payload.id)
      return { ...state }
    case REMOVE_TEXT_CONTENT:
      state.textContent = state.textContent.filter((item) => item.id === payload.id)
      return { ...state }
  }
}

function clearContent(state: ContentState, { type }: Action): ContentState | void {
  switch (type) {
    case CLEAR_ENTIRE_CONTENT:
      state.videoContent = []
      state.audioContent = []
      state.textContent = []
      return { ...state }
  }
}

export default combine(initialState, addContent, removeContent, clearContent)
