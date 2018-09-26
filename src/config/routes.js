import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation'

import HomeScreen from '../components/home/Home'
import NewVentureScreen from '../components/home/NewVenture'
import SetLocationScreen from '../components/home/Location'
import SelectVenturists from '../components/home/SelectVenturists'
import ConfirmVentureScreen from '../components/home/ConfirmVenture'
import VenturistsScreen from '../components/venturists/Venturists'
import AllVenturistsScreen from '../components/venturists/AllVenturists'
import TerritoryScreen from '../components/ventureMap/VentureMap'
import ProfileScreen from '../components/profile/Profile'
import VentureScreen from '../components/home/Venture'
import VenturistScreen from '../components/venturists/VenturistDetail'

// LoginRoutes
import LoginHomeScreen from '../components/login/home/Home'
import SignUpScreen from '../components/login/signUp/SignUp'
import PasswordReset from '../components/login/pwdRecovery/pwdRecovery'

import { Icon } from 'react-native-material-ui'

const headerStyles = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  elevation: 2,
}

const makeNavOptions = title => ({
  title,
  headerStyle: headerStyles,
  headerTitleStyle: { fontSize: 20 },
})

const HomeTab = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Venture',
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 },
      headerLeft: null
    },
  },
  NewVenture: {
    screen: NewVentureScreen,
    navigationOptions: makeNavOptions('New Venture'),
  },
  SetLocation: {
    screen: SetLocationScreen,
    navigationOptions: makeNavOptions('Choose Location'),
  },
  SelectVenturists: {
    screen: SelectVenturists,
    navigationOptions: makeNavOptions('Select Venturists'),
  },
  ConfirmVenture: {
    screen: ConfirmVentureScreen,
    navigationOptions: makeNavOptions('Confirm Venture')
  },
  Venture: {
    screen: VentureScreen,
    navigationOptions: makeNavOptions('Venture Time'),
  },
})

// Add new venturist/group screen
const VenturistsTab = StackNavigator({
  Venturists: {
    screen: VenturistsScreen,
    navigationOptions: makeNavOptions('Venturists'),
  },
  VenturistProfile: {
    screen: VenturistScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.user.username,
      headerBackTitle: null,
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }),
  },
  AllVenturists: {
    screen: AllVenturistsScreen,
    navigationOptions: makeNavOptions('Search'),
  },
})

const TerritoryTab = StackNavigator({
  Map: {
    screen: TerritoryScreen,
    navigationOptions: makeNavOptions('Territory'),
  },
})

const ProfileTab = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: makeNavOptions('Profile'),
  },
})

export const Routes = TabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="spa" color={tintColor} />,
    }
  },
  Venturists: {
    screen: VenturistsTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="group" color={tintColor} />
    }
  },
  Map: {
    screen: TerritoryTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="map" color={tintColor} />
    }
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="person" color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#007aff',
    inactiveTintColor: 'gray',
  },
  navigationOptions: ({navigation}) => ({
    tabBarOnPress: ({ previousScene, scene }) => {
      const tabRoute = scene.route.routeName
      const prevRouteName = previousScene.routes[0].routeName
      navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: prevRouteName
          }),
        ]
      }))
      navigation.dispatch(NavigationActions.navigate({
          routeName: tabRoute
      }))
    }
  })
})

export const LoginRoutes = StackNavigator({
  LoginHome: {
    screen: LoginHomeScreen,
    navigationOptions: makeNavOptions('Login')
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: makeNavOptions('Signup')
  },
  PasswordReset: {
    screen: PasswordReset,
    navigationOptions: makeNavOptions('Reset Password')
  }
})
