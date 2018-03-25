import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';

import { login } from '../../../actions/account';
import { clearLoginError } from '../../../actions/error';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
    }

    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { loginError } = this.props;

    if (nextProps.loginError && !loginError) {
      // Alert.alert('adsfasdf'); TODO change this stuff
    }
  }

  handlePhoneChange(e) { this.setState({ phone: e }); }
  handlePasswordChange(e) { this.setState({ password: e }); }

  login() {
    const { phone, password } = this.state;
    this.props.login(phone, password);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { phone, password } = this.state;

    const goToSignUp = () => { navigate('SignUp'); };

    return (
      <View>
        <Text>Welcome</Text>
        <TextInput keyboardType="phone-pad" placeholder="Phone Number" value={phone} onChangeText={this.handlePhoneChange} />
        <TextInput secureTextEntry autoCorrect={false} placeholder="password" value={password} onChangeText={this.handlePasswordChange} />
        <TouchableOpacity onPress={this.login} disabled={!phone || !password} >
          <Text>Login</Text>
        </TouchableOpacity>

        <View style={{ height: 50 }} />

        <TouchableOpacity onPress={goToSignUp} >
          <Text>SignUp</Text>
        </TouchableOpacity>
        {/* TODO nav to verify */}
        <TouchableOpacity>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { loginError } = state.error;

  return { loginError };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
    clearLoginError,
  }, dispatch);
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
