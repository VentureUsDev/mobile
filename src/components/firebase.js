import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBbar1n0iYFieV4yWTWicvbnA85P-fonds",
    authDomain: "ventureus-1.firebaseapp.com",
    databaseURL: "https://ventureus-1.firebaseio.com",
    projectId: "ventureus-1",
    storageBucket: "ventureus-1.appspot.com",
    messagingSenderId: "381184468359"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()

export default firebase
