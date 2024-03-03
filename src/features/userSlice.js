import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userInfo: [],
  },

  reducers: {

    addUser: (state, action) => {
      state.userInfo = [...state.userInfo, action.payload];
    }


  }

});
export const { addUser } = userSlice.actions;


