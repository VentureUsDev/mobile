import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/home/Home';
import VenturistsScreen from '../components/venturists/Venturists';
import MapScreen from '../components/ventureMap/VentureMap';
import ProfileScreen from '../components/profile/Profile';

import VentureScreen from '../components/home/Venture';
import VenturistScreen from '../components/venturists/Venturist';

// Add new venture screen
const HomeTab = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Venture Invites'
    }
  },
  Venture: {
    screen: VentureScreen,
    navigationOptions: {
      title: 'Venture Time'
    }
  },
});

// Add new venturist/group screen
const VenturistsTab = StackNavigator({
  Venturists: {
    screen: VenturistsScreen,
    navigationOptions: {
      title: 'Venturists'
    }
  },
  VenturistProfile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name
    }),
  },
});

const Routes = TabNavigator({
  Home: { screen: HomeTab },
  Venturists: { screen: VenturistsTab },
  Map: { screen: MapScreen },
  Profile: { screen: ProfileScreen }
})

export default Routes;
