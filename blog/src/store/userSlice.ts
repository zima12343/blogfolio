import { createAsyncThunk, createSlice, isAllOf } from "@reduxjs/toolkit";

export const Me = createAsyncThunk(
    'user/me',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const jwt = "Bearer " + JSON.parse(localStorage.getItem('access') as string);
            const response = await fetch(
                "https://studapi.teachmeskills.by//auth/users/me/",
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: jwt as string 
                  }
                }
              );
        
              if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData?.detail ?? "error!!!!");
              }
              const data = await response.json();
              console.log(data);
              dispatch(userSlice.actions.setData(data));
        } catch (err) {
            return rejectWithValue((err as Error).message)
        }
    })

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: "",
        id: 0,
        email: "",
        isLogin: false
    },
    reducers: {
        setData: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.userName = action.payload.username;
            state.isLogin = true;
        }
    }
})

export default userSlice.reducer;
