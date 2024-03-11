import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./postSlice";
import { getUserFromLocal, setUserToLocal } from "./local_storage";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal(),
    user: {}
  },

  reducers: {

    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
      setUserToLocal(state.users);
    },

    updateUser: (state, action) => {
      state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
      setUserToLocal(state.users);
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


