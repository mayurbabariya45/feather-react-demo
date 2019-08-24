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
      yield put({
        type: 'clock/SET_STATE',
        payload: {
          loading: false,
        },
      })
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
    if (String(success).trim() === 'PASS') {
      yield put({
        type: 'clock/SET_STATE',
        payload: {
          loading: false,
        },
      })
      yield put({
        type: 'clock/LOAD_CURRENT_CLOCK',
      })
      addNotification({
        message: 'Clock has been started',
        level: notificationStates.success,
      })
    } else if (String(success).trim() === 'FAIL') {
      yield put({
        type: 'clock/SET_STATE',
        payload: {
          loading: false,
        },
      })
      addNotification({
        message: 'Something is wrong with your clock in :(',
        level: notificationStates.error,
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
  const userId = Number(localStorage.getItem('userID')) || ''
  const success = yield call(callClockOut, { ...payload, clockOut: true, userId })
  if (String(success).trim() === 'PASS') {
    yield put({
      type: 'clock/LOAD_CURRENT_CLOCK',
      payload: success,
    })
    addNotification({
      message: 'Clock has been stopped',
      level: notificationStates.success,
    })
  } else if (String(success).trim() === 'FAIL') {
    yield put({
      type: 'clock/SET_STATE',
      payload: {
        loading: false,
      },
    })
    addNotification({
      message: 'Something is wrong with your clock out :(',
      level: notificationStates.error,
    })
  }
}

export function* LOAD_CURRENT_CLOCK() {
  const userId = Number(localStorage.getItem('userID')) || ''
  if (!Number.isInteger(userId)) return false
  const response = yield call(getClockInfo, { clockInfo: true, userId })
  if (response) {
    const clockSplit = response.trim().split(':')
    let clock = {}
    if (clockSplit.length > 2) {
      clock = {
        boxId: clockSplit[0],
        barcode: clockSplit[1],
        currentTime: `${clockSplit[2]} ${clockSplit[3]}:${clockSplit[4]}`,
        state: clockSplit[clockSplit.length - 1].split('^').shift(),
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
