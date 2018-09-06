import axios from 'axios'
import firebase, { db } from '../components/firebase'
import {
  SET_CATEGORY,
  SET_LOCATION,
  SET_VENTURIST,
  CREATE_VENTURE_SUCCESS,
  GET_PENDING_VENTURES,
  NO_PENDING_VENTURES,
  GET_VENTURE_SUCCESS,
  DELETE_VENTURE_SUCCESS,
  GET_VENTURE_VOTE_LIST
} from './util'
import { generateUUID } from '../helpers/venture'

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

export const deleteVenture = venture => {
  return (dispatch) => {
    const { users, uid } = venture
    users.map(user => {
      return db.collection('users').doc(user.uid).collection('ventures').doc('pending').set({
        pending: firebase.firestore.FieldValue.arrayRemove(uid)
      }, { merge: true })
        .then(db.collection('ventures').doc(uid).delete())
        .catch(error => console.log('error', error))
    })
  }
}

export const acceptVenture = venture => {
  const { location: { latitude, longitude, text}, category, uid } = venture
  let config = {

    params: {
      term: category,
      [latitude ? 'latitude' : 'location']: latitude ? latitude : text,
      [longitude ? 'longitude' : 'gone']: longitude && longitude,
      radius: 24000,
      open_now: true,
    }
  }
  config.params = _.omit(config.params, 'gone')
  return (dispatch) => {
    db.collection('ventures').doc(uid).collection('allVentures').doc('ventureList').get()
      .then(ventureData => {
        if (ventureData.exists) {
          const ventures = ventureData.data()
          getVentureVoteList(dispatch, ventures.ventureList)
        } else {
          axios.get('https://api.yelp.com/v3/businesses/search', config)
            .then(response => {
              db.collection('ventures').doc(uid).collection('allVentures').doc('ventureList').set({
                ventureList: response.data.businesses
              }, { merge: true })
                .then(getVentureVoteList(dispatch, response.data.businesses))
                .catch(error => console.log('error', error))
            })
            .catch(error => console.log('error', error))
        }
      })
      .catch(error => console.log('error', error))
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
      uid: ventureId,
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

const getVentureVoteList = (dispatch, ventures) => {
  dispatch({
    type: GET_VENTURE_VOTE_LIST,
    payload: ventures
  })
}

// const getVentureSuccess = (dispatch, ventures) => {
//   dispatch({
//     type: GET_VENTURE_SUCCESS,
//     payload: ventures
//   })
// }
