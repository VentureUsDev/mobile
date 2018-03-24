import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from '../reducers/accountReducer';
import friendsReducer from '../reducers/friendsReducer';
// import errorReducer from '../reducers/errorReducer';

// import logger from '../middleware/logger';
// import formatter from '../middleware/formatter';

export default function configureStore() {
  const reducers = combineReducers({
    account: accountReducer,
    friends: friendsReducer,
    // error: errorReducer,
  });

  return createStore(
    reducers,
    compose(
      applyMiddleware(
        thunk,
        // logger,
        // formatter,
      ),
    ),
  );
}
