import { connect } from 'react-redux'
import Card from '../common/Card'
import { homeStyles as style } from './style'

class ConfirmVenture extends Component {
  render() {
    const { category, location, user, loading } = this.props
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
              <Text style={style.inputTitle}>VENTURIST</Text>
              <Text style={style.confirmDetail}>w/ {user.username}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.confirmBtn}
            onPress={this.onButtonPress}
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
  onButtonPress = () => {
    console.log('pressed')
  }
}

const mapStateToProps = state => {
  const { ventures: { category, location, user } } = state
  return {
    category,
    location,
    user
  }
}

export default connect(mapStateToProps)(ConfirmVenture)
