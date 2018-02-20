import React from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-material-ui';

import { venturistStyles as v } from './style';

export default class Venturist extends React.Component {
  render() {
    const { image, name, title, totalVentures, level, venturists, favoriteCategory, navigation } = this.props;
    return (
      <ListItem
        onPress={() => navigation.navigate('VenturistProfile', { name })}
        leftElement={ <Avatar text={name.charAt(0)} /> }
        centerElement={{primaryText: name, secondaryText: venturists || title}}
        rightElement={
          <View style={v.level}>
            <Text>Lv. {level}</Text>
            <Text style={v.totalVentures}>ventures: {totalVentures}</Text>
          </View>
        }
        divider
      />
    );
  }
};
