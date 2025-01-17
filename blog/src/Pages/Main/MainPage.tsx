import { ICard, ITabArgs } from "../../types/types";
import AllCards from "../../ui_components/AllCards/AllCards";
import Card from "../../ui_components/Card/Card";
import FavoriteCards from "../../ui_components/FavoriteCards/FavoriteCards";
import Tabs from "../../ui_components/Tabs/Tabs";
import Title from "../../ui_components/Title/Title";

const MainPage = () => {
 
    const tab: ITabArgs[] = [
        {
            title: "All",
            Content: AllCards
        },
        {
            title: "Favorite",
            Content: FavoriteCards
        }
    ]
    return <div className="container">
        <Title title={"Blog"}></Title>
        <Tabs args={tab}/>
    </div>
}

export default MainPage;