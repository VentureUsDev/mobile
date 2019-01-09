import { connect } from 'react-redux'
import { setLocation } from '../../actions'
import Card from '../common/Card'
import Input from '../common/Input'
import { homeStyles as style } from './style'
import { Location, Permissions } from 'expo'

class SetLocation extends Component {
  state = { currentLocation: null, error: '' }

  componentDidMount() {
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        currentLocation: '',
      })
    }

    let location = await Location.getCurrentPositionAsync({})
    const { coords: { latitude, longitude } } = location
    this.setState({ currentLocation: { latitude, longitude, text: 'Current Location'} })
  }

  render() {
    const { currentLocation, error } = this.state
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={style.locationContainer}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Card style={style.location}>
            <Image resizeMode="contain" style={{height: 200, width: 150, alignSelf: 'center'}} source={require('../../assets/Location.png')}/>
            <View style={style.inputContainer}>
              <Text style={style.inputTitle}>Set Venture Location</Text>
              <Input
                placeholder="Home is where the trouble is"
                value={currentLocation ? currentLocation.text : this.props.location}
                autoCorrect={false}
                onChangeText={this.handleLocationChange}
              />
            </View>
            <Text style={style.errorTxt}>{error}</Text>
            <TouchableOpacity onPress={this.onButtonPress}>
              <Text style={style.inputButton}>NEXT</Text>
            </TouchableOpacity>
          </Card>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }

  onButtonPress = () => {
    const { currentLocation: { text } } = this.state
    const { location, navigation } = this.props
    if (text || location) {
      text && this.props.setLocation(this.state.currentLocation)
      navigation.navigate('SelectVenturists')
    } else {
      this.setState({ error: 'Must choose location' })
    }
  }

  handleLocationChange = location => {
    this.setState({ currentLocation: { text: '' }, error: '' })
    this.props.setLocation(location)
  }
}

const mapStateToProps = state => {
  const { ventures } = state
  return {
    location: ventures.location
  }
}

export default connect(mapStateToProps, { setLocation })(SetLocation)
