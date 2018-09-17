import Card from '../../common/Card'
import firebase, { auth } from '../../firebase'

import style from '../style'

export default class extends Component {
  state = { email: '', password: '', error: '', loading: false }

  handleEmailChange = email => this.setState({email})

  handlePasswordChange = password => this.setState({password})

  login = () => {
    const { email, password } = this.state
    this.setState({ error: '', loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then()
      .catch(error => {
        this.setState({error: error.message, loading: false})
      })
  }

  render() {
    const { email, password, error, loading } = this.state
    const { navigate } = this.props.navigation
    const goToSignUp = () => navigate('SignUp')
    const goToPasswordReset = () => navigate('PasswordReset')

    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={style.container}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Text style={style.title}>You miss 100% of the shots you don't take.</Text>
            <Text style={style.subtitle}>-Wayne Gretzsky, Michael Scott</Text>
            <Card style={style.cardContainer}>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>EMAIL</Text>
                <TextInput
                  style={style.textInput}
                  placeholder="Email"
                  value={email}
                  autoCorrect={false}
                  onChangeText={this.handleEmailChange}
                />
              </View>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={style.textInput}
                  secureTextEntry
                  autoCorrect={false}
                  placeholder="Top Secret Word"
                  value={password}
                  onChangeText={this.handlePasswordChange}
                />
              </View>
              <Text style={style.errorText}>{error}</Text>
              <TouchableOpacity
                style={!email || !password ? [style.loginBtn, style.disabled] : style.loginBtn}
                onPress={this.login}
                disabled={!email || !password}
              >
                {loading
                  ? <ActivityIndicator size="small" color="white" />
                  : <Text style={style.loginTxt}>Login</Text>
                }
              </TouchableOpacity>
              <TouchableOpacity style={style.forgotPw} onPress={goToPasswordReset}>
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}
