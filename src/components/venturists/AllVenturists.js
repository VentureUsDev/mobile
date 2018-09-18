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
    const { allUsers, fetchingUsers } = this.props
    return (
      <View style={{flex: 1}}>
        {fetchingUsers
          ? <View style={style.noUserContainer}>
              <ActivityIndicator size="large" />
            </View>
          : <View style={{flex: 1}}>
              {allUsers.length > 0
                ? <ScrollView contentContainerStyle={style.container}>
                    <FlatList
                      data={allUsers}
                      keyExtractor={() => uniqueId()}
                      renderItem={this.renderUser}
                    />
                  </ScrollView>
                : <View style={style.noUserContainer}>
                    <Text style={style.noUserText}>
                      We're... pretty lonley here. Tell some people, you know what I'm sayin, and tell them to tell some more people, get that "multi-level marketing" going.
                    </Text>
                  </View>
              }
            </View>
        }
      </View>
    )
  }
  renderUser = data => {
    return <Venturist user={data.item} {...this.props} />
  }
}

// refactor friends list to be a document which is an array of friend uids
const mapStateToProps = state => {
  const { account, friends } = state
  const users = _.filter(account.allUsers, user => {
    return !_.map(friends.friendsList, 'uid').includes(user.uid)
  })

  return {
    allUsers: users,
    fetchingUsers: account.fetchingUsers
  }
}

export default connect(mapStateToProps, { getAllUsers })(AllVenturists)
