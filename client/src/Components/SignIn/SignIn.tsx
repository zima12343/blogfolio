import { useContext, useState } from "react";
import Button from "../../ui_components/Buttons/Button/Button";
import Input from "../../ui_components/Input/Input";
import style from './signIn.module.scss'
import { ThemeContext } from "../../Contexts/themeContext";

const SignIn = () => {
    const [model, setModel] = useState({
        email: "",
        password: ""
    })
    const change = (val: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = val.target;
        setModel((prev) => ({ ...prev, [name]: value }))
    }
    const theme = useContext(ThemeContext)
    return <form className={style.wrap}>
        <div>
            <Input inputType={"input"} title={"Email"} type={"email"} value={model.email} name={"email"} changeFild={change} placeholder="Your email"></Input>
            <Input inputType={"input"} title={"Password"} type={"password"} placeholder="Your password" value={model.password} name={"password"} changeFild={change}></Input>
        </div>
        <a className={style.forgotPassword + " " + style[theme]} href="#">Forgot password?</a>
        <Button type={"primary"} isActive={true} isFullWidth={true} title={"Sign In"} onButtonClick={() => { }}></Button>
        <div className={style.signUp}>
            <span className={style[theme]}>Don't have an account?</span> <a style={{ color: "#5360cd" }} href='#'>Sign Up</a>
        </div>
    </form>
}

export default SignIn;