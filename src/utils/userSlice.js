import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;   //Return means my state will become action.payload now
    },
    removeUser: (state, action) => {
      return null;     // Again the state will be Null
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;