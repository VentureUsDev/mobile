import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StatusBar, View, Text } from 'react-native'

import configureStore from './config/store'
import AppContainer from './components'

import { ThemeProvider } from 'react-native-material-ui'

const store = configureStore()
export default class ConnectedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <View style={{flex: 1}}>
            <StatusBar
              barStyle="light-content"
            />
            <AppContainer />
          </View>
        </ThemeProvider>
      </Provider>
    )
  }
}
