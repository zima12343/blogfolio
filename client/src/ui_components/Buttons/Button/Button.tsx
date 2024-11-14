import style from './button.module.scss'
interface IProps {
    type: "warning" | 'primary' | 'default',
    isActive: boolean,
    title: string,
    onButtonClick(): void
}

const Button = ({ type, isActive, onButtonClick, title }: IProps) => {
    return <button
        className={style[type]}
        disabled={!isActive}
        onClick={onButtonClick}>
        {title}
    </button>
}

export default Button