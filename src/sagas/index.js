import { all } from 'redux-saga/effects'
import auth from './auth'
import clock from './clock'
import timer from './timer'

export default function* rootSaga() {
  yield all([auth(), clock(), timer()])
}
