import { createSlice } from '@reduxjs/toolkit'



const checkItem = () => {
    const local = localStorage.getItem('count')

    if(local === null){
        localStorage.setItem('count', 0)
        return {value : 0}
    }else {
        return {value : JSON.parse(Number(local))}
    }
}

const initialState = checkItem()

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      localStorage.setItem('count', state.value)
    },
    decrement: state => {
      state.value -= 1
      localStorage.setItem('count', state.value)
    },
    reset: state => {
      state.value = 0
      localStorage.setItem('count', state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , reset } = counterSlice.actions

export default counterSlice.reducer