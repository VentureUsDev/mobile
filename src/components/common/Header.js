import React from 'react';
import { Text, View } from 'react-native';
import {commonStyles as common} from './style';

export default class Header extends React.Component {
  render() {
    return (
      <View style={common.headerContainer}>
        <Text style={common.headerTitle}>{this.props.title}</Text>
      </View>
    );
  }
};
