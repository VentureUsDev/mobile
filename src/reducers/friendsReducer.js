import {
  FRIENDS_FETCH_SUCCESS,
  NO_FRIENDS_FETCHED,
  REMOVE_FRIEND
} from '../actions/util'

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
      return {...state, friendsList: {}, fetchingUsers: false}
    }

    case REMOVE_FRIEND: {
      if (_.isEmpty(state.friendsList)) {
        return {...state, friendsList: {}}
      } else {
        return {...state}
      }
    }

    default:
      return state
  }
}
