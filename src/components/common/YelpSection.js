import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { commonStyles as style } from './style'
import { getYelpStars } from '../../helpers/venture'

export default class extends Component {
  render() {
    const { name, rating, review_count, url, location: { address1, city, state, zip_code } } = this.props
    return (
      <View style={style.yelpContainer}>
        <Text style={style.yelpTitle}>{name}</Text>
        <View style={style.addressContainer}>
          <Text style={style.addressTxt}>{address1}</Text>
          <Text style={style.addressTxt}>{city}, {state} {zip_code}</Text>
        </View>
        <View style={style.yelpContent}>
          <View>
            <Image style={style.yelpRating} source={getYelpStars(rating)} />
            <Text style={style.yelpReviewTxt}>{review_count} Reviews</Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL(url)}
            style={style.yelpLink}
          >
            <Image
              style={style.yelpLinkImg}
              source={require('../../assets/Yelp_trademark_RGB.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
