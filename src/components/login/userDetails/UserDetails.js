import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity, Switch } from 'react-native';

// import { verify } from '../../../actions/account';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      emailNotifications: true,
    };

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmChange = this.handleConfirmChange.bind(this);
    this.toggleEmailNotifications = this.toggleEmailNotifications.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // nav to finish signup
  }

  handleFirstChange(e) { this.setState({ first: e }); }
  handleLastChange(e) { this.setState({ last: e }); }
  handlePasswordChange(e) { this.setState({ password: e }); }
  handleConfirmChange(e) { this.setState({ confirm: e }); }
  toggleEmailNotifications(e) { this.setState({ emailNotifications: !this.state.emailNotifications }); }

  updateUser() {
    const { accessToken } = this.props;
    const {
      password,
      confirmPassword,
      firstName,
      lastName,
      emailNotifications,
    } = this.state;
    // this.props.signUp(code);
  }

  render() {
    const {
      password,
      confirmPassword,
      firstName,
      lastName,
      emailNotifications,
    } = this.state;

    const goToFinishSignUp = () => { navigate('UserDetails'); };

    return (
      <View>
        <Text>Enter User Details</Text>
        <TextInput placeholder="First Name" value={firstName} onChangeText={this.handleFirstChange} />
        <TextInput placeholder="Last Name" value={lastName} onChangeText={this.handleLastChange} />
        <TextInput placeholder="Password" value={password} onChangeText={this.handlePasswordChange} />
        <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={this.handleConfirmChange} />
        <Text>Email Notifications</Text>
        <Switch onValueChange={this.toggleEmailNotifications} value={emailNotifications} />
        <TouchableOpacity onPress={this.updateUser} disabled={!code} >
          <Text>Update User</Text>
        </TouchableOpacity>
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
