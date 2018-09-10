import {
  SET_CATEGORY,
  SET_LOCATION,
  SET_VENTURIST,
  GET_PENDING_VENTURES,
  NO_PENDING_VENTURES,
  CREATE_VENTURE_SUCCESS,
  GET_VENTURE_SUCCESS,
  GET_VENTURE_VOTE_LIST,
  VENTURE_MATCH,
  CLEAR_VENTURE
} from '../actions/util'

import firebase from '../components/firebase'

export const initialState = {
  category: '',
  location: '',
  user: {},
  loading: true,
  pendingVentures: [],
  page: ''
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

    case VENTURE_MATCH: {
      return {...state, completedVenture: action.payload }
    }

    case CLEAR_VENTURE: {
      return {...state, completedVenture: ''}
    }

    case GET_VENTURE_VOTE_LIST: {
      const { currentUser } = firebase.auth()
      return {
        ...state,
        ventureVoteList: action.payload.ventureList,
        page: action.payload.page,
        userIndex: action.payload.userIndex[currentUser.uid]
      }
    }

    default:
      return state

  }
}
