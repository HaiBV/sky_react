import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "store";
import { TAlert } from "features/alert/alert.types";

export const alertSlice = createSlice({
  name: "alert",
  initialState: [] as TAlert[],
  reducers: {
    setAlert: (state, action: PayloadAction<TAlert>) => {
      state.push(action.payload);
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      // NOTE: option 1 - mutation
      // state.splice(
      //   state.findIndex((alert) => alert.id === action.payload),
      //   1
      // );
      // NOTE: option 2 - return
      return state.filter((alert) => alert.id !== action.payload);
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export const removeAlertAsync = (id: string) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(removeAlert(id));
  }, 5000);
};

export default alertSlice.reducer;
