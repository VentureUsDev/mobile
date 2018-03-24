import u from 'updeep';

import * as type from '../actions/util';

export const initialState = {};

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case type.FETCHING_FRIENDS: {
      return u({ fetchingFriends: true }, state);
    }

    case type.FRIENDS_RECEIVED: {
      const { friends } = action;
      return u({
        fetchingFriends: false,
        friends,
      }, state);
    }

    case type.FRIENDS_FETCH_FAILED: {
      return u({ fetchingFriends: false }, state);
    }

    ////////////////////////////////////////////////////////////////////////////

    case type.FETCHING_GROUPS: {
      return u({ fetchingGroups: true }, state);
    }

    case type.GROUPS_RECEIVED: {
      const { groups } = action;
      return u({
        fetchingGroups: false,
        groups,
      }, state);
    }

    case type.GROUPS_FETCH_FAILED: {
      return u({ fetchingGroups: false }, state);
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
