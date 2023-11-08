import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import counterSlice from "features/counter/counter.slice";
import alertSlice from "features/alert/alert.slice";
import authSlice from "features/auth/auth.slice";

const rootReducer = {
  counter: counterSlice,
  alert: alertSlice,
  auth: authSlice,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
