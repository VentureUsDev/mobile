import React from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';

import configureStore from './config/store';
import AppContainer from './components';

const store = configureStore();

export default class ConnectedApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
