import { useContext } from "react"
import Title from "../../ui_components/Title/Title"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import style from './template.module.scss'
import { ThemeContext } from "../../Contexts/themeContext"

interface IProps {
    title: string,
    Main: JSX.Element

}

const Template = ({ title, Main }: IProps) => {
    const theme = useContext(ThemeContext);
    return <div className={style.app + " " + style[theme]}>
        <Header />
        <section className={style.main}>
            <div className="container">
                <Title text={title} />
                {Main} 
            </div>
        </section>
        <Footer />
    </div>
}

export default Template