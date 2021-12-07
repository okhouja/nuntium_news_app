import {React,useState} from 'react'
import Navbar from './Navbar';
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import { StoreContext } from "../context/index";


 const MobileNavbar = () => {
     const [nav , setNav] = useState(false);

     const handelChange = ()=>{
         setNav(!nav);
     }

     const hamurgerButton = <AiOutlineMenu className="hamburgerMenu" onClick={handelChange}/>
     const closeButton = < AiOutlineClose className="hamburgerMenu" onClick={handelChange}/>
    return (
        <div className="mobileNavFather">
        <div className="mobileNav">
            <div className=" hamburgerMenuFather" >
                {nav? closeButton: hamurgerButton }
             </div>
             <Navbar nav={nav}/>
        </div>
        </div>
    )
}
export default  MobileNavbar;