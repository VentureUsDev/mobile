import { FRIENDS_FETCH_SUCCESS, NO_FRIENDS_FETCHED } from './util'
import firebase, { db } from '../components/firebase'

export const getFriends = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    // figure out a way to refactor this... needed for user queries to finish
    // or else an error is thrown
    const promises = []
    db.collection('friends').doc(currentUser.uid).collection('friendsList').get()
      .then(snapshot => {
        if (snapshot.size === 0) {
          return dispatch({ type: NO_FRIENDS_FETCHED })
        }
        snapshot.docs.map(friend => {
          const { uid } = friend.data()
          const friendsList = []
          promises.push(db.collection('users').doc(uid).get())
          Promise.all(promises)
            .then(snapshots => {
              snapshots.forEach(user => {
                friendsList.push(user.data())
              })
              return getFriendsSuccess(dispatch, friendsList)
            })
            .catch(error => console.log('error'))
        })
      })
      .catch(error => console.log('error', error))
  }
}

const getFriendsSuccess = (dispatch, friends) => {
  dispatch({
    type: FRIENDS_FETCH_SUCCESS,
    payload: friends
  })
}
