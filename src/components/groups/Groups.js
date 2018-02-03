import React from 'react';
import { View, Text } from 'react-native';

import { groupsStyles as s } from './style';

export default class Groups extends React.Component {
  render() {
    return (
      <View>
        <Text style={s.text}>Groups are cool</Text>
      </View>
    );
  }
}
