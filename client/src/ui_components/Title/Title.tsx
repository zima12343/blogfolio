import { useContext } from 'react';
import style from './title.module.scss'
import { ThemeContext } from '../../Contexts/themeContext';

interface IProps {
    text: string; 
}

const Title = ({text}:IProps) => {
    const theme = useContext(ThemeContext)
    return <h1 className={style.title + " " + style[theme]}>{text}</h1>
}

export default Title;