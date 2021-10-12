import reacr from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaUserAlt,
  } from "react-icons/fa";

function Header (){
    return(
        <div >
            <div className="container">
            <div className="nav-div">    
                    <div className="weather"></div>
                    <div className="date"></div>
                    <ul>
                        <li><a href="#"/>General</li>
                        <li><a href="#"/>Bunsiness</li>
                        <li><a href="#"/>Entertainment</li>
                        <li><a href="#"/>Health</li>
                        <li><a href="#"/>Science</li>
                        <li><a href="#"/>Sports</li>
                        <li><a href="#"/>Technology</li>
                    </ul>
                    <div className="icons">
                    <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              < FaTwitter />
            </a>
            <a href="https://www.yoiutube.com/" target="_blank">
           < FaYoutube />
            </a>
         </div>   
                    <div className="sign-in">
                        <i><FaUserAlt/></i>    
                    </div>      
            </div>
            <div>
            </div>
            </div>
            <img className="logo" src="./img/Logo_lightmode.svg" alt="logo"></img>  
        </div>
    )
}
export default Header;