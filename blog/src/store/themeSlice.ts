import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "appTheme",
    initialState: {
        theme: "light",
    },
    reducers: {
        toggleTheme(state, action) {
            state.theme = action.payload
        }
    }
});


export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;