import {React, useState, useContext} from 'react'
import { StoreContext } from "../context/index";

import Navbar from './Navbar';

const DesktopNavbar = () => {
    const contextObj = useContext(StoreContext);

  
    return (
        <div className="dexktopNav">
            <Navbar contextObj={contextObj}/>
        </div>
    )
}
export default DesktopNavbar;