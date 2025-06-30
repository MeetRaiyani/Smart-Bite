import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./card";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export default store;