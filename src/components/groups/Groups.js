import React from 'react';
import { View, Text } from 'react-native';
import Header from '../common/Header'

import { groupsStyles as s } from './style';

export default class Groups extends React.Component {
  render() {
    return (
      <View>
        <Header title="Friends" />
        <Text style={s.text}>Groups are cool</Text>
      </View>
    );
  }
}
