import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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

  console.log(data);

  return (
    <div className="p-4 grid grid-cols-3 gap-5">
      {data.length > 0 && data.map((meal) => {
        return <Card className="" key={meal.idCategory}>
          <CardHeader shadow={false} floated={false} >
            <img
              src={meal.strCategoryThumb}
              alt="card-image"
              className="w-full "
            />
          </CardHeader>
          <CardBody>
            <div className=" flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {meal.strCategory}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {meal.idCategory}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {meal.strCategoryDescription.substring(0, 150) + '....'}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => nav(`/itemPage/${meal.strCategory}`,)}
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Click To Show More
            </Button>
          </CardFooter>
        </Card>







      })}

    </div>
  )
}
export default HomePage