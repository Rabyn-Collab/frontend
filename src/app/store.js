import { configureStore } from "@reduxjs/toolkit";
import { addUser, userSlice } from "../features/userSlice";
import { postSlice } from "../features/postSlice";


export const store = configureStore({
  reducer: {
    userInfo: userSlice.reducer,
    postInfo: postSlice.reducer
  }
});



// store.dispatch({
//   type: 'userSlice/addUser',
//   payload: 'rio'
// });




