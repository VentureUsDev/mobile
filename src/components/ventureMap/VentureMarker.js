import React from 'react'
import { View, Image, Text } from 'react-native'
import { MapView } from 'expo'
import { categories, dateOptions } from '../../helpers/venture'
import { mapStyles as m } from './style'

export default class VentureMarker extends React.Component {
  render() {
    const {
      category,
      date,
      coordinates: {
        latitude,
        longitude
      },
      image_url,
      name
    } = this.props.markerData
    return (
      <MapView.Marker
        coordinate={{
          latitude,
          longitude
        }}
        pinColor={this.getColor(category)}
      >
        <MapView.Callout>
          <View>
            <View style={m.calloutContainer}>
              <Image
                style={m.calloutImage}
                source={{ uri: image_url }}
              />
              <View style={m.calloutHeader}>
                <Text style={m.calloutTitle}>{name}</Text>
                <Text style={m.calloutVenturists}>
                  {date.toDate().toLocaleDateString('en-US', dateOptions)}
                </Text>
              </View>
            </View>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    )
  }
  getColor = category => {
    const object = categories.filter(obj => obj.name === category)
    return object[0] && object[0].color || '#A69BF9'
  }
}
