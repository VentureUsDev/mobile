import firebase, { db } from '../firebase'
import { connect } from 'react-redux'
import { getAllUsers } from '../../actions'
import Venturist from './Venturist'
import Header from '../common/Header'

class AllVenturists extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={this.props.allUsers}
          keyExtractor={() => uniqueId()}
          renderItem={this.renderUser}
        />
      </ScrollView>
    )
  }
  renderUser = data => {
    return <Venturist user={data.item} {...this.props} />
  }
}

const mapStateToProps = state => {
  const { account } = state
  return {
    allUsers: account.allUsers
  }
}

//        <TouchableOpacity onPress={() => this.props.navigation.navigate('Modal', {content: <User user={ex} />})}>
//          <Text style={{alignSelf: 'center', color: 'black', fontSize: 16}}>OPEN MODAL</Text>
//        </TouchableOpacity>

export default connect(mapStateToProps, { getAllUsers })(AllVenturists)
