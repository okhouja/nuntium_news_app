import React from 'react';
import Signup from "./Signup";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaUserAlt,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  

function Header (){

  const today = new Date().toLocaleDateString();
  // const showDate = today.getFullYear()+'-'+today.getMonth() +'-'+today.getDate();

  function changeHandle(e) {
    e.preventDefault();
    
  }
    return(
        <div >
          <div className="headerFather" >
          <div className="weather"></div>
                    <div className="date">
                      <input type="text"   onChange={changeHandle} value={today} />
                      </div>
           
<div className="iconFather">
                    <a className="icon" href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a  className="icon" href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a  className="icon" href="https://www.twitter.com/" target="_blank">
              < FaTwitter />
            </a>
            <a  className="icon" href="https://www.yoiutube.com/" target="_blank">
           < FaYoutube />
            </a>
         </div>   

<div>
                      <Link className="signUp" to="signup">  <i><FaUserAlt/></i> </Link>
                      <Link className="signUp" to="login"><button>Log In</button></Link>


                    </div>    
                    
            <img className="logo" src="./img/Logo_lightmode.svg" alt="logo"></img> 
            
                
            </div>   
        </div>
        
        

    )
}
export default Header;
