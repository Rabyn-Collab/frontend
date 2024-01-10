import React from 'react'
import { meals } from './dummy/meals'

const App = () => {


  return (
    <div className='p-4 grid grid-cols-3 gap-5 '>

      {meals.map((meal, i) => {
        return <div className='shadow-xl p-2' key={meal.idCategory}>
          <h1>{meal.strCategory}</h1>
          <img src={meal.strCategoryThumb} alt="" />
          <p>{meal.strCategoryDescription.substring(0, 100) + '....'}</p>
        </div>
      })}

    </div>
  )
}

export default App
