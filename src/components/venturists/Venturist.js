import { connect } from 'react-redux'
import { setVenturist } from '../../actions'
import { ListItem, Avatar, Icon } from 'react-native-material-ui'
import { getUserDetails } from '../../helpers/venture'

import { venturistStyles as v } from './style'

class Venturist extends Component {
  state = { checked: false }

  render() {
    const { user: { username, image, totalVentures, level }, user, friend, navigation, select, users } = this.props
    const venturistDetails = getUserDetails(totalVentures)
    const selected = _.find(users, userObj => {
      return userObj.uid === user.uid && true
    })
    return (
      <ListItem
        divider
        style={{
          centerElementContainer: { paddingLeft: 10 },
          primaryText: v.primaryText,
          secondaryText: v.secondaryText
        }}
        onPress={
          select
            ? () => this.selectVenturist()
            : () => navigation.navigate('VenturistProfile', { user, friend })
        }
        leftElement={
          image
            ? <Avatar
                size={50}
                image={
                  <Image
                    source={{ uri: image }}
                    style={{width: 50, height: 50, borderRadius: 25}}
                  />
                }
              />
            : <Avatar size={50} text={username.charAt(0).toUpperCase()} />
        }
        centerElement={{primaryText: username, secondaryText: `${venturistDetails.title}` }}
        rightElement={
          select
            ? <View style={{alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}}>
                {selected
                  ? <Icon name="radio-button-checked" style={{fontSize: 25, color: '#007aff'}} />
                  : <Icon name="radio-button-unchecked" style={{fontSize: 25, color: 'gray'}} />
                }

              </View>
            : <View style={v.level}>
                <Text style={v.levelTxt}>Lv. {venturistDetails.level}</Text>
                <Text style={v.totalVentures}>Ventures: {totalVentures}</Text>
              </View>
        }
      />
    )
  }

  selectVenturist = () => {
    const { user, setVenturist, navigation } = this.props
    setVenturist(user)
  }
}

const mapStateToProps = state => {
  const { ventures } = state
  return {
    users: ventures.users
  }
}

export default connect(mapStateToProps, { setVenturist })(Venturist)
