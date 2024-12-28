import style from './footer.module.scss'

const Footer = () => {
    return <footer>
        <div className="container">
            <div className={style.wrap}>
                <span>©2022 Blogfolio</span>
                <span>All rights reserved</span>
            </div>
        </div>
    </footer>
}

export default Footer