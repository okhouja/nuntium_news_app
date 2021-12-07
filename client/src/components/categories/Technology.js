import {React , useEffect, useState,useContext} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { StoreContext } from "../../context/index";



 const Science = () => {
  const contextObj = useContext(StoreContext);

     
     const [technology, setTechnology] = useState([]);
     const API_KEY = myKey.news.apiKey;

     const history = useHistory();
     
  //    useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=technology&languages=en&sort=published_desc`)
  // .then((data)=>setTechnology(data.data.data.filter((item)=> item.image).slice(0,6)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(technology);

  const technologyNews = technology.map((value,i)=>{
  
    const {author, title, image, url, description,source,published_at} = value;
    return(
      <div>
              <div className="scienceFather">
                  
                  <img className="scienceImg" src={image} alt={title} />
                  <div>
                    <h1 className={contextObj.store === "light" ? "scienceTitle":"scienceTitleDark"} 
                     onClick={()=>
                       history.push({pathname: "/linkscollection", state: {value}
                      })}
                    >{title}</h1>  
                    <p className={contextObj.store === "light"? "sciencePuplish":"sciencePuplishDark"}>{published_at}</p>

                    <div className="scienceAuthorContainer">
              <div className="scienceAuthorFather">
                  <p className={contextObj.store === "light"? "scienceAuthorWord":"scienceAuthorWordDark"}>Author:</p >
              <p className={contextObj.store === "light"? "scienceAuthor":"scienceAuthorDark"}>{author}</p>
          
              </div> 
                   <div className="scienceAuthorFather">
                   <p className={contextObj.store === "light"? "scienceAuthorWord":"scienceAuthorWordDark"}>Source:</p >

                   <p className={contextObj.store === "light"? "scienceAuthor":"scienceAuthorDark"}>{source}</p>
                   </div>    
                   </div>
                    </div>
                  </div>
                  </div>
              
  )
  })
    return (
     <div >
            <div onClick={()=>history.push({pathname:"/newscollection"
            ,state: {category:"science"}})} id="technology"  className={contextObj.store === "dark"? "generalDark":"general"}>TECHNOLOGY</div> 

    <div  className="scienceContainer">     
              {technologyNews}
       </div>    
       <div className="line"></div>
        <div className="advertise">Place Your Ads Here</div>  
             
            </div>
       
    )
}
export default Science;