import React from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Input from '../common/Input';

export default class NewVenturist extends React.Component {
  state = {name: '', phone: ''};
  render() {
    const { name, phone } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="The Chosen One"
            label="Name"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="(702)-696-6969"
            label="Phone Number"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </CardSection>
        <CardSection>
          <Button
            title="Create"
            onPress={() => console.log('pressed')}
          />
        </CardSection>
      </Card>
    );
  }
};
