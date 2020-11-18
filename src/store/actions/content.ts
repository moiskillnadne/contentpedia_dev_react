import {
  ADD_VIDEO_CONTENT,
  REMOVE_VIDEO_CONTENT,
  ADD_AUDIO_CONTENT,
  REMOVE_AUDIO_CONTENT,
  ADD_TEXT_CONTENT,
  REMOVE_TEXT_CONTENT,
} from '@/store/constants/content'

import { Content } from 'types/model'

// Поменять ТИП И ДЕЙСТВИЕ ТИПА местами

export const addVideo = (content: Content) => ({
  type: ADD_VIDEO_CONTENT,
  payload: content,
})
export const removeVideo = (id: string) => ({
  type: REMOVE_VIDEO_CONTENT,
  payload: id,
})

export const addAudio = (content: Content) => ({
  type: ADD_AUDIO_CONTENT,
  payload: content,
})
export const removeAudio = (id: string) => ({
  type: REMOVE_AUDIO_CONTENT,
  payload: id,
})

export const addText = (content: Content) => ({
  type: ADD_TEXT_CONTENT,
  payload: content,
})
export const removeText = (id: string) => ({
  type: REMOVE_TEXT_CONTENT,
  payload: id,
})
