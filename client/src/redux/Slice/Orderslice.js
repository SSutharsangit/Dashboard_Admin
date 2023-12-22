import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ordervalue: 0,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderCount: (state, action) => {
      state.ordervalue = action.payload;
    },
    orderIncrement: (state) => {
      state.ordervalue += 1;
    },
    orderDecrement: (state) => {
      state.ordervalue-= 1;
    },
  },
});

export const { setOrderCount, orderIncrement, orderDecrement } = orderSlice.actions;

export default orderSlice.reducer;