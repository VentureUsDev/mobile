import Card from '../../common/Card'
import firebase, { auth } from '../../firebase'
import { LinearGradient } from 'expo'

import style from '../style'

export default class extends Component {
  state = { email: '', error: '', loading: false }

  handleEmailChange = email => this.setState({email})

  resetPassword = () => {
    const { email } = this.state
    this.setState({error: ''})
    auth.sendPasswordResetEmail(email)
      .then(
        Alert.alert(
          'Password Reset',
          `Your password reset has been sent to ${email}! Please check your email to reset your password.`,
          [{text: 'Okay', onPress: () => this.props.navigation.goBack()}],
          { cancelable: false }
        )
      )
      .catch(error => {
        this.setState({error: error.message, loading: false})
      })
  }

  render() {
    const { email, error, loading } = this.state
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={style.container}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Card style={style.cardContainer}>
            <View style={{alignSelf: 'center', padding: 20}}>
              <Image style={{height: 130, width: 150}} source={require('../../../assets/Login.png')}/>
            </View>
            <View style={style.inputContainer}>
              <Text style={style.inputTitle}>Email</Text>
              <TextInput
                style={style.textInput}
                placeholder="1, 2, 3, 4"
                value={email}
                autoCorrect={false}
                onChangeText={this.handleEmailChange}
              />
            </View>
            {error && <Text style={style.errorText}>{error}</Text>}
            <TouchableOpacity
              onPress={this.resetPassword}
              disabled={!email}
            >
              <LinearGradient
                colors={['#0065ff', '#21c0ff']}
                style={!email ? [style.loginBtn, style.disabled] : style.loginBtn}
              >
                {loading
                  ? <ActivityIndicator size="small" color="white" />
                  : <Text style={style.loginTxt}>Reset Password</Text>
                }
              </LinearGradient>
            </TouchableOpacity>
          </Card>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}
