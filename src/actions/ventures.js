import env from '../config/env';
import * as type from './util';

const { request, handleErrors, responseLog } = type; // eslint-disable-line

////////////////////////////////////////////////////////////////////////////////

const fetchingVantures = () => ({ type: type.FETCHING_VENTURES });
const venturesReceived = (ventures) => ({
  type: type.VENTURES_RECEIVED,
  ventures,
});
const venturesFetchFailed = () => ({ type: type.VENTURES_FETCH_FAILED });

export function getVantures(accessToken = env.TOKEN) { // eslint-disable-line
  return (dispatch) => {
    dispatch(fetchingVantures());

    const url = env.API_URL + env.VENTURES_PATH;
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': accessToken,
    };
    return fetch(request('GET', url, headers))
      .then(handleErrors)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        dispatch(venturesReceived(response.data.ventures));
      })
      .catch((error) => {
        if (error.apiError) {
          // dispatch(apiError(url, error));
          dispatch(venturesFetchFailed());
        }
      });
  };
}
