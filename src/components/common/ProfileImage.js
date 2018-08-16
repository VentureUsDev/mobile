import { ImagePicker, Permissions, Constants } from 'expo'
import firebase, { db } from '../firebase'
import { connect } from 'react-redux'
import { Icon } from 'react-native-material-ui'
import { uploadProfilePic } from '../../actions'
import { commonStyles as c } from './style'

//refactor user upload image to action and reducer. add activity indicator
// handle image changing fluently right now image does not change
export default class ProfileImage extends Component {
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
    db.collection('users').doc(currentUser.uid).set({ image: uploadUrl })
      .then(() => {
        this.setState({ loading: false, image: uploadUrl })
      })
      .catch(error => {
        console.log('error')
        this.setState({ loading: false })
      })
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

const mapStateToProps = state => {

}

const uploadImageAsync = async uri => {
  const { currentUser } = firebase.auth()
  const response = await fetch(uri)
  const blob = await response.blob()
  const storageRef = firebase.storage().ref().child(currentUser.uid)
  const snapshot = await storageRef.put(blob)
  const imageLocation = await storageRef.getDownloadURL()

  return imageLocation
}
