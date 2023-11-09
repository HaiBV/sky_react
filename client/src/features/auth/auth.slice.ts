import { PayloadAction, createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { TUser } from "features/auth/auth.types";
import axios from "axios";
import { setAuthToken } from "utils/requestConfig";

// TODO: fail with error
const register = createAsyncThunk<any, { name: string; email: string; password: string }>(
  "auth/register",
  async ({ name, email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      name,
      email,
      password,
    });
    const response = await axios.post("/api/users/store", body, config);
    return response.data;
  }
);

// TODO: fail with error
const login = createAsyncThunk<any, { email: string; password: string }>("auth/login", async ({ email, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
    password,
  });
  const response = await axios.post("/api/auth", body, config);
  return response.data;
});

// TODO: fail with error
const loadUser = createAsyncThunk("auth/loadUser", async () => {
  const response = await axios.get("/api/auth");
  // TODO: why not only .data
  // FIXME: have password in response data
  return { user: response.data.data };
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    error: null,
    user: null,
  } as {
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    user: TUser | null;
  },
  reducers: {
    logout: (state) => {
      return { ...state, token: null, isAuthenticated: false, user: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action: PayloadAction<{ user: TUser }>) => {
      return { ...state, loading: false, isAuthenticated: true, user: action.payload.user };
    });

    builder.addMatcher(isAnyOf(loadUser.pending), (state, action) => {
      return { ...state, loading: true };
    });

    builder.addMatcher(
      isAnyOf(login.fulfilled, register.fulfilled),
      (state, action: PayloadAction<{ token: string }>) => {
        localStorage.setItem("token", action.payload.token);
        setAuthToken(localStorage.getItem("token") as string);
        return { ...state, token: action.payload.token, isAuthenticated: true, loading: false, error: null };
      }
    );

    builder.addMatcher(isAnyOf(register.rejected, loadUser.rejected, login.rejected), (state) => {
      localStorage.removeItem("token");
      return { ...state, loading: false, isAuthenticated: false, token: null };
    });
  },
});

export const { logout } = authSlice.actions;

export { register, login, loadUser };

export default authSlice.reducer;
