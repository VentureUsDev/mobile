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
