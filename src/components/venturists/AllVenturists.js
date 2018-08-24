import firebase, { db } from '../firebase'
import { connect } from 'react-redux'
import { getAllUsers } from '../../actions'
import Venturist from './Venturist'
import Header from '../common/Header'
import { venturistStyles as style } from './style'

class AllVenturists extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    const { allUsers } = this.props
    return (
      <ScrollView contentContainerStyle={style.container}>
        {allUsers.length > 0
          ? <FlatList
              data={allUsers}
              keyExtractor={() => uniqueId()}
              renderItem={this.renderUser}
            />
          : <View style={style.noUserContainer}>
              <Text style={style.noUserText}>
                We're... pretty lonley here. Tell some people, you know what I'm sayin, and tell them to tell some more people, get that 'multi level marketing' going.
              </Text>
            </View>
        }
      </ScrollView>
    )
  }
  renderUser = data => {
    return <Venturist user={data.item} {...this.props} />
  }
}

// why is this working...
const mapStateToProps = state => {
  const { account, friends } = state
  const friendIds = _.map(friends.friendsList, friend => friend.uid)
  const users = _.remove(account.allUsers, user => {
    return friendIds.includes(user.uid)
  })

  return {
    allUsers: account.allUsers
  }
}

export default connect(mapStateToProps, { getAllUsers })(AllVenturists)
