import firebase, { db } from '../components/firebase'
import {
  SET_CATEGORY,
  SET_LOCATION,
  SET_VENTURIST,
  CREATE_VENTURE_SUCCESS,
  GET_PENDING_VENTURES,
  NO_PENDING_VENTURES,
  GET_VENTURE_SUCCESS
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

export const getPendingVentures = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    let promises = []
    db.collection('users').doc(currentUser.uid).collection('ventures').doc('pending')
      .onSnapshot(snapshot => {
        if (snapshot.size === 0) {
          return dispatch({ type: NO_PENDING_VENTURES })
        }
        const pendingVentures = []
        const { pending } = snapshot.data()
        pending.map(ventureId => {
          promises.push(db.collection('ventures').doc(ventureId).get())
        })
        Promise.all(promises)
          .then(ventures => {
            ventures.forEach(venture => {
              pendingVentures.push(venture.data())
            })
            promises = []
            return getPendingVenturesSuccess(dispatch, pendingVentures)
          })
          .catch(error => console.log('error', error))
    })
  }
}

export const createVenture = data => {
  const { user, location, category, currentUser } = data
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
      users: [user, currentUser],
      location:
        typeof(location) === 'object'
          ? {...location}
          : {text: location}
    })
    .then(() => dispatch({ type: CREATE_VENTURE_SUCCESS }))
    .catch(error => console.log('error', error))
  }
}

const getPendingVenturesSuccess = (dispatch, ventures) => {
  dispatch({
    type: GET_PENDING_VENTURES,
    payload: ventures
  })
}

// const getVentureSuccess = (dispatch, ventures) => {
//   dispatch({
//     type: GET_VENTURE_SUCCESS,
//     payload: ventures
//   })
// }

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


