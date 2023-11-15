import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrentProfile = createAsyncThunk<any>("profile/getCurrentProfile", async () => {
  // TODO: change to use appRequestService instead of axios
  // TODO: what if we using fetch instead? remove dependency
  const response = await axios.get("/api/profile/me");
  return response.data;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    loading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCurrentProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload.profile;
    });
    builder.addCase(getCurrentProfile.rejected, (state) => {
      state.loading = false;
      state.profile = null;
    });
    builder.addMatcher(isAnyOf(getCurrentProfile.pending), (state) => {
      state.loading = true;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = profileSlice.actions;

export default profileSlice.reducer;
