import { ImagePicker, Permissions, Constants } from 'expo'
import firebase, { db } from '../firebase'
import { connect } from 'react-redux'
import { Icon } from 'react-native-material-ui'
import { uploadImage } from '../../actions'
import { commonStyles as c } from './style'

class ProfileImage extends Component {
  state = { loading: false }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
  }

  render() {
    return (
      <View style={c.uploadImageContainer}>
        {this.state.loading && this.renderLoaderOverlay()}
        {this.renderImage()}
      </View>
    )
  }

  renderLoaderOverlay = () => {
    return (
      <View style={c.uploadImageLoadingOverlay}>
        <ActivityIndicator size="large" color="white" />
      </View>
    )
  }

  renderImage = () => {
    const { image, readOnly } = this.props
    return (
      <View>
        {image
          ? <View>
              <Image style={c.image} source={{uri: image}} />
              {!readOnly &&
              <TouchableOpacity style={c.editImage} onPress={this.pickImage}>
                <Icon name="photo" color="white" size={30} />
              </TouchableOpacity>}
            </View>
          : <View style={c.noImage}>
              {readOnly
                ? <Text style={c.uploadImageText}>No Image Available</Text>
                : <TouchableOpacity style={c.uploadImage} onPress={this.pickImage}>
                    <Text style={c.uploadImageText}>tap to add an image</Text>
                  </TouchableOpacity>
              }
            </View>
        }
      </View>
    )
  }
  pickImage = async () => {
    const { currentUser } = firebase.auth()
    await this.askPermissionsAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    })
    this.setState({ loading: true })
    try {
      uploadUrl = await uploadImageAsync(result.uri)
      this.props.uploadImage(uploadUrl)
      this.setState({ loading: false})
    } catch (error) {
      // insert alert here
      console.log('error', error)
      this.setState({ loading: false})
    }
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
