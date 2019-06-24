import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
export default class extends Component {
  render() {
    const { title, message, onPress } = this.props
    return (
      <TouchableOpacity onPress={() => onPress()} style={style.noteContainer}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={require('../assets/venture.png')} />
        </View>
        <View style={style.contentContainer}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.subtitle}>{message}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const style = {
  noteContainer: {
    height: 90,
    paddingTop: 30,
    flexDirection: 'row',
    marginLeft: 20
  },
  imageContainer: {
    width: 55,
    height: 55
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10
  },
  contentContainer: {
    marginLeft: 15
  },
  title: {
    fontSize: 18
  },
  subtitle: {
    fontSize: 14,
    paddingTop: 5
  }
}
