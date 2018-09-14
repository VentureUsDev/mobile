export const categories = [
  {name: 'Food', value: 'food', icon: 'restaurant', color: '#60C1E9'},
  {name: 'Drinks', value: 'drinks', icon: 'local-bar', color: '#FECB2F'},
  {name: 'Activities', value: 'activities', icon: 'beach-access', color: '#9CC348'},
  {name: 'Date Night', value: 'datenight', icon: 'favorite', color: '#E35A3C'},
  {name: 'Night Life', value: 'nightlife', icon: 'location-city', color: '#F87931'},
  {name: 'Custom', value: 'custom', icon: 'spa', color: '#A69BF9'}
]

export const dateOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}

export const getYelpStars = rating => {
  if (rating === 5) return require('../assets/regular_5.png')
  if (rating === 4.5) return require('../assets/regular_4_half.png')
  if (rating === 4) return require('../assets/regular_4.png')
  if (rating === 3.5) return require('../assets/regular_3_half.png')
  if (rating === 3) return require('../assets/regular_3.png')
  if (rating === 2.5) return require('../assets/regular_2_half.png')
  if (rating === 2) return require('../assets/regular_2.png')
  if (rating === 1.5) return require('../assets/regular_1_half.png')
  if (rating === 1) return require('../assets/regular_1.png')
  if (rating === 0) return require('../assets/regular_0.png')
}

export const getSmallYelpStars = rating => {
  if (rating === 5) return require('../assets/small_5.png')
  if (rating === 4.5) return require('../assets/small_4_half.png')
  if (rating === 4) return require('../assets/small_4.png')
  if (rating === 3.5) return require('../assets/small_3_half.png')
  if (rating === 3) return require('../assets/small_3.png')
  if (rating === 2.5) return require('../assets/small_2_half.png')
  if (rating === 2) return require('../assets/small_2.png')
  if (rating === 1.5) return require('../assets/small_1_half.png')
  if (rating === 1) return require('../assets/small_1.png')
  if (rating === 0) return require('../assets/small_0.png')
}


// copypasta for now, but never follow the world blindly.
export const generateUUID = () => {
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}
