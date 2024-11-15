import './App.css'
import RegistrationConfirmation from './Components/RegistrationConfirmation/RegistrationConfirmation'
import RegistrationSuccess from './Components/RegistrationSuccess/RegistrationSuccess'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import Template from './Components/Template/Template'
import { ThemeContext } from './Contexts/themeContext'
import Card from './ui_components/Card/Card'
import Tabs from './ui_components/Tabs/Tabs'

function App() {

  return (
    <>
      <ThemeContext.Provider value={"Dark"}>
        <Template title={'Sign Up'} Main={<RegistrationSuccess/>} />
      </ThemeContext.Provider>
    </>
  )
}

export default App
