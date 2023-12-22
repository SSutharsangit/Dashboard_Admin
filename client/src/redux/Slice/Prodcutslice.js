import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productvalue: 0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setproductcount:(state,action)=>{
        state.productvalue= action.payload
    },
    productincrement: (state) => {
        state.productvalue += 1
      },
    productdecrement: (state) => {
      state.productvalue -= 1
    }
  }
})

export const { setproductcount, productincrement, productdecrement } = productSlice .actions;

export default productSlice.reducer;