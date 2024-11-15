import BurgerButton from "../../ui_components/Buttons/BurgerButton/BurgerButton";
import SearchButton from "../../ui_components/Buttons/SearchButton/SerchButton";
import UserButton from "../../ui_components/Buttons/UserButton/UserButton"; 
import style from './header.module.scss'

const Header = () => {
    return <header className={style.header}>
        <BurgerButton />
        <div className={style.right}>
            <SearchButton/>
            <UserButton userName="Artem Malkin"/>
        </div>
    </header>
}

export default Header;