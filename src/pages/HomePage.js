import React from 'react'
import CardDisplay from '../components/CardDisplay'
import UserForm from '../components/UserForm';

const HomePage = () => {

  const image = 'https://images.unsplash.com/photo-1706391989349-7882ece26c0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8';
  const image1 = 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8';

  return (
    <div className='p-7'>


      <UserForm />
      {/* <CardDisplay image={image} datas={[11, 22, 44, 55]} />
      <CardDisplay image={image1} /> */}







    </div>
  )
}

export default HomePage