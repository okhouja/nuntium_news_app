import react from "react";
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
                    <ul className="ul-header">
                        <li className="li-header"><a  href="#"/>General</li>
                        <li className="li-header<"><a href="#"/>Bunsiness</li>
                        <li className="li-header"><a href="#"/>Entertainment</li>
                        <li className="li-header"><a href="#"/>Health</li>
                        <li className="li-header"><a href="#"/>Science</li>
                        <li className="li-header"><a href="#"/>Sports</li>
                        <li className="li-header"><a href="#"/>Technology</li>
                    </ul>
                    <div className="icons">
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
                    <div className="sign-in">
                        <i><FaUserAlt/></i>    
                    </div>      
            </div>
            <div>
            </div>
            </div>
            <img className="logo" src="./img/Logo_lightmode.svg" alt="logo"></img> 
            <div>
                </div> 
               
        </div>
    )
}
export default Header;