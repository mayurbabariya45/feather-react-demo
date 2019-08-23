import { all, takeEvery, put, call } from 'redux-saga/effects'
import { addNotification, notificationStates } from '../../components/Notification'
import { callLogin, callProdTask, callStates } from './api'
import actions from '../../actions/Auth/actionCreators'

export function* LOGIN({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(callLogin, payload)
  if (success) {
    if (!Number.isInteger(success)) {
      addNotification({
        message: 'Something is wrong with your login or password :(',
        level: notificationStates.error,
      })
      return false
    }
    localStorage.setItem('userID', success)
    yield put({
      type: 'user/LOAD_CURRENT_ACCOUNT',
      payload: success,
    })
  }
}

export function* LOGOUT() {
  localStorage.removeItem('userID')
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
