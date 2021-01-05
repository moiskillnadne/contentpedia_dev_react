import { applyMiddleware, compose, createStore, Store } from 'redux'
import { RootState } from '@/common/types/state'
import { api } from './apimiddleware'
import createRootReducer from './reducers'

const isDevelopment = process.env.NODE_ENV === 'development'

const composeEnhancer =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (isDevelopment && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

function configureStore(preloadedState?: RootState): Store {
  const store = createStore(createRootReducer(), preloadedState, composeEnhancer(applyMiddleware(api.middleware())))

  return store
}

export default configureStore()
