import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default Store;
