import {React , useEffect, useState} from 'react'
import axios from "axios";
import myKey from "../context/config";
import {Link} from "react-router-dom";

 const NewsCollection = (props) => {
    const API_KEY = myKey.apiKey;

     const [newsarray, setNewsarray] = useState([]);
     const [category, setCategorx] =useState(props.location.state && props.location.state.category)
    // useEffect(() => {
        
    //         axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=${category}&languages=en&sort=published_desc`)
    //     .then((data)=>setNewsarray(data.data.data.filter((item)=> item.image)))
    //     .catch((err) => console.log(`Your had an ${err}`));
            
    //     }, [category])
    //     console.log(newsarray);
    //     console.log(category);
    
        const showNews = newsarray.map((item,i)=>{
            const {author, title, image, url, description,source,published_at} = item;
            
            return(
                           <div  key={i}>          
                              <div className="redirectContainer">
                                   <div className="redirectimgFather" >
                                                       <img className="imgRedirect" src={image} alt={title} width="200px" height="250px"   />
                </div>               
                               <div className="otherredirectFather">
                               <h3 className="redirectTitle"><a href={url}>{title}</a></h3>
                               <p className="redirectPuplished">{published_at}</p>
                                <p style={{height: "8vh"}} className="redirectDescription">{description}</p>
                               <p className="redirectAuthor">{author}</p>
                               <p className="redirectSource">{source}</p> 
         
                             </div>           
                            </div>
                                </div> 
                       )
          });
            return (
             <div >
            <div  className="redirectFather">     
                      {showNews}
                      <Link className="back" to="/home"><button className="backButton">Back</button></Link>
               <div className="goUpRedirect"><a className="goUpanchor" href="#img">˄</a></div>
               </div> 
              
                   
                    </div>
               
            )
}
export default NewsCollection;
