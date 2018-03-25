import u from 'updeep';

// Creates a new request for fetch
// TODO add json header
export function request(method, url, headers = {}, body = null) {
  let options = { method, headers: new Headers(headers) };
  if (body) options = u({ body: JSON.stringify(body) }, options);

  const req = new Request(url, options);
  return req;
}

// for development
export function responseLog(response) {
  console.log(response); // eslint-disable-line
  return response;
}

export function handleErrors(response) {
  const { ok, status, url } = response;
  if (!ok) {
    const apiError = {
      apiError: true,
      status,
      url,
    };
    throw apiError;
  }

  return response;
}

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const RESETING_PASSWORD = 'RESETING_PASSWORD';
export const PASSWORD_RESET = 'PASSWORD_RESET';
export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED';

export const SIGNING_UP = 'SIGNING_UP';
export const SIGN_UP_SUCCESSFUL = 'SIGN_UP_SUCCESSFUL';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const VERIFYING_CODE = 'VERIFYING_CODE';
export const VERIFICATION_SUCCESSFUL = 'VERIFICATION_SUCCESSFUL';
export const VERIFICATION_FAILED = 'VERIFICATION_FAILED';

export const UPDATING_USER = 'UPDATING_USER';
export const USER_UPDATED = 'USER_UPDATED';
export const USER_UPDATE_FAILED = 'USER_UPDATE_FAILED';

////////////////////////////////////////////////////////////////////////////////

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const FRIENDS_FETCH_FAILED = 'FRIENDS_FETCH_FAILED';

export const FETCHING_GROUPS = 'FETCHING_GROUPS';
export const GROUPS_RECEIVED = 'GROUPS_RECEIVED';
export const GROUPS_FETCH_FAILED = 'GROUPS_FETCH_FAILED';

////////////////////////////////////////////////////////////////////////////////

export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';
