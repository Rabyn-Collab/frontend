import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./postSlice";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: [],
  },

  reducers: {

    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },



  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.users = [];
    })
  }

});
export const { addUser } = userSlice.actions;


