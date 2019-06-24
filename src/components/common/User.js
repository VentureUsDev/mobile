import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { groupBy } from 'lodash'
import ProfileImage from './ProfileImage'
import { getUserDetails } from '../../helpers/venture'
import { commonStyles as c } from './style'

export default class User extends React.Component {

  render() {
    const { user, readOnly } = this.props
    return (
      <View>
        <View style={c.imageContainer}>
          <ProfileImage image={user.image} readOnly={readOnly} />
        </View>
        <View>
          {this.renderDetails()}
        </View>
      </View>
    )
  }
  renderDetails = () => {
    const { username, level, totalVentures, categories } = this.props.user
    const favoriteCategory = () => {
      if (!!categories && categories.length > 0) {
        const allCategories = groupBy(categories, category => Object.keys(category))
        return Object.keys(allCategories).reduce((a, b) => {
          return allCategories[a] > allCategories[b] ? a : b
        })
      } else {
        return 'N/A'
      }
    }
    const venturistDetails = getUserDetails(totalVentures)
    return (
      <View>
        <View>
          <Text style={c.name}>{username}</Text>
          <Text style={c.level}>{`Level ${venturistDetails.level}`}</Text>
        </View>
        <View style={c.userDetailContainer}>
          <View style={c.userDetails}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{height: 10, width: 10, backgroundColor: '#FECB2F'}} />
              <Text style={c.userDetailTitle}>Title</Text>
            </View>
            <Text style={c.userDetail}>{venturistDetails.title}</Text>
          </View>
          <View style={c.userDetails}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{height: 10, width: 10, backgroundColor: '#E35A3C'}} />
              <Text style={c.userDetailTitle}>Total Ventures</Text>
            </View>
            <Text style={c.userDetail}>{totalVentures}</Text>
          </View>
          <View style={c.userDetails}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{height: 10, width: 10, backgroundColor: '#60C1E9'}} />
              <Text style={c.userDetailTitle}>Favorite Category</Text>
            </View>
            <Text style={c.userDetail}>{favoriteCategory()}</Text>
          </View>
        </View>
      </View>
    )
  }
}

