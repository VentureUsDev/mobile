import {
  FRIENDS_FETCH_SUCCESS,
  NO_FRIENDS_FETCHED,
  REMOVE_FRIEND
} from './util'
import firebase, { db } from '../components/firebase'

export const getFriends = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    let promises = []
    db.collection('friends').doc(currentUser.uid).collection('friendsList')
    .onSnapshot(snapshot => {
      if (snapshot.size === 0) {
        return dispatch({ type: NO_FRIENDS_FETCHED })
      }
      snapshot.docs.map(friend => {
        const friendsList = []
        const { uid } = friend.data()
        promises.push(db.collection('users').doc(uid).get())
        Promise.all(promises)
          .then(friends => {
            friends.forEach(user => {
              friendsList.push(user.data())
            })
            promises = []
            return getFriendsSuccess(dispatch, friendsList)
          })
          .catch(error => console.log('error', error))
      })
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
