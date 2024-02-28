import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router";

const HomePage = () => {

  const [data, setData] = useState([]);
  const nav = useNavigate();

  const getCategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data.categories);
    } catch (err) {

    }
  }




  useEffect(() => {
    getCategories();
  }, []);


  return (
    <div className="p-4">
      {data.length > 0 && data.map((meal) => {
        return <div onClick={() => nav(`/itemPage/${meal.strCategory}`)} key={meal.idCategory} className="space-y-2 cursor-pointer">
          <h1>{meal.strCategory}</h1>
          <img src={meal.strCategoryThumb} className="h-36 w-36" alt="" />


        </div>
      })}

    </div>
  )
}
export default HomePage