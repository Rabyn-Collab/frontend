import { createSlice } from "@reduxjs/toolkit";



export const postSlice = createSlice({
  name: 'userSlice',
  initialState: {
    posts: [],
  },

  reducers: {

    postAdd: (state, action) => {
      // console.log(action.payload);
      state.posts = [...state.posts, action.payload];
    }


  }

});
export const { postAdd } = postSlice.actions;


