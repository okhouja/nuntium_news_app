import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { Link } from 'react-router-dom';

 const Sports = () => {
    
     const [sports, setSports] = useState([]);
     const API_KEY = myKey.apiKey;
     
  //    useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=sports&languages=en&sort=published_desc`)
  // .then((data)=>setSports(data.data.data.filter((item)=> item.image).slice(0,6)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(sports);

  const sportNews = sports.map((item,i)=>{
    const {author, title, image, url, description,source, published_at} = item;
    return(
      <div   >          
         <div   key={i} className= {i === 0 ? "generalwrapperActive":"generalwrapper"}  >           
            <img className={i === 0? "imgActive" : "img"} src={image} alt={title} width="200px" height="250px"   />
          <h3 className={i == 0 ? "generalTitleActive": "generalTitle"}><a href={url}>{title}</a></h3>
          <p className={i === 0? "generalPublishActive": "generalPublish"}>{published_at}</p> 
           <p  className={i === 0? "generalDescriptionActive": "generalDescription"}>{description}</p>
          <p className="generalAuthor">{author}</p> 
          <p className="generalSource">{source}</p> 

        </div>           
       </div>
       
  )
  })
    return (
     <div >
       <Link to="/sportsredirect">
          <div id="sports" className="general">SPORTS</div> </Link>
    <div  className="generalFather">     
              {sportNews}
       </div>    
            </div>
       
    )
}
export default Sports;