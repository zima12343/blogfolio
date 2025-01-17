import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import style from './layout.module.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useSelector } from 'react-redux'

const Layout = () => {

    const { theme } = useSelector((state: any) => state.theme);
    document.body.className = style[theme + '-theme'];
    return <div className={style.wrap}>
        <Header />
        <Navbar />
        <div className={style.main}>
            <Outlet />
        </div>
        <Footer />
    </div>
}

export default Layout