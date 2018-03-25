import env from '../config/env';
import * as type from './util';

const { request, handleErrors, responseLog } = type; // eslint-disable-line

////////////////////////////////////////////////////////////////////////////////

const fetchingFriends = () => ({ type: type.FETCHING_FRIENDS });
const friendsReceived = (friends) => ({
  type: type.FRIENDS_RECEIVED,
  friends,
});
const friendsFetchFailed = () => ({ type: type.FRIENDS_FETCH_FAILED });

export function getFriends(accessToken = env.TOKEN) { // eslint-disable-line
  return (dispatch) => {
    dispatch(fetchingFriends());

    const url = env.API_URL + env.FRIENDS_PATH;
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken,
    };
    return fetch(request('GET', url, headers))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        dispatch(friendsReceived(response.data.friends));
      })
      .catch((error) => {
        if (error.apiError) {
          // dispatch(apiError(url, error));
          dispatch(friendsFetchFailed());
        }
      });
  };
}

////////////////////////////////////////////////////////////////////////////////

const fetchingGroups = () => ({ type: type.FETCHING_GROUPS });
const groupsReceived = (groups) => ({
  type: type.GROUPS_RECEIVED,
  groups,
});
const groupsFetchFailed = () => ({ type: type.GROUPS_FETCH_FAILED });

export function getGroups(accessToken = env.TOKEN) { // eslint-disable-line
  return (dispatch) => {
    dispatch(fetchingGroups());

    const url = env.API_URL + env.GROUPS_PATH;
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken,
    };
    return fetch(request('GET', url, headers))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        dispatch(groupsReceived(response.data.groups));
      })
      .catch((error) => {
        if (error.apiError) {
          // dispatch(apiError(url, error));
          dispatch(groupsFetchFailed());
        }
      });
  };
}
