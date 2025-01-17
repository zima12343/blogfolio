import style from './input.module.scss'

interface IProps {
    type: "email" | "password" | "text",
    placeholder: string,
    name: string,
    label: string | undefined,
    change: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, placeholder, name, label, change }: IProps) => {
    return <div className={style.wrap}>
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} placeholder={placeholder} name={name} id={name} onChange={change} />
    </div>
}

export default Input