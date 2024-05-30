import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart.slices";
export const store = configureStore({
  reducer: cartReducer,
});
