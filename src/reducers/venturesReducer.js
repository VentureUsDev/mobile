import {
  SET_CATEGORY,
  SET_LOCATION,
  SET_VENTURIST,
  GET_PENDING_VENTURES,
  NO_PENDING_VENTURES,
  CREATE_VENTURE_SUCCESS,
  GET_VENTURE_SUCCESS
} from '../actions/util'

export const initialState = {
  category: '',
  location: '',
  user: {},
  loading: true,
  pendingVentures: []
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

    case GET_PENDING_VENTURES: {
      return {...state, pendingVentures: action.payload, loading: false}
    }

    case NO_PENDING_VENTURES: {
      return {...state, loading: false }
    }

    case CREATE_VENTURE_SUCCESS: {
      return {...state, category: '', location: '', user: {}}
    }

    default:
      return state

  }
}
