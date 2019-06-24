import React, { Component } from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View, Text, TextInput, ActivityIndicator } from 'react-native'
import Card from '../../common/Card'
import { LinearGradient, Permissions } from 'expo'
import firebase, { auth } from '../../firebase'

import style from '../style'

export default class extends Component {
  state = { email: '', password: '', error: '', loading: false }
  async componentDidMount() {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (status === 'granted') {
      console.log('Notification permissions granted.')
    }
  }
  handleEmailChange = email => this.setState({email, error: ''})

  handlePasswordChange = password => this.setState({password, error: ''})

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
                <Text style={style.inputTitle}>Email</Text>
                <TextInput
                  style={style.textInput}
                  placeholder="Enter your email"
                  value={email}
                  autoCorrect={false}
                  onChangeText={this.handleEmailChange}
                />
              </View>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>Password</Text>
                <TextInput
                  style={style.textInput}
                  secureTextEntry
                  autoCorrect={false}
                  placeholder="Top secret word"
                  value={password}
                  onChangeText={this.handlePasswordChange}
                />
                <TouchableOpacity style={style.forgotPw} onPress={goToPasswordReset}>
                  <Text style={style.forgotPwTxt}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              {error ? <Text style={style.errorText}>{error}</Text> : null}
              <TouchableOpacity
                onPress={this.login}
                disabled={!email || !password}
              >
                <LinearGradient
                  colors={['#0065ff', '#21c0ff']}
                  style={!email || !password ? [style.loginBtn, style.disabled] : style.loginBtn}
                >
                  {loading
                    ? <ActivityIndicator size="small" color="white" />
                    : <Text style={style.loginTxt}>Log in</Text>
                  }
                </LinearGradient>
              </TouchableOpacity>
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
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}
