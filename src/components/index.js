import React from 'react'
import { SwitchNavigator, StackNavigator } from 'react-navigation'
import { Routes, LoginRoutes } from '../config/routes'
import Loading from './Loading'
import Modal from './Modal'

const RootStack = SwitchNavigator({
  Loading,
  Routes,
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
