import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import Card from '../../common/Card';

import { login } from '../../../actions/account';
import { clearLoginError } from '../../../actions/error';

import style from '../style';

// TODO change name to LOGIN
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
      <View style={style.container}>
        <Text style={style.title}>You miss 100% of the shots you don't take.</Text>
        <Text style={style.subtitle}>-Wayne Gretzsky, Michael Scott</Text>
        <Card style={style.cardContainer}>
          <TextInput
            style={style.textInput}
            keyboardType="phone-pad"
            placeholder="Your Digits"
            value={phone}
            onChangeText={this.handlePhoneChange}
          />
          <TextInput
            style={style.textInput}
            secureTextEntry
            autoCorrect={false}
            placeholder="Top Secret Word"
            value={password}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity
            style={style.loginBtn}
            onPress={this.login}
            disabled={!phone || !password}
          >
            <Text style={style.loginTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.forgotPw}>
            <Text style={style.forgotPwTxt}>Forgot Password?</Text>
          </TouchableOpacity>
        </Card>

        <View style={style.br} />
        <View style={style.noAccount}>
          <TouchableOpacity onPress={goToSignUp} >
            <View style={style.noAccountContainer}>
              <Text style={style.noAccountMsg}>Don't got no account?</Text>
              <View style={style.noAccountAction}>
                <Text style={style.noAccountActionTxt}>Sign up.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
