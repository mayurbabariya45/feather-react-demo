import actions from '../actions/Auth/actionCreators'

const initialState = {
  userID: '',
  authorized: false,
  loading: false,
  isClocked: false,
  tasks: [],
  clock: [],
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
