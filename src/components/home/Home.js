import React from 'react';
import { Text, View, Image } from 'react-native';
import { Subheader, Card } from 'react-native-material-ui';
import Header from '../common/Header';

import { homeStyles as s } from './style';

export default class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <Header title="Venture Invites" />
        <View>
          <Card>
            <Image
              style={{width: 200, height: 200}}
              source={{uri: "https://3q8aqw1n2x7v12z4672101ry-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/Checkers-Restaurant1-400x400.jpg"}}
            />
            <Text>Some great restaurant</Text>

          </Card>
        </View>
      </View>
    );
  }
}
