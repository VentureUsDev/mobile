import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/home/Home';
import NewVentureScreen from '../components/home/NewVenture';
import SelectVenturists from '../components/home/SelectVenturists';
import VenturistsScreen from '../components/venturists/Venturists';
import NewVenturistScreen from '../components/venturists/NewVenturist';
import TerritoryScreen from '../components/ventureMap/VentureMap';
import ProfileScreen from '../components/profile/Profile';
import VentureScreen from '../components/home/Venture';
import VenturistScreen from '../components/venturists/Venturist';

// LoginRoutes
import LoginHomeScreen from '../components/login/home/Home';
import SignUpScreen from '../components/login/signUp/SignUp';
import VerifyScreen from '../components/login/verify/Verify';
import UserDetailsScreen from '../components/login/userDetails/UserDetails';

import { Icon } from 'react-native-material-ui';

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
});

const HomeTab = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: makeNavOptions('Venture'),
  },
  NewVenture: {
    screen: NewVentureScreen,
    navigationOptions: makeNavOptions('New Venture'),
  },
  SelectVenturists: {
    screen: SelectVenturists,
    navigationOptions: makeNavOptions('Select Venturists'),
  },
  Venture: {
    screen: VentureScreen,
    navigationOptions: makeNavOptions('Venture Time'),
  },
});

// Add new venturist/group screen
const VenturistsTab = StackNavigator({
  Venturists: {
    screen: VenturistsScreen,
    navigationOptions: makeNavOptions('Venturists'),
  },
  VenturistProfile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name,
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }),
  },
  NewVenturist: {
    screen: NewVenturistScreen,
    navigationOptions: makeNavOptions('New Venturist'),
  },
});

const TerritoryTab = StackNavigator({
  Map: {
    screen: TerritoryScreen,
    navigationOptions: makeNavOptions('Territory'),
  },
});

const ProfileTab = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: makeNavOptions('Profile'),
  },
});

export const Routes = TabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="spa" color={tintColor} />
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
  }
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
  // TODO No Back button
  Verify: {
    screen: VerifyScreen,
    navigationOptions: makeNavOptions('Verify Code'),
  },
  // TODO No Back button
  UserDetails: {
    screen: UserDetailsScreen,
    navigationOptions: makeNavOptions('User Details'),
  },
});

// export LoginRoutes;
