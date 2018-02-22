import React from 'react';
import { Picker, View, Text, DatePickerIOS, Button } from 'react-native';

import { homeStyles as s } from './style';

export default class NewVenture extends React.Component {
  state = { category: 'food', date: new Date() };

  setDate = (newDate) => this.setState({ date: newDate });

  render() {
    const { date, category } = this.state;
    return (
      <View style={s.newVentureContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
          <Picker.Item label="Food" value="food" />
          <Picker.Item label="Bars" value="bars" />
          <Picker.Item label="Activities" value="activities" />
          <Picker.Item label="Nightlife" value="night_life" />
        </Picker>
        <View>
          <DatePickerIOS
            date={date}
            onDateChange={this.setDate}
          />
        </View>
        <Button
          title="Add Posse"
          onPress={() => this.props.navigation.navigate('SelectVenturists')}
        />
      </View>
    );
  }
};
