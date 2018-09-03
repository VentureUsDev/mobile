import { connect } from 'react-redux'
import firebase from '../firebase'
import { getPendingVentures } from '../../actions'
import Header from '../common/Header'
import Card from '../common/Card'
import CardSection from '../common/CardSection'
import Venture from './Venture'
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
          : pendingVentures.length === 0
              ? <View style={s.container}>
                  <View style={s.noVentureTxt}>
                    <Text>No pending invites... If you need someone, you can always talk to me.</Text>
                  </View>
                </View>
              : <View style={s.container}>
                  <ScrollView style={{paddingBottom: 70}}>
                    <FlatList
                      data={pendingVentures}
                      keyExtractor={() => uniqueId()}
                      renderItem={this.renderVenture}
                    />

                  </ScrollView>
                  <ActionButton
                    buttonColor="black"
                    onPress={() => this.props.navigation.navigate('NewVenture')}
                  />
                </View>
        }
      </View>
    )
  }
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
                <TouchableOpacity onPress={() => console.log('put remove action')}>
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

export default connect(mapStateToProps, { getPendingVentures })(App)
