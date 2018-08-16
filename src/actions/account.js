import firebase, { db } from '../components/firebase'
import {
  USER_FETCH_SUCCESS,
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

export const uploadImage = image => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    db.collection('users').doc(currentUser.uid).update({ image })
      .then(() => {
        dispatch({ type: UPLOAD_PHOTO })
      })
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
