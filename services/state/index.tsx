import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { geckoApi } from "./api";

export const store = configureStore({
  reducer: {
    [geckoApi.reducerPath]: geckoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(geckoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
