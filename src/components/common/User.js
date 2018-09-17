import ProfileImage from './ProfileImage'
import { getUserDetails } from '../../helpers/venture'
import { commonStyles as c } from './style'

export default class User extends React.Component {

  render() {
    const { user, readOnly } = this.props
    return (
      <View>
        <View style={c.imageContainer}>
          <ProfileImage image={user.image} readOnly={readOnly} />
        </View>
        <View>
          {this.renderDetails()}
        </View>
      </View>
    )
  }
  renderDetails = () => {
    const { username, level, totalVentures, categories } = this.props.user
    const favoriteCategory = () => {
      if (!!categories && categories.length > 0) {
        const allCategories = _.groupBy(categories, category => Object.keys(category))
        return Object.keys(allCategories).reduce((a, b) => {
          return allCategories[a] > allCategories[b] ? a : b
        })
      } else {
        return 'N/A'
      }
    }
    const venturistDetails = getUserDetails(totalVentures)
    return (
      <View>
        <View>
          <Text style={c.name}>{username}</Text>
          <Text style={c.level}>{`Lvl. ${venturistDetails.level}`}</Text>
        </View>
        <View style={c.userDetailContainer}>
          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>title:</Text>
            <Text style={c.userDetail}>{venturistDetails.title}</Text>
          </View>
          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>total ventures:</Text>
            <Text style={c.userDetail}>{totalVentures}</Text>
          </View>
          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>favorite category:</Text>
            <Text style={c.userDetail}>{favoriteCategory()}</Text>
          </View>
        </View>
      </View>
    )
  }
}

