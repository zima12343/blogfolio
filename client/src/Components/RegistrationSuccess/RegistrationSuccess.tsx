import { useContext } from "react"
import Button from "../../ui_components/Buttons/Button/Button"
import style from "./registrationSuccess.module.scss"
import { ThemeContext } from "../../Contexts/themeContext"

const RegistrationSuccess = () => {
    const theme = useContext(ThemeContext)
    return <div className={style.wrap}>
        <p className={style[theme]}>Email confirmed.</p>
        <p className={style[theme]} style={{ marginBottom: "48px" }}>Your registration is now completed</p>

        <Button type={"primary"} isActive={true} isFullWidth={true} title={"Go to home"} onButtonClick={() => { }}></Button>
    </div>
}

export default RegistrationSuccess