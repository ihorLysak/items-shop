import { configureStore } from "@reduxjs/toolkit";
import { reducer as navigationReducer } from "./features/navigation";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
