import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const RootLayout = () => {
  return (
    <>
      <h1>askld</h1>
      <Header />
      <Outlet />

    </>
  )
}

export default RootLayout