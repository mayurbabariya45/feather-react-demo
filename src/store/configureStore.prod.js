import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunkMiddleware]

const enhancer = []

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancer,
)

export default (function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composedEnhancers)
  return store
})()
