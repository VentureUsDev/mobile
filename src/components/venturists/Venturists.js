import React from 'react';
import { ListItem, Avatar, Subheader, Icon } from 'react-native-material-ui';
import Header from '../common/Header';
import Venturist from './Venturist';
import ActionButton from 'react-native-action-button';

import { venturistStyles as style } from './style';

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

export default class Venturists extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <Subheader text="Posse" />
          </View>
          <View>
            <Subheader text="Onesies" />
          </View>
        </ScrollView>
        <ActionButton buttonColor="black">
          <ActionButton.Item buttonColor='#9b59b6' title="New Onesie" onPress={() => this.props.navigation.navigate('AllVenturists')}>
            <Icon name="person-add" style={style.iconStyle} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="New Posse" onPress={() => {}}>
            <Icon name="group-add" style={style.iconStyle} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
