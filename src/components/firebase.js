import firebase from 'firebase'
import 'firebase/firestore'

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

const firestore = firebase.firestore()

const settings = { timestampsInSnapshots: true }

firestore.settings(settings)

export const db = firebase.firestore()

export default firebase
