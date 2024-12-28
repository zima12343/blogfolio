import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import navbarSlice from "./navbarSlice";
import signInSlice from "./signInSlice";
import userSlice from "./userSlice";
import signUpSlice from "./signUpSlice";
import postSlice from "./postSlice";

export default configureStore({
    reducer: {
      theme: themeSlice,
      navbar: navbarSlice,
      signIn: signInSlice,
      signUpSl: signUpSlice,
      user: userSlice,
      posts: postSlice,
    }
  });
