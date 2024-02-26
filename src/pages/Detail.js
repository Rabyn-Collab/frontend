import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Detail = ({ id, setId }) => {
  // const person = {
  //   name: 'rma',
  //   age: 90
  // };

  // const {name, age} = person


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
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setId((prev) => null);
      }
    })
    return () => {
      console.log('hello jee');
      document.removeEventListener('keydown', () => {
        console.log('key function call');
      })
    }
  }, [])


  return (
    <div>

      {id === null ? 'Click Some Ids' : <div>

        <h1 >{movieData?.Title}</h1>
        <img src={movieData?.Poster} alt="" />
        <p>{movieData?.Plot}</p>
      </div>

      }


    </div>
  )
}

export default Detail