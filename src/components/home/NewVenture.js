import { connect } from 'react-redux'
import { setCategory } from '../../actions'
import { Modal } from 'react-native'
import Card from '../common/Card'
import { Icon } from 'react-native-material-ui'
import { homeStyles as style } from './style'

const categories = [
  {name: 'Food', value: 'food', icon: 'restaurant', color: '#60C1E9'},
  {name: 'Drinks', value: 'drinks', icon: 'local-bar', color: '#FECB2F'},
  {name: 'Activities', value: 'activities', icon: 'beach-access', color: '#9CC348'},
  {name: 'Date Night', value: 'datenight', icon: 'favorite', color: '#E35A3C'},
  {name: 'Night Life', value: 'nightlife', icon: 'location-city', color: '#F87931'},
  {name: 'Custom', value: 'custom', icon: 'spa', color: '#A69BF9'}
]

class NewVenture extends Component {

  state = {name: '', color: '', modal: false}

  render() {
    return (
      <ScrollView style={style.newVentureContainer}>
        <Card>
          <View style={style.formContainer}>
            <View style={style.categoryTexts}>
              <Text style={style.inputTitle}>SELECT CATEGORY:</Text>
              <Text style={[style.formLabel, this.state.color && {color: this.state.color}]}>{this.props.category}</Text>
            </View>
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
                    <Icon name={category.icon} style={style.icon} />
                    <Text style={style.name}>{category.name}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
        </Card>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modal}
        >
          <View style={style.modalOverlay}>
            <View style={style.modal}>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>PLEASE TYPE CATEGORY</Text>
                <TextInput
                  style={style.textInput}
                  placeholder="Fly like an eagle"
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
