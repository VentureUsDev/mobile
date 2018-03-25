import u from 'updeep';

import * as type from '../actions/util';

export const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_FAILED: {
      return u({ loginError: true }, state);
    }

    case type.CLEAR_LOGIN_ERROR: {
      return u({ loginError: false }, state);
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
