import React from 'react'
import { useState } from 'react'
import { EnHash } from '../secure/hash'
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux'
import { loginAuth ,  logoutAuth} from '../features/counter/AuthCheck'


const Hash = () => {

    const [context, setContext] = useState('')
    // const [auth, setAuth] = useState(false)
    
    const authState = useSelector(state => state.auth.value)
    const dispatch = useDispatch()

    const checkPass = (e) => {
        e.preventDefault()
        const buffer = e.target.value
        setContext(buffer)
    }


  return (
    <div className='text-xl rounded-md p-5 flex flex-col space-y-5 bg-gray-700  items-center'>
        {!authState ? (
            <>
                <h1 className='relative self-start text-gray-400 uppercase'>🧪entrance
                <h1 className='p-3 rounded-md absolute -top-[6rem] -left-5 bg-green-200 text-green-600 text-[12px] leading-4 w-[20rem]'>💡 this page use Redux for hold authorization state but not do localstorage</h1>
                
                </h1>
                <div className='w-full flex flex-col space-y-5'>
                    <input 
                        type='password'
                        className=' rounded-md 
                        px-4 py-2 text-xl placeholder-slate-500 w-full 
                        bg-gray-200  focus:bg-white focus:border-blue-500
                        focus:outline-none leading-tight border-2 text-gray-500
                        '
                        placeholder='fill your password'
                        onChange={(e) => checkPass(e)}
                        value={context}
                    />
                    <button 
                        className='bg-blue-200 text-blue-600 p-2 rounded-md text-center'
                        onClick={() => {
                            EnHash(context , loginAuth ,  logoutAuth , dispatch)
                            setContext('')
                        }
                    }
                    >
                        submit
                    </button>

                    <Toaster 
                        position="bottom-center"
                    />
                </div>
            </>
        )
        :
        (
            <div className='flex items-center justify-end flex-col w-64 h-24'>
                <span className='text-gray-400 uppercase mb-5'>
                    👏 Nice try
                </span>
                <button 
                    className='bg-red-400 w-full rounded-sm py-1 text-center align-middle text-md font-medium text-red-800'
                    onClick={() => {
                        dispatch(logoutAuth())
                        toast("Logout" , {
                            icon: '🔔',
                        })
                    }}
                >
                    Logout
                </button>
            </div>
        )
    }

        
    </div>
  )
}

export default Hash