import React from 'react'
import { SwitchNavigator, StackNavigator } from 'react-navigation'
import { LoginRoutes } from '../config/routes'
import Router from '../config/router'
import Loading from './Loading'
import Modal from './Modal'

const RootStack = SwitchNavigator({
  Loading,
  Router,
  LoginRoutes,
}, {
  initialRouteName: 'Loading'
})

export default StackNavigator({
  RootStack,
  Modal
}, {
  mode: 'modal',
  headerMode: 'none'
})
