import { useState } from 'react';
import Input from '../../ui_components/Input/Input';
import style from './signUp.module.scss'
import Button from '../../ui_components/Buttons/Button/Button';

const SignUp = () => {
    const [model, setModel] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const changModel = (val: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = val.target;
        setModel((prev) => ({ ...prev, [name]: value }))
    }

    return <form className={style.wrap}>
        <Input inputType={'input'} title={'Name'} type={'text'} value={model.name} name={'name'} placeholder='Your name' changeFild={changModel}></Input>
        <Input inputType={'input'} title={'Email'} type={'email'} value={model.email} name={'email'} placeholder='Your email' changeFild={changModel}></Input>
        <Input inputType={'input'} title={'Password'} type={'password'} value={model.password} name={'password'} placeholder='Your password' changeFild={changModel}></Input>
        <Input inputType={'input'} title={'Confirm password'} type={'password'} value={model.confirmPassword} name={'confirmPassword'} placeholder='Confirm password' changeFild={changModel}></Input>
        <Button type={'primary'} isActive={true} isFullWidth={true} title={'Sign Up'} onButtonClick={() => console.log(model)}></Button>

        <div className={style.signIn}>
            <span>Already have an account?</span> <a href='#'>Sign In</a>
        </div>
    </form>
}

export default SignUp;