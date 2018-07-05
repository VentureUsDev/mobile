import Card from '../../common/Card'
import { signUp } from '../../../actions/account'
import firebase, { auth } from '../../firebase'

import style from '../style'

export default class extends Component {
  state = { email: '', password: '', error: '', loading: false }

  handleEmailChange = email => this.setState({email})

  handlePasswordChange = password => this.setState({password})

  signUp = () => {
    const { email, password } = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log('result', result)
      })
      .catch(error => {
        this.setState({error: error.message, loading: false})
      })
  }

  render() {
    const { password, email, loading, error } = this.state
    const { goBack } = this.props.navigation

    return (
      <View style={style.container}>
        <Text style={style.title}>Give us your data, watch us grow rich.</Text>
        <Text style={style.subtitle}>Just kidding~</Text>
        <Card style={[style.cardContainer, style.space]}>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>PHONE NUMBER</Text>
            <TextInput
              style={style.textInput}
              autoCorrect={false}
              placeholder="Email"
              value={email}
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
            onPress={this.signUp}
            disabled={!email || !password}
          >
            {this.state.loading
              ? <ActivityIndicator size="small" color="white" />
              : <Text style={style.loginTxt}>Sign Up</Text>
            }
          </TouchableOpacity>
        </Card>
        <View style={style.br} />
        <View style={style.noAccount}>
          <TouchableOpacity onPress={() => goBack()} >
            <View style={style.noAccountContainer}>
              <Text style={style.noAccountMsg}>Lied to us?</Text>
              <View style={style.noAccountAction}>
                <Text style={style.noAccountActionTxt}>Log in.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
