import axios from "axios";
import { useEffect, useState } from "react";
import { api_key } from "../components/constants";






export const useApi = (url, page) => {

  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState('');

  const fetchData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(url, {
        params: {
          api_key: api_key,
          page
        }
      });
      setLoad(false);
      setData(response.data.results);
    } catch (err) {
      setLoad(false);
      setErr(err.message);

    }
  }

  useEffect(() => {
    fetchData();

  }, [page]);


  return [load, err, data];
}








