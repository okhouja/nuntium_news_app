import {React,useState} from 'react'
import Navbar from './Navbar';
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';

 const MobileNavbar = () => {
     const [state , setState] = useState(false);
     const handelChange = ()=>{
         setState(!state)
 
     }

     const hamurgerButton = <AiOutlineMenu className="hamburgerMenu" onClick={handelChange}/>
     const closeButton = < AiOutlineClose className="hamburgerMenu" onClick={handelChange}/>
    return (
    
        <div className="mobileNav">
            <div className=" hamburgerMenuFather" >
                {state? closeButton: hamurgerButton }
             </div>
            <Navbar state={state}/>
        </div>
    )
}
export default  MobileNavbar;