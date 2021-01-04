import { Action } from '@/common/types/basic'
import { ReleaseState } from '@/common/types/state'
import { combine, APIAction } from '@savchenko91/rc-redux-api-mw'
import { ReleaseModel } from '@/common/types/videoModel.d'
import * as video from '@/store/constants/release'

const initialState: ReleaseState = {
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

function getList(state = initialState, { type, payload }: APIAction<ReleaseModel[]>): ReleaseState | void {
  switch (type) {
    case video.GET_ALL.START:
      return {
        ...state,
        error: '',
        loading: {
          getList: state.VideoList.length ? 'Обновление пользователей' : 'Загрузка пользователей',
        },
      }
    case video.GET_ALL.FAIL:
      return {
        ...state,
        loading: {
          getList: false,
        },
        error: payload?.body?.error || '',
      }
    case video.GET_ALL.SUCCESS:
      return {
        ...state,
        error: '',
        loading: {
          getList: false,
        },
        VideoList: (payload.body as ReleaseModel[]) || { ...state.VideoList },
      }
  }
}

function getPreview(state = initialState, { type, payload }: APIAction<string>): ReleaseState | void {
  switch (type) {
    case video.GET_PREVIEW_LINK.START:
      return {
        ...state,
        error: '',
        loading: {
          getList: state.VideoList.length ? 'Обновление пользователей' : 'Загрузка пользователей',
        },
      }

    case video.GET_PREVIEW_LINK.FAIL:
      return {
        ...state,
        error: payload?.body?.error || '',
        loading: {
          getList: false,
        },
      }

    case video.GET_PREVIEW_LINK.SUCCESS:
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

function addVideo(state = initialState, { type, payload }: APIAction<ReleaseModel[]>): ReleaseState | void {
  switch (type) {
    case video.ADD.START:
      return {
        ...state,
        error: '',
        loading: {
          addVideo: state.VideoList.length ? 'Обновление пользователей' : 'Загрузка пользователей',
        },
      }
    case video.ADD.FAIL:
      return {
        ...state,
        loading: {
          addVideo: false,
        },
        error: payload?.body?.error || '',
      }
    case video.ADD.SUCCESS:
      return {
        ...state,
        error: '',
        loading: {
          addVideo: false,
        },
      }
  }
}

function set(state = initialState, { type, payload }: Action<ReleaseModel | null>): ReleaseState | void {
  switch (type) {
    case video.SET_VIDEO:
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
