import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Venture from './Venture'
import ActionButton from 'react-native-action-button';

import { homeStyles as s } from './style';

export default class App extends Component {
  render() {
    return (
      <View style={s.container}>
        <ScrollView style={{paddingVertical: 20}}>
          <Card style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
            <CardSection>
              <View style={s.thumbnailContainer}>
                <Image
                  style={s.thumbnail}
                  source={{ uri: 'https://vignette.wikia.nocookie.net/overwatch/images/8/87/YZ4w2ey.png/revision/latest?cb=20160419233357' }}
                />
              </View>
              <View style={s.headerContent}>
                <Text style={s.headerText}>Restaurant</Text>
                <Text>La Baik</Text>
              </View>
            </CardSection>
            <CardSection image={true}>
              <Image
                style={s.image}
                source={{ uri: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121'}}
              />
            </CardSection>
            <CardSection buttons={true}>
              <Button
                onPress={() => (console.log("nay"))}
                title="DECLINE"
                color="gray"
              />
              <Button
                onPress={() => this.props.navigation.navigate('Venture')}
                title="ACCEPT"
                color="#007aff"
              />
            </CardSection>
          </Card>

          <Card style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
            <CardSection>
              <View style={s.thumbnailContainer}>
                <Image
                  style={s.thumbnail}
                  source={{ uri: 'https://vignette.wikia.nocookie.net/overwatch/images/8/87/YZ4w2ey.png/revision/latest?cb=20160419233357' }}
                />
              </View>
              <View style={s.headerContent}>
                <Text style={s.headerText}>Restaurant</Text>
                <Text>Nick Castaneda</Text>
              </View>
            </CardSection>
            <CardSection image={true}>
              <Image
                style={s.image}
                source={{ uri: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121'}}
              />
            </CardSection>
            <CardSection buttons={true}>
              <Button
                onPress={() => (console.log("nay"))}
                title="DECLINE"
                color="gray"
              />
              <Button
                onPress={() => console.log('yee')}
                title="ACCEPT"
                color="#007aff"
              />
            </CardSection>
          </Card>

          <Card style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
            <CardSection>
              <View style={s.thumbnailContainer}>
                <Image
                  style={s.thumbnail}
                  source={{ uri: 'https://vignette.wikia.nocookie.net/overwatch/images/8/87/YZ4w2ey.png/revision/latest?cb=20160419233357' }}
                />
              </View>
              <View style={s.headerContent}>
                <Text style={s.headerText}>Restaurant</Text>
                <Text>John Hwang</Text>
              </View>
            </CardSection>
            <CardSection image={true}>
              <Image
                style={s.image}
                source={{ uri: 'https://cdnb.artstation.com/p/assets/images/images/005/093/139/medium/carmen-carballo-wandakun-overwatchmovie-wandakun2.jpg?1488406121'}}
              />
            </CardSection>
            <CardSection buttons={true}>
              <Button
                onPress={() => (console.log("nay"))}
                title="DECLINE"
                color="gray"
              />
              <Button
                onPress={() => console.log('yee')}
                title="ACCEPT"
                color="#007aff"
              />
            </CardSection>
          </Card>
        </ScrollView>
        <ActionButton
          buttonColor="black"
          onPress={() => this.props.navigation.navigate('NewVenture')}
        />
      </View>
    );
  }
}
