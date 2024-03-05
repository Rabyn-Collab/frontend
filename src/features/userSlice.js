import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: [],
  },

  reducers: {

    addUser: (state, action) => {
      console.log(action.payload);
      state.users = [...state.users, action.payload];
    }


  }

});
export const { addUser } = userSlice.actions;


