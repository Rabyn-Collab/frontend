import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'


const App = () => {




  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>

          <Route path='/' element={<HomePage />} />


          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App