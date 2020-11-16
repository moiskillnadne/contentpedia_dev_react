import { Action } from '@/types/common.d'
import { VideoState } from '@/types/state.d'
import { combine } from '@/helper/redux'

import { ApiOnStatusAction } from '@/index/redux/middlewares/api/type.d'
import { VideoModel } from '@/types/model'
import { GET_VIDEO_LIST, SET_VIDEO } from '../constants/video'

const initialState: VideoState = {
  VideoList: [],
  Video: null,
  error: '',
  loading: {
    getList: false,
  },
}

function getList(state = initialState, { type, payload }: ApiOnStatusAction<VideoModel[]>): VideoState | void {
  switch (type) {
    case GET_VIDEO_LIST.START:
      return {
        ...state,
        error: '',
        loading: {
          getList: state.VideoList.length ? 'Обновление пользователей' : 'Загрузка пользователей',
        },
      }
    case GET_VIDEO_LIST.FAIL:
      return {
        ...state,
        loading: {
          getList: false,
        },
        error: payload?.body?.error || '',
      }
    case GET_VIDEO_LIST.SUCCESS:
      return {
        ...state,
        error: '',
        loading: {
          getList: false,
        },
        VideoList: (payload.body as VideoModel[]) || { ...state.VideoList },
      }
  }
}

function set(state = initialState, { type, payload }: Action<VideoModel>): VideoState | void {
  switch (type) {
    case SET_VIDEO:
      return {
        ...state,
        error: '',
        loading: {
          getList: false,
        },
        Video: payload,
      }
  }
}

export default combine(initialState, getList, set)
