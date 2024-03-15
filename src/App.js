import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'
import { useSelector } from 'react-redux'
import CategoryPage from './pages/CategoryPage'
import SearhPage from './pages/SearhPage'
import Popular from './pages/Popular'



const App = () => {

  // const persons = [
  //   { id: 1, name: 'ram' },
  //   { id: 2, name: 'shyam' },
  // ];

  // const copyPer = persons.map((per) => {
  //   return per.id === 1 ? { id: 1, name: 'lio' } : per;
  // });

  // console.log(copyPer);

  const somes = useSelector((state) => state.userInfo);


  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>

          <Route path='/' element={<HomePage />} />
          <Route path='popular/movie' element={<Popular />} />
          <Route path='movie/category/:category' element={<CategoryPage />} />


          <Route path='movie/search/:query' element={<SearhPage />} />

          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App