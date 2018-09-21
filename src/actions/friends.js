import {
  FRIENDS_FETCH_SUCCESS,
  NO_FRIENDS_FETCHED,
  ALL_USERS_FETCH_SUCCESS,
  REMOVE_FRIEND
} from './util'
import firebase, { db } from '../components/firebase'

export const getAllUsers = () => {
  return (dispatch) => {
    const promises = []
    db.collection('users').orderBy('username')
      .onSnapshot(snapshot => {
      snapshot.docs.map(user => {
        return promises.push(user.data())
      })
      Promise.all(promises)
        .then(users => {
          return getAllUsersSuccess(dispatch, users)
        })
        .catch(error => console.log('error', error))
    })
  }
}

export const getFriends = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    let promises = []
    db.collection('friends').doc(currentUser.uid).collection('friendsList')
      .onSnapshot(snapshot => {
        if (snapshot.size === 0) {
          return dispatch({ type: NO_FRIENDS_FETCHED })
        }
        const getPromises = snapshot.docs.map(async friend => {
          const { uid } = friend.data()
          return await promises.push(db.collection('users').doc(uid).get().then(user => {
            return user.data()
          }))
        })
        Promise.all(promises)
          .then(friends => {
            promises = []
            return getFriendsSuccess(dispatch, friends)
          })
          .catch(error => console.log('error', error))
    })
  }
}

export const addFriend = uid => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    db.collection('friends').doc(currentUser.uid).collection('friendsList').doc(uid).set({ uid })
      .then()
      .catch(error => console.log('error', error))
  }
}

export const removeFriend = uid => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    db.collection('friends').doc(currentUser.uid).collection('friendsList').doc(uid).delete()
      .then(dispatch({ type: REMOVE_FRIEND }))
      .catch(error => console.log('error', error))
  }
}

const getFriendsSuccess = (dispatch, friends) => {
  dispatch({
    type: FRIENDS_FETCH_SUCCESS,
    payload: friends
  })
}

const getAllUsersSuccess = (dispatch, users) => {
  dispatch({
    type: ALL_USERS_FETCH_SUCCESS,
    payload: users
  })
}
