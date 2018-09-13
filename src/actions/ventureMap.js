import axios from 'axios'
import firebase, { db } from '../components/firebase'
import { GET_VENTURE_MAP_MARKERS_SUCCESS } from './util'

export const getVentureMarkers = () => {
  const config = {

  }
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    let promises = []
    db.collection('users').doc(currentUser.uid).collection('ventures').doc('completed')
    .onSnapshot(snapshot => {
      const { completed } = snapshot.data()
      completed.map(venture => {
        promises.push(axios.get(`https://api.yelp.com/v3/businesses/${venture.id}`, config))
      })
      Promise.all(promises)
      .then(promises => {
        const ventureData = promises.map((data, index) => {
          return {...completed[index], ...data.data}
        })
        return getVentureMarkersSuccess(dispatch, ventureData)
      })
      .catch(error => console.log('error', error))
    })
  }
}

const getVentureMarkersSuccess = (dispatch, ventureMarkerData) => {
  dispatch({
    type: GET_VENTURE_MAP_MARKERS_SUCCESS,
    payload: ventureMarkerData
  })
}
