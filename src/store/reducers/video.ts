import { Action } from '@/types/common.d'
import { VideoState } from '@/types/state.d'
import { combine } from '@/index/redux/middlewares/api/helper'

import { ApiOnStatusAction } from '@/index/redux/middlewares/api/type.d'
import { VideoModel } from '@/types/model'
import { GET_VIDEO_LIST, SET_VIDEO, ADD_VIDEO, GET_PREVIEW_LINK } from '@/store/constants/video'

const initialState: VideoState = {
  VideoList: [],
  Video: null,
  validation: {
    previewLink: null,
  },
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

function getPreview(state = initialState, { type, payload }: ApiOnStatusAction<string>): VideoState | void {
  switch (type) {
    case GET_PREVIEW_LINK.START:
      return {
        ...state,
        error: '',
        loading: {
          getList: state.VideoList.length ? 'Обновление пользователей' : 'Загрузка пользователей',
        },
      }

    case GET_PREVIEW_LINK.FAIL:
      return {
        ...state,
        error: payload?.body?.error || '',
        loading: {
          getList: false,
        },
      }

    case GET_PREVIEW_LINK.SUCCESS:
      return {
        ...state,
        error: '',
        loading: {
          getList: false,
        },
        validation: {
          previewLink: (payload.body as string) || null,
        },
      }
  }
}

function addVideo(state = initialState, { type, payload }: ApiOnStatusAction<VideoModel[]>): VideoState | void {
  switch (type) {
    case ADD_VIDEO.START:
      return {
        ...state,
        error: '',
        loading: {
          addVideo: state.VideoList.length ? 'Обновление пользователей' : 'Загрузка пользователей',
        },
      }
    case ADD_VIDEO.FAIL:
      return {
        ...state,
        loading: {
          addVideo: false,
        },
        error: payload?.body?.error || '',
      }
    case ADD_VIDEO.SUCCESS:
      return {
        ...state,
        error: '',
        loading: {
          addVideo: false,
        },
      }
  }
}

function set(state = initialState, { type, payload }: Action<VideoModel | null>): VideoState | void {
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

export default combine(initialState, getList, getPreview, addVideo, set)
