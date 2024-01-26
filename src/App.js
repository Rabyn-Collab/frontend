import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <>
      <h1>sldkjfsklfhsdkjfhsdkjfhsdkjdskjfjkfjsdhksdj</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>



    </>
  )
}

export default App