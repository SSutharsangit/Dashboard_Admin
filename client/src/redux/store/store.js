import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Slice/Prodcutslice';
import orderReducer from '../Slice/Orderslice';
import customerReducer from '../Slice/Customer';
import adminReducer from '../Slice/Admin';

export const store = configureStore({
  reducer: {
    product: productReducer,
    order: orderReducer,
    customer: customerReducer,
    admin: adminReducer,
  },
});