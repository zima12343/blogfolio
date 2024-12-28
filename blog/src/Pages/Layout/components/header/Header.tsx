import { useState } from 'react'
import style from './header.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar } from '../../../../store/navbarSlice';
import { useNavigate } from 'react-router-dom';
import UserButton from '../../../../ui_components/UserButton/userButton';

const Header = () => {

    const [isActiveSearch, setIsActiveSearch] = useState<boolean>(false);

    const { isActiveNavbar } = useSelector((state:any) => state.navbar);
    const { isLogin } = useSelector((state:any) => state.user);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const toggleNav = () => {
        dispatch(toggleNavbar(!isActiveNavbar))
    }
    
    
    return <header className={style.header}>
        <div className={style.leftSide}>
            {!isActiveNavbar && <i style={{color: '#fff'}} className={`fa-solid fa-bars ${style.btn}`} onClick={toggleNav}></i>}
            {isActiveNavbar && <i style={{color: '#fff'}} className={`fa-solid fa-xmark ${style.btn}`}  onClick={toggleNav}></i>}
        </div>
        {isActiveSearch && <input style={{color: '#fff'}} className={style.search} type='text' placeholder='Search...'></input>}
        <div className={style.rightSide}>
            <i style={{color: '#fff'}} className={`fa-solid fa-magnifying-glass ${style.btn}`} onClick={() => setIsActiveSearch(!isActiveSearch)}></i>
            {!isLogin && <i style={{color: '#fff'}} className={`fa-regular fa-user ${style.btn}`} onClick={() => nav("/signin")}></i>}
            {isLogin && <UserButton/>}
        </div>
    </header>
}

export default Header