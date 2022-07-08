import { createSlice } from '@reduxjs/toolkit'


export const AuthCheck = createSlice({
  name: 'auth',
  initialState: {
    value: false
  },
  reducers: {
    loginAuth: state => {
      state.value = true
    },
    logoutAuth: state => {
      state.value = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { loginAuth ,  logoutAuth } = AuthCheck.actions

export default AuthCheck.reducer