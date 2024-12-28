import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserLogin } from "../types/types";

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (loginData: IUserLogin, { rejectWithValue }) => {
    try {
      const signUpData = {
        username: loginData.userName,
        email: loginData.email,
        password: loginData.password,
        course_group: 14
      }
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          body: JSON.stringify(signUpData),
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
      console.log(data);
      return data
    } catch (err) {
      return rejectWithValue((err as Error).message)
    }
  }
)


export const userActivation = createAsyncThunk(
  'auth/activation',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
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
      return data
    } catch (err) {
      return rejectWithValue((err as Error).message)
    }
  }
)


const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    user: false,
    isActivated: false
  },
  reducers: {
  },
  extraReducers: (builder: any) => {
    builder.addCase(signUp.fulfilled, (state: any, action: any) => {
      state.user = action.payload;
    });
    builder.addCase(userActivation.fulfilled, (state: any) => {
      state.isActivated = true;
    });
  },
});


export default signUpSlice.reducer