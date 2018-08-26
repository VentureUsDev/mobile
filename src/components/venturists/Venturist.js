import { ListItem, Avatar, Checkbox } from 'react-native-material-ui'

import { venturistStyles as v } from './style'

export default class Venturist extends React.Component {
  state = { checked: false }

  onCheck = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const { user: { username, image, totalVentures, level }, user, friend, navigation, editable } = this.props
    return (
      <ListItem
        divider
        onPress={
          editable
            ? () => this.onCheck()
            : () => navigation.navigate('VenturistProfile', { user, friend })
        }
        leftElement={ <Avatar text={username.charAt(0)} /> }
        centerElement={{primaryText: username, secondaryText: 'Novice' }}
        rightElement={
          editable
            ? <View>
                <Checkbox
                  label=""
                  value="selected"
                  checked={this.state.checked}
                  onCheck={() => this.onCheck()}
                />
              </View>
            : <View style={v.level}>
                <Text>Lv. {level}</Text>
                <Text style={v.totalVentures}>ventures: {totalVentures}</Text>
              </View>
        }
      />
    )
  }
}
