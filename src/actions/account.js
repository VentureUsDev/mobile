import firebase, { db } from '../components/firebase'
import {
  USER_FETCH_SUCCESS,
  ALL_USERS_FETCH_SUCCESS,
  UPLOAD_PHOTO
} from './util'


export const getUser = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    db.collection('users').doc(currentUser.uid).onSnapshot(user => {
      const userData = user.data()
      return getUserSuccess(dispatch, userData)
    })
  }
}

export const getAllUsers = () => {
  return (dispatch) => {
    db.collection('users').orderBy('username').get()
      .then(snapshot => {
        const users = []
        snapshot.forEach(user => {
          return users.push(user.data())
        })
        return getAllUsersSuccess(dispatch, users)
      })
      .catch(() => {
        console.log('error', error)
      })
  }
}

export const uploadImage = image => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    db.collection('users').doc(currentUser.uid).update({ image })
      .then()
      .catch(error => {
        console.log('error', error)
      })
  }
}

const getUserSuccess = (dispatch, user) => {
  dispatch({
    type: USER_FETCH_SUCCESS,
    payload: user
  })
}

const getAllUsersSuccess = (dispatch, users) => {
  dispatch({
    type: ALL_USERS_FETCH_SUCCESS,
    payload: users
  })
}
