import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ICard } from "../../types/types";
import Card from "../Card/Card";

const FavoriteCards = () => {
    const {favoritePosts} = useSelector((x:any) => x.posts);

    return <div style={{display:'flex', flexWrap:"wrap", gap:'20px', justifyContent:'space-between'}}>
        {favoritePosts.map((x:ICard) => <Card key={x.id} type={"middle"} item={x}></Card>)}
    </div>
}

export default FavoriteCards;