import React from 'react';
import { View, Text } from 'react-native';
import Header from '../common/Header';

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Header title="Profile" />
        <Text>Yiipykiyay</Text>
      </View>
    );
  }
};
