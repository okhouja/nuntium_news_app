import {ReactChild, useState} from 'react'
import poweredStyle from "./styles/style";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";

 const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);





     const centerText = {
        textAlign: "center",
        wordSpacing: "5px",
        fontWeight: "bolder",

     }
     const wordSpace = {
         wordSpacing: "5px",
         margin: "auto",
     }
     const powered = {
         color: "blue"
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
                              <li className="liFooter" onClick={() => setMenuOpen(false)}>
          <a className="footerLink" href="#general">
            GENERAL
          </a>
        </li>
        <li className="liFooter" onClick={() => setMenuOpen(false)}>
          <a  className="footerLink" href="#business">
            BUSINESS
          </a>
        </li>
        <li className="liFooter" onClick={() => setMenuOpen(false)}>
          <a className="footerLink"  href="#sports">
            SPORT
          </a>
        </li>
        <li className="liFooter" onClick={() => setMenuOpen(false)}>
          <a className="footerLink" href="#health">
            HEALTH
          </a>
        </li>
        <li className="liFooter" onClick={() => setMenuOpen(false)}>
          <a className="footerLink" href="#science">
            SCIENCE
          </a>
        </li>
        <li className="liFooter" onClick={() => setMenuOpen(false)}>
          <a className="footerLink" href="#technology">
            TECHNOLOGY
          </a>
        </li>
        <li className="liFooter" onClick={() => setMenuOpen(false)}>
          <a className="footerLink" href="#entertainment">
            ENTERTAINMENT
          </a>
        </li>
                             </ul>
                        </div>

                <div className="copyright">
                    <p  style={{wordSpacing: "5px", margin: "auto"}} className="copyrightnfo">Powered By <a 
             
                 onMouseOver={()=>{
                         setHover(true);
                    }}
                    onFocus={()=>{
                        setActive(true);
                    }}
                    onMouseOut={()=>{
                        setActive(false)
                    }}
                    onMouseLeave={()=>{
                        setHover(false)
                    }}
                                         
                     style={{
                         ...poweredStyle.normal,
                         ...(active? poweredStyle.active: hover? poweredStyle.hover: null),
                     }}
                    href="https://mediastack.com/">Meidastack</a> </p>
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
