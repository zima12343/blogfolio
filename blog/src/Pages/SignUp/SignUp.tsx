import { useNavigate } from "react-router-dom"
import Button from "../../ui_components/Button/Button"
import Input from "../../ui_components/Input/Input"
import Title from "../../ui_components/Title/Title"
import style from './signUp.module.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signUp } from "../../store/signUpSlice"
import { IUserLogin } from "../../types/types"


const SignUp = () => {
    const [login, setLogin] = useState<IUserLogin>({
        userName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const dispatch = useDispatch();
    const setLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const {user} = useSelector((state:any) => state.signUpSl)
    const nav = useNavigate();
    useEffect(() => {
        if(user) {
            nav("/confirmation", { replace: true });
        }
    },[user])
    
    return <div className='container'>
        <Title title={"Sign Up"} />
        <form className={style.form}>
            <Input type={"text"} placeholder={"Your name"} name={"userName"} label={"Name"} change={setLoginData}></Input>
            <Input type={"email"} placeholder={"Your email"} name={"email"} label={"Email"} change={setLoginData}></Input>
            <Input type={"password"} placeholder={"Your password"} name={"password"} label={"Password"} change={setLoginData}></Input>
            <Input type={"password"} placeholder={"Confirm password"} name={"passwordConfirm"} label={"Confirm password"} change={setLoginData}></Input>
            <Button title={"Sign Up"}
                type={"primary"}
                onClick={(e) => { e.preventDefault(); dispatch(signUp(login)); }}
                isDisabled={false}
                customStyle={{ width: "100%", marginTop: "45px" }} />
            <div className={style.wrap}>
                <p className={style.noAccount}>Already have an account?</p>
                <span className={style.signUp} onClick={() => { nav("/signin", { replace: true }); }}>Sign In</span>
            </div>
        </form>
    </div>
}

export default SignUp