import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/home/Home';
import VenturistsScreen from '../components/venturists/Venturists';
import TerritoryScreen from '../components/ventureMap/VentureMap';
import ProfileScreen from '../components/profile/Profile';
import VentureScreen from '../components/home/Venture';
import VenturistScreen from '../components/venturists/Venturist';

import { Icon } from 'react-native-material-ui';

const headerStyles = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  elevation: 2,
}
// custom header?
// Add new venture screen
const HomeTab = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Venture',
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }
  },
  Venture: {
    screen: VentureScreen,
    navigationOptions: {
      title: 'Venture Time',
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }
  },
});

// Add new venturist/group screen
const VenturistsTab = StackNavigator({
  Venturists: {
    screen: VenturistsScreen,
    navigationOptions: {
      title: 'Venturists',
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }
  },
  VenturistProfile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name,
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }),
  },
});

const TerritoryTab = StackNavigator({
  Map: {
    screen: TerritoryScreen,
    navigationOptions: {
      title: 'Territory',
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }
  },
});

const ProfileTab = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      headerStyle: headerStyles,
      headerTitleStyle: { fontSize: 20 }
    }
  },
});

const Routes = TabNavigator({
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

export default Routes;
