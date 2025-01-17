import { useEffect, useState } from 'react';
import Button from '../../ui_components/Button/Button';
import Input from '../../ui_components/Input/Input';
import Title from '../../ui_components/Title/Title'
import style from './registrationConfirmation.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { userActivation } from '../../store/signUpSlice';
import { useNavigate } from 'react-router-dom';

interface IActivation {
    uid : string,
    token: string
}

const RegistrationConfirmation = ()=> {

    const [activationData, setActivationData] = useState<IActivation>({
        uid : "",
        token: ""
    });

    const setLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActivationData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const {isActivated} = useSelector((state:any) => state.signUpSl)
    const dispatch = useDispatch()
    const nav = useNavigate();

    useEffect(()=> {
        if(isActivated) {
            nav('/');
        }
    }, [isActivated])

    return <div className="container">
        <Title title={"Registration Confirmation"}/>
        <div className={style.wrap}>
            <span>Please write your activation token and key from email</span>

            <form className={style.form}>
                <Input type={"text"} placeholder={"Key"} name={"uid"} label={"Key"} change={setLoginData}></Input>
                <Input type={"text"} placeholder={"Token"} name={"token"} label={"Token"} change={setLoginData}></Input>
                <Button title={"Send"}
                    type={"primary"}
                    onClick={(e) => { e.preventDefault(); dispatch(userActivation(activationData))}}
                    isDisabled={false}
                    customStyle={{ width: "100%", marginTop: "45px" }} />
            </form>
        </div>
    </div>
}


export default RegistrationConfirmation