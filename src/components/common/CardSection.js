import { commonStyles as common } from './style'

export default class CardSection extends Component {
  getStyles = () => {
    const { image, buttons } = this.props
    if (image) {
      return common.cardImageSection
    } else if (buttons) {
      return common.cardButtonSection
    } else {
      return common.cardSection
    }
  }
  render() {
    const { children } = this.props
    return (
      <View style={this.getStyles()}>
        {children}
      </View>
    )
  }
}
