import React from 'react'
import { View, Image, Text } from 'react-native'
import { MapView } from 'expo'

import { mapStyles as m } from './style'

export default class VentureMarker extends React.Component {
  render() {
    const { region, name, image, venturists } = this.props.markerData
    return (
      <MapView.Marker
        coordinate={region}
        pinColor="purple"
      >
        <MapView.Callout>
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
        </MapView.Callout>
      </MapView.Marker>
    )
  }
}
