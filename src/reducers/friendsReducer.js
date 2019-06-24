import firebase from '../components/firebase'
import {
  FRIENDS_FETCH_SUCCESS,
  NO_FRIENDS_FETCHED,
  REMOVE_FRIEND,
  ALL_USERS_FETCH_SUCCESS
} from '../actions/util'
import { map, filter, isEmpty } from 'lodash'

export const initialState = {
  friendsList: {},
  allUsers: {},
  fetchingUsers: true,
  fetchingAllUsers: true
}

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_USERS_FETCH_SUCCESS: {
      const { email } = firebase.auth().currentUser
      const allUsers = action.payload.filter(user => user.email !== email)
      const users = filter(allUsers, user => {
        return !map(state.friendsList, 'uid').includes(user.uid)
      })
      return {...state, allUsers: users, fetchingAllUsers: false}
    }

    case FRIENDS_FETCH_SUCCESS: {
      return {...state, friendsList: action.payload, fetchingUsers: false}
    }

    case NO_FRIENDS_FETCHED: {
      return {...state, friendsList: {}, fetchingUsers: false}
    }

    case REMOVE_FRIEND: {
      if (isEmpty(state.friendsList)) {
        return {...state, friendsList: {}}
      } else {
        return {...state}
      }
    }

    default:
      return state
  }
}
