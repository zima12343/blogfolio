import { createSlice } from "@reduxjs/toolkit";

const NavbarSlice = createSlice({
    name: "navbar",
    initialState: {
        isActiveNavbar: false,
    },
    reducers: {
        toggleNavbar(state, action) {
            state.isActiveNavbar = action.payload
        }, 
        setDefault(state) {
            state.isActiveNavbar = false;
        }
    }
});
export const { toggleNavbar } = NavbarSlice.actions;
export default NavbarSlice.reducer;