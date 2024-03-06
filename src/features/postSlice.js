import { createAction, createSlice } from "@reduxjs/toolkit";


export const reset = createAction('app/reset');


export const postSlice = createSlice({
  name: 'userSlice',
  initialState: {
    posts: ['ram post', 'shyam post'],
  },

  reducers: {

    postAdd: (state, action) => {
      // console.log(action.payload);
      state.posts = [...state.posts, action.payload];
    },


  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.posts = [];
    })
  }

});
export const { postAdd } = postSlice.actions;


