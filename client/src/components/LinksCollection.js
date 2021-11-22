import {React, useState} from 'react';
import {Link} from "react-router-dom";
import LatestNews from './categories/LatestNews';
import MustRead from './categories/MustRead';
import {
   EmailShareButton,
   FacebookShareButton,
   InstapaperShareButton,
   TwitterShareButton,
   WhatsappShareButton,
 } from "react-share";

import {
   EmailIcon,
   FacebookIcon,
   InstapaperIcon,
   TwitterIcon,
   WhatsappIcon,
 } from "react-share";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
 
 const LinksCollection = (props) => {
const body= "Email";
const separator = " ";
   const url = "http://localhost:3000/linkscollection";
          
    const [linkArr, setLinkArr] = useState(props.location.state.value);
    console.log(linkArr);
    return (
      <div className="linkContainerFather">
        <MustRead className="mustreadContainerLink"  />
        <div className="linkContainer">
        
            <div className="linkFather">
               <div className="topFather">
            <p className="linkCategory">{linkArr.category}</p>
            <p className="linkPuplish">{linkArr.published_at}</p> 
            </div>

           <div className="linkmidContainer">
           <div className="linkmidFather"> 
           <div className="linkTitle">{linkArr.title}</div> 

           <div className="linkInfoFather">
             <div>

           <div className="linkInfo"><p className="linkAuthorWord">Author:</p><p className="linkAuthor">{linkArr.author}</p></div> 
           <div className="linkInfo"><p className="linkAuthorWord">Source:</p><p className="linkAuthor">{linkArr.source}</p></div> 
           </div>
          
           <div>
           <FontAwesomeIcon className="shareIcon" icon={faShareAlt} />

           <FacebookShareButton  url={url} appid={306951887722234}>
              <FacebookIcon className="otherIcons" size={32} round={true} >
              {"share" + url}
              </FacebookIcon>
            </FacebookShareButton>

            <InstapaperShareButton  url={url}>
              <InstapaperIcon className="otherIcons" size={32} round={true} >
              {"share" + url}
              </InstapaperIcon>
            </InstapaperShareButton>

            <TwitterShareButton  url={url} >
              <TwitterIcon className="otherIcons" size={32} round={true} >         
              {"share" + url}
              </TwitterIcon>
            </TwitterShareButton>

            <WhatsappShareButton  url={url} >
              <WhatsappIcon className="otherIcons" size={32} round={true} >
              {"share" + url}
              </WhatsappIcon>
            </WhatsappShareButton>

          <EmailShareButton  url={url} body={body} separator={separator}  >
              <EmailIcon className="otherIcons" size={32} round={true} >
              </EmailIcon>
            </EmailShareButton> 
            </div>    
            </div>    

            </div>
           </div>

          <div className="imgDiv">
        <img className="imgLink" src={linkArr.image} alt={linkArr.title} />
      
           </div>
        <div className="seemoreFather">
           <div className="linkDes">{linkArr.description} </div><div className="seemore"><a href={linkArr.url}>See more</a></div> 
           </div>
           <div className="backFather">
           <FontAwesomeIcon className="shareIcon" icon={faShareAlt} />
           <FacebookShareButton  url={url} appid={306951887722234}>
              <FacebookIcon size={32} round={true} >
              {"share" + url}
              </FacebookIcon>
            </FacebookShareButton>

            <InstapaperShareButton  url={url}>
              <InstapaperIcon size={32} round={true} >
              {"share" + url}
              </InstapaperIcon>
            </InstapaperShareButton>

            <TwitterShareButton  url={url} >
              <TwitterIcon size={32} round={true} >     
              {"share" + url}
              </TwitterIcon>
            </TwitterShareButton>
            
            <WhatsappShareButton   url={url} >
              <WhatsappIcon size={32} round={true} >
              {"share" + url}
              </WhatsappIcon>
            </WhatsappShareButton>

          <EmailShareButton url={url} body={body} separator={separator}  >
              <EmailIcon size={32} round={true} >
              </EmailIcon>
            </EmailShareButton> 
            </div>


            <div className="goUpLink">    
            <div className="advertiseLink"> place your Ads here</div>   
                      <Link className="backLink" to="/home"><p className="back">Back</p></Link>
               <a className="goUpanchorLink" href="#img">Go Up</a>
               <p className="goupwordLink">ᐱ</p>

               </div>    
               </div>
              
              
           </div>
          <LatestNews /> 
           </div>
        
    )
}
export default LinksCollection;
