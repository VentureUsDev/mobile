import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../common/Header';
import User from '../common/User';

import { profileStyles as p } from './style';

const ex = {
  name: 'Ron Wowzer',
  level: 'Wanderer',
  totalVentures: '15',
  favoriteCategory: 'happiest of hours',
  image: 'http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx',
  partners: [
    'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
    'http://www.beautifulhameshablog.com/wp-content/uploads/2017/09/Beautiful-girls-in-India-Taapsee-Pannu-beautiful-indian-girl-image-beautiful-girl-image-indian-girls-photos-indian-girls-images.jpg',
    'https://lh3.googleusercontent.com/hqPedkBv844AQwHO9Xgv7LQKjlHr3njiyi413NnckukQ5GDizy8tbvJ01svUaO-7sw=w300'
  ]
};

export default class Profile extends React.Component {
  render() {
    return (
      <View style={p.container}>
        <User user={ex} />
      </View>
    );
  }
};
