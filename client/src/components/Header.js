import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaUserAlt,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import { Redirect } from "react-router-dom";
  

function Header ({authorized}){
  console.log(authorized);
 
  


  const today = new Date().toLocaleDateString();
  console.log(today);
  // const showDate = today.getFullYear()+'-'+today.getMonth() +'-'+today.getDate();

  function changeHandle(e) {
    e.preventDefault();
    
  };
  const handelChange = ()=>{

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
         <button onClick={handelChange}>Sign</button>

<div>
                        <i><FaUserAlt/></i>    
                    </div>    
                    
            <img className="logo" src="./img/Logo_lightmode.svg" alt="logo"></img> 
            
                
            </div>   
        </div>
        
        

    )
}
export default Header;
