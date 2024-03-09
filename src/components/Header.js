import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const change = () => {
    setToggle(!toggle);
  }

  return (
    <div className='flex justify-between bg-black text-white px-2 py-1 items-start'>
      <div className='space-y-2'>
        <h1>Logo</h1>
        {toggle && <nav className='flex-col msm:flex hidden'>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/sample/900'>Sample</NavLink>
        </nav>}
      </div>


      <div className='hidden msm:flex'>
        {toggle ? <button onClick={change}><i className="fa-solid fa-xmark"></i></button> : <button onClick={change}><i className="fa-solid fa-bars"></i></button>}
      </div>



      <nav className='space-x-3 msm:hidden'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/addForm'>AddForm</NavLink>
      </nav>


    </div>
  )
}

export default Header