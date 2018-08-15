import { ImagePicker, Permissions, Constants } from 'expo'
import firebase from '../firebase'
import { Icon } from 'react-native-material-ui'
import { commonStyles as c } from './style'

export default class ProfileImage extends Component {
  state = { result: null }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
    // const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
    // if (status !== 'granted') {
    //   alert('Hey! You might want to enable notifications for my app, they are good.');
    // }
  }

  imagePicker = async () => {
    await this.askPermissionsAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    })
    this.setState({ result })
  }

  render() {
    return (
      <View style={c.uploadImageContainer}>
        {this.state.result
          ? <View>
              <Image style={c.image} source={{uri: this.state.result.uri}} />
              <TouchableOpacity style={c.editImage} onPress={this.imagePicker}>
                <Icon name="photo" color="white" size={30} />
              </TouchableOpacity>
            </View>
          : <View style={{justifyContent: 'center', alignItems: 'center', height: 280}}>
              <TouchableOpacity style={c.uploadImage} onPress={this.imagePicker}>
                <Text style={c.uploadImageText}>tap to add an image</Text>
              </TouchableOpacity>
            </View>
        }
      </View>
    )
  }
}
        // <Image source={this.state.result && {uri: this.state.result.uri}} style={{height: 400, width: null}} />
