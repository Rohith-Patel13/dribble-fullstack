import { configureStore } from '@reduxjs/toolkit'
import reducerSlice  from './slice'

const store = configureStore({
  reducer: {
    mainSlice:reducerSlice,
  },
})

export default store