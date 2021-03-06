import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriends, getGroups } from '../../actions/friends';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { ListItem, Avatar, Subheader, Icon } from 'react-native-material-ui';
import Header from '../common/Header';
import Venturist from './Venturist';
import ActionButton from 'react-native-action-button';

import { venturistStyles as style } from './style';

// const groups = [{
//     name: 'The Juice Biters',
//     image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
//     venturists: 'Joe, Ricky, Bobby',
//     totalVentures: 14,
//     level: 9,
//     favoriteCategory: 'happiest of hours',
//   }, {
//     name: 'Vagina Monologues',
//     image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
//     venturists: 'Candy, Dandy, Sandy',
//     totalVentures: 10,
//     level: 5,
//     favoriteCategory: 'happiest of hours',
//   }, {
//     name: 'Hourly Happiness',
//     image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
//     venturists: 'Nick, La, John',
//     totalVentures: 102,
//     level: 100,
//     favoriteCategory: 'happiest of hours',
// }];

// const friends = [{
//     name: 'La Baik',
//     image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
//     title: 'Adventurer',
//     totalVentures: 85,
//     level: 99,
//     favoriteCategory: 'happiest of hours',
//   }, {
//     name: 'Nick Castaneda',
//     image: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
//     title: 'Journeyman',
//     totalVentures: 70,
//     level: 78,
//     favoriteCategory: 'happiest of hours',
//   }, {
//     name: 'John Hwang',
//     title: 'Novice',
//     totalVentures: 2,
//     level: 2,
//     favoriteCategory: 'happiest of hours',
// }];
@connect(mapStateToProps, mapDispatchToProps)
export default class Venturists extends React.Component {
  componentWillMount() {
    console.log("Mounting", this.props)
    this.props.getFriends();
    this.props.getGroups();
  }
  render() {
    console.log("PROPS", this.props)
    const { friends, groups } = this.props;
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <Subheader text="Posse" />
            {groups && groups.map((group, index) => (
              <Venturist
                {...this.props}
                key={index}
                name={group.name}
                venturists="{group.venturists}"
                totalVentures="{group.totalVentures}"
                level="{group.level}"
                favoriteCategory="{group.favoriteCategory}"
              />
            ))}
          </View>
          <View>
            <Subheader text="Onesies" />
            {friends && friends.map((friend, index) => (
              <Venturist
                {...this.props}
                key={index}
                name={friend.nickname}
                title="{friend.title}"
                totalVentures="{friend.totalVentures}"
                level="{friend.level}"
                favoriteCategory="{friend.favoriteCategory}"
              />
            ))}
          </View>
        </ScrollView>
        <ActionButton buttonColor="black">
          <ActionButton.Item buttonColor='#9b59b6' title="New Onesie" onPress={() => this.props.navigation.navigate('NewVenturist')}>
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


function mapStateToProps(state) {
  const { account, friends: { friends, groups } } = state;
  return {
    friends, groups,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFriends,
    getGroups,
  }, dispatch);
}
