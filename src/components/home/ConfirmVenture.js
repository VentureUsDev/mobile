import { connect } from 'react-redux'

class ConfirmVenture extends Component {
  render() {
    console.log(this.props)
    return (
      <Text>YEAH BOYZzzzzz</Text>
    )
  }
}

const mapStateToProps = state => {
  const { ventures: { category, location, user } } = state
  return {
    category,
    location,
    user
  }
}

export default connect(mapStateToProps)(ConfirmVenture)
