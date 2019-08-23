import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import clockReducer from './clockReducer'

const rootReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  clock: clockReducer,
})

export default rootReducers
