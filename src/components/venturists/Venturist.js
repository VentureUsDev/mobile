import { ListItem, Avatar, Checkbox } from 'react-native-material-ui';

import { venturistStyles as v } from './style';

export default class Venturist extends React.Component {
  state = { checked: false };

  onCheck = () => {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { image, name, title, totalVentures,
            level, venturists, favoriteCategory, navigation, editable } = this.props;
    return (
      <ListItem
        divider
        onPress={
          editable
            ? () => this.onCheck()
            : () => navigation.navigate('VenturistProfile', { name })
        }
        leftElement={ <Avatar text={name.charAt(0)} /> }
        centerElement={{primaryText: name, secondaryText: venturists || title}}
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
    );
  }
};
