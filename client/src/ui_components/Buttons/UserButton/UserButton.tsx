import style from './userButton.module.scss'

interface IProps {
    userName?: string
}

const UserButton = ({userName}:IProps) => {
    if(!userName){
        return <i className={"fa-regular fa-user " + style.noUserIcon}></i>
    }
    return <div className={style.wrap}>
        <span className={style.userIcon}>{userName.split(' ').reduce((acc:string, val) => acc += val[0], "")}</span>
        <span className={style.userName}>{userName}</span>
    </div>

}

export default UserButton