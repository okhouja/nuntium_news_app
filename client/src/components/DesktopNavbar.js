import {React, useState} from 'react'
import Navbar from './Navbar';

const DesktopNavbar = ({theme, setTheme}) => {
  
    return (
        <div className="dexktopNav">
            <Navbar theme={theme} setTheme={setTheme}/>
        </div>
    )
}
export default DesktopNavbar;