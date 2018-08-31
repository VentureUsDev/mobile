import {
  SET_CATEGORY,
  SET_LOCATION,
  SET_VENTURIST
} from '../actions/util'

export const initialState = {
  category: '',
  location: '',
  user: {}
}

export default function venturesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY: {
      return {...state, category: action.payload}
    }

    case SET_LOCATION: {
      return {...state, location: action.payload }
    }

    case SET_VENTURIST: {
      return {...state, user: action.payload}
    }

    default:
      return state

  }
}
