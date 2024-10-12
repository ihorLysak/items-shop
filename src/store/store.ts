import { configureStore } from "@reduxjs/toolkit";
import { reducer as navigationReducer } from "./features/navigation/navigation";
import { reducer as productsListReducer } from "./features/products-list/products-list";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    productsList: productsListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
