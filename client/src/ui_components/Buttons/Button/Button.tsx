import style from './button.module.scss'
interface IProps {
    type: "warning" | 'primary' | 'default',
    isActive: boolean,
    isFullWidth: boolean,
    title: string,
    onButtonClick(): void
}

const Button = ({ type, isActive, onButtonClick, title, isFullWidth = false }: IProps) => {
    return <button
        className={style[type] + " " + (isFullWidth && style.fullWidth)}
        disabled={!isActive}
        onClick={onButtonClick}>
        {title}
    </button>
}

export default Button