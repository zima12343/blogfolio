import { useSelector } from "react-redux";
import style from './userButton.module.scss'
import { useEffect, useRef } from "react";

const UserButton = () => {
    const {userName} = useSelector((state) => state.user)
    let shortUserName = "";
    const arr = (userName as string).split(' ');
    if(arr.length > 1) {
        shortUserName = (arr[0][0] + arr[1][0]).toUpperCase();
    } else if (arr[0].length > 1) {
        shortUserName = (arr[0][0] + arr[0][1]).toUpperCase();
    } else {
        shortUserName = "SK";
    }


    const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      spanRef.current.style.height = `${width}px`;
    }
  }, []);

    return <div className={style.wrap}>
        <span ref={spanRef} className={style.userIcon}>{shortUserName}</span>
        <span className={style.userName}>{userName}</span>
    </div>
}

export default UserButton;