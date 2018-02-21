import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Header from '../common/Header';
import VentureMarker from './VentureMarker';

import { mapStyles as m } from './style';

const { width, height } = Dimensions.get('window');

const markerData = [{
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * width / height
    },
    image: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121',
    name: 'MCDIZZLEZ',
    venturists: 'Nick, La, Puppies',
  }, {
    region: {
      latitude: 37.78825,
      longitude: -122.4424,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * width / height
  },
    image: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121',
    name: 'MCDIZZLEZ',
    venturists: 'Nick, La, Puppies',
  }, {
    region: {
      latitude: 37.79825,
      longitude: -122.4524,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * width / height
  },
    image: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121',
    name: 'MCDIZZLEZ',
    venturists: 'Nick, La, Puppies',
  }
];

export default class VentureMap extends React.Component {
  state = {
    // TODO: set with current location
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
        <View style={m.innerContainer}>
          <View
            style={StyleSheet.absoluteFill}
            contentContainerStyle={m.mapView}
          >
            <MapView
              style={m.map}
              scrollEnabled={true}
              zoomEnabled={true}
              pitchEnabled={true}
              rotateEnabled={true}
              initialRegion={this.state.region}
            >
              {markerData.map((marker, index) => (
                <VentureMarker
                  key={index}
                  markerData={marker}
                />
              ))}
            </MapView>
          </View>
        </View>
      </View>
    );
  }
}

