import { ImagePicker, Permissions, Constants } from 'expo'
import firebase, { db } from '../firebase'
import { connect } from 'react-redux'
import { Icon } from 'react-native-material-ui'
import { uploadImage } from '../../actions'
import { commonStyles as c } from './style'

//refactor user upload image to action and reducer. add activity indicator
// handle image changing fluently right now image does not change
class ProfileImage extends Component {
  state = { image: '', loading: false }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
  }

  imagePicker = async () => {
    const { currentUser } = firebase.auth()
    this.setState({ loading: true })
    await this.askPermissionsAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    })

    uploadUrl = await uploadImageAsync(result.uri)
    this.props.uploadImage(uploadUrl)
  }

  render() {
    return (
      <View style={c.uploadImageContainer}>
        {this.props.image || this.state.image
          ? <View>
              <Image style={c.image} source={{uri: this.props.image || this.state.image}} />
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

export default connect(null, { uploadImage })(ProfileImage)

const uploadImageAsync = async uri => {
  const { currentUser } = firebase.auth()
  const response = await fetch(uri)
  const blob = await response.blob()
  const storageRef = firebase.storage().ref().child(currentUser.uid)
  const snapshot = await storageRef.put(blob)
  const imageLocation = await storageRef.getDownloadURL()

  return imageLocation
}
