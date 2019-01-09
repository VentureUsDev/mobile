import { connect } from 'react-redux'
import { createVenture } from '../../actions'
import { Avatar } from 'react-native-material-ui'
import Card from '../common/Card'
import { homeStyles as style } from './style'
import { categories } from '../../helpers/venture'
import { LinearGradient } from 'expo'

class ConfirmVenture extends Component {
  render() {
    const { category, location, users, loading, navigation } = this.props
    const ventureLocation = typeof(location) === 'object' ? location.text : location
    const cat = find(categories, item => item.name === category || item.name === 'Custom')

    return (
      <ScrollView contentContainerStyle={style.locationContainer}>
        <Card style={style.cardContainer}>
          <View style={{paddingBottom: 10}}>
            <View style={style.confirmDetailContainer}>
              <Text style={style.inputTitle}>What</Text>
              <View style={[style.iconContainer, { backgroundColor: cat.color, alignSelf: 'flex-end' }]}>
                <Image resizeMode="contain" source={cat.image} style={{width: 45, height: 45}} />
                <Text style={style.iconCategory}>{category}</Text>
              </View>
            </View>
            <View style={style.confirmDetailContainer}>
              <Text style={style.inputTitle}>Where</Text>
              <Text style={style.confirmDetail}>{ventureLocation}</Text>
            </View>
            <View style={style.confirmDetailContainer}>
              <Text style={style.inputTitle}>Who</Text>
              {users.length > 0
                ? this.renderVenturists()
                : <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={[style.confirmDetail, {color: 'red'}]}>Please Select a User</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
          <TouchableOpacity
            onPress={this.onButtonPress}
            disabled={users.length === 0}
          >
            <LinearGradient
              colors={['#0065ff', '#21c0ff']}
              style={users.length === 0 ? [style.confirmBtn, style.disabled] : style.confirmBtn}
            >
              {loading
                ? <ActivityIndicator size="small" color="white" />
                : <Text style={style.confirmTxt}>Venture</Text>
              }
            </LinearGradient>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    )
  }
  renderVenturists = () => {
    return (
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        {this.props.users.map(user =>
          <View key={user.uid} style={style.confirmAvatarContainer}>
            {user.image
              ? <Avatar
                  size={60}
                  image={
                    <Image
                      source={{ uri: user.image }}
                      style={style.confirmAvatar}
                    />
                  }
                />
              : <Avatar
                  style={{container: {backgroundColor: 'gainsboro'}, content: {fontWeight: '600'}}}
                  size={60}
                  text={user.username.charAt(0).toUpperCase()}
                />
            }
          </View>
        )}
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
