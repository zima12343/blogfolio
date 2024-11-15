import { useContext } from "react"
import style from "./input.module.scss"
import { ThemeContext } from "../../Contexts/themeContext"
interface IProps {
    inputType: "input" | "TextArea"
    title: string,
    placeholder?: string,
    errorMessage?: string,
    type: "text" | "email" | "password",
    value: string,
    name: string,
    changeFild: (val: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Input = ({ title, placeholder, errorMessage, type, value, changeFild, name, inputType }: IProps) => {
    const theme = useContext(ThemeContext)
    if (inputType == 'input') {
        return <div className={style.input_wrap}>
            <label className={style["label"+theme]}>{title}</label>
            <input
                className={errorMessage ? style.error_input : style.input}
                type={type}
                placeholder={placeholder ?? "Placeholder"}
                value={value}
                onChange={(e) => { changeFild(e) }}
                name={name} />
            <span style={{ display: errorMessage ? "block" : "none", color: "red" }}>{errorMessage}</span>
        </div>
    }
    return <div className={style.input_wrap}>
            <label className={style["label"+theme]}>{title}</label>
            <textarea
                className={errorMessage ? style.error_input : style.input}
                placeholder={placeholder ?? "Placeholder"}
                value={value}
                onChange={(e) => { changeFild(e) }}
                name={name} />
            <span style={{ display: errorMessage ? "block" : "none", color: "red" }}>{errorMessage}</span>
        </div>
}

export default Input