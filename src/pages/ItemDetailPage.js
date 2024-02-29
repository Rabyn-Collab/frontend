import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetailPage = () => {




  const { id } = useParams();

  const [data, setData] = useState(null);


  const getCategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', { params: { i: id } });

      setData(response.data?.meals[0]);
    } catch (err) {

    }
  }
  useEffect(() => {
    getCategories();
  }, []);

  const url = data?.strYoutube.split('=')[1];


  return (
    <div className="py-7 px-40">
      {data && <div>
        <iframe class="w-full aspect-video" src={`https://www.youtube.com/embed/${url}`}></iframe>

      </div>}

    </div>
  )
}
export default ItemDetailPage