import React from 'react'
import Science from "./categories/Science";
import Technology from "./categories/Technology";
import Health from "./categories/Health";
import Entertainment from "./categories/Entertainment";
import MainContainer from './MainContainer';
import Trending from './categories/Trending';

 const WrapperCategories = () => {
    return (
        <div className="wrapperCategories">
        <Trending />
            <MainContainer />
         <Science />
            <Technology />
            <Health />
            <Entertainment /> 
            <div className="goUp"><a className="goUpanchor" href="#img">˄</a></div>
            <p className="goupWord">Go up</p>
        </div>
    )
}
export default WrapperCategories; 