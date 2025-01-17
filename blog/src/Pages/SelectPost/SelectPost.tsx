import { useParams } from "react-router-dom"
import Title from "../../ui_components/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetPost } from "../../store/postSlice";
import style from './selectPost.module.scss'
const SelectPost = () => {
    const { id } = useParams();
    const { selectPost } = useSelector((state: any) => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetPost(id));
    }, []);

    if (!selectPost) {
        return <div className="container">
            <Title title={"Loading..."} />
        </div>
    }

    return <div className="container">
        <Title title={selectPost.title} />
        <div className={style.img_wrap}>
            <img src={selectPost.image} alt={selectPost.title} />
        </div>
        <div className={style.text}>
            {selectPost.description && selectPost.description.split('\n').map((x: string) => <p>{x}</p>)}
        </div>

    </div>
}

export default SelectPost