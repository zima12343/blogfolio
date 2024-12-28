import { useState } from 'react'
import style from './tabs.module.scss'
import { useSelector } from 'react-redux';

interface IProps {
    args: {}[]
}



const Tabs = ({ args }: IProps) => {
    const [tab, setTab] = useState<number>(0);
    const { theme } = useSelector((x: any) => x.theme)
    const Content = args[tab].Content
    return <div className={style.wrap}>
        <div className={style.header}>
            {args.map((x, ind) => <span className={tab === ind ? style[`${theme}-active`] : ""} key={ind} onClick={() => setTab(ind)}>{x.title}</span>)}
        </div>
        <div className={style.content}>
            <Content />
        </div>
    </div>
}

export default Tabs