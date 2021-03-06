import { combineReducers, Reducer } from 'redux'
import { RootState } from '@/common/types/state'

function importAllReducers(): Record<keyof RootState, Reducer> {
  const r = require.context('@/store/reducers', true, /\.ts$/)

  const allReducers: Record<string, Reducer> = {}

  r.keys().forEach((key) => {
    allReducers[`${key.replace('.ts', '').replace('./', '')}State`] = r(key).default
  })

  return allReducers
}

const createRootReducer = (): Reducer<RootState> => combineReducers<RootState>(importAllReducers())

export default createRootReducer
