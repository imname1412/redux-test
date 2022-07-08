import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './features/counter/counterSlice'
import authReducer from './features/counter/AuthCheck'

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
})