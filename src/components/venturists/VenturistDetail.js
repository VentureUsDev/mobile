import User from '../common/User'
import firebase, { db } from '../firebase'

//handle error, and navigating to adventure list
export default class VenturistDetail extends Component {
  static navigationOptions = ({navigation}) => {
    const { state: { params: { user: user } } } = navigation
    const { currentUser } = firebase.auth()
    return {
      headerRight:
        <Button
          onPress={() =>
            Alert.alert(
              'Adventurer!',
              'Add this fellow adventuree to your venturist list?',
             [
              {text: 'Cancel'},
              {text: 'OK', onPress: () => db.collection('friends').doc(currentUser.uid).set({uid: user.uid})}
              ]
           )
          }
          title="Add"
          color="#157AFB"
        />
    }
  }
  render() {
    const { state: { params: user } } = this.props.navigation
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <User {...user} readOnly />
      </ScrollView>
    )
  }
}
