import React from 'react'
import { SwitchNavigator } from 'react-navigation'
import { Routes, LoginRoutes } from '../config/routes'
import Loading from './Loading'

export default SwitchNavigator({
  Loading,
  Routes,
  LoginRoutes,
}, {
  initialRouteName: 'Loading'
})

// import { getVentures } from '../actions/ventures'

// export default class extends Component {
//   state = { user: null }
//   componentWillMount() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user })
//       } else {
//         this.setState({ user: null })
//       }
//     })

//   }
//   render() {
//     const { user } = this.state
//     if (user) return <Routes screenProps={user} />

//     return <LoginRoutes />
//   }
// }
