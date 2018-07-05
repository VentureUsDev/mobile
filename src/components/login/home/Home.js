import { connect } from 'react-redux'
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
    const { email, password } = this.state
    const { navigate } = this.props.navigation
    const goToSignUp = () => navigate('SignUp')
    return (
      <View style={style.container}>
        <Text style={style.title}>You miss 100% of the shots you don't take.</Text>
        <Text style={style.subtitle}>-Wayne Gretzsky, Michael Scott</Text>
        <Card style={style.cardContainer}>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>PHONE NUMBER</Text>
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
          <Text style={{paddingHorizontal: 20, color: 'red', fontSize: 14, alignSelf: 'center'}}>{this.state.error}</Text>
          <TouchableOpacity
            style={style.loginBtn}
            onPress={this.login}
            disabled={!email || !password}
          >
            {this.state.loading
              ? <ActivityIndicator size="small" color="white" />
              : <Text style={style.loginTxt}>Login</Text>
            }
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
    )
  }
}
