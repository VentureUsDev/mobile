import React from 'react';
import { Text, View, ScrollView, Image, Button } from 'react-native';
import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Venture from './Venture'
import { ActionButton } from 'react-native-material-ui';

import { homeStyles as s } from './style';

export default class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <Header title="Venture Invites" />
        <ScrollView>
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
          style={{container: {backgroundColor: 'black'}}}
          onPress={() => console.log('pressed')}
        />
      </View>
    );
  }
}
