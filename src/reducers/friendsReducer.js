import { FRIENDS_FETCH_SUCCESS } from '../actions/util'

export const initialState = {
  friendsList: {},
  fetchingUsers: true,
}

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case FRIENDS_FETCH_SUCCESS: {
      return {...state, friendsList: action.payload, fetchingUsers: false}
    }

    default:
      return state
  }
}
