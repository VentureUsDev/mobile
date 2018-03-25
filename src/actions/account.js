import env from '../config/env';
import * as type from './util';

const { request, handleErrors, responseLog } = type; // eslint-disable-line

////////////////////////////////////////////////////////////////////////////////

const loggingIn = () => ({ type: type.LOGGING_IN });
const loginSuccessful = () => ({
  type: type.LOGIN_SUCCESSFUL,
   // TODO finish routes
});
const loginFailed = () => ({ type: type.LOGIN_FAILED });

export function login(phone, password) {
  return (dispatch) => {
    dispatch(loggingIn());

    const url = env.API_URL + env.LOGIN_PATH;
    const headers = { 'Content-Type': 'application/json' };
    const body = { phone, password };

    return fetch(request('PUT', url, headers, body))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        // TODO finish
        // dispatch(friendsReceived(response.data.friends));
      })
      .catch((error) => {
        if (error.apiError) {
          dispatch(loginFailed());
        }
      });
  };
}

////////////////////////////////////////////////////////////////////////////////

const signingUp = () => ({ type: type.SIGNING_UP });
const signUpSuccessful = phone => ({
  type: type.SIGN_UP_SUCCESSFUL,
  phone,
});
const signUpFailed = () => ({ type: type.SIGN_UP_FAILED });

export function signUp(phone) {
  return (dispatch) => {
    dispatch(signingUp());

    const url = env.API_URL + env.USER_PATH;
    const headers = { 'Content-Type': 'application/json' };
    const body = { phone: phone };

    return fetch(request('POST', url, headers, body))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        dispatch(signUpSuccessful(phone));
      })
      .catch((error) => {
        if (error.apiError) {
          dispatch(signUpFailed());
        }
      });
  };
}

////////////////////////////////////////////////////////////////////////////////

const resettingPassword = () => ({ type: type.RESETING_PASSWORD });
const passwordReset = () => ({ type: type.PASSWORD_RESET });
const passwordResetFailed = () => ({ type: type.PASSWORD_RESET_FAILED });

export function forgotPassword(phone) {
  return (dispatch) => {
    dispatch(resettingPassword());

    const url = env.API_URL + env.CHANGE_PASSWORD;
    const headers = { 'Content-Type': 'application/json' };
    const body = { phone };

    return fetch(request('PUT', url, headers, body))
    .then(handleErrors)
    .then(response => response.json())
    .then((response) => {
      dispatch(passwordReset(phone));
    })
    .catch((error) => {
      if (error.apiError) {
        dispatch(passwordResetFailed());
      }
    });
  };
}

////////////////////////////////////////////////////////////////////////////////

const verifyingCode = () => ({ type: type.VERIFYING_CODE });
const verificationSuccessful = accessToken => ({
  type: type.VERIFICATION_SUCCESSFUL,
  accessToken,
});
const verificationFailed = () => ({ type: type.VERIFICATION_FAILED });

export function verifyCode(phone, code) {
  return (dispatch) => {
    dispatch(verifyingCode());

    const url = env.API_URL + env.VERIFICATION_PATH;
    const headers = { 'Content-Type': 'application/json' };
    const body = { phone, code };

    return fetch(request('PUT', url, headers, body))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        // dispatch(verificationSuccessful(`+${phone}`));
      })
      .catch((error) => {
        if (error.apiError) {
          dispatch(verificationFailed());
        }
      });
  };
}

////////////////////////////////////////////////////////////////////////////////

const updatingUser = () => ({ type: type.UPDATING_USER });
const userUpdated = () => ({
  type: type.USER_UPDATED,
  // Do user stuff
});
const userUpdateFailed = () => ({ type: type.USER_UPDATE_FAILED });

export function updateUser({ password, firstName, lastName, email, noticeOff, emailOff }) {
  return (dispatch) => {
    dispatch(updatingUser());

    const url = env.API_URL + env.USER_PATH;
    const headers = { 'Content-Type': 'application/json' };
    // Send just password if it's a password update
    const body = !firstName ? { password } : {
      password,
      firstName,
      lastName,
      email,
      noticeOff,
      emailOff,
    };

    return fetch(request('PUT', url, headers, body))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        dispatch(userUpdated());
      })
      .catch((error) => {
        if (error.apiError) {
          dispatch(userUpdateFailed());
        }
      });
  };
}
