import {React, useEffect, useState} from 'react'
import myKey from "../../context/config";
import axios from "axios";
import { useHistory } from 'react-router-dom';



const MustRead = () => {
    const [mustRead, setMustRead] = useState([]);
    const API_KEY = myKey.news.apiKey;

  //    useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&languages=en&sort=published_desc`)
  // .then((data)=>setMustRead(data.data.data.filter((item)=> item.image).slice(0,3)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(mustRead);
  // let containerFatherClasses = 
  // ({
  //   'mustreadContainer': true,
  //   'mustreadContainerLink': false,
  // });
  // let containerClasses = ({
  //   'latestContainer': true,
  //   'latestContainerLink': false,
  // });

  
  


const showNews = mustRead.map((value,i)=>{
    const {image, author, title, source, published_at} = value;
    return(
        <div key={i}>
            <div className={i === 0 ? "latestFatherActive": "latestFather"}>
            <img className={i === 0? "latestImgActive": "latestImg"} src={image} alt={title}/>
            <div className="latestother">
           <h1 className={i===0 ? "latestTitleActive": "latestTitle" }>{title}</h1> 
            <p className={i ===0 ? "latestpublishActive": "latestpublish"}>{published_at}</p>
            <div className={i===0? "authorLatestFatherActive": "authorLatestFather"}><p className={i===0? "latestAuthorWordActive": "latestAuthorWord"}>Author: </p> <p className={i===0? "latestAuthorActive": "latestAuthor"}> {author}</p></div>
              <div className={i===0? "authorLatestFatherActive": "authorLatestFather"}><p className={i===0? "latestAuthorWordActive": "latestAuthorWord"}>Source: </p> <p className={i===0? "latestAuthorActive": "latestAuthor"}> {source}</p></div>
        </div>
        </div>
        </div>
      
    )
})
  return (
      <div>
          
              
          <div className={ "mustreadContainer"}>
          <div className={"latestContainer"}>
                <div className="adsLatestFather">
                
               
          <p className="mustreadtword"> 
              Must Read</p>
              
              
              {showNews}
              <div className="adsLatest1">Place Your Ads Here</div>
                <div className="adsLatest2">Place Your Ads Here</div>
                <div className="adsLatest3">Place Your Ads Here</div>
              </div>
              </div>

              </div>
      </div>
  )
    
}
export default MustRead;
