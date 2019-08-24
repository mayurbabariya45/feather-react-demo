import { all, takeEvery, put, call } from 'redux-saga/effects'
import { addNotification, notificationStates } from '../../components/Notification'
import { callLogin, callProdTask, callStates } from './api'
import actions from '../../actions/Auth/actionCreators'
import { SESSION_TIMEOUT } from '../../config/constants'

export function* LOGIN({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(callLogin, payload)
  if (success) {
    if (String(success).trim() === 'FAIL') {
      addNotification({
        message: 'Something is wrong with your login or password :(',
        level: notificationStates.error,
      })
      yield put({
        type: 'user/SET_STATE',
        payload: {
          loading: false,
        },
      })
      return false
    }
    const loggedInTime = new Date().getTime() + SESSION_TIMEOUT * 60 * 60 * 1000
    localStorage.setItem('userID', success)
    localStorage.setItem('loggedInTime', loggedInTime)
    yield put({
      type: 'user/START',
      payload: loggedInTime,
    })
    yield put({
      type: 'clock/LOAD_CURRENT_CLOCK',
    })
    yield put({
      type: 'user/LOAD_CURRENT_ACCOUNT',
      payload: success,
    })
  }
}

export function* LOGOUT() {
  localStorage.removeItem('userID')
  localStorage.removeItem('loggedInTime')
  yield put({
    type: 'user/SET_STATE',
    payload: {
      userID: null,
      authorized: false,
      loading: false,
    },
  })
}

export function* LOAD_CURRENT_ACCOUNT({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const loggedInTime = Number(localStorage.getItem('loggedInTime') || 0)
  const currentTime = new Date().getTime()
  if (loggedInTime > 0 && currentTime >= loggedInTime) {
    yield put({ type: 'user/LOGOUT' })
    return false
  }
  if (!Number.isInteger(payload) || payload === null) {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        userID: null,
        loading: false,
        authorized: false,
      },
    })
    return false
  }
  const response = yield call(callProdTask, {})
  const stateResponse = yield call(callStates, {})
  if (response && stateResponse) {
    const tasks = response.split(',')
    const states = stateResponse.split(',')
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false,
        userID: payload,
        authorized: true,
        tasks,
        states,
      },
    })
    yield put({
      type: 'timer/START',
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT({ payload: Number(localStorage.getItem('userID')) || null }), // run once on app load to check user auth
  ])
}
