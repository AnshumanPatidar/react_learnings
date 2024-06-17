import { createSlice } from "@reduxjs/toolkit";

const privateSlice = createSlice({
  name : 'private',
  initialState:false,
  reducers : {
    privacy : (state) =>  state = !state
      
  }
})


export const privateActions = privateSlice.actions;
export default privateSlice;