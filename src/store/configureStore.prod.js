import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [thunkMiddleware, sagaMiddleware]

const enhancer = []

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancer,
)

export default (function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composedEnhancers)
  sagaMiddleware.run(rootSaga)
  return store
})()
