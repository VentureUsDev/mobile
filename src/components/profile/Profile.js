import firebase, { auth } from '../firebase'
import { connect } from 'react-redux'
import User from '../common/User'

import { profileStyles as p } from './style'

class Profile extends Component {

  logout = () => auth.signOut()

  render() {
    return (
      <ScrollView style={p.container}>
        <User user={this.props.user} readOnly={false} />
        <TouchableOpacity onPress={this.logout}>
          <Text style={{alignSelf: 'center', color: 'blue', fontSize: 16, margin: 20}}>Logout</Text>
        </TouchableOpacity>
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
