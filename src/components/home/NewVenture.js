import React from 'react';
import { ScrollView, Picker, View, Text, DatePickerIOS, Button } from 'react-native';
import Card from '../common/Card';

import { homeStyles as s } from './style';

export default class NewVenture extends React.Component {
  state = { category: 'activities', date: new Date() };

  setDate = (newDate) => this.setState({ date: newDate });

  render() {
    const { date, category } = this.state;
    return (
      <ScrollView style={s.newVentureContainer}>
        <Card>
          <View style={s.formContainer}>
            <Text style={s.formLabel}>Select Category:</Text>
            <View style={s.categoryPicker}>
              <Picker
                itemStyle={s.categoryItems}
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
                <Picker.Item label="Food" value="food" />
                <Picker.Item label="Bars" value="bars" />
                <Picker.Item label="Activities" value="activities" />
                <Picker.Item label="Nightlife" value="night_life" />
                <Picker.Item label="Dating" value="dating" />
              </Picker>
            </View>
            <View>
              <Text style={s.formLabel}>Select Time:</Text>
              <View style={s.datePicker}>
                <DatePickerIOS
                  date={date}
                  onDateChange={this.setDate}
                />
              </View>
            </View>
            <View>
              <Button
                title="Add Posse"
                onPress={() => this.props.navigation.navigate('SelectVenturists')}
              />
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
};
