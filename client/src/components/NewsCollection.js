import {React , useEffect, useState} from 'react'
import axios from "axios";
import myKey from "../context/config";
import {Link , useHistory} from "react-router-dom";
import LatestNews from './categories/LatestNews';
import MustRead from './categories/MustRead';

 const NewsCollection = (props) => {
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
                               <h3 className="redirectTitle"
                       onClick={()=>
                        {if(i === 0 || i){
                         history.push({pathname: "/linkscollection", state: {value}
                        })}}}
                       >{title}</h3>
                               <p className="redirectPuplished">{published_at}</p>
                                <p  className="redirectDescription">{description}</p>
                                <div className="down">
                             <div className="authorFather"><p className="redirectAuthorWord">Author: </p> <p className="redirectAuthor"> {author}</p></div>
                             <div className="authorFather"><p className="redirectAuthorWord">Source: </p> <p className="redirectSource"> {source}</p></div>
                             </div> 
         
                             </div>           
                            </div>
                                </div> 
                       )
          });
            return (
             <div >
                     <LatestNews />
                    <MustRead /> 
            <div  className="redirectFather"> 
            <div className="redirectTopTitle">  {props.location.state.category}
            <div className="line"></div>
            </div>
                      {showNews}            
                      <Link className="backLink" to="/home"><p className="back">Back</p></Link>
               <div className="goUpRedirect"><a className="goUpanchor" href="#img">˄</a></div>
               <p className="goupwordRedirect">Go up</p>
               </div>    
                    </div>
            )
}
export default NewsCollection;