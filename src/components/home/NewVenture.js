import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import { connect } from 'react-redux'
import { uniqueId } from 'lodash'
import { setCategory } from '../../actions'
import Card from '../common/Card'
import Input from '../common/Input'
import { Icon } from 'react-native-material-ui'
import { homeStyles as style } from './style'
import { categories } from '../../helpers/venture'

class NewVenture extends Component {

  state = {name: '', color: '', modal: false}

  render() {
    return (
      <ScrollView contentContainerStyle={style.newVentureContainer}>
        <View style={style.categoryTexts}>
          <Text style={style.inputTitle}>Select a Category:</Text>
          <Text style={[style.formLabel, this.state.color && {color: this.state.color}]}>{this.props.category}</Text>
        </View>
        <View style={style.formContainer}>
          <View style={style.categoryContainer}>
            {categories.map(category => {
              return (
                <TouchableOpacity
                  key={uniqueId()}
                  onPress={
                    () =>
                      category.value === 'custom'
                        ? this.toggleModal(true)
                        : this.onButtonPress(category)}
                  style={[style.category, {backgroundColor: category.color}]}>
                  <Image resizeMode="contain" source={category.image} style={{width: 55, height: 55}} />
                  <Text style={style.name}>{category.name}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modal}
        >
          <View style={style.modalOverlay}>
            <View style={style.modal}>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>Custom Category</Text>
                <Input
                  placeholder="Keywords like pie"
                  autoCorrect={false}
                  value={this.props.category}
                  onChangeText={this.handleCategoryChange}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.toggleModal(!this.state.modal)
                }}>
                <Text style={style.inputButton}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    )
  }

  onButtonPress = ({value, color, name}) => {
    const { setCategory, navigation } = this.props
    this.setState({ color })
    setCategory(name)
    navigation.navigate('SetLocation')
  }

  handleCategoryChange = category => {
    this.props.setCategory(category)
    this.setState({ color: '#A69BF9' })
  }

  toggleModal = visible => {
    const { category, navigation } = this.props
    this.setState({ modal: visible })
    if (category && !visible) {
      navigation.navigate('SetLocation')
    }
  }
}

const mapStateToProps = state => {
  const { ventures } = state
  return {
    category: ventures.category
  }
}


export default connect(mapStateToProps, { setCategory })(NewVenture)
