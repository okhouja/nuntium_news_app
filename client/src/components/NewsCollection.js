import {React , useEffect, useState, useContext} from 'react'
import axios from "axios";
import myKey from "../context/config";
import {Link , useHistory} from "react-router-dom";
import LatestNews from './categories/LatestNews';
import MustRead from './categories/MustRead';
import { StoreContext } from "../context/index";


 const NewsCollection = (props) => {
        const contextObj = useContext(StoreContext);

    const API_KEY = myKey.news.apiKey;
    const history = useHistory();

     const [newsarray, setNewsarray] = useState([]);
     const [category, setCategory] =useState(props.location.state && props.location.state.category)
//     useEffect(() => { 
//             axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=${category}&languages=en&sort=published_desc`)
//         .then((data)=>setNewsarray(data.data.data.filter((item)=> item.image)))
//         .catch((err) => console.log(`Your had an ${err}`));
            
//         }, [category])
//         console.log(newsarray);
//         console.log(category);
        
        
        const showNews = newsarray.map((value,i)=>{
            const {author, title, image, description,source,published_at} = value;
            
            return(
                           <div  key={i}>          
                              <div className="redirectContainer">
                                   <div className="redirectimgFather" >
                                                       <img className="imgRedirect" src={image} alt={title}   />
                </div>               
                               <div className="otherredirectFather">
                               <h3 className={contextObj.store ==="light"?"redirectTitle":"redirectTitleDark"}
                       onClick={()=>
                        {if(i === 0 || i){
                         history.push({pathname: "/linkscollection", state: {value}
                        })}}}
                       >{title}</h3>
                               <p className={contextObj.store ==="light"?"redirectPuplished":"redirectPuplishedDark"}>{published_at}</p>
                                <p  className={contextObj.store ==="light"?"redirectDescription":"redirectDescriptionDark"}>{description}</p>
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
            <div> {props.location.state.category} </div>
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
export default NewsCollection;