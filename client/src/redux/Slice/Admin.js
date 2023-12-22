
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminvalue: 0,
  
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminCount: (state, action) => {
      state.adminvalue = action.payload;
    },
    adminIncrement: (state) => {
      state.adminvalue+= 1;
    },
    adminDecrement: (state) => {
      state.adminvalue-= 1;
    },
  
  },
});

export const { setAdminCount, adminIncrement, adminDecrement } = adminSlice.actions;

export default adminSlice.reducer;
