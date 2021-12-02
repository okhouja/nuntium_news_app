import {React, useContext} from 'react';
import General from './categories/General';
import Sports from "./categories/Sports";
import Business from "./categories/Business";
import { StoreContext } from "../context/index";

 const MainContainer = () => {
    const contextObj = useContext(StoreContext);
    return (
        <div>
        <div className="mainContainerWrapper">
            <Sports contextObj={contextObj}  />
            <General  contextObj={contextObj}/>
            <Business  contextObj={contextObj}/>
        </div>
        <div className="line"></div>
        <div className="advertise">Place Your Ads Here</div>  
             
        </div>
    )
}

export default MainContainer;
