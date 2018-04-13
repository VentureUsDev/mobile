import React from 'react';
import { View } from 'react-native';

import { commonStyles as common } from './style';

export default class Card extends React.Component {
  render() {
    return (
      <View style={[common.cardContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
};
