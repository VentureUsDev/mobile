import React from 'react';
import { View, Image, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

import { mapStyles as m } from './style';

export default class VentureMarker extends React.Component {
  render() {
    const { region, name, image, venturists } = this.props.markerData;
    return (
      <Marker
        coordinate={region}
        pinColor="purple"
      >
        <Callout>
          <View>
            <View style={m.calloutContainer}>
              <Image
                style={m.calloutImage}
                source={{ uri: image }}
              />
              <View style={m.calloutHeader}>
                <Text style={m.calloutTitle}>{name}</Text>
                <Text style={m.calloutVenturists}>{venturists}</Text>
              </View>
            </View>
          </View>
        </Callout>
      </Marker>
    );
  }
};
