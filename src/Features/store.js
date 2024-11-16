import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/counter";
import { allProduct } from "./Api/ProductApi";

export const store = configureStore({
  reducer: {
    counterK: counterSlice,

    [allProduct.reducerPath]: allProduct.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allProduct.middleware),
});
