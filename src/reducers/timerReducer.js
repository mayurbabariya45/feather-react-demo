import actions from '../actions/Timer/actionCreators'

const initSate = {
  status: 'Stopped',
  seconds: 0,
}

export default function timer(state = initSate, action) {
  switch (action.type) {
    case actions.START:
      return { ...state, status: 'Running' }

    case actions.STOP:
      return { ...state, status: 'Stopped' }

    case actions.TICK:
      return { ...state, seconds: state.seconds + 1 }

    default:
      return state
  }
}
