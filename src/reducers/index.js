import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import clockReducer from './clockReducer'
import timerReducer from './timerReducer'

const rootReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  clock: clockReducer,
  timer: timerReducer,
})

export default rootReducers
