import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <div className='flex flex-col w-full justify-center items-center min-h-screen'>
        <Nav />
        <main className='flex-1 max-w-4xl flex w-full justify-center items-center'>
            {children}
        </main>
        <Footer />
    </div>
    </>
  )
}

export default Layout