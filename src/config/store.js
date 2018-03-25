import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from '../reducers/accountReducer';
import friendsReducer from '../reducers/friendsReducer';
import venturesReducer from '../reducers/venturesReducer';

export default function configureStore() {
  const reducers = combineReducers({
    account: accountReducer,
    friends: friendsReducer,
    ventures: venturesReducer,
  });

  return createStore(
    reducers,
    compose(applyMiddleware(thunk)),
  );
}
