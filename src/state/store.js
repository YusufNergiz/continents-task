import { configureStore } from '@reduxjs/toolkit'
import continentReducer from './reducers/continentReducer'

export default configureStore({
  reducer: {
    continent: continentReducer,
  },
})