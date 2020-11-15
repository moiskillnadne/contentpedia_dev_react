import { applyMiddleware, compose, createStore } from 'redux'

import { REFRESH } from '@/store/constants/auth'

import { Api } from '@/index/redux/middlewares/api'
import createRootReducer from './reducers'

const api = new Api({
  refreshActionTypes: REFRESH,
})

const composeEnhancer =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default createStore(createRootReducer(), undefined, composeEnhancer(applyMiddleware(api.middleware())))
