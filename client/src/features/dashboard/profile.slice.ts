import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk<any>("profile/getProfile", async () => {
  const response = await axios.post("/api/users/store", {});
  return response.data;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementByAmount: (state, action) => {
      state += action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getProfile.fulfilled, (stat, action) => {});
  },
});

export const { increment, decrement, incrementByAmount } = profileSlice.actions;

export default profileSlice.reducer;
