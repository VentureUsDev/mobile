import React from 'react';
import { Text, View } from 'react-native';

import { homeStyles as s } from './style';

export default class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <Text>La Baik</Text>
        <Text>John Hwang</Text>
        <Text>Nick Castañeda</Text>
      </View>
    );
  }
}
