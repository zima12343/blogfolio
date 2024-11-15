import style from './burgerButton.module.scss'

const BurgerButton = () => {
    return <div className={style.wrap}>
        <i className={"fa-solid fa-bars " + style.burger}></i>
    </div>
}

export default BurgerButton