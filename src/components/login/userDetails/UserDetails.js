import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';

import { verify } from '../../../actions/account';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { code: '' };

    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // nav to finish signup
  }

  handleCodeChange(e) { this.setState({ code: e }); }

  signUp() {
    const { code } = this.state;
    this.props.signUp(code);
  }

  render() {
    const { phone, navigation: { navigate } } = this.props;
    const { code } = this.state;

    const goToFinishSignUp = () => { navigate('UserDetails'); };

    return (
      <View>
        <Text>Enter your phone number</Text>
        <TextInput placeholder="Code" value={code} onChangeText={this.handleCodeChange} />
        <TouchableOpacity onPress={this.verifyCode} disabled={!code} >
          <Text>UserDetails</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { phone } = state.account;

  return { phone };
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
