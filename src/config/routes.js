import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/home/Home';
import VenturistsScreen from '../components/venturists/Venturists';
import MapScreen from '../components/ventureMap/VentureMap';
import ProfileScreen from '../components/profile/Profile';

import VentureScreen from '../components/home/Venture';
import VenturistScreen from '../components/venturists/Venturist';

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
      title: 'Venture Invites',
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

const MapTab = StackNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Venture Map',
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
  Home: { screen: HomeTab },
  Venturists: { screen: VenturistsTab },
  Map: { screen: MapTab },
  Profile: { screen: ProfileTab }
})

export default Routes;
