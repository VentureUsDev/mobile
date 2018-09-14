import React from 'react'
import { View, Image, Text } from 'react-native'
import { MapView } from 'expo'
import { categories, dateOptions, getSmallYelpStars } from '../../helpers/venture'
import { mapStyles as m } from './style'

export default class VentureMarker extends Component {
  render() {
    const {
      category,
      date,
      coordinates: {
        latitude,
        longitude
      },
      photos,
      name,
      rating,
      review_count,
      url
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
          <View style={m.calloutContainer}>
            <Image
              style={m.calloutImage}
              source={{ uri: photos[0] }}
            />
            <View style={m.calloutHeader}>
              <View>
                <Text style={m.calloutTitle}>{name}</Text>
                <Text style={m.date}>
                  {date.toDate().toLocaleDateString('en-US', dateOptions)}
                </Text>
              </View>
              <View style={m.yelpContent}>
                <View>
                  <Image style={m.yelpRating} source={getSmallYelpStars(rating)} />
                  <Text style={m.yelpReviewTxt}>{review_count} Reviews</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Linking.openURL(url)}
                  style={m.yelpLink}
                >
                  <Image
                    style={m.yelpLinkImg}
                    source={require('../../assets/Yelp_trademark_RGB.png')}
                  />
                </TouchableOpacity>
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
