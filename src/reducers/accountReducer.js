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

    // TODO figure out how I'm gonna handle this
    case type.RESETING_PASSWORD: {
      return u({ resettingPassword: true }, state);
    }

    case type.PASSWORD_RESET: {
      return u({
        phone: action.phone,
      }, state);
    }

    case type.PASSWORD_RESET_FAILED: {
      return u({ resettingPassword: false }, state);
    }

    ////////////////////////////////////////////////////////////////////////////

    case type.VERIFYING_CODE: {
      return u({ verifyingCode: true }, state);
    }

    case type.VERIFICATION_SUCCESSFUL: {
      return u({
        verifyingCode: false,
        accessToken: action.accessToken,
      }, state);
    }

    case type.VERIFICATION_FAILED: {
      return u({ verifyingCode: false }, state);
    }

    ////////////////////////////////////////////////////////////////////////////

    case type.UPDATING_USER: {
      return u({ verifyingCode: true }, state);
    }

    case type.USER_UPDATED: {
      return u({
        verifyingCode: false,
        // user here
      }, state);
    }

    case type.USER_UPDATE_FAILED: {
      return u({ verifyingCode: false }, state);
    }

    ////////////////////////////////////////////////////////////////////////////

    default: return state;
  }
}
