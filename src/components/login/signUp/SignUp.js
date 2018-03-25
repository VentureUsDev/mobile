import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';

import { signUp } from '../../../actions/account';
import { clearSignUpError } from '../../../actions/error';


class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { phone: '' };

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { phone, navigation: { navigate } } = this.props;
    const { signUpError } = this.props;

    if (!phone && nextProps.phone) {
      navigate('Verify');
    }
    if (nextProps.signUpError && !signUpError) {
      // Alert.alert('adsfasdf'); // TODO change this stuff
    }
  }

  handlePhoneChange(e) { this.setState({ phone: e }); }

  signUp() {
    const { phone } = this.state;
    this.props.signUp(`+${phone}`);
  }

  render() {
    const { phone } = this.state;

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
  const {
    account: { phone },
    error: { signUpError },
  } = state;

  return { phone, signUpError };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUp,
    clearSignUpError,
  }, dispatch);
}

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

export default SignUpContainer;
