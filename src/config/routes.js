import { TabNavigator } from 'react-navigation';

import HomeScreen from '../components/home/Home';
import GroupsScreen from '../components/groups/Groups';

const Routes = TabNavigator({
  Home: { screen: HomeScreen },
  Groups: { screen: GroupsScreen },
})

export default Routes;
