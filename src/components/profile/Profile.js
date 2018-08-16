import firebase, { auth } from '../firebase'
import { getUser } from '../../actions'
import { connect } from 'react-redux'
import User from '../common/User'

import { profileStyles as p } from './style'

class Profile extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  logout = () => auth.signOut()

  render() {
    return (
      <ScrollView style={p.container}>
        <User user={this.props.user} />
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

export default connect(mapStateToProps, { getUser })(Profile)

//        <TouchableOpacity onPress={() => this.props.navigation.navigate('Modal', {content: <User user={ex} />})}>
//          <Text style={{alignSelf: 'center', color: 'black', fontSize: 16}}>OPEN MODAL</Text>
//        </TouchableOpacity>
