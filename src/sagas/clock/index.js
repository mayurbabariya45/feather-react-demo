import { all, takeEvery, put, call } from 'redux-saga/effects'
import actions from '../../actions/Clock/actionCreators'
import { callClockIn, callClockOut, getBoxID, getClockInfo } from './api'
import { addNotification, notificationStates } from '../../components/Notification'

export function* CLOCKIN({ payload }) {
  yield put({
    type: 'clock/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const boxSuccess = yield call(getBoxID, { getBoxId: true, barcode: payload.barcode })
  if (boxSuccess) {
    if (!Number.isInteger(boxSuccess)) {
      addNotification({
        message: 'Something is wrong with your barcode :(',
        level: notificationStates.error,
      })
      return false
    }
    const userId = Number(localStorage.getItem('userID')) || ''
    const success = yield call(callClockIn, {
      ...payload,
      clockIn: true,
      userId,
      boxId: boxSuccess,
    })
    if (success) {
      yield put({
        type: 'clock/LOAD_CURRENT_CLOCK',
        payload: success,
      })
    }
  }
}

export function* CLOCKOUT({ payload }) {
  yield put({
    type: 'clock/SET_STATE',
    payload: {
      loading: true,
    },
  })
  console.log('====================================')
  console.log(payload)
  console.log('====================================')
  const userId = Number(localStorage.getItem('userID')) || ''
  const success = yield call(callClockOut, { ...payload, clockOut: true, userId })
  if (success) {
    console.log('====================================')
    console.log(success)
    console.log('====================================')
    yield put({
      type: 'clock/LOAD_CURRENT_CLOCK',
      payload: success,
    })
  }
}

export function* LOAD_CURRENT_CLOCK() {
  const userId = Number(localStorage.getItem('userID')) || ''
  const response = yield call(getClockInfo, { clockInfo: true, userId })
  if (response) {
    const clockSplit = response.trim().split(':')
    let clock = {}
    if (clockSplit.length > 2) {
      clock = {
        boxId: clockSplit[0],
        barcode: clockSplit[1],
        state: clockSplit[5].split('^').shift(),
        comment: clockSplit[clockSplit.length - 1].split('^').shift(),
      }
    }
    yield put({
      type: 'clock/SET_STATE',
      payload: {
        loading: false,
        clock,
        isClocked: clockSplit.length > 2,
      },
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CLOCK_IN, CLOCKIN),
    takeEvery(actions.CLOCK_OUT, CLOCKOUT),
    takeEvery(actions.LOAD_CURRENT_CLOCK, LOAD_CURRENT_CLOCK),
    LOAD_CURRENT_CLOCK(),
  ])
}
