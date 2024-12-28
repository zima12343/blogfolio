import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let refreshInterval: number | null = null;

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (loginData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/create/",
        {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData?.detail ?? "error!!!!");
      }
      const data = await response.json();
      localStorage.setItem("access", JSON.stringify(data.access));
      localStorage.setItem("refresh", JSON.stringify(data.refresh));
      dispatch(startTokenUpdate());
    } catch (err) {
      return rejectWithValue((err as Error).message)
    }
  }
)

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = localStorage.getItem("refresh");
      if (!refreshToken) {
        throw new Error("no refresh token");
      }
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/refresh/",
        {
          method: "POST",
          body: JSON.stringify({
            refresh: JSON.parse(refreshToken),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.detail);
      }
      const data = await response.json();
      localStorage.setItem("access", data.access);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const startTokenUpdate = createAsyncThunk(
  "auth/startTokenUpdate",
  async (_, { dispatch }) => {
    if (refreshInterval) {
      clearInterval(refreshInterval);
    }
    refreshInterval = setInterval(() => {
      console.log("refreshin token");
      dispatch(refreshToken());
    }, 5 * 60 * 1000);
  }
);

export const stopTokenUpdate = createAsyncThunk(
  "auth/stopTokenUpdate",
  async (_, { dispatch }) => {
    if (refreshInterval) {
      clearInterval(refreshInterval);
      refreshInterval = null;
    }
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    dispatch(signInSlice.actions.logout());
  }
);

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    auth: false,
    isLoading: false,
    error: null as null | string,
  },
  reducers: {
    logout: (state: any) => {
      state.auth = false;
      (state.error = null), (state.isLoading = false);
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(signIn.fulfilled, (state: any) => {
      (state.auth = true), (state.isLoading = false);
    });
    builder.addCase(signIn.pending, (state: any) => {
      (state.error = null), (state.isLoading = true);
    });
    builder.addCase(signIn.rejected, (state: any, action: any) => {
      (state.error = (action.payload as string) || "error!!!!!!"),
        (state.isLoading = false);
    });
  },
});



export default signInSlice.reducer;