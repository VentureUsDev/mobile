import firebase from './firebase'
import { getUser } from '../actions'
import { connect } from 'react-redux'

class Loading extends Component {
  componentDidMount() {
    const { getUser, navigation } = this.props
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUser(user)
        navigation.navigate('Routes')
      } else {
        navigation.navigate('LoginRoutes')
      }
    })
  }
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>The world will always turn, but sometimes your app just needs some time to think...</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  text: {
    paddingVertical: 30,
    fontSize: 16,
  }
})

export default connect(null, { getUser })(Loading)
