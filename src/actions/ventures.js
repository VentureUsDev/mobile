import firebase, { db } from '../components/firebase'
import {
  SET_CATEGORY,
  SET_LOCATION,
  SET_VENTURIST,
  CREATE_VENTURE_SUCCESS
} from './util'

export const setCategory = category => {
  return {
    type: SET_CATEGORY,
    payload: category
  }
}

export const setLocation = location => {
  return {
    type: SET_LOCATION,
    payload: location
  }
}

export const setVenturist = user => {
  return {
    type: SET_VENTURIST,
    payload: user
  }
}

export const createVenture = data => {
  const { user, location, category } = data
  const { currentUser } = firebase.auth()
  const ventureId = generateUUID()
  return (dispatch) => {
  db.collection('users').doc(currentUser.uid).collection('ventures').doc('pending').set({
    pending: firebase.firestore.FieldValue.arrayUnion(ventureId)
  }, { merge: true })
  db.collection('users').doc(user.uid).collection('ventures').doc('pending').set({
    pending: firebase.firestore.FieldValue.arrayUnion(ventureId)
  }, { merge: true })
  db.collection('ventures').doc(ventureId).set({
    category,
    date: new Date(),
    users: [user.uid, currentUser.uid],
    location:
      typeof(location) === 'object'
        ? {...location}
        : {text: location}
  })
    .then()
    .catch(error => console.log('error', error))
  }
}

// copypasta for now, but never follow the world blindly.
const generateUUID = () => {
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

