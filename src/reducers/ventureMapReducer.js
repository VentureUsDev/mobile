import { GET_VENTURE_MAP_MARKERS_SUCCESS } from '../actions/util'

export const initialState = {
  ventureMarkers: []
}

export default function ventureMapReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VENTURE_MAP_MARKERS_SUCCESS: {
      return {...state, ventureMarkers: action.payload}
    }

    default:
      return state
  }
}
