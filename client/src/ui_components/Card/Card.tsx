import dateFormat from "../../Extensions/dateFormat";
import style from "./card.module.scss"

interface IProps {
    type: "big" | "middle" | "small",
    id: number,
    image?: string,
    text: string,
    date: Date,
    title: string,
}
const Card = ({ type, image, text, date, title }: IProps) => {
    const footer = <div className={style.footerWrap}>
        <div className={style.iconBlock}>
            <i className={"fa-regular fa-thumbs-up " + style.footerIcon}></i>
            <i className={"fa-regular fa-thumbs-down " + style.footerIcon}></i>
        </div>
        <div className={style.iconBlock}>
            <i className={"fa-regular fa-bookmark " + style.footerIcon}></i>
            <i className={"fa-solid fa-ellipsis " + style.footerIcon}></i>
        </div>
    </div>
    let imgJsx: JSX.Element;
    if (!image) {
        imgJsx = <></>;
    } else if (image == 'hash') {
        imgJsx = <img className={style[`${type}Img`]} src={"https://robohash.org/$" + crypto.randomUUID() + "?set=set4&bgset=bg2&size=350x350"} alt="" />
    } else {
        imgJsx = <img className={style[`${type}Img`]} src={image} alt="logo" />
    }

    switch (type) {
        case "big":
        case "small": return <div className={style.card}>
            <div className={style.wrap}>
                <div>
                    <span className={style.date}>{dateFormat(date)}</span>
                    <p className={style.title}>{title}</p>
                    {type == "big" ? <p className={style.text}>{text}</p> : <></>}
                </div>
                {<div>{imgJsx}</div>}
            </div>
            {footer}
        </div>
        case "middle": return <div className={style.middleCard}>
                 {<div>{imgJsx}</div>}
                 <span className={style.date}>{dateFormat(date)}</span>
                 <p className={style[type + 'Title']}>{title}</p>
                 {footer}
            </div>
    }
}

export default Card