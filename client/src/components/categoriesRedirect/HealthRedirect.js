import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { Link } from 'react-router-dom';


 const HealthRedirect = () => {
     const [health, setHealth] = useState([]);
     const API_KEY = myKey.apiKey;
     
     
//      useEffect(() => {
//       axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=health&languages=en&sort=published_desc`)
// .then((data)=>setHealth(data.data.data.filter((item)=> item.image)));
//   }, [])
//   console.log(health);

  const healthNews = health.map((item,i)=>{
    const {author, title, image, url, description, published_at,source}= item;
    return(
      <div  key={i}>          
         <div className="redirectContainer">
              <div className="redirectimgFather" >
                                  <img className="imgRedirect" src={image} alt={title}    />
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

  })
    return (
     <div >
    <div  className="redirectFather">     
              {healthNews}
       </div>   
       <Link className="back" to="/home"><button className="backButton">Back</button></Link>
         
            </div>
       
    )
}
export default HealthRedirect;