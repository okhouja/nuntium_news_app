import {React, useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import LatestNews from './categories/LatestNews';
import MustRead from './categories/MustRead';
import axios from 'axios';
import Loading from './Loading';
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

  const [content, setContent] = useState([]);
  const [load, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:5000/articles", {
      credentials: "include",
    })
      .then((data) => setContent(data.data))
  };
  console.log(content);
  

const newsContent = Object.entries(content).map(([key, value],i)=>{
  if(i<1){
   return(
    <div>
      <p className="content">{value.content}</p>
    </div>
  )
   }
  
})

const body= "Email";
const separator = " ";
   const url = "http://localhost:3000/linkscollection";
          
    const [linkArr, setLinkArr] = useState(props.location.state.value);
    console.log(linkArr);

    if (load) return <Loading />;
    return (
      <div className="linkContainerFather">
        <MustRead  />
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
       
        <img className="imgLink" src={linkArr.image}  alt={linkArr.title} />
      
           </div>
        <div className="seemoreFather">
           <div >{newsContent} </div> 
           </div>
           <div className="backFather">
           

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
