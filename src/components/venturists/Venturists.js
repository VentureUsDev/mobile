import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { ListItem, Avatar, Subheader } from 'react-native-material-ui';
import Header from '../common/Header'

import { venturistStyles as v } from './style';

export default class Venturists extends React.Component {
  render() {
    return (
      <View>
        <Header title="Venturists" />
        <ScrollView>
          <View>
            <Subheader text="Posse" />
              <ListItem
                leftElement={ <Avatar text="JB" /> }
                centerElement={{primaryText: 'The JuiceBiters', secondaryText: 'Joe, Rick, Bobby'}}
                rightElement={
                  <View style={v.level}>
                    <Text>Lv. 1</Text>
                    <Text style={{color: 'gray', fontSize: 11}}>total ventures: 14</Text>
                  </View>
                }
                divider
                onPress={() => {}}
              />
              <ListItem
                leftElement={ <Avatar text="JB" /> }
                centerElement={{primaryText: 'The JuiceBiters', secondaryText: 'Joe, Rick, Bobby'}}
                rightElement={
                  <View style={v.level}>
                    <Text>Lv. 5</Text>
                    <Text style={{color: 'gray', fontSize: 11}}>total ventures: 14</Text>
                  </View>
                }
                divider
                onPress={() => {}}
              />
              <ListItem
                leftElement={ <Avatar text="JB" /> }
                centerElement={{primaryText: 'The JuiceBiters', secondaryText: 'Joe, Rick, Bobby'}}
                rightElement={
                  <View style={v.level}>
                    <Text>Lv. 10</Text>
                    <Text style={{color: 'gray', fontSize: 11}}>total ventures: 14</Text>
                  </View>}
                divider
                onPress={() => {}}
              />
              <ListItem
                leftElement={ <Avatar text="JB" /> }
                centerElement={{primaryText: 'The JuiceBiters', secondaryText: 'Joe, Rick, Bobby'}}
                rightElement={
                  <View style={v.level}>
                    <Text>Lv. 12</Text>
                    <Text style={{color: 'gray', fontSize: 11}}>ventures: 14</Text>
                  </View>
                }
                divider
                onPress={() => {}}
              />
          </View>
          <View>
            <Subheader text="Ones" />
              <ListItem
                leftElement={ <Avatar text="JS" /> }
                centerElement={{primaryText: 'Joe Schmoe', secondaryText: 'Hooah'}}
                divider
                onPress={() => {}}
              />
              <ListItem
                leftElement={ <Avatar text="JS" /> }
                centerElement={{primaryText: 'Joe Schmoe', secondaryText: 'Hooah'}}
                divider
                onPress={() => {}}
              />
              <ListItem
                leftElement={ <Avatar text="JS" /> }
                centerElement={{primaryText: 'Joe Schmoe', secondaryText: 'Hooah'}}
                divider
                onPress={() => {}}
              />
              <ListItem
                leftElement={ <Avatar text="JS" /> }
                centerElement={{primaryText: 'Joe Schmoe', secondaryText: 'Hooah'}}
                divider
                onPress={() => {}}
              />
          </View>
        </ScrollView>
      </View>
    );
  }
}
