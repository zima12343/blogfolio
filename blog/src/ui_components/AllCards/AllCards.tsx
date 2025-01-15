import { useDispatch, useSelector } from 'react-redux'
import { ICard } from '../../types/types'
import Card from '../Card/Card'
import style from './allCards.module.scss'
import { useEffect } from 'react'
import { GetPosts } from '../../store/postSlice'

const AllCards = () => {

    const dispatch = useDispatch();
    const { page, posts } = useSelector((state: any) => state.posts)
    useEffect(() => {
        dispatch(GetPosts(page));
    }, [page, posts])

    if (!posts || posts.length !== 12) {
        return <></>
    }

    return <div className={style.wrap}>
        <div className={style.left}>
            {posts.slice(0, 6).map((x: ICard) => <Card key={x.id} type={"middle"} item={x} />)}
        </div>
        <div className={style.right}>
            {posts.slice(6).map((x: ICard) => <Card key={x.id} type={"small"} item={x} />)}
        </div>
    </div>
}

export default AllCards;