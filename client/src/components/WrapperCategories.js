import {React, useContext}from 'react'
import Science from "./categories/Science";
import Technology from "./categories/Technology";
import Health from "./categories/Health";
import Entertainment from "./categories/Entertainment";
import MainContainer from './MainContainer';
import Trending from './categories/Trending';
import { StoreContext } from "../context/index";


 const WrapperCategories = () => {
    const contextObj = useContext(StoreContext);
    return (
        <div className="wrapperCategories">
        <Trending />
            <MainContainer contextObj={contextObj}/>
         <Science contextObj={contextObj}/>
            <Technology contextObj={contextObj} />
            <Health contextObj={contextObj}/>
            <Entertainment contextObj={contextObj}/> 
            <div className={contextObj.store === "light"? "goUp":"goUpDark"}><a className={contextObj.store ==="light"? "goUpanchor":"goUpanchorDark"} href="#img">˄</a></div>
            <p  className={contextObj.store === "light"? "goupWord":"goupWordDark"}>Go up</p>
        </div>
    )
}
export default WrapperCategories; 