import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    applicantMobileNumber: "",
  };

const userSlice=createSlice({
      name:"user",
      initialState,
      reducers: {
      addItem(state, action) {
        console.log(action);
       
        const {applicantMobileNumber}=action.payload;
            state.applicantMobileNumber=applicantMobileNumber;
        },
        
     },
    })
export const {addItem,removeItem } = userSlice.actions;
export default userSlice.reducer; 