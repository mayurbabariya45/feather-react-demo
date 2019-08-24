import { call, put, take, fork, cancel } from 'redux-saga/effects'
import { addNotification, notificationStates } from '../../components/Notification'

const delay = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      const loggedInTime = Number(localStorage.getItem('loggedInTime') || 0)
      const currentTime = new Date().getTime()
      if (currentTime >= loggedInTime) {
        return resolve({ expired: true })
      }
      resolve({ expired: false })
      return false
    }, ms),
  )

function* tick() {
  while (true) {
    const { expired } = yield call(delay, 1000)
    if (expired) {
      yield put({ type: 'user/LOGOUT' })
      addNotification({
        message: 'Session has been expired :(',
        level: notificationStates.error,
      })
      yield put({ type: 'timer/STOP' })
    }
    yield put({ type: 'timer/TICK' })
  }
}

function* timer() {
  while (yield take('timer/START')) {
    const bgSyncTask = yield fork(tick)
    yield take('timer/STOP')
    yield cancel(bgSyncTask)
  }
}

export default function* root() {
  yield timer()
}
