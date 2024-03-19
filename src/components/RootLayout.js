import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'


const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>

      <Header />
      <Outlet />

    </div>
  )
}

export default RootLayout