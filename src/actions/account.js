import env from '../config/env';
import * as type from './util';

const { request, handleErrors, responseLog } = type; // eslint-disable-line

////////////////////////////////////////////////////////////////////////////////

const loggingIn = () => ({ type: type.LOGGING_IN });
const loginSuccessful = () => ({ // TODO finish routes
  type: type.LOGIN_SUCCESSFUL,
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

///////

// TODO forgot password action

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

/////

// TODO user details action
