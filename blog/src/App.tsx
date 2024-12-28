import { Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout/Layout"
import MainPage from "./Pages/Main/MainPage"
import SingIn from "./Pages/SignIn/SingIn"
import SignUp from "./Pages/SignUp/SignUp"
import RegistrationConfirmation from "./Pages/RegistrationConfirmation/RegistrationConfirmation"
import SelectPost from "./Pages/SelectPost/SelectPost"

function App() {
  return <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="signin" element={<SingIn/>}></Route>
          <Route path="signup" element={<SignUp/>}></Route>
          <Route path="confirmation" element={<RegistrationConfirmation/>}></Route>
          <Route path="/post/:id" element={<SelectPost/>} />
        </Route>
      </Routes>
    </>
}

export default App
