import { connect } from 'react-redux'
import { createVenture } from '../../actions'
import Card from '../common/Card'
import { homeStyles as style } from './style'

class ConfirmVenture extends Component {
  render() {
    const { category, location, users, loading, navigation } = this.props
    const ventureLocation = typeof(location) === 'object' ? location.text : location
    return (
      <View style={style.locationContainer}>
        <Card style={style.cardContainer}>
          <View style={{paddingBottom: 10}}>
            <View style={style.confirmDetailContainer}>
              <Text style={style.inputTitle}>CATEGORY</Text>
              <Text style={style.confirmDetail}>{category}</Text>
            </View>
            <View style={style.confirmDetailContainer}>
              <Text style={style.inputTitle}>LOCATION</Text>
              <Text style={style.confirmDetail}>{ventureLocation}</Text>
            </View>
            <View style={style.confirmDetailContainer}>
              <Text style={style.inputTitle}>VENTURIST(s)</Text>
              {users.length > 0
                ? this.renderVenturists()
                : <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={[style.confirmDetail, {color: 'red'}]}>Please Select a User</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
          <TouchableOpacity
            style={users.length === 0 ? [style.confirmBtn, style.disabled] : style.confirmBtn}
            onPress={this.onButtonPress}
            disabled={users.length === 0}
          >
            {loading
              ? <ActivityIndicator size="small" color="white" />
              : <Text style={style.confirmTxt}>Venture</Text>
            }
          </TouchableOpacity>
        </Card>
      </View>
    )
  }
  renderVenturists = () => {
    return (
      <View>
        {this.props.users.map(user => <Text style={[style.confirmDetail, {alignSelf: 'flex-end'}]}>{user.username}</Text>)}
      </View>
    )
  }
  onButtonPress = () => {
    const { category, location, users, createVenture, currentUser, navigation } = this.props
    createVenture({category, location, users, currentUser})
    navigation.replace('Home')
  }
}

const mapStateToProps = state => {
  const { ventures: { category, location, users }, account } = state
  return {
    category,
    location,
    users,
    currentUser: account.user
  }
}

export default connect(mapStateToProps, { createVenture })(ConfirmVenture)
