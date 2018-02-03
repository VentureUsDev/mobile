import u from 'updeep';
import * as type from '../actions/util';

export const initialState = {
  nick: true,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
