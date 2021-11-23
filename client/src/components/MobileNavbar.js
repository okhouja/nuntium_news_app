import {React,useState} from 'react'
import Navbar from './Navbar';
import { AiOutlineMenu } from 'react-icons/ai'

 const MobileNavbar = () => {
     const [state , setState] = useState(false);
     const handelChange = ()=>{
         setState(!state)
 
     }
    return (
        <div className="mobileNav">
            <div className=" hamburgerMenuFather" >
             <AiOutlineMenu className="hamburgerMenu" onClick={handelChange}/>
             </div>
            <Navbar state={state}/>
           
            
        </div>
    )
}
export default  MobileNavbar;