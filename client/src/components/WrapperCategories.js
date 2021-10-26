import React from 'react'
import General from './General';
import Sports from "./Sports"
import Business from "./Business";
import Science from "./Science";
import Technology from "./Technology";
import Health from "./Health";
import Entertainment from "./Entertainment";






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
        </div>
    )
}
export default WrapperCategories; 
