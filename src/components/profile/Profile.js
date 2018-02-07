import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../common/Header';
import User from '../common/User';

import { profileStyles as p } from './style'

export default class Profile extends React.Component {
  render() {
    return (
      <View style={p.container}>
        <Header title="Profile" />
        <User />
      </View>
    );
  }
};
