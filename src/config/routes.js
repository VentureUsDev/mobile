import { TabNavigator } from 'react-navigation';

import HomeScreen from '../components/home/Home';
import VenturistsScreen from '../components/venturists/Venturists';
import MapScreen from '../components/ventureMap/VentureMap';
import ProfileScreen from '../components/profile/Profile';

const Routes = TabNavigator({
  Home: { screen: HomeScreen },
  Venturists: { screen: VenturistsScreen },
  Map: { screen: MapScreen },
  Profile: { screen: ProfileScreen }
})

export default Routes;
