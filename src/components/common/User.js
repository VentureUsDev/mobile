import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { commonStyles as c } from './style';

export default class User extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={c.imageContainer}>
          <Image
            style={c.image}
            source={{uri: 'http://www.petwave.com/-/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx'}}
          />
        </View>
        <View>
          <Text style={c.name}>Ron Wowzer</Text>
          <Text style={c.level}>Wanderer</Text>
        </View>
        <View style={c.userDetailContainer}>

          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>total ventures:</Text>
            <Text style={c.userDetail}>32</Text>
          </View>

          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>favorite activity:</Text>
            <Text style={c.userDetail}>happy hour</Text>
          </View>

          <View style={c.partnersTitle}>
            <Text style={c.userDetailTitle}>partners in crime:</Text>
          </View>
          <View style={c.partnersImageContainer}>
            <Image
              style={c.partnersImage}
              source={{uri: 'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg'}}
            />
            <Image
              style={c.partnersImage}
              source={{uri: 'http://www.beautifulhameshablog.com/wp-content/uploads/2017/09/Beautiful-girls-in-India-Taapsee-Pannu-beautiful-indian-girl-image-beautiful-girl-image-indian-girls-photos-indian-girls-images.jpg'}}
            />
            <Image
              style={c.partnersImage}
              source={{uri: 'https://lh3.googleusercontent.com/hqPedkBv844AQwHO9Xgv7LQKjlHr3njiyi413NnckukQ5GDizy8tbvJ01svUaO-7sw=w300'}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};
