import firebase from './firebase'

export default class extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Routes' : 'LoginRoutes')
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
