import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'
import CategoryPage from './pages/CategoryPage'
import SearhPage from './pages/SearhPage'
import Detail from './pages/detail/Detail'
import MoviePage from './pages/MoviePage'



const App = () => {



  return (
    <>

      <Routes>

        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='movie/category/:category' element={<CategoryPage />} />
          <Route path='movie/:category/:page' element={<MoviePage />} />
          <Route path='movie/detail/:id' element={<Detail />} />
          <Route path='movie/search/:query' element={<SearhPage />} />
          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App