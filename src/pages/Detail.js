import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Detail = ({ id, closeCompo }) => {

  const [movieData, setData] = useState(null);
  const [isLoad, setLoad] = useState(false);
  const [isErr, setErr] = useState(false);
  const getMovie = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com', {
        params: {
          'apikey': '6905a701',
          'i': id
        }
      });
      setData(response.data);
    } catch (err) {

    }
  }


  useEffect(() => {
    if (id) {
      getMovie();
    }


  }, [id]);




  useEffect(() => {

    const callback = (e) => {
      if (e.key === 'Escape') {
        console.log('hello jeee');
        closeCompo();
      }
    }
    //document.addEventListener('keydown', (e) => callback(e));
    document.addEventListener('keydown', callback);

    return () => {
      console.log('destroy');
      document.removeEventListener('keydown', callback)
    }
  }, [])


  return (
    <div className='grid grid-cols-4 gap-4'>

      <div className='col-span-3'>
        <h1 >{movieData?.Title}</h1>
        <img className='w-full' src={movieData?.Poster} alt="" />
        <p>{movieData?.Plot}</p>
      </div>

      <div>
        <button onClick={closeCompo} className='bg-black text-white px-2 py-1'>Close This</button>
      </div>




    </div>
  )
}

export default Detail