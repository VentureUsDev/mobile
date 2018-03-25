import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';

import { verifyCode } from '../../../actions/account';
import { clearVerficationError } from '../../../actions/account';

class Verify extends React.Component {
  constructor(props) {
    super(props);

    this.state = { code: '' };

    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { accessToken, navigation: { navigate } } = this.props;
    const { verifyError } = this.props;

    if (!accessToken && nextProps.accessToken) {
      navigate('UserDetails');
    }
    if (nextProps.verifyError && !verifyError) {
      // Alert.alert('adsfasdf'); // TODO change this stuff
    }
  }

  handleCodeChange(e) { this.setState({ code: e }); }

  verifyCode() {
    const { phone } = this.props;
    const { code } = this.state;
    this.props.verifyCode(phone, code);
  }

  render() {
    const { phone } = this.props;
    const { code } = this.state;

    return (
      <View>
        <Text>{`Enter your verification code for ${phone}`}</Text>
        <TextInput placeholder="Code" value={code} onChangeText={this.handleCodeChange} />
        <TouchableOpacity onPress={this.verifyCode} disabled={!code} >
          <Text>Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {
    error: { verifyError },
    account: { accessToken, phone },
  } = state;

  return { phone };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    verifyCode,
    clearVerficationError,
  }, dispatch);
}

const VerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verify);

export default VerifyContainer;
