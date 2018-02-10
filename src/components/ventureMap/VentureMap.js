import React from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import Header from '../common/Header';

import { mapStyles as m } from './style';

const { width, height } = Dimensions.get('window');

export default class VentureMap extends React.Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * width / height,
    },
  };

  render() {
    return (
      <View style={m.outerContainer}>
        <Header title="Venture Map" />
        <View style={m.innerContainer}>
          <View
            style={StyleSheet.absoluteFill}
            contentContainerStyle={m.mapView}
          >
            <MapView
              provider={this.props.provider}
              style={m.map}
              scrollEnabled={true}
              zoomEnabled={true}
              pitchEnabled={true}
              rotateEnabled={true}
              initialRegion={this.state.region}
            >
              <Marker
                title="This is a title"
                description="This is a description"
                coordinate={this.state.region}
              />
              <Marker
                title="This is a title"
                description="This is a description"
                coordinate={{latitude: 37.78825,
                             longitude: -122.4424,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0922 * width / height
                           }}
              />
            </MapView>
          </View>
        </View>
      </View>
    );
  }
}

VentureMap.propTypes = {
  provider: ProviderPropType,
};

