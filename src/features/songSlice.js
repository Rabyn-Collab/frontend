import { createSlice } from "@reduxjs/toolkit";


export const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },

    removeSong: (state, action) => {

    }
  }
});

export const { addSong, removeSong } = songSlice.actions;

