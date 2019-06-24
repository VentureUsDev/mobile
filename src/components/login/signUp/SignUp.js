import React, { Component } from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View, Text, TextInput, ActivityIndicator } from 'react-native'
import Card from '../../common/Card'
import { signUp } from '../../../actions/account'
import firebase, { auth, db } from '../../firebase'
import { LinearGradient } from 'expo'

import style from '../style'

export default class extends Component {
  state = { email: '', password: '', error: '', username: '', loading: false }

  handleEmailChange = email => this.setState({email})

  handlePasswordChange = password => this.setState({password})

  handleUsernameChange = username => this.setState({username})

  // move this to action/reducer
  signUp = () => {
    const { email, password, username } = this.state
    this.setState({loading: true, error: ''})
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        const { email, uid } = result.user
        db.collection('users').doc(uid).set({ uid, username, email, image: '', level: 1, totalVentures: 0, categories: [] })
          .then(() => {
            db.collection('users').doc(uid).collection('ventures').doc('pending').set({ pending: [] });
            db.collection('users').doc(uid).collection('ventures').doc('completed').set({ completed: [] });
          })
          .catch(error => console.log('error', error))

      })
      .catch(error => {
        this.setState({error: error.message, loading: false})
      })
  }

  render() {
    const { password, email, loading, error, username } = this.state

    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={style.container}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Card style={style.cardContainer}>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>Email</Text>
                <TextInput
                  style={style.textInput}
                  autoCorrect={false}
                  placeholder="Email"
                  value={email}
                  onChangeText={this.handleEmailChange}
                />
              </View>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>Username</Text>
                <TextInput
                  style={style.textInput}
                  autoCorrect={false}
                  placeholder="Username"
                  value={username}
                  onChangeText={this.handleUsernameChange}
                />
              </View>
              <View style={style.inputContainer}>
                <Text style={style.inputTitle}>Password</Text>
                <TextInput
                  style={style.textInput}
                  secureTextEntry
                  autoCorrect={false}
                  placeholder="Top Secret Word"
                  value={password}
                  onChangeText={this.handlePasswordChange}
                />
              </View>
              {error ? <Text style={style.errorText}>{error}</Text> : null}
              <TouchableOpacity
                onPress={this.signUp}
                disabled={!email || !password}
              >
                <LinearGradient
                  colors={['#0065ff', '#21c0ff']}
                  style={!email || !password ? [style.loginBtn, style.disabled] : style.loginBtn}
                >
                  {loading
                    ? <ActivityIndicator size="small" color="white" />
                    : <Text style={style.loginTxt}>Sign Up</Text>
                  }
                </LinearGradient>
              </TouchableOpacity>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}
