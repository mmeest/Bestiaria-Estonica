import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Kinnita, et siia on lisatud sinu `cartSlice`
  },
});

export default store;
