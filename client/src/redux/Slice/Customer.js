// CustomerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customervalue: 0,
  
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomerCount: (state, action) => {
      state.customervalue = action.payload;
    },
    customerIncrement: (state) => {
      state.customervalue += 1;
    },
    customerDecrement: (state) => {
      state.customervalue -= 1;
    },
  },
});

export const { setCustomerCount, customerIncrement, customerDecrement } = customerSlice.actions;

export default customerSlice.reducer;
