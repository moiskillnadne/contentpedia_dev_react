import { ReleaseModel, RawReleaseModel } from '@/common/videoModel'
import { REST_API } from '@/index/redux/middlewares/api'
import { ApiAction, OnStatus } from '@/index/redux/middlewares/api/type.d'
import { Action } from '@/common/basic.d'

import * as video from '@/store/constants/video'

const url = '/api/v1/videoDetails/'

export const set = (Video: ReleaseModel | null): Action => ({
  type: video.SET_VIDEO,
  payload: Video,
})

export const get = (id: string): ApiAction => ({
  type: REST_API,
  stageActionTypes: video.GET,
  url: `${url}/${id}`,
  method: 'get',
})

export const getList = (): ApiAction => ({
  type: REST_API,
  stageActionTypes: video.GET_ALL,
  url,
  method: 'get',
})

export const getPreviewLink = (videoLink: string): ApiAction => ({
  type: REST_API,
  stageActionTypes: video.GET_PREVIEW_LINK,
  url: `${url}getPreviewLink`,
  method: 'post',
  body: { videoLink },
})

export const add = (Video: RawReleaseModel, onSuccess: OnStatus, onFail: OnStatus): ApiAction => ({
  type: REST_API,
  stageActionTypes: video.ADD,
  url,
  method: 'post',
  body: Video,
  onSuccess,
  onFail,
})

// Check method and url v
export const update = (Video: ReleaseModel, onSuccess: OnStatus, onFail: OnStatus): ApiAction => ({
  type: REST_API,
  stageActionTypes: video.UPDATE,
  url,
  method: 'put',
  body: Video,
  onSuccess,
  onFail,
})

export const remove = (id: string, onSuccess: OnStatus): ApiAction => ({
  type: REST_API,
  stageActionTypes: video.REMOVE,
  url: `${url}/${id}`,
  method: 'delete',
  onSuccess,
})
