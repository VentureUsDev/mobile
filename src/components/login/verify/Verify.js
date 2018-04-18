import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import Card from '../../common/Card';

import { verifyCode } from '../../../actions/account';
import { clearVerficationError } from '../../../actions/account';

import style from '../style';

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
      <View style={[style.container, style.padBot]}>
        <Text style={style.title}>Tell me you're real. I need to know.</Text>
        <Text style={style.subtitle}>I NEED TO KNOW</Text>
        <Card style={[style.cardContainer, style.space]}>
          <TextInput
            style={style.textInput}
            placeholder="Enter Code"
            value={code}
            onChangeText={this.handleCodeChange}
          />
          <TouchableOpacity
            style={style.loginBtn}
            onPress={this.verifyCode}
            disabled={!code}
          >
            <Text style={style.loginTxt}>Insert Retinas</Text>
          </TouchableOpacity>
        </Card>
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
