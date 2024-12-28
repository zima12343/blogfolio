import { useDispatch, useSelector } from 'react-redux';
import style from './navbar.module.scss'
import UserButton from '../../../../ui_components/UserButton/userButton';
import { NavLink } from 'react-router-dom';
import { toggleTheme } from '../../../../store/themeSlice';

const Navbar = () => {
    const { isActiveNavbar } = useSelector((state: any) => state.navbar);
    const { isLogin } = useSelector((state: any) => state.user);

    const { theme } = useSelector((state: any) => state.theme);
    const dispatch = useDispatch();

    return <div className={`${style.navbar} ${isActiveNavbar && style.active}`}>
        <div className={style.up}>
            {isLogin && <UserButton />}
            <NavLink className={(x) => { return `${style.Nav} ${x.isActive ? style.activeNav : ""}` }} to={'/'}>Home</NavLink>
            {isLogin && <NavLink className={(x) => { return `${style.Nav} ${x.isActive ? style.activeNav : ""}` }} to={'profile'}>Profile</NavLink>}
        </div>
        <div className={style.down}>
            <div className={style.theme_wrap}>
                <span onClick={() => { theme == 'dark' ? dispatch(toggleTheme('light')) : "" }}>
                    <i className={`fa-regular fa-sun ${theme == 'light' ? style.active_theme : ""}`}></i>
                </span>
                <span onClick={() => { theme == 'light' ? dispatch(toggleTheme('dark')) : "" }}>
                    <i className={`fa-regular fa-moon ${theme == 'dark' ? style.active_theme : ""}`}></i>
                </span>
            </div>
            {isLogin
                ? <span style={{color: '#313037'}} className={`${style.Nav} ${style.logIn_btn}`}>Log Out</span>
                : <span style={{color: '#313037'}} className={`${style.Nav} ${style.logIn_btn}`}>Sign In</span>
            }
        </div>

    </div>
}

export default Navbar