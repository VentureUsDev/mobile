import Card from '../../common/Card'
import firebase, { auth } from '../../firebase'

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
      <View style={style.container}>
        <Text style={style.title}>What's your password, Michael?</Text>
        <Text style={style.subtitle}>Oh, umm...</Text>
        <Card style={style.cardContainer}>
          <View style={style.inputContainer}>
            <Text style={style.inputTitle}>EMAIL</Text>
            <TextInput
              style={style.textInput}
              placeholder="1, 2, 3, 4"
              value={email}
              autoCorrect={false}
              onChangeText={this.handleEmailChange}
            />
          </View>
          <Text style={style.errorText}>{error}</Text>
          <TouchableOpacity
            style={!email ? [style.loginBtn, style.disabled] : style.loginBtn}
            onPress={this.resetPassword}
            disabled={!email}
          >
            {loading
              ? <ActivityIndicator size="small" color="white" />
              : <Text style={style.loginTxt}>Reset Password</Text>
            }
          </TouchableOpacity>
        </Card>
      </View>
    )
  }
}
