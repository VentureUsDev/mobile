import { connect } from 'react-redux'
import Swiper from 'react-native-deck-swiper'
import { Modal } from 'react-native'
import Card from '../common/Card'
import CardSection from '../common/CardSection'
import { homeStyles as s } from './style'
import { getMoreVentures, ventureSwipe, completedVentures, clearVenture } from '../../actions'

class Venture extends Component {
  componentDidMount() {
    this.props.completedVentures()
  }

  getMoreVentures = () => {
    const { page, navigation: { state }, getMoreVentures, ventureVoteList } = this.props
    getMoreVentures(state.params.venture, ventureVoteList, page)
  }
  render() {
    const { ventureVoteList, userIndex, completedVenture, clearVenture } = this.props
    return (
      <View style={[s.container, s.loading]}>
        {ventureVoteList
          ? <Swiper
              disableTopSwipe
              disableBottomSwipe
              cards={ventureVoteList}
              renderCard={(card) => {
                return (
                  <Card style={{justifyContent: 'center', backgroundColor: 'white'}}>
                    <CardSection image={true}>
                      <Image
                        style={s.image}
                        source={{ uri: card.image_url }}
                      />
                    </CardSection>
                    <CardSection>
                      <View style={s.headerContent}>
                        <Text style={s.headerText}>{card.name}</Text>
                        <Text>{card.rating} {card.review_count}</Text>
                        <Text>{card.location.display_address}</Text>
                      </View>
                    </CardSection>
                    <CardSection>
                      <Button
                        onPress={() => console.log('HI~')}
                        title="ACCEPT INVITATION"
                        color="#007aff"
                      />
                    </CardSection>
                  </Card>
                )
              }}
              onSwipedLeft={this.onSwipeLeft}
              onSwipedRight={this.onSwipeRight}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              cardIndex={userIndex + 1}
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
              <Card style={{justifyContent: 'center', backgroundColor: 'white'}}>
                <CardSection image={true}>
                  <Image
                    style={s.image}
                    source={{ uri: completedVenture.image_url }}
                  />
                </CardSection>
                <CardSection>
                  <View style={s.headerContent}>
                    <Text style={s.headerText}>{completedVenture.name}</Text>
                    <Text>{completedVenture.rating} {completedVenture.review_count}</Text>
                    <Text>{completedVenture.location.display_address}</Text>
                  </View>
                </CardSection>
                <CardSection>
                  <Button
                    onPress={clearVenture}
                    title="GET DIRECTIONS"
                    color="#007aff"
                  />
                </CardSection>
              </Card>
            </View>
          </Modal>
        }
      </View>
    )
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
