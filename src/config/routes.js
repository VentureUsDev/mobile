import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation'
import Header from 'react-navigation/src/views/Header/Header'

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
  backgroundColor: 'rgba(255, 255, 255, .1)',
  borderBottom: 0
}

const ImageHeader = props => (
  <View style={{ marginBottom: 64}}>
    <Image
      style={{position: 'absolute', height: 64, width: '100%'}}
      source={require('../assets/background.png')}
      resizeMode="cover"
    />
    <View style={{position: 'absolute', backgroundColor: 'transparent', height: 64, width: '100%', zIndex: 3, backgroundColor: 'transparent'}}>
    <Header {...props} />
    </View>
  </View>
)

const makeNavOptions = title => ({
  title,
  headerStyle: headerStyles,
  headerTitleStyle: { fontSize: 26 },
  headerTintColor: 'white',
  header: (props) => <ImageHeader {...props} />
})

const HomeTab = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      ...makeNavOptions('Ventures'),
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
      ...makeNavOptions(navigation.state.params.user.username),
      headerBackTitle: null
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
