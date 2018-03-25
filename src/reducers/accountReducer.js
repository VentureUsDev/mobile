import u from 'updeep';
import * as type from '../actions/util';

export const initialState = {
  nick: true,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGGING_IN: {
      return u({ loggingIn: true }, state);
    }

    case type.LOGIN_SUCCESSFUL: {
      return u({
        loggingIn: true,
        // TODO finish when I can get a good response
      }, state);
    }

    case type.LOGIN_FAILED: {
      return u({ loggingIn: false }, state);
    }

    ////////////////////////////////////////////////////////////////////////////

    case type.SIGNING_UP: {
      return u({ signingUp: true }, state);
    }

    case type.SIGN_UP_SUCCESSFUL: {
      return u({
        signingUp: false,
        phone: action.phone,
      }, state);
    }

    case type.SIGN_UP_FAILED: {
      return u({ signingUp: false }, state);
    }

    ////////////////////////////////////////////////////////////////////////////

    default: return state;
  }
}
