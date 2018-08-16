import ProfileImage from './ProfileImage'
import { commonStyles as c } from './style'

export default class User extends React.Component {

  render() {
    const { user } = this.props
    return (
      <View>
        <View style={c.imageContainer}>
          <ProfileImage image={user.image} />
        </View>
        <View>
          {this.renderDetails(user)}
          {this.renderPartners()}
        </View>
      </View>
    )
  }
  renderDetails = (user) => {
    const { username, level,
            totalVentures } = user
    return (
      <View>
        <View>
          <Text style={c.name}>{username}</Text>
          <Text style={c.level}>{`Level: ${level}`}</Text>
        </View>

        <View style={c.userDetailContainer}>
          <View style={c.userDetails}>
            <Text style={c.userDetailTitle}>total ventures:</Text>
            <Text style={c.userDetail}>{totalVentures}</Text>
          </View>
        </View>
      </View>
    )
  }

  renderPartners = () => {
    const partners = [
      'http://wallpaper-gallery.net/images/beautiful-girls-hd-wallpapers-free-download/beautiful-girls-hd-wallpapers-free-download-11.jpg',
      'http://www.beautifulhameshablog.com/wp-content/uploads/2017/09/Beautiful-girls-in-India-Taapsee-Pannu-beautiful-indian-girl-image-beautiful-girl-image-indian-girls-photos-indian-girls-images.jpg',
      'https://lh3.googleusercontent.com/hqPedkBv844AQwHO9Xgv7LQKjlHr3njiyi413NnckukQ5GDizy8tbvJ01svUaO-7sw=w300'
    ]
    return (
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
}

