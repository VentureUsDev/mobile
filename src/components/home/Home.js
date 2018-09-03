import { connect } from 'react-redux'
import firebase from '../firebase'
import { getPendingVentures, deleteVenture } from '../../actions'
import Header from '../common/Header'
import Card from '../common/Card'
import CardSection from '../common/CardSection'
import ActionButton from 'react-native-action-button'
import { Icon } from 'react-native-material-ui'
import { categories } from '../../helpers/venture'

import { homeStyles as s } from './style'

class App extends Component {
  componentDidMount() {
    this.props.getPendingVentures()
  }
  render() {
    const { loading, pendingVentures } = this.props
    return (
      <View style={s.container}>
        {loading
          ? <View style={s.loading}>
              <ActivityIndicator size="large" />
            </View>
          : <View style={s.container}>
              {pendingVentures.length === 0
                ? <View style={s.noVentureTxt}>
                    <Text>No pending invites... If you need someone, you can always talk to me.</Text>
                  </View>
                : <ScrollView style={{paddingBottom: 70}}>
                    <FlatList
                      data={pendingVentures}
                      keyExtractor={() => uniqueId()}
                      renderItem={this.renderVenture}
                    />
                  </ScrollView>
              }
              <ActionButton
                buttonColor="black"
                onPress={() => this.props.navigation.navigate('NewVenture')}
              />
            </View>
        }
      </View>
    )
  }

  removeVenture = venture =>
    this.props.deleteVenture(venture)

  renderVenture = venture => {
    const { category, date, location: { text }, users } = venture.item
    // move this stuff to reduer?
    const { currentUser } = firebase.auth()
    let user = _.filter(users, user => {
      return user.uid !== currentUser.uid
    })
    user = user[0]
    const iconData = _.find(categories, ({name}) => {
      return name === category || name === 'Custom'
    })
    return (
      <TouchableOpacity onPress={() => console.log('accept venture')}>
        <Card style={s.ventureCard}>
          <CardSection>
            <View style={s.ventureCardContent}>
              <View style={[s.iconContainer, { backgroundColor: iconData.color }]}>
                <Icon name={iconData.icon} style={s.icon} />
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
                <Text style={s.ventureUser}>w/ {user.username}</Text>
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

export default connect(mapStateToProps, { getPendingVentures, deleteVenture })(App)
