import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";

 const Footer = () => {
     const centerText = {
        textAlign: "center",
        wordSpacing: "5px",
        fontWeight: "bolder",

     }
     const wordSpace = {
         wordSpacing: "5px",
         margin: "auto",
     }

     const color = {
        wordSpacing: "5px",
        color: "blue",

     }
    return (
        <div>
            <div className="copyrightFather">

                <div className="rightFooter">
                    <div className="aboutUs">
                        <p style={centerText}>ABOUT US</p>
                       <p style={centerText} >NUNTUINM NEWS</p> 
                       <p></p>
                       </div>
                </div>

                    
                    <div className="midFooter">
                         <div className="iconFatherFooter">
                    <a className="iconFooter" href="https://www.facebook.com/" target="_blank">
                     <FaFacebook /></a>
            
                    <a  className="iconFooter" href="https://www.instagram.com/" target="_blank">
                    <FaInstagram /></a>
            
                    <a  className="iconFooter" href="https://www.twitter.com/" target="_blank">
                   < FaTwitter />   </a>
         
                   <a  className="iconFooter" href="https://www.yoiutube.com/" target="_blank">
                   < FaYoutube /></a>

                          </div>   

                        <div>
                              <ul className="ulFooter">
                                 <li className="liFooter"><a  href="#"/>General</li>
                                 <li className="liFooter"><a href="#"/>Bunsiness</li>
                                 <li className="liFooter"><a href="#"/>Entertainment</li>
                                 <li className="liFooter"><a href="#"/>Health</li>
                                 <li className="liFooter"><a href="#"/>Science</li>
                                 <li className="liFooter"><a href="#"/>Sports</li>
                                 <li className="liFooter"><a href="#"/>Technology</li>
                             </ul>
                        </div>

                <div className="copyright">
                    <p  style={{wordSpacing: "5px", margin: "auto"}} className="copyrightnfo">Powered By <a style={color} href="https://mediastack.com/">Meidastack</a> </p>
                    <p style={{wordSpacing: "5px"}} className="copyrightnfo">Made by Ahmed & Omar & Kenana at DCI © 2021</p>
                    <p style={wordSpace} className="copyrightnfo">All rights reserved</p>
                </div>
            </div>

            <div className="leftFooter">
            <img className="logoFooter" src="./img/Logo_lightmode.svg" alt="logo"></img> 

            </div>
            
        </div>
        </div>
    )
}
export default Footer;
