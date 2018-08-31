import Venturists from '../venturists/Venturists'
import { venturistStyles as v } from '../venturists/style'


export default class SelectVenturists extends Component {
  render() {
    return (
      <Venturists select {...this.props} />
    )
  }
}
