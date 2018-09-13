import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import accountReducer from '../reducers/accountReducer'
import friendsReducer from '../reducers/friendsReducer'
import venturesReducer from '../reducers/venturesReducer'
import errorReducer from '../reducers/errorReducer'
import ventureMapReducer from '../reducers/ventureMapReducer'

// TODO persist account reducer
export default function configureStore() {
  const reducers = combineReducers({
    account: accountReducer,
    friends: friendsReducer,
    ventures: venturesReducer,
    error: errorReducer,
    ventureMap: ventureMapReducer
  })

  return createStore(
    reducers,
    compose(applyMiddleware(thunk)),
  )
}
