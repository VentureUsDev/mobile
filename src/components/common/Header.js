import {commonStyles as common} from './style';

export default class Header extends Component {
  render() {
    return (
      <View style={common.headerContainer}>
        <Text style={common.headerTitle}>{this.props.title}</Text>
      </View>
    );
  }
};
