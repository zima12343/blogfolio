import style from './button.module.scss'

interface IProps {
    title: string,
    type: "primary" | "secondary" | "warning",
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    isDisabled: boolean,
    customStyle?: {} | undefined
}
const Button = ({ title, type, onClick, isDisabled, customStyle }: IProps) => {
    return <button
        className={style[type + "_btn"]}
        onClick={onClick}
        disabled={isDisabled}
        style={customStyle}
    >
        {title}
    </button>
    //todo: add style for secondary & warning buttons
}

export default Button