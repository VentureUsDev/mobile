import axios from 'axios'
import firebase, { db } from '../components/firebase'
import { find, findIndex, flatten } from 'lodash'
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
  CLEAR_VENTURE,
  SEND_VENTURE_NOTE,
  CLEAR_NOTE
} from './util'
import { generateUUID } from '../helpers/venture'
import { API_KEY } from '../config/env'
import { map } from 'lodash'

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
        const { users, category, date, id } = venture.doc.data()
        const ventureId = venture.doc.id
        if (venture.type === "added") {
          completedVenture(dispatch, venture.doc.data())
          db.collection('ventures').doc(ventureId).collection('allVentures').doc('ventureList').delete()
          .then(db.collection('ventures').doc(ventureId).delete())
          return users.map(userId => {
            let totalVenturesCount
            db.collection('users').doc(userId).get()
            .then(data => {
              const { totalVentures } = data.data()
              totalVenturesCount = totalVentures
            })
            db.collection('users').doc(userId).collection('ventures').doc('pending').set({
              pending: firebase.firestore.FieldValue.arrayRemove(ventureId)
            }, { merge: true })
            db.collection('users').doc(userId).collection('completedVentures').doc(ventureId).delete()
            .then(() => {
              db.collection('users').doc(userId).collection('ventures').doc('completed').set({
                completed: firebase.firestore.FieldValue.arrayUnion({id, date, category})
              }, { merge: true })
              db.collection('users').doc(userId).set({
                totalVentures: totalVenturesCount + 1,
                categories: firebase.firestore.FieldValue.arrayUnion({ [category]: id })
              }, { merge: true })
            })
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
          const ventureExists = find(acceptedVenture, { id: venture.id })
          const ventureIndex = findIndex(acceptedVenture, { id: venture.id })
          if (ventureExists) {
            db.collection('ventures').doc(ventureId).get().then(data => {
              const { users, category, date } = data.data()
              const userIds = map(users, 'uid')
              const votePassed = ventureExists.vote === users.length - 1
              if (votePassed) {
                return users.map(user => {
                  db.collection('users').doc(user.uid).collection('completedVentures').doc(ventureId).set({
                    ...venture,
                    users: userIds,
                    category,
                    date,
                  }, { merge: true })
                })
              } else {
                let accepted = acceptedVenture
                accepted.splice(ventureIndex, 1, {...ventureExists, vote: ventureExists.vote + 1})
                db.collection('ventures').doc(ventureId).collection('allVentures').doc('ventureList').update({
                  acceptedVenture: accepted,
                  userIndex: {[currentUser.uid]: index + 1}
                })
              }
            })
          } else {
            db.collection('ventures').doc(ventureId).collection('allVentures').doc('ventureList').set({
              acceptedVenture: firebase.firestore.FieldValue.arrayUnion({...venture, vote: 1}),
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
    headers: {'Authorization': API_KEY},
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
    headers: {'Authorization': API_KEY},
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

export const noteWatch = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    db.collection('users').doc(currentUser.uid).collection('note')
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(note => {
        if (note.type === "added") {
          sendNote(dispatch, note.doc.data())
          db.collection('users').doc(currentUser.uid).collection('note').doc(note.doc.data().uid).delete()
          .then(dispatch({ type: CLEAR_NOTE }))
          .catch(error => console.log('error', error))
        }
      })
    })
  }
}

export const createVenture = data => {
  const { users, location, category, currentUser } = data
  let allUsers = []
  allUsers.push(users, currentUser)
  allUsers = flatten(allUsers)
  const ventureId = generateUUID()
  return (dispatch) => {
    const ventureData = {
      uid: ventureId,
      category,
      date: new Date(),
      users: allUsers,
        location:
          typeof(location) === 'object'
            ? {...location}
            : {text: location}
    }
    db.collection('users').doc(currentUser.uid).collection('ventures').doc('pending').set({
      pending: firebase.firestore.FieldValue.arrayUnion(ventureId)
    }, { merge: true })
    users.map(user => {
      db.collection('users').doc(user.uid).collection('ventures').doc('pending').set({
        pending: firebase.firestore.FieldValue.arrayUnion(ventureId)
      }, { merge: true })
      .then(db.collection('users').doc(user.uid).collection('note').doc(ventureId).set(ventureData))
      .catch(error => console.log('error', error))
    })
    db.collection('ventures').doc(ventureId).set(ventureData)
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

const sendNote = (dispatch, noteData) => {
  dispatch({
    type: SEND_VENTURE_NOTE,
    payload: noteData
  })
}

// const getVentureSuccess = (dispatch, ventures) => {
//   dispatch({
//     type: GET_VENTURE_SUCCESS,
//     payload: ventures
//   })
// }
