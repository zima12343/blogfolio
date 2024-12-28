import { useNavigate } from 'react-router-dom'
import { DateFormat } from '../../common/DateFormater'
import { ICard } from '../../types/types'
import style from './card.module.scss'
import { useDispatch } from 'react-redux'
import { toFavorite } from '../../store/postSlice'
interface IProps {
    type: "small" | "middle",
    item: ICard,
}

const Card = ({ type, item }: IProps) => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    return <div className={style[`${type}_card`]}>
        <div className={style.content_wrap}>
            <img src={item.image} alt={item.title} />
            <div className={style.text_wrap}>
                <span>{DateFormat(item.date)}</span>
                <p>{item.title}</p>
            </div>
        </div>

        <div className={style.buttons}>
            <div className={style.left_btn}>
                <div className={style.like_btn}>
                    <i className="fa-regular fa-thumbs-up"></i>
                    <span>20</span>
                </div>

                <div className={style.like_btn}>
                    <i className="fa-regular fa-thumbs-down"></i>
                    <span>5</span>
                </div>
            </div>

            <div className={style.right_btn}>
                <i style={{cursor:"pointer"}} className="fa-regular fa-bookmark" onClick={() => {dispatch(toFavorite(item))}}></i>
                <i className="fa-solid fa-ellipsis" onClick={() => {
                    nav(`post/${item.id}`)
                }}></i>
            </div>
        </div>

    </div>
}

export default Card