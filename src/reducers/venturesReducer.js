import { SET_CATEGORY } from '../actions/util'

export const initialState = {
  category: ''
}

export default function venturesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY: {
      return {...state, category: action.payload}
    }

    default:
      return state

  }
}
