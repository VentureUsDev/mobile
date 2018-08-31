import {SET_CATEGORY} from './util'

export const setCategory = category => {
  return {
    type: SET_CATEGORY,
    payload: category
  }
}
