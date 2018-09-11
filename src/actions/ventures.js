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
  GET_VENTURE_VOTE_LIST,
  VENTURE_MATCH,
  GET_MORE_VENTURES,
  CLEAR_VENTURE
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

export const clearVenture = () => {
  return {
    type: CLEAR_VENTURE
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
        .then(
          db.collection('ventures').doc(uid).collection('allVentures').doc('ventureList').delete()
            .then(
              db.collection('ventures').doc(uid).delete()
            )
        )
        .catch(error => console.log('error', error))
    })
  }
}

export const completedVentures = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    db.collection('users').doc(currentUser.uid).collection('completedVentures')
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(venture => {
        const { users } = venture.doc.data()
        const ventureId = venture.doc.id
        if (venture.type === "added") {
          completedVenture(dispatch, venture.doc.data())
          db.collection('ventures').doc(ventureId).collection('allVentures').doc('ventureList').delete()
          .then(db.collection('ventures').doc(ventureId).delete())
          return users.map(userId => {
            db.collection('users').doc(userId).collection('ventures').doc('pending').set({
              pending: firebase.firestore.FieldValue.arrayRemove(ventureId)
            }, { merge: true })
            db.collection('users').doc(userId).collection('completedVentures').doc(ventureId).delete()
            .then(
              db.collection('users').doc(userId).collection('ventures').doc('completed').set({
                completed: firebase.firestore.FieldValue.arrayUnion(venture.doc.data())
              }, { merge: true })
            )
            .catch(error => console.log('error', error))
          })
        }
      })
    })
  }
}

export const ventureSwipe = (index, ventureId, venture) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    if (venture) {
      db.collection('ventures').doc(ventureId).collection('allVentures').doc('ventureList').get()
        .then(ventures => {
          const { acceptedVenture, userIndex } = ventures.data()
          const ventureExists = _.find(acceptedVenture, { id: venture.id })
          if (ventureExists) {
            db.collection('ventures').doc(ventureId).get().then(data => {
              const { users } = data.data()
              return users.map(user => {
                db.collection('users').doc(user.uid).collection('completedVentures').doc(ventureId).set({
                  ...venture,
                  users: [user.uid]
                }, { merge: true })
              })
            })
          } else {
            db.collection('ventures').doc(ventureId).collection('allVentures').doc('ventureList').set({
              acceptedVenture: firebase.firestore.FieldValue.arrayUnion(venture),
              userIndex: {[currentUser.uid]: index + 1}
            }, { merge: true })
          }
        })
    } else {
      db.collection('ventures').doc(ventureId).collection('allVentures').doc('ventureList').set({
        userIndex: {[currentUser.uid]: index + 1}
      }, { merge: true })
    }
  }
}

export const getMoreVentures = (venture, voteList, page) => {
  const { location: { latitude, longitude, text}, category, uid } = venture
  let config = {

    params: {
      term: category,
      [latitude ? 'latitude' : 'location']: latitude ? latitude : text,
      [longitude ? 'longitude' : 'gone']: longitude && longitude,
      radius: 24000,
      open_now: true,
      offset: page * 20 + 1
    }
  }
  return (dispatch) => {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
      .then(response => {
        const updatedVentureList = voteList.concat(response.data.businesses)
        db.collection('ventures').doc(uid).collection('allVentures').doc('ventureList').set({
          ventureList: updatedVentureList,
          page: page + 1
        }, { merge: true })
        .then(getMoreVenturesSuccess(dispatch, updatedVentureList))
        .catch(error => console.log('error', error))
      })
      .catch(error => console.log('error', error))
  }
}

export const acceptVenture = venture => {
  const { currentUser } = firebase.auth()
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
  return (dispatch) => {
    db.collection('ventures').doc(uid).collection('allVentures').get()
    .then(ventures => {
      if (!ventures.empty) {
        ventures.forEach(doc => {
          getVentureVoteList(dispatch, doc.data())
        })
      } else {
        axios.get('https://api.yelp.com/v3/businesses/search', config)
          .then(response => {
            db.collection('ventures').doc(uid).collection('allVentures').doc('ventureList').set({
              ventureList: response.data.businesses,
              page: 1,
              userIndex: {[currentUser.uid]: 0}
            }, { merge: true })
              .then(getVentureVoteList(dispatch, {
                page: 1,
                ventureList: response.data.businesses,
                userIndex: {[currentUser.uid]: 0}
              }))
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

const getMoreVenturesSuccess = (dispatch, ventures) => {
  dispatch({
    type: GET_MORE_VENTURES,
    payload: ventures
  })
}

const completedVenture = (dispatch, venture) => {
  dispatch({
    type: VENTURE_MATCH,
    payload: venture
  })
}

const getPendingVenturesSuccess = (dispatch, ventures) => {
  dispatch({
    type: GET_PENDING_VENTURES,
    payload: ventures
  })
}

const getVentureVoteList = (dispatch, ventureData) => {
  dispatch({
    type: GET_VENTURE_VOTE_LIST,
    payload: ventureData
  })
}

// const getVentureSuccess = (dispatch, ventures) => {
//   dispatch({
//     type: GET_VENTURE_SUCCESS,
//     payload: ventures
//   })
// }
