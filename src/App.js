import React from 'react'


const App = () => {



  const reactangle = {
    length: 20,
    width: 200,
    totalArea: function () {
      return this.length * this.width;
    },
  };

  const totals = reactangle.totalArea();


  console.log(totals);


  return (
    <div>




    </div>
  )
}

export default App