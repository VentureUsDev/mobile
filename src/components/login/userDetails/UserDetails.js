import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity, Switch } from 'react-native';
import Card from '../../common/Card';

import { verify } from '../../../actions/account';

import style from '../style';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    };

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmChange = this.handleConfirmChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // nav to finish signup
  }

  handleFirstChange(e) { this.setState({ first: e }); }
  handleLastChange(e) { this.setState({ last: e }); }
  handlePasswordChange(e) { this.setState({ password: e }); }
  handleConfirmChange(e) { this.setState({ confirm: e }); }

  updateUser() {
    const { accessToken } = this.props;
    const {
      password,
      confirmPassword,
      firstName,
      lastName,
    } = this.state;
    // this.props.signUp(code);
  }

  render() {
    const {
      password,
      confirmPassword,
      firstName,
      lastName,
    } = this.state;

    const goToFinishSignUp = () => { navigate('UserDetails'); };

    return (
      <View style={style.container}>
        <Text style={style.title}>Enter your life details.</Text>
        <Text style={style.subtitle}>Last step. We promise.</Text>
        <Card style={style.cardContainer}>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>FIRST NAME</Text>
            <TextInput style={style.textInput} placeholder="First Name" value={firstName} onChangeText={this.handleFirstChange} />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>LAST NAME</Text>
            <TextInput style={style.textInput} placeholder="Last Name" value={lastName} onChangeText={this.handleLastChange} />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>PASSWORD</Text>
            <TextInput style={style.textInput} placeholder="Password" value={password} onChangeText={this.handlePasswordChange} />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>CONFIRM PASSWORD</Text>
            <TextInput style={style.textInput} placeholder="Confirm Password" value={confirmPassword} onChangeText={this.handleConfirmChange} />
          </View>

          <TouchableOpacity
            style={style.loginBtn}
            onPress={() => console.log('hello')}
          >
            <Text style={style.loginTxt}>Fork Over Data</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={style.loginBtn}> onPress={this.updateUser} disabled={!code} >
            <Text style={style.loginTxt}>Update User</Text>
          </TouchableOpacity>*/}
        </Card>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { accessToken } = state.account;

  return { accessToken };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    verify,
  }, dispatch);
}

const UserDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetails);

export default UserDetailsContainer;
