import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const HomePage = () => {

  const [data, setData] = useState({});


  const fetchData = async () => {
    try {
      const response = await axios.get('', {
        params: {
          api_key: ''
        }
      });

    } catch (err) {

    }
  }

  console.log('heloo jeee');

  // console.log('run1');
  // console.log('run2');
  // setTimeout(() => {
  //   console.log('hello jee run4');
  // }, 4000);
  // console.log('run3')

  // axios.get('https://api.themoviedb.org/3/movie/popular',
  //   {
  //     params: {
  //       'api_key': '92c1e33f015755d27a231793c44ecfed',
  //     }
  //   }
  // ).then((res) => {
  //   setData(res.data);
  // }).catch((err) => {

  // });
  // console.log('render');


  useEffect(() => {
    console.log('lio');
  }, []);


  return (
    <div>




    </div>
  )
}

export default HomePage