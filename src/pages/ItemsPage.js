import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router"

const ItemsPage = () => {

  const { cata } = useParams();

  const [data, setData] = useState([]);
  const nav = useNavigate();

  const getCategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', { params: { c: cata } });
      setData(response.data.meals);
    } catch (err) {

    }
  }




  useEffect(() => {
    getCategories();
  }, []);


  console.log(data);


  return (
    <div className="p-4">
      {data.length > 0 && data.map((meal) => {
        return <div onClick={() => nav(`/itemPage/${meal.strCategory}`)} key={meal.idMeal} className="space-y-2 cursor-pointer">
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} className="h-36 w-36" alt="" />


        </div>
      })}

    </div>
  )
}
export default ItemsPage