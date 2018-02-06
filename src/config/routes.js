import { TabNavigator } from 'react-navigation';

import HomeScreen from '../components/home/Home';
import GroupsScreen from '../components/groups/Groups';
import MapScreen from '../components/map/Map';
import ProfileScreen from '../components/profile/Profile';

const Routes = TabNavigator({
  Home: { screen: HomeScreen },
  Groups: { screen: GroupsScreen },
  Map: { screen: MapScreen },
  Profile: { screen: ProfileScreen }
})

export default Routes;
