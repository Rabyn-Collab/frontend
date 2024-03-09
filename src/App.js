import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import RootLayout from './components/RootLayout'
import ContactPage from './pages/ContactPage'
import { useSelector } from 'react-redux'
import UserForm from './components/UserForm'
import EditForm from './components/EditForm'


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
          <Route path='addForm' element={<UserForm />} />
          <Route path='editForm/:id' element={<EditForm />} />

          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactPage />} />

          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>



    </>
  )
}

export default App