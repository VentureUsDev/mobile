import { Modal } from 'react-native'
import { completedVentures, clearVenture, acceptVenture, noteWatch } from '../actions'
import Card from '../components/common/Card'
import CardSection from '../components/common/CardSection'
import YelpSection from '../components/common/YelpSection'
import { Routes } from './routes'
import { connect } from 'react-redux'
import Notification from 'react-native-in-app-notification'
import Note from './note'
import { homeStyles as s } from '../components/home/style'

class Router extends Component {
  static router = Routes.router
  componentDidMount() {
    this.props.completedVentures()
    this.props.noteWatch()
  }

  popVentureNote = venture => {
    const { navigation, acceptVenture, clearNote } = this.props
    // populate with category icon
    this.notification.show({
      title: 'New Invite',
      message: 'Tap here to start voting!',
      onPress: () => {
        acceptVenture(venture)
        navigation.navigate('Venture', { venture })
      }
    })
  }

  render() {
    const { navigation, completedVenture, ventureNote } = this.props
    ventureNote && this.popVentureNote(ventureNote)
    return (
      <View style={{flex: 1}}>
        <Routes navigation={navigation} />
        <Notification
          ref={ref => this.notification = ref}
          height={100}
          notificationBodyComponent={Note}
        />
        {completedVenture &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={!!completedVenture}
          >
            <View style={s.modalOverlay}>
              <Text style={s.congratTxt}>You've got a Venture!</Text>
              <Card style={s.successCard}>
                <CardSection image={true}>
                  <Image
                    style={s.image}
                    source={{ uri: completedVenture.image_url }}
                  />
                </CardSection>
                <CardSection>
                  <YelpSection
                    name={completedVenture.name}
                    location={completedVenture.location}
                    rating={completedVenture.rating}
                    review_count={completedVenture.review_count}
                    url={completedVenture.url}
                  />
                </CardSection>
                <View style={s.btnContainer}>
                  <TouchableOpacity onPress={this.dismiss} style={s.leftBtn}>
                    <Text style={s.leftBtnTxt}>DISMISS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.getDirections} style={s.rightBtn}>
                    <Text style={s.rightBtnTxt}>DIRECTIONS</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          </Modal>
        }
      </View>
    )
  }
  getDirections = () => {
    const {
      clearVenture,
      navigation,
      completedVenture: {
        coordinates: {
          latitude,
          longitude
        }
      }
    } = this.props
    clearVenture()
    Linking.canOpenURL(`google.navigation:q=${latitude}+${longitude}`)
    .then((canOpen) => {
      if (canOpen) {
        Linking.openURL(`google.navigation:q=${latitude}+${longitude}`)
      } else {
        Linking.openURL(`maps://app?daddr=${latitude}+${longitude}`)
      }
    })
    navigation.goBack()
  }
  dismiss = () => {
    const { clearVenture, navigation } = this.props
    clearVenture()
    navigation.goBack()
  }
}
const mapStateToProps = state => {
  const { ventures } = state
  return {
    completedVenture: ventures.completedVenture,
    ventureNote: ventures.ventureNote
  }
}
export default connect(mapStateToProps, { clearVenture, completedVentures, acceptVenture, noteWatch })(Router)
