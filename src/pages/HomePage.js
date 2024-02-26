import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Detail from './Detail';

const HomePage = () => {


  const [movieData, setData] = useState(null);
  const [isLoad, setLoad] = useState(false);
  const [isErr, setErr] = useState(false);
  const [id, setId] = useState(null);

  const getMovie = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com', {
        params: {
          'apikey': '6905a701',
          's': 'movie'
        }
      });
      setData(response.data.Search);
    } catch (err) {

    }
  }


  useEffect(() => {
    getMovie();
  }, [])




  return (
    <div className='grid grid-cols-2'>
      <div>
        {movieData && movieData.map((movie) => {
          return <div key={movie.imdbID}>
            <h1>{movie.Title}</h1>
            <img onClick={() => setId(movie.imdbID)} className='cursor-pointer h-8 w-8' src={movie.Poster} alt="" />
          </div>
        })}
      </div>

      <div>
        <Detail id={id} setId={setId} />
      </div>


    </div>
  )
}

export default HomePage