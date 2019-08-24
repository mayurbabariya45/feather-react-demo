/* eslint-disable require-yield */
import { eventChannel, END } from 'redux-saga'
import { all, put, call, take, takeEvery } from 'redux-saga/effects'
import { clock } from '../../services'

function* createEventChannel() {
  return eventChannel(emit => {
    clock.on('created', message => {
      emit(message || null)
    })
    return () => {
      emit(END)
    }
  })
}

function* INITIALIZE_WEBSOCKET_CHANNEL() {
  const channel = yield call(createEventChannel)
  while (true) {
    const message = yield take(channel)
    if (message.trim() !== 'PASS') {
      const messageSplit = message.trim().split(':')
      let data = {}
      const countMessage = messageSplit.length > 2
      if (countMessage) {
        data = {
          boxId: messageSplit[0],
          barcode: messageSplit[1],
          currentTime: `${messageSplit[2]} ${messageSplit[3]}:${messageSplit[4]}`,
          state: messageSplit[messageSplit.length - 1].split('^').shift(),
          comment: messageSplit[messageSplit.length - 1].split('^').shift(),
        }
      }
      yield put({
        type: 'clock/SET_STATE',
        payload: {
          clock: data,
          isClocked: countMessage,
        },
      })
    }
  }
}

export default function* rootSaga() {
  yield all([takeEvery('INITIALIZE_WEB_SOCKETS_CHANNEL', INITIALIZE_WEBSOCKET_CHANNEL)])
}
