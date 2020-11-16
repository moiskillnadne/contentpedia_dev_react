import { REST_API } from '@/index/redux/middlewares/api'
import { ApiAction, OnStatus } from '@/index/redux/middlewares/api.d'

import { GET_VIDEO_LIST, GET_VIDEO, REMOVE_VIDEO } from '@/store/constants/video'

const url = '/api/db'

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

export const remove = (id: string, onSuccess: OnStatus): ApiAction => ({
  type: REST_API,
  stageActionTypes: REMOVE_VIDEO,
  url: `${url}/${id}`,
  method: 'delete',
  onSuccess,
})
