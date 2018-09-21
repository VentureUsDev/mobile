import {
  USER_FETCH_SUCCESS
} from '../actions/util'

export const initialState = {
  user: {}
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_SUCCESS: {
      return {...state, user: action.payload}
    }

    default:
      return state

  }
}
