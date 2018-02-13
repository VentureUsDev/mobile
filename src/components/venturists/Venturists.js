import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { ListItem, Avatar, Subheader } from 'react-native-material-ui';
import Header from '../common/Header';
import Venturist from './Venturist';
import { ActionButton, Icon } from 'react-native-material-ui';

import { venturistStyles as v } from './style';

const groups = [{
    name: 'The Juice Biters',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    venturists: 'Joe, Ricky, Bobby',
    totalVentures: 14,
    level: 9,
  }, {
    name: 'Vagina Monologues',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    venturists: 'Candy, Dandy, Sandy',
    totalVentures: 10,
    level: 5,
  }, {
    name: 'Hourly Happiness',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    venturists: 'Nick, La, John',
    totalVentures: 102,
    level: 100,
}];

const friends = [{
    name: 'La Baik',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    title: 'Adventurer',
    totalVentures: 85,
    level: 99,
  }, {
    name: 'Nick Castaneda',
    image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    title: 'Journeyman',
    totalVentures: 70,
    level: 78,
  }, {
    name: 'John Hwang',
    title: 'Novice',
    totalVentures: 2,
    level: 2,
}];

export default class Venturists extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Venturists" />
        <ScrollView>
          <View>
            <Subheader text="Posse" />
            {groups.map((group, index) => (
              <Venturist
                key={index}
                name={group.name}
                image={group.image}
                venturists={group.venturists}
                totalVentures={group.totalVentures}
                level={group.level}
              />
            ))}
          </View>
          <View>
            <Subheader text="Onesies" />
            {friends.map((friend, index) => (
              <Venturist
                key={index}
                image={friend.image}
                name={friend.name}
                title={friend.title}
                totalVentures={friend.totalVentures}
                level={friend.level}
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
