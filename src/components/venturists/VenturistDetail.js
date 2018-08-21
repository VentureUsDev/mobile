import User from '../common/User'

export default class VenturistDetail extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert('Add this dude')}
        title="Add"
        color="#157AFB"
      />
    )
  }
  render() {
    const { state: { params: user } } = this.props.navigation
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <User {...user} readOnly />
      </ScrollView>
    )
  }
}
