import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Nav = () => {
    const link = ['home','counter','about','hash']

    // #TODO: //* readOnly
    const count = useSelector(state => state.counter.value)
    const auth = useSelector(state => state.auth.value)

  return (
    <nav className='bg-gray-900 w-full h-16 flex items-center justify-center px-5 gap-1'>
        <div className='font-medium text-gray-400 flex flex-row-reverse gap-2 items-center'>
            merklePatt
            <img 
                src='https://iconape.com/wp-content/png_logo_vector/redux.png'
                className='w-5 h-5'
            />
        </div>
        <ul className='flex items-center space-x-4 justify-center  flex-1'>
            {link.map((link, index) => (
                <Link to={`${link}`} key={index}>
                    <li
                        className='uppercase hover:text-gray-500 cursor-pointer text-gray-300'
                    >
                        {link}
                    </li>
                </Link>
            ))}
        </ul>
        <div className='flex gap-2 pr-5 min-w-[200px]  justify-between'>
            <h1 className='bg-green-300 text-green-700 px-2 rounded-md font-medium h-full'>
                Redux state : 
                <span className=' text-blue-600 h-fit rounded-sm px-1'>
                    {count}
                </span>
            </h1>
            <div className=''>
                <div className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className='font-medium absolute -top-2 -right-2 text-sm bg-[#f52540] rounded-full flex items-center justify-center w-5 h-5'>
                        {count}
                    </div>
                </div>
            </div>
        </div>
        <div>
            {auth? 'login':'logout'}
            
        </div>
    </nav>
  )
}

export default Nav