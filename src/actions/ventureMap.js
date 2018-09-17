import axios from 'axios'
import firebase, { db } from '../components/firebase'
import { GET_VENTURE_MAP_MARKERS_SUCCESS } from './util'
import fetch from 'cross-fetch'
import { API_KEY } from '../config/env'

export const getVentureMarkers = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    let promises = []
    db.collection('users').doc(currentUser.uid).collection('ventures').doc('completed')
    .onSnapshot(snapshot => {
      const { completed } = snapshot.data()
      let query = `{}`
      completed.map((venture, index) => {
        const position = 1
        const string =
        `b${index}: business(id: "${venture.id}") {
          id
          name
          location {
            city
            state
          }
          photos
          coordinates {
            latitude
            longitude
          }
          rating
          review_count
          url
        }`
        query = [query.slice(0, position), string, query.slice(position)].join('')
        return query
      })
       fetch('https://api.yelp.com/v3/graphql', {
          method: 'POST',
          headers: {
            'Authorization': API_KEY,
            'Content-Type': 'application/json',
            'Accept-Language': 'en_US'
          },
          body: JSON.stringify({ query }),
        })
        .then(response => response.json())
        .then(data => {
          _.map(data, ventureData => {
            const ventures = Object.values(ventureData)
            const combinedData = ventures.reverse().map((venture, index) => {
              return Object.assign(completed[index], venture)
            })
            getVentureMarkersSuccess(dispatch, combinedData)
          })
        })
    })
  }
}

const getVentureMarkersSuccess = (dispatch, ventureMarkerData) => {
  dispatch({
    type: GET_VENTURE_MAP_MARKERS_SUCCESS,
    payload: ventureMarkerData
  })
}
