import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Detail from './Detail';
import NavBarCompo from './NavBarCompo';

const HomePage = () => {


  const [movieData, setData] = useState(null);
  const [isLoad, setLoad] = useState(false);
  const [isErr, setErr] = useState(false);
  const [id, setId] = useState(null);
  const [query, setQ] = useState('Avatar');

  const controller = new AbortController();

  const getMovie = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com', {
        params: {
          'apikey': '6905a701',
          's': query
        },
        signal: controller.signal
      });
      setData(response.data.Search);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    if (query.length > 3) {
      getMovie();
    }

    return () => {
      if (query.length > 3) {
        controller.abort();
      }

    }

  }, [query])



  const closeCompo = () => {
    setId(null);
  }


  return (
    <>
      <NavBarCompo setQuery={setQ} />
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
          {id === null ? <h1>You have not clicked</h1> : <Detail id={id} closeCompo={closeCompo} />}
        </div>


      </div>
    </>
  )
}

export default HomePage