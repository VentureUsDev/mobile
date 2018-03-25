import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';

import { signUp } from '../../../actions/account';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { phone: '' };

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handlePhoneChange(e) { this.setState({ phone: e }); }

  signUp() {
    const { phone } = this.state;
    this.props.signUp(phone);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { phone } = this.state;

    const goToVerify = () => { navigate('Verify'); };

    return (
      <View>
        <Text>Enter your phone number</Text>
        <TextInput keyboardType="phone-pad" placeholder="Phone Number" value={phone} onChangeText={this.handlePhoneChange} />
        <TouchableOpacity onPress={this.signUp} disabled={!phone} >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {

  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUp,
  }, dispatch);
}

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

export default SignUpContainer;
