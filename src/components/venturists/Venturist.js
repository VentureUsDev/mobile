import React from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-material-ui';

import { venturistStyles as v } from './style';

export default class Venturist extends React.Component {
  render() {
    const { image, name, title, totalVentures, level, venturists } = this.props;
    return (
      <ListItem
        leftElement={ <Avatar text={name.charAt(0)} /> }
        centerElement={{primaryText: name, secondaryText: venturists || title}}
        rightElement={
          <View style={v.level}>
            <Text>Lv. {level}</Text>
            <Text style={v.totalVentures}>total ventures: {totalVentures}</Text>
          </View>
        }
        divider
        onPress={() => {}}
      />
    );
  }
};
