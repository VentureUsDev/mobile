import Card from '../../common/Card'
import { signUp } from '../../../actions/account'
import firebase, { auth, db } from '../../firebase'

import style from '../style'

export default class extends Component {
  state = { email: '', password: '', error: '', username: '', loading: false }

  handleEmailChange = email => this.setState({email})

  handlePasswordChange = password => this.setState({password})

  handleUsernameChange = username => this.setState({username})

  signUp = () => {
    const { email, password, username } = this.state
    this.setState({loading: true, error: ''})
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        const { email, uid } = result.user
        db.collection('users').doc(uid).set({ uid, username, email, image: '', level: 1, totalVentures: 0 })
      })
      .catch(error => {
        this.setState({error: error.message, loading: false})
      })
  }

  render() {
    const { password, email, loading, error, username } = this.state
    const { goBack } = this.props.navigation

    return (
      <View style={style.container}>
        <Text style={style.title}>Give us your data, watch us grow rich.</Text>
        <Text style={style.subtitle}>Just kidding~</Text>
        <Card style={style.cardContainer}>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>EMAIL</Text>
            <TextInput
              style={style.textInput}
              autoCorrect={false}
              placeholder="Email"
              value={email}
              onChangeText={this.handleEmailChange}
            />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>USERNAME</Text>
            <TextInput
              style={style.textInput}
              autoCorrect={false}
              placeholder="Username"
              value={username}
              onChangeText={this.handleUsernameChange}
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
            onPress={this.signUp}
            disabled={!email || !password}
          >
            {loading
              ? <ActivityIndicator size="small" color="white" />
              : <Text style={style.loginTxt}>Sign Up</Text>
            }
          </TouchableOpacity>
        </Card>
        <View style={style.br} />
        <View style={style.noAccount}>
          <TouchableOpacity onPress={() => goBack()}>
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
