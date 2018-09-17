import { connect } from 'react-redux'
import { setVenturist } from '../../actions'
import { ListItem, Avatar, Checkbox } from 'react-native-material-ui'
import { getUserDetails } from '../../helpers/venture'

import { venturistStyles as v } from './style'

class Venturist extends Component {
  state = { checked: false }

  onCheck = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const { user: { username, image, totalVentures, level }, user, friend, navigation, select } = this.props
    const venturistDetails = getUserDetails(totalVentures)
    return (
      <ListItem
        divider
        onPress={
          select
            ? () => this.selectVenturist()
            : () => navigation.navigate('VenturistProfile', { user, friend })
        }
        leftElement={ <Avatar text={username.charAt(0)} /> }
        centerElement={{primaryText: username, secondaryText: `${venturistDetails.title}` }}
        rightElement={
          <View style={v.level}>
            <Text>Lv. {venturistDetails.level}</Text>
            <Text style={v.totalVentures}>ventures: {totalVentures}</Text>
          </View>
        }
      />
    )
  }

  selectVenturist = () => {
    const { user, setVenturist, navigation } = this.props
    setVenturist(user)
    navigation.navigate('ConfirmVenture')
  }
}

export default connect(null, { setVenturist })(Venturist)
