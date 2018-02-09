import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles as c } from './style';

export default class UploadImage extends React.Component {
  render() {
    return (
      <View style={c.uploadImageContainer}>
        <View style={c.uploadImage}>
          <Text style={c.uploadImageText}>tap to add an image</Text>
        </View>
      </View>
    );
  }
};
