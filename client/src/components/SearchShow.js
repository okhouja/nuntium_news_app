import {React, useState, useEffect, useContext} from 'react';
import axios from "axios";
import myKey from "../context/config";
import { StoreContext } from '../context/index';
import {Link, useHistory} from "react-router-dom";
import LatestNews from './categories/LatestNews';
import MustRead from './categories/MustRead';
import {useMediaQuery} from '@react-hook/media-query';

const API_KEY = myKey.news.apiKey;


const SearchShow = (props) => {
    const [search , setSearch] = useState(props.location.state.userInput);
    const [data , setData] = useState([]);
    const contextObj = useContext(StoreContext);
    const history = useHistory();
    const  matches = useMediaQuery('only screen and (max-width: 400px)')



//        useEffect(() => {
//       axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&languages=en&&keywords=${search}&sort=published_desc`)
//   .then((data)=>setData(data.data.data.filter((item)=> item.image)))
//   .catch((err) => console.log(`Your had an ${err}`));
      
//   }, [search])
//   console.log(search);
//   console.log(data);

  const showNews = data.map((value,i)=>{
    const {author, title, image, description,source,published_at} = value;
    
    return(
                   <div  key={i}>          
                      <div className="redirectContainer">
                           <div className="redirectimgFather" >
                                               <img className="imgRedirect" src={image} alt=""   />
        </div>               
                       <div className="otherredirectFather">
                       <h3 className={contextObj.store ==="light"?"redirectTitle":"redirectTitleDark"}
               onClick={()=>
                {if(i === 0 || i){
                 history.push({pathname: "/linkscollection", state: {value}
                })}}}
               >{title}</h3>
                       <p className={contextObj.store ==="light"?"redirectPuplished":"redirectPuplishedDark"}>{published_at}</p>
                       <p  className={contextObj.store ==="light"?"redirectDescription":contextObj.store==="dark"&& matches?"redirectDescriptionDarkMobile":"redirectDescriptionDark"}>{description}</p>

                        <div className="down">
                     <div className="authorFather"><p className={contextObj.store ==="light"?"redirectAuthorWord":"redirectAuthorWordDark"}>Author: </p> <p className={contextObj.store ==="light"?"redirectAuthor":"redirectAuthorDark"}> {author}</p></div>
                     <div className="authorFather"><p className={contextObj.store ==="light"?"redirectAuthorWord":"redirectAuthorWordDark"}>Source: </p> <p className={contextObj.store ==="light"?"redirectAuthor":"redirectAuthorDark"}> {source}</p></div>
                     </div> 
 
                     </div>           
                    </div>
                        </div> 
               )
  });
    return (
     <div className={contextObj.store === "light"? "redirectContainerFather":"redirectContainerFatherDark"} >
             <LatestNews />
           
    <div  className="redirectFather"> 
    <div style={{marginTop: "4vh"}} className={contextObj.store ==="light"?"redirectTopTitle":"redirectTopTitleDark"}> 
    <div> {props.location.value} </div>
    <div className="lineredirect"></div>
    </div>
              {showNews}  
              <div className="goUpRedirect">        
              <Link className="backLink" to="/home"><p className="back">Back</p></Link>
       <a className={contextObj.store ==="light"?"goUpanchor":"goUpanchorredirectDark"} href="#img">Go Up</a>
       <p className={contextObj.store ==="light"?"goupwordRedirect":"goupwordRedirectDrak"}>ᐱ</p>

       </div>    
            </div>
            <MustRead /> 
            </div>
    )
}
export default SearchShow;