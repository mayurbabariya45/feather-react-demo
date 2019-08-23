import actions from '../actions/Clock/actionCreators'

const initialState = {
  loading: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
