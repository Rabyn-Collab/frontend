import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {


  return (
    <div className='flex justify-between bg-black text-white px-2 py-1'>
      <h1>Logo</h1>
      <nav className='space-x-3'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/sample/900'>Sample</NavLink>
      </nav>


    </div>
  )
}

export default Header