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
      <View style={[s.container, s.loading]}>
        {ventureVoteList
          ? <Swiper
              ref={swiper => this.swiper = swiper}
              disableTopSwipe
              disableBottomSwipe
              cards={ventureVoteList}
              renderCard={(card) => {
                return (
                  <Card style={{alignSelf: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'white'}}>
                    <CardSection image={true}>
                      <Image
                        style={s.image}
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
                  </Card>
                )
              }}
              onSwipedLeft={this.onSwipeLeft}
              onSwipedRight={this.onSwipeRight}
              onSwipedAll={() => this.getMoreVentures()}
              cardIndex={userIndex}
              backgroundColor={'gainsboro'}
            >
            </Swiper>
          : <ActivityIndicator size="large" />
        }
        {completedVenture &&
          <Modal
            animationType="slide"
            transparent={true}
            visible={!!completedVenture}
          >
            <View style={s.modalOverlay}>
              <Text style={{color: 'white', fontSize: 24, fontWeight: '600'}}>You've got a Venture!</Text>
              <Card style={{justifyContent: 'center', backgroundColor: 'white', width: '95%'}}>
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
                <CardSection>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Button
                      onPress={this.dismiss}
                      title="DISMISS"
                      color="black"
                    />
                    <Button
                      onPress={this.getDirections}
                      title="DIRECTIONS"
                      color="#007aff"
                    />
                  </View>
                </CardSection>
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
    Linking.openURL(`maps://app?daddr=${latitude}+${longitude}`)
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
//<CardSection>
//  <Button
//    onPress={() => this.swiper.swipeLeft()}
//    title="No"
//    color="tomato"
//  />
//  <Button
//    title="Yes"
//    onPress={() => this.swiper.swipeRight()}
//    color="limegreen"
//  />
//</CardSection>
