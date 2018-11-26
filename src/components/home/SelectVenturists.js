import Venturists from '../venturists/Venturists'
import { venturistStyles as v } from '../venturists/style'


export default class SelectVenturists extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('ConfirmVenture')}
          title="Next"
          color="white"
        />
      )
    }
  }
  render() {
    return (
      <Venturists select {...this.props} />
    )
  }
}
