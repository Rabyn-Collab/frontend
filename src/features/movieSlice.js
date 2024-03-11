import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const movieSlice = createApi({
  reducerPath: 'movieSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),

  endpoints: (builder) => ({


    categoryMovie: builder.query({
      query: () => ({
        url: '/movie/popular',
        headers: {

        },
        method: 'GET'
      })
    }),

    searchMovie: builder.query({
      query: () => ({

      })
    }),



  })


});


export const { useCategoryMovieQuery } = movieSlice;