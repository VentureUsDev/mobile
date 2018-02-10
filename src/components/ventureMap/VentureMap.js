import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Header from '../common/Header';

import { mapStyles as m } from './style';

const { width, height } = Dimensions.get('window');

// Make fake data for this page
// make marker component
// Make add buttons for venture, venturists, and textfields
// Add will be venturist with checkbox instead of level
// Stack Navigator
// Image Avatar

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
              style={m.map}
              scrollEnabled={true}
              zoomEnabled={true}
              pitchEnabled={true}
              rotateEnabled={true}
              initialRegion={this.state.region}
            >
              <Marker coordinate={this.state.region}>
                <Callout>
                  <View>
                    <View style={m.calloutContainer}>
                      <Image
                        style={m.calloutImage}
                        source={{ uri: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121'}}
                      />
                      <View style={m.calloutHeader}>
                        <Text style={m.calloutTitle}>McDonalDzz</Text>
                        <Text style={m.calloutVenturists}>La, Nick, Puppies, Spaghetti</Text>
                      </View>
                    </View>
                  </View>
                </Callout>
              </Marker>
              <Marker
                pinColor="purple"
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

