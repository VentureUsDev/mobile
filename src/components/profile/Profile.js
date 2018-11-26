import firebase, { auth } from '../firebase'
import { connect } from 'react-redux'
import User from '../common/User'

import { profileStyles as p } from './style'

class Profile extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => auth.signOut()}
        title="Logout"
        color="white"
      />
    )
  }

  render() {
    return (
      <ScrollView style={p.container}>
        <User user={this.props.user} readOnly={false} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.account.user
  }
}

export default connect(mapStateToProps)(Profile)
