import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'
import ContactPage from './pages/ContactPage'


const App = () => {
  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App