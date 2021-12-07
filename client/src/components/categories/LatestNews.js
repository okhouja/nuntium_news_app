import {React, useEffect, useState, useContext} from 'react'
import myKey from "../../context/config";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../context/index';

 const LatestNews = () => {
    const [trend, setTrend] = useState([]);
    const API_KEY = myKey.news.apiKey;
    const history = useHistory();
    const contextObj = useContext(StoreContext);
    console.log(contextObj);


  //    useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&languages=en&sort=published_desc`)
  // .then((data)=>setTrend(data.data.data.filter((item)=> item.image).slice(14,18)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(trend);

  const showNews = trend.map((value, i)=>{
      const {image, author, title, source, published_at} = value;
      return(
          <div key={i}>
              <div className={i === 0 ? "latestFatherActive": "latestFather"}>
              <img className={i === 0? "latestImgActive": "latestImg"} src={image} alt={title}/>
              <div className="latestother">
             <h1 className={ i === 0 && contextObj.store ==="light"?"latestTitleActive":"latestTitleActiveDark",
                contextObj.store ==="light"?"latestTitle":"latestTitleDark"}
              onClick={()=>{if(i === 0 || i){
                history.push({pathname: "linkscollection", state:{value}})}}}
             >{title}</h1> 
              <p className={i ===0 && contextObj.store === "light"? "latestpublishActive":"latestpublishActiveDark",
              i ===0 && contextObj.store === "light"?"latestpublish": "latestpublishDark"
              }>{published_at}</p>
              <div className={i=== 0 ? "authorLatestFatherActive":"authorLatestFather"}>
                <p className={i===0 && contextObj.store === "light"? "latestAuthorWordActive":"latestAuthorWordActiveDark",
                  contextObj.store === "light"?"latestAuthorWord": "latestAuthorWordDark"}>Author: 
                 </p> <p className={i===0 && contextObj.store === "light"? "latestAuthorActive":"latestAuthorActive",
                 contextObj.store === "light"?"latestAuthor": "latestAuthorDark"}> {author}</p></div>
                <div className={i=== 0 ? "authorLatestFatherActive":"authorLatestFather"}>
                <p className={i===0 && contextObj.store === "light"? "latestAuthorWordActive":"latestAuthorWordActiveDark",
                  contextObj.store === "light"?"latestAuthorWord": "latestAuthorWordDark"}>Source: 
                 </p> <p className={i===0 && contextObj.store === "light"? "latestAuthorActive":"latestAuthorActive",
                 contextObj.store === "light"?"latestAuthor": "latestAuthorDark"}> {source}</p></div>
          </div>
          </div>
          </div>
        
      )
  })
    return (
        <div>
            <div className="latestContainer latestContainerLink">
                <div className="adsLatestFather">
                <div className="adsLatest1">Place Your Ads Here</div>
                <div className="adsLatest2">Place Your Ads Here</div>
                <div className="adsLatest3">Place Your Ads Here</div>
                <p className={contextObj.store  === "light"? "latestWord":"latestWordDark"}>
                Latest News</p>
                {showNews}
                                </div>
                </div>
        </div>
    )
}
export default LatestNews;
