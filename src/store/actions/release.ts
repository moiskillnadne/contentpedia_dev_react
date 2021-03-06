import { ReleaseModel, RawReleaseModel } from '@/common/types/release'
import { REST_API, APIAction, OnSuccess, OnFail } from '@savchenko91/rc-redux-api-mw'
import { Action } from '@/common/types/basic.d'

import * as video from '@/store/constants/release'

const url = '/api/v2/release'

export const set = (Video: ReleaseModel | null): Action => ({
  type: video.SET_VIDEO,
  payload: Video,
})

export const get = (id: string): APIAction => ({
  type: REST_API,
  stageActionTypes: video.GET,
  url: `${url}/${id}`,
  method: 'get',
})

export const getList = (): APIAction => ({
  type: REST_API,
  stageActionTypes: video.GET_ALL,
  url,
  method: 'get',
})

export const getListPage = (pageNumber: number): APIAction => ({
  type: REST_API,
  stageActionTypes: video.GET_ALL_PER_PAGE,
  url: `${url}/page/${pageNumber}`,
  method: 'post',
})

export const getCompletedRelease = (pageNumber: number, query?: Record<string, string | RegExp>): APIAction => ({
  type: REST_API,
  stageActionTypes: video.GET_COMPLETED_RELEASE,
  url: `${url}/completed/page/${pageNumber}`,
  method: 'post',
  body: { query },
})

export const getInprocessRelease = (pageNumber: number, query?: Record<string, string | RegExp>): APIAction => ({
  type: REST_API,
  stageActionTypes: video.GET_INPROCESS_RELEASE,
  url: `${url}/inprocess/page/${pageNumber}`,
  method: 'post',
  body: { query },
})

export const getPreviewLink = (videoLink: string): APIAction => ({
  type: REST_API,
  stageActionTypes: video.GET_PREVIEW_LINK,
  url: `${url}/getPreviewLink`,
  method: 'post',
  body: { videoLink },
})

export const add = (Video: RawReleaseModel, onSuccess: OnSuccess, onFail: OnFail): APIAction => ({
  type: REST_API,
  stageActionTypes: video.ADD,
  url,
  method: 'post',
  body: Video,
  onSuccess,
  onFail,
})

// Check method and url v
export const update = (id: string, Video: RawReleaseModel, onSuccess: OnSuccess, onFail: OnFail): APIAction => ({
  type: REST_API,
  stageActionTypes: video.UPDATE,
  url: `${url}/${id}`,
  method: 'put',
  body: Video,
  onSuccess,
  onFail,
})

export const remove = (id: string, onSuccess: OnSuccess): APIAction => ({
  type: REST_API,
  stageActionTypes: video.REMOVE,
  url: `${url}/${id}`,
  method: 'delete',
  onSuccess,
})
