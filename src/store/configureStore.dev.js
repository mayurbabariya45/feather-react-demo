import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistState } from 'redux-devtools'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import DevTools from '../root/DevTools'

const sagaMiddleware = createSagaMiddleware()
const middleware = [thunkMiddleware, sagaMiddleware]

const enhancer = [
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/)),
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancer,
)

export default (function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composedEnhancers)
  sagaMiddleware.run(rootSaga)
  return store
})()
