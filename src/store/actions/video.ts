import { VideoFormModel, VideoModel } from '@/types/model'
import { REST_API } from '@/index/redux/middlewares/api'
import { ApiAction, OnStatus } from '@/index/redux/middlewares/api/type.d'
import { Action } from '@/types/common.d'

import {
  GET_VIDEO_LIST,
  GET_VIDEO,
  REMOVE_VIDEO,
  ADD_VIDEO,
  GET_PREVIEW_LINK,
  SET_VIDEO,
} from '@/store/constants/video'

const url = '/api/v1/videoDetails/'

export const set = (Video: VideoModel): Action => ({
  type: SET_VIDEO,
  payload: Video,
})

export const get = (id: string): ApiAction => ({
  type: REST_API,
  stageActionTypes: GET_VIDEO,
  url: `${url}/${id}`,
  method: 'get',
})

export const getList = (): ApiAction => ({
  type: REST_API,
  stageActionTypes: GET_VIDEO_LIST,
  url,
  method: 'get',
})

export const getPreviewLink = (videoLink: string): ApiAction => ({
  type: REST_API,
  stageActionTypes: GET_PREVIEW_LINK,
  url: `${url}getPreviewLink`,
  method: 'post',
  body: { videoLink },
})

export const add = (Video: VideoFormModel, onSuccess: OnStatus, onFail: OnStatus): ApiAction => ({
  type: REST_API,
  stageActionTypes: ADD_VIDEO,
  url,
  method: 'post',
  body: Video,
  onSuccess,
  onFail,
})

export const remove = (id: string, onSuccess: OnStatus): ApiAction => ({
  type: REST_API,
  stageActionTypes: REMOVE_VIDEO,
  url: `${url}/${id}`,
  method: 'delete',
  onSuccess,
})
