import React from 'react';
import General from './categories/General';
import Sports from "./categories/Sports";
import Business from "./categories/Business";

 const MainContainer = () => {
    return (
        <div>
        <div className="mainContainerWrapper">
            <Sports />
            <General />
            <Business />
        </div>
        <div className="line"></div>
        <div className="advertise">  </div>  
             
        </div>
    )
}

export default MainContainer;
