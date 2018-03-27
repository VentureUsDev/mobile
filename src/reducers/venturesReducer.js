import u from 'updeep';

import * as type from '../actions/util';

export const initialState = {};

export default function venturesReducer(state = initialState, action) {
  switch (action.type) {
    case type.FETCHING_VENTURES: {
      return u({ fetchingVentures: true }, state);
    }

    case type.VENTURES_RECEIVED: {
      const { ventures } = action;
      return u({
        fetchingVentures: false,
        ventures,
      }, state);
    }

    case type.VENTURES_FETCH_FAILED: {
      return u({ fetchingVentures: false }, state);
    }

    ////////////////////////////////////////////////////////////////////////////

    case type.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
