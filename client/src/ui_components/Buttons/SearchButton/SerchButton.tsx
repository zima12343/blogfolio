import style from './searchButton.module.scss'
const SearchButton = () => {
    return <div className={style.wrap}>
        <i className={"fa-solid fa-magnifying-glass " + style.searchIcon}></i>
    </div>
}

export default SearchButton;