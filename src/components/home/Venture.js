import Swiper from 'react-native-deck-swiper';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import { homeStyles as s } from './style';

export default class Venture extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <Swiper
          cards={['Yummy', 'Yummy2', 'Yummy3', 'Yummy4', 'Yummy5', 'Yummy6', 'Yummy7']}
          renderCard={(card) => {
            return (
              <Card style={{justifyContent: 'center', backgroundColor: 'white'}}>
                <CardSection>
                  <View style={s.thumbnailContainer}>
                    <Image
                      style={s.thumbnail}
                      source={{ uri: 'https://vignette.wikia.nocookie.net/overwatch/images/8/87/YZ4w2ey.png/revision/latest?cb=20160419233357' }}
                    />
                  </View>
                  <View style={s.headerContent}>
                    <Text style={s.headerText}>{card}</Text>
                    <Text>John Hwang</Text>
                  </View>
                </CardSection>
                <CardSection image={true}>
                  <Image
                    style={s.image}
                    source={{ uri: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121'}}
                  />
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
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
          onSwipedAll={() => {console.log('onSwipedAll')}}
          cardIndex={0}
          backgroundColor={'gainsboro'}
        >
        </Swiper>
      </View>
    );
  }
};
