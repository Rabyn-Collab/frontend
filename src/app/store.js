import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "../features/songSlice";


export const store = configureStore({
  reducer: {
    songs: songSlice.reducer
  }
});



// console.log(songSlice.actions.addSong());
store.dispatch({
  type: 'song/addSong',
  payload: 'lio'
});

// console.log(store.getState());


