import { useState } from 'react'
import style from './tasb.module.scss'
import { act } from 'react-dom/test-utils'

interface IProps {
    tabInfo: { titile: string, Comp: string, isActive: boolean }[]
}

const Tabs = ({ tabInfo }: IProps) => {

    const [activeTab, setActiveTab] = useState(0)
    return <><div className={style.wrap}>
        {tabInfo.map((x, ind) => <button
            key={ind}
            disabled={!x.isActive}
            className={activeTab === ind ? style.active : ""}
            style={{ cursor: ind == activeTab ? "default" : "pointer" }}
            onClick={() => {
                if (ind == activeTab) {
                    return;
                }
                setActiveTab(ind);
            }}
        >{x.titile}</button>)}
    </div>
    <div>
        {tabInfo[activeTab].Comp}
    </div>
    </>
}

export default Tabs