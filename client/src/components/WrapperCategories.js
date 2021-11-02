import React from 'react'
import General from './categories/General';
import Sports from "./categories/Sports"
import Business from "./categories/Business";
import Science from "./categories/Science";
import Technology from "./categories/Technology";
import Health from "./categories/Health";
import Entertainment from "./categories/Entertainment";

 const WrapperCategories = () => {
    return (
        <div className="wrapperCategories">
            <General />
            <Sports />
            <Business />
            <Science />
            <Technology />
            <Health />
            <Entertainment />
            <div className="goUp"><a className="goUpanchor" href="#img">˄</a></div>
        </div>
    )
}
export default WrapperCategories; 