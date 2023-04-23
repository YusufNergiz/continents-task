import { configureStore } from '@reduxjs/toolkit'
import continentReducer from './reducers/continentReducer'
import countryReducer from './reducers/countryReducer'

export default configureStore({
  reducer: {
    continent: continentReducer,
    country: countryReducer
  },
})