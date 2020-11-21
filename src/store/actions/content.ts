import { Action } from '@/types/common.d'
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

export const videoAdd = (content: Content): Action => ({
  type: ADD_VIDEO_CONTENT,
  payload: content,
})
export const videoRemove = (id: string): Action => ({
  type: REMOVE_VIDEO_CONTENT,
  payload: id,
})

export const audioAdd = (content: Content): Action => ({
  type: ADD_AUDIO_CONTENT,
  payload: content,
})
export const audioRemove = (id: string): Action => ({
  type: REMOVE_AUDIO_CONTENT,
  payload: id,
})

export const textAdd = (content: Content): Action => ({
  type: ADD_TEXT_CONTENT,
  payload: content,
})
export const textRemove = (id: string): Action => ({
  type: REMOVE_TEXT_CONTENT,
  payload: id,
})
