import React from 'react'



const App = () => {

  const fName = 'Ram';
  const lName = 'Lakhan';

  const greetUser = () => {
    return 'hello jee namaste jee';
  }

  const fullNameFunc = () => {
    return `fullname is ${fName} ${lName}`;
  }

  const some = fullNameFunc();

  console.log(some);
  return (
    <div>




    </div>
  )
}

export default App