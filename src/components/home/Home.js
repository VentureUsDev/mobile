import { connect } from 'react-redux'
import firebase from '../firebase'
import { getPendingVentures, deleteVenture, acceptVenture } from '../../actions'
import Header from '../common/Header'
import Card from '../common/Card'
import CardSection from '../common/CardSection'
import { Icon, Avatar } from 'react-native-material-ui'
import { categories } from '../../helpers/venture'

import { homeStyles as s } from './style'

class App extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('NewVenture')}
          title="New Venture"
          color="white"
        />
      )
    }
  }
  componentDidMount() {
    this.props.getPendingVentures()
  }
  render() {
    const { loading, pendingVentures, navigation } = this.props
    return (
      <View style={s.container}>
        {loading
          ? <View style={s.loading}>
              <ActivityIndicator size="large" />
            </View>
          : <View style={s.container}>
              {pendingVentures.length === 0
                ? <TouchableOpacity onPress={() => navigation.navigate('NewVenture')} style={s.noVentureTxt}>
                    <Text style={s.noTxt}>You have no pending invites... Tap here to get started!</Text>
                  </TouchableOpacity>
                : <ScrollView style={{paddingBottom: 70}}>
                    <FlatList
                      data={pendingVentures}
                      keyExtractor={() => uniqueId()}
                      renderItem={this.renderVenture}
                    />
                  </ScrollView>
              }
            </View>
        }
      </View>
    )
  }

  removeVenture = venture =>
    this.props.deleteVenture(venture)

  onVenturePress  = venture => {
    const { acceptVenture, navigation } = this.props
    acceptVenture(venture)
    navigation.navigate('Venture', { venture })
  }

  renderVenture = venture => {
    const { category, date, location: { text }, users } = venture.item
    // move this stuff to reduer?
    const { currentUser } = firebase.auth()
    const filteredUsers = _.filter(users, user => {
      return user.uid !== currentUser.uid
    })
    const iconData = _.find(categories, ({name}) => {
      return name === category || name === 'Custom'
    })
    return (
      <TouchableOpacity onPress={() => this.onVenturePress(venture.item)}>
        <Card style={s.ventureCard}>
          <CardSection>
            <View style={s.ventureCardContent}>
              <View style={[s.iconContainer, { backgroundColor: iconData.color }]}>
                <Image resizeMode="contain" source={iconData.image} style={{width: 55, height: 55}} />
              </View>
              <View>
                <Text style={s.headerText}>{category}</Text>
                <Text style={s.locationTxt}>@{text}</Text>
              </View>
              <View style={s.ventureCardRight}>
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(
                      'Hey You',
                      'Are you sure you want to reject this venture?',
                      [{text: 'Cancel'},
                       {text: 'Delete', onPress: () => this.removeVenture(venture.item)}]
                    )
                  }
                >
                  <Icon name="clear" style={s.ventureRejectIcon} />
                </TouchableOpacity>
                <View style={s.avatars}>
                  {filteredUsers.map(user =>
                    <View
                      key={user.uid}
                      style={s.avatarContainer}
                    >
                      {user.image
                        ? <Avatar
                            size={40}
                            image={
                              <Image
                                source={{ uri: user.image }}
                                style={s.avatar}
                              />
                            }
                          />
                        : <Avatar
                            style={{container: {backgroundColor: iconData.color}, content: {fontWeight: '600'}}}
                            size={40}
                            text={user.username.charAt(0).toUpperCase()}
                          />
                      }
                    </View>
                  )}
                </View>
              </View>
            </View>
          </CardSection>
        </Card>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => {
  const { ventures } = state
  return {
    pendingVentures: ventures.pendingVentures,
    loading: ventures.loading
  }
}

export default connect(mapStateToProps, { getPendingVentures, deleteVenture, acceptVenture })(App)
