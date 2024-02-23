import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { api_key, getPopular, imageUrl } from '../components/constants';

const HomePage = () => {

  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState('');



  const fetchData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(getPopular, {
        params: {
          api_key: api_key
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
  }, []);

  if (load) {
    return <h1>LoaDING....</h1>;
  }
  // if (err) {
  //   return <h1>{err}</h1>
  // }
  console.log(data);
  return (
    <div>

      {data && data.map((movie) => {
        return <div key={movie.id}>
          <h1>{movie.title}</h1>
          <img src={`${imageUrl}${movie.poster_path}`} alt="" />
        </div>
      })}


    </div>
  )
}

export default HomePage