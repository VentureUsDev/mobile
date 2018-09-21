import { connect } from 'react-redux'
import { addFriend, removeFriend } from '../../actions'
import User from '../common/User'
import firebase, { db } from '../firebase'

class VenturistDetail extends Component {
  componentDidMount() {
    const { navigation, addFriend, removeFriend } = this.props
    navigation.setParams({ addFriend, removeFriend })
  }
  static navigationOptions = ({navigation}) => {
    onPressAction = () => {
      const { goBack, state: { params: { user, friend, addFriend, removeFriend } } } = navigation
      const { uid } = user
      if (!friend) {
        addFriend(uid)
        navigation.popToTop()
      } else {
        removeFriend(uid)
        goBack()
      }
    }
    renderButton = () => {
      const { state: { params: { friend } } } = navigation
      if (friend) {
        return (
          <Button
            onPress={() =>
              Alert.alert(
                'Hey You',
                'Are you sure you want to remove this venturist?',
                [{text: 'Cancel'},
                 {text: 'Delete', onPress: () => onPressAction()}]
              )
            }
            title="Remove"
            color="#157AFB"
          />
        )
      } else {
        return (
          <Button
            onPress={() =>
              Alert.alert(
                'Adventurer!',
                'Add this fellow adventuree to your venturist list?',
                [{text: 'Cancel'},
                {text: 'OK', onPress: () => onPressAction()}]
             )
            }
            title="Add"
            color="#157AFB"
          />
        )
      }
    }
    return {
      headerRight: renderButton()
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


export default connect(null, { addFriend, removeFriend })(VenturistDetail)
