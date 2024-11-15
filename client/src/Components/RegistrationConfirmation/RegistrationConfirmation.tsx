import { useContext } from 'react'
import Button from '../../ui_components/Buttons/Button/Button'
import style from './registrationConfirmation.module.scss'
import { ThemeContext } from '../../Contexts/themeContext'
interface IProps {
    email: string
}

const RegistrationConfirmation = ({email}:IProps) => {
    const theme = useContext(ThemeContext);
    return <div className={style.wrap}>
        <p className={style[theme]}>
            {'Please activate your account with the activation'} 
        </p>
        <p className={style[theme]}>
        link in the email <span>{email}</span>.
        </p>
        <p className={style[theme]} style={{marginBottom:"50px"}}>
            {'Please, check your email'} 
        </p>
        <Button type={'primary'} isActive={true} isFullWidth={true} title={'Go to home'} onButtonClick={() => console.log("Ok") }></Button>
    </div> 
}

export default RegistrationConfirmation