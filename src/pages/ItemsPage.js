import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
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





  return (
    <div className="p-4 grid grid-cols-2 gap-7 items-center">
      {data.length > 0 && data.map((meal) => {
        return <Card key={meal.idMeal} className="w-full max-w-[48rem] flex-row ">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={meal.strMealThumb}
              alt="card-image"
              className=""
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              startups
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {meal.strMeal}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software company
              selling licenses. Yet its own business model disruption is only part
              of the story
            </Typography>

            <Button onClick={() => nav(`/category/${meal.idMeal}`)} key={meal.idMeal} variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>

          </CardBody>
        </Card>









      })}

    </div>
  )
}
export default ItemsPage