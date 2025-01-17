import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/counter";
import { Exclusive } from "./Api/ExclusiveApi";
import { allProduct } from "./Api/ProductApi";

export const store = configureStore({
  reducer: {
    counterK: counterSlice,

    [allProduct.reducerPath]: allProduct.reducer,
    [Exclusive.reducerPath]: Exclusive.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(allProduct.middleware)
      .concat(Exclusive.middleware),
});
