import { useEffect, useState } from "react";
import Input from "../../ui_components/Input/Input";
import Title from "../../ui_components/Title/Title";
import style from "./signIn.module.scss"
import Button from "../../ui_components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/signInSlice";
import { useNavigate } from "react-router-dom";
import { Me } from "../../store/userSlice";

interface ILogin {
    email: string,
    password: string
}

const SingIn = () => {
    const [login, setLogin] = useState<ILogin>({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const { auth } = useSelector((state: any) => state.signIn);
    const setLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const nav = useNavigate();
    useEffect(() => {
        if (auth) {
            dispatch(Me());
            nav("/", { replace: true });
        }
    }, [auth])
    const { error } = useSelector((state: any) => { return state.signIn })

    return <section className={style.section}>
        <div className="container">

            <Title title={"Sign In"}></Title>
            <form className={style.form}>
                <Input type={"email"} placeholder={"Your email"} name={"email"} label={"Email"} change={setLoginData}></Input>
                <Input type={"password"} placeholder={"Your password"} name={"password"} label={"Password"} change={setLoginData}></Input>
                <span className={style.forgotPass}>Forgot password?</span>
                <Button title={"Sign In"}
                    type={"primary"}
                    onClick={(e) => { e.preventDefault(); dispatch(signIn(login)) }}
                    isDisabled={false}
                    customStyle={{ width: "100%", marginTop: "45px" }} />
                <div className={style.wrap}>
                    <p className={style.noAccount}>Don't have an account?</p> 
                    <span className={style.signUp} onClick={() => {nav("/signup", { replace: true });}}>Sign Up</span>

                </div>
                {error && <span style={{ color: "red", fontSize: "12px" }}>{error ?? ""}</span>}
            </form>
        </div>
    </section>
}

export default SingIn;