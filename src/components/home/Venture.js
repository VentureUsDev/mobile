import { connect } from 'react-redux'
import Swiper from 'react-native-deck-swiper'
import { Modal, Linking } from 'react-native'
import Card from '../common/Card'
import CardSection from '../common/CardSection'
import YelpSection from '../common/YelpSection'
import { homeStyles as s } from './style'
import { getMoreVentures, ventureSwipe, completedVentures, clearVenture } from '../../actions'

class Venture extends Component {
  componentDidMount() {
    this.props.completedVentures()
  }
  render() {
    const { ventureVoteList, userIndex, completedVenture, clearVenture } = this.props
    return (
      <View style={{flex: 1}}>
        {ventureVoteList
          ? <Swiper
              ref={swiper => this.swiper = swiper}
              disableTopSwipe
              disableBottomSwipe
              cards={ventureVoteList}
              renderCard={(card) => {
                return (
                  <Card style={s.card}>
                    <CardSection image={true}>
                      <Image
                        style={s.image}
                        resizeMode="cover"
                        source={{ uri: card.image_url }}
                      />
                    </CardSection>
                    <CardSection>
                      <YelpSection
                        name={card.name}
                        location={card.location}
                        rating={card.rating}
                        review_count={card.review_count}
                        url={card.url}
                      />
                    </CardSection>
                    <View style={s.btnContainer}>
                      <TouchableOpacity onPress={() => this.swiper.swipeLeft()} style={s.leftBtn}>
                        <Text style={s.leftBtnTxt}>NO</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.swiper.swipeRight()} style={s.rightBtn}>
                        <Text style={s.rightBtnTxt}>YES</Text>
                      </TouchableOpacity>
                    </View>
                  </Card>
                )
              }}
              onSwipedLeft={this.onSwipeLeft}
              onSwipedRight={this.onSwipeRight}
              onSwipedAll={() => this.getMoreVentures()}
              cardIndex={userIndex}
              showSecondCard
              stackSize={3}
              backgroundColor="gainsboro"
              cardVerticalMargin={0}
              cardStyle={s.cardStyles}
            >
          </Swiper>
          : <View style={s.loading}>
              <ActivityIndicator size="large" />
            </View>
        }
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
  getMoreVentures = () => {
    const { page, navigation: { state }, getMoreVentures, ventureVoteList } = this.props
    getMoreVentures(state.params.venture, ventureVoteList, page)
  }
  onSwipeRight = cardIndex => {
    const { ventureSwipe, ventureVoteList, navigation } = this.props
    const { state: { params: { venture } } } = navigation
    ventureSwipe(cardIndex, venture.uid, ventureVoteList[cardIndex])
  }
  onSwipeLeft = cardIndex => {
    const { ventureSwipe, navigation } = this.props
    const { state: { params: { venture } } } = navigation
    ventureSwipe(cardIndex, venture.uid)
  }
}

const mapStateToProps = state => {
  const { ventures } = state
  return {
    ventureVoteList: ventures.ventureVoteList,
    page: ventures.page,
    userIndex: ventures.userIndex,
    completedVenture: ventures.completedVenture
  }
}

export default connect(mapStateToProps, { getMoreVentures, ventureSwipe, completedVentures, clearVenture })(Venture)
