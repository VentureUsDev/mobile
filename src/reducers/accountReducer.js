import firebase from '../components/firebase'
import {
  USER_FETCH_SUCCESS,
  ALL_USERS_FETCH_SUCCESS
} from '../actions/util'

export const initialState = {
  user: {},
  allUsers: {},
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_SUCCESS: {
      return {...state, user: action.payload}
    }
    case ALL_USERS_FETCH_SUCCESS: {
      const { email } = firebase.auth().currentUser
      const allUsers = action.payload.filter(user => user.email !== email)
      return {...state, allUsers}
    }

    default:
      return state

  }
}
