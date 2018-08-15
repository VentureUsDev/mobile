import ProfileImage from './ProfileImage'

import { commonStyles as c } from './style'

export default class User extends React.Component {
  render() {
    const { user: {image, partners}, user } = this.props
    return (
      <ScrollView>
        <View style={c.imageContainer}>
          <ProfileImage />
        </View>
        <View>
          {this.renderDetails(user)}
          {this.renderPartners(partners)}
        </View>
      </ScrollView>
    )
  }
  renderDetails = (user) => {
    const { name, level,
            totalVentures, favoriteCategory } = user
    return (
      <View>
        <View>
          <Text style={c.name}>{name}</Text>
          <Text style={c.level}>{level}</Text>
        </View>

        <View style={c.userDetailContainer}>
          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>total ventures:</Text>
            <Text style={c.userDetail}>{totalVentures}</Text>
          </View>
          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>favorite activity:</Text>
            <Text style={c.userDetail}>{favoriteCategory}</Text>
          </View>
        </View>
      </View>
    )
  }

  renderPartners = (partners) => (
    <View>
      <View style={c.partnersTitle}>
        <Text style={c.userDetailTitle}>partners in crime:</Text>
      </View>
      <View style={c.partnersImageContainer}>
        {partners.map((partner, index) => (
          <Image
            key={index}
            style={c.partnersImage}
            source={{uri: partner}}
          />
        ))}
      </View>
    </View>
  )
}
