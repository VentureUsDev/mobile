import { ListItem, Avatar, Subheader } from 'react-native-material-ui';
import Header from '../common/Header';
import Venturist from '../venturists/Venturist';
import { ActionButton, Icon } from 'react-native-material-ui';

import { venturistStyles as v } from '../venturists/style';

const groups = [{
    name: 'The Juice Biters',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    venturists: 'Joe, Ricky, Bobby',
    totalVentures: 14,
    level: 9,
    favoriteCategory: 'happiest of hours',
  }, {
    name: 'Vagina Monologues',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    venturists: 'Candy, Dandy, Sandy',
    totalVentures: 10,
    level: 5,
    favoriteCategory: 'happiest of hours',
  }, {
    name: 'Hourly Happiness',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    venturists: 'Nick, La, John',
    totalVentures: 102,
    level: 100,
    favoriteCategory: 'happiest of hours',
}];

const friends = [{
    name: 'La Baik',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    title: 'Adventurer',
    totalVentures: 85,
    level: 99,
    favoriteCategory: 'happiest of hours',
  }, {
    name: 'Nick Castaneda',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    title: 'Journeyman',
    totalVentures: 70,
    level: 78,
    favoriteCategory: 'happiest of hours',
  }, {
    name: 'John Hwang',
    title: 'Novice',
    totalVentures: 2,
    level: 2,
    favoriteCategory: 'happiest of hours',
}];

export default class Venturists extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <Subheader text="Posse" />
            {groups.map((group, index) => (
              <Venturist
                {...this.props}
                key={index}
                name={group.name}
                image={group.image}
                venturists={group.venturists}
                favoriteCategory={group.favoriteCategory}
                editable
              />
            ))}
          </View>
          <View>
            <Subheader text="Onesies" />
            {friends.map((friend, index) => (
              <Venturist
                {...this.props}
                key={index}
                image={friend.image}
                name={friend.name}
                title={friend.title}
                favoriteCategory={friend.favoriteCategory}
                editable
              />
            ))}
          </View>
        </ScrollView>
        <ActionButton
          color="black"
          style={{container: {backgroundColor: 'black'}}}
          transition="speedDial"
          actions={[{icon: <Icon name="person-add" />, label: 'add friend'}, {icon: 'group-add', label: 'add group'}]}
        />
      </View>
    );
  }
}
