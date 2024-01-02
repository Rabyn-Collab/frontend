import React from 'react'


const App = () => {

  const person = {
    name: 'ram',
    age: 90,
    read: () => {
      console.log('ram reading');
    }
  };

  const rating = '9.9999';
  const g = 'sdflksdfkl';
  const amount = '900';
  const c = 9 / 0;
  // console.log(c);
  // const amTp = Number(amount);
  // console.log(Number.isFinite(c));
  // console.log(Number.isInteger(amTp));

  console.log(isNaN(rating));



  return (
    <div>





    </div>
  )
}

export default App
