
// Creates a new request for fetch
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

export const FAKE_ACTION = 'FAKE_ACTION';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const FRIENDS_FETCH_FAILED = 'FRIENDS_FETCH_FAILED';

export const FETCHING_GROUPS = 'FETCHING_GROUPS';
export const GROUPS_RECEIVED = 'GROUPS_RECEIVED';
export const GROUPS_FETCH_FAILED = 'GROUPS_FETCH_FAILED';
