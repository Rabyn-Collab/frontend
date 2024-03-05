import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./commonAction";


export const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      console.log('lo');
      state.push(action.payload);
    },

    removeMovie: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return [];
    })
  }
});

export const { addMovie, removeMovie } = movieSlice.actions;
