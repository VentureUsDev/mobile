import { FRIENDS_FETCH_SUCCESS, NO_FRIENDS_FETCHED } from '../actions/util'

export const initialState = {
  friendsList: {},
  fetchingUsers: true,
}

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case FRIENDS_FETCH_SUCCESS: {
      return {...state, friendsList: action.payload, fetchingUsers: false}
    }

    case NO_FRIENDS_FETCHED: {
      return {...state, fetchingUsers: false}
    }

    default:
      return state
  }
}
