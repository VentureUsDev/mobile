import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../common/Card';

import { signUp } from '../../../actions/account';
import { clearSignUpError } from '../../../actions/error';

import style from '../style';

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
    const { navigate } = this.props.navigation;

    const goToLogin = () => { navigate('LoginHome'); };

    return (
      <View style={style.container}>
        <Text style={style.title}>Give us your data, watch us grow rich.</Text>
        <Text style={style.subtitle}>Just kidding~</Text>
        <Card style={[style.cardContainer, style.space]}>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>PHONE NUMBER</Text>
            <TextInput style={style.textInput} keyboardType="phone-pad" placeholder="Your Digits" value={phone} onChangeText={this.handlePhoneChange} />
          </View>
          <TouchableOpacity style={style.loginBtn} onPress={this.signUp} disabled={!phone} >
            <Text style={style.loginTxt}>Sign Up</Text>
          </TouchableOpacity>
        </Card>
        <View style={style.br} />
        <View style={style.noAccount}>
          <TouchableOpacity onPress={goToLogin} >
            <View style={style.noAccountContainer}>
              <Text style={style.noAccountMsg}>Lied to us?</Text>
              <View style={style.noAccountAction}>
                <Text style={style.noAccountActionTxt}>Log in.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
