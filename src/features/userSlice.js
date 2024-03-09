import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./postSlice";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: [],
    user: {}
  },

  reducers: {

    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },

    updateUser: (state, action) => {
      state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
    },

    singleUser: (state, action) => {
      state.user = state.users.find((user) => user.id === action.payload);
    },

  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.users = [];
    })
  }

});
export const { addUser, singleUser, updateUser } = userSlice.actions;


