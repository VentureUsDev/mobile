import { connect } from 'react-redux'
import Swiper from 'react-native-deck-swiper'
import { Modal, Linking } from 'react-native'
import Card from '../common/Card'
import CardSection from '../common/CardSection'
import YelpSection from '../common/YelpSection'
import { homeStyles as s } from './style'
import { getMoreVentures, ventureSwipe, completedVentures, clearVenture } from '../../actions'
import { LinearGradient } from 'expo'

class Venture extends Component {
  componentDidMount() {
    this.props.completedVentures()
  }
  render() {
    const { ventureVoteList, userIndex, completedVenture, clearVenture, navigation } = this.props
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
                    <View style={s.yelpSection}>
                      <YelpSection
                        name={card.name}
                        location={card.location}
                        rating={card.rating}
                        review_count={card.review_count}
                        url={card.url}
                      />
                    </View>
                    <View style={s.btnContainer}>
                      <TouchableOpacity onPress={() => this.swiper.swipeLeft()}>
                        <View style={s.noBtn}>
                          <Text style={s.noBtnTxt}>NO</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.swiper.swipeRight()}>
                        <LinearGradient
                          colors={['#0065ff', '#21c0ff']}
                          style={s.yesBtn}
                        >
                          <Text style={s.yesBtnTxt}>YES</Text>
                        </LinearGradient>
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
        {completedVenture && navigation.goBack()}
      </View>
    )
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
