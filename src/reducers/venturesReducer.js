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
  GET_MORE_VENTURES,
  CLEAR_VENTURE,
  SEND_VENTURE_NOTE,
  CLEAR_NOTE
} from '../actions/util'

import firebase from '../components/firebase'

export const initialState = {
  category: '',
  location: '',
  users: [],
  loading: true,
  pendingVentures: [],
  page: '',
  ventureVoteList: '',
  ventureNote: ''
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
      if (_.find(state.users, action.payload)) {
        const filterUsers = _.filter(state.users, user => {
          return user.uid !== action.payload.uid
        })
        return {...state, users: filterUsers}
      } else {
        return {...state, users: [...state.users, action.payload]}
      }
    }

    case GET_PENDING_VENTURES: {
      return {...state, pendingVentures: action.payload, loading: false}
    }

    case NO_PENDING_VENTURES: {
      return {...state, loading: false }
    }

    case CREATE_VENTURE_SUCCESS: {
      return {...state, category: '', location: '', users: []}
    }

    case VENTURE_MATCH: {
      return {...state, completedVenture: action.payload }
    }

    case GET_MORE_VENTURES: {
      return {...state, ventureVoteList: action.payload, userIndex: state.userIndex + 20 }
    }

    case CLEAR_VENTURE: {
      return {...state, completedVenture: '', ventureVoteList: ''}
    }

    case SEND_VENTURE_NOTE: {
      return {...state, ventureNote: action.payload}
    }

    case CLEAR_NOTE: {
      return {...state, ventureNote: ''}
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
