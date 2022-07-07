import React , { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , reset } from './counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const [num, setNum] = useState(0)

  return (
    <div className='flex p-5 rounded-md text-xl space-x-5'>
      <div>
        <h1 className='bg-indigo-400 text-gray-200 font-bold rounded-t-lg p-2'>Redux</h1>
        <div className='border-indigo-400 border p-5  flex flex-col items-center gap-2'>
          <span className='bg-slate-700 rounded-full w-24 mb-2 flex justify-center h-24 text-4xl items-center'>{count}</span>
          <div className='flex space-x-3'>
            <button
              className='p-2 bg-gray-900 rounded-md'
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className='p-2 bg-gray-900 rounded-md'
              aria-label="Increment value"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
            <button
              className='p-2 bg-gray-900 rounded-md'
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
        <h1 className='max-w-fit text-gray-200 font-medium rounded-b-lg p-2 bg-indigo-400 text-sm'>State isn't cleared it
          can share to any components but reloading page can
          <span className='block text-blue-200'>Redux + localstorage to prevent it</span>
        </h1>
      </div>

      <div>
      
        <h1 className='bg-slate-300 text-gray-700 font-bold rounded-t-lg p-2'>useState</h1>
        <div className='border p-5 rounded-b-lg flex flex-col items-center gap-2'>
          <span className='text-slate-200 bg-slate-700 rounded-full  w-24 mb-2 flex justify-center h-24 text-4xl items-center'>{num}</span>
          <div className='flex space-x-3'>
            <button
              className='p-2 bg-gray-900 rounded-md'
              aria-label="Increment value"
              onClick={() => setNum(num+1)}
            >
              Increment
            </button>
            <button
              className='p-2 bg-gray-900 rounded-md'
              aria-label="Increment value"
              onClick={() => setNum(0)}
            >
              Reset
            </button>
            <button
              className='p-2 bg-gray-900 rounded-md'
              aria-label="Decrement value"
              onClick={() => setNum(num-1)}
            >
              Decrement
            </button>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Counter