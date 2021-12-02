import {React , useEffect, useState, useContext} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import { StoreContext } from "../../context/index";


 const General = () => {
  const contextObj = useContext(StoreContext);

     const [general, setGeneral] = useState([]);
     const API_KEY = myKey.news.apiKey;
     const history = useHistory();
     
    useEffect(() => {
      axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=general&languages=en&sort=published_desc`)
 .then((data)=>setGeneral(data.data.data.filter((item)=> item.image).slice(0,6)))
  .catch((err) => console.log(`Your had an ${err}`));
      
  }, [])
  console.log(general);
  

  
  //   const myfunc = (lang)=>{/*  */
// history.push({pathname:"/newscollection",language:lang })
//   }
  
//onClick={myfunc("en")}

  const generalNews = general.map((value,i)=>{
  
    const {author, title, image, url, description,source,published_at} = value;
    return(
                   <div   >   
                   <div key={i}>    
                      <div    className= {i === 0 ? "generalwrapperActive":"generalwrapper"}  >                          
                         <img className={i === 0? "imgActive" : "generalimg"} src={image} alt={title} width="200px" height="250px"   />    
                       <div className= "otherFather">
                       <h3 className={i == 0  && contextObj.store === "light"? "generalTitleActive":"generalTitleActiveDark", contextObj.store === "light"? "generalTitle": "generalTitleDark"}
                       onClick={()=>
                        {if(i === 0 || i)
                         history.push({pathname: "/linkscollection", state: {value}
                        })}}
                       >{title}</h3>
  <p className={i === 0 && contextObj.store === "lighjt"? "generalPublishActive":"generalPublishActiveDark",contextObj.store === "light"?  "generalPublish":"generalPublishDark"}>{published_at}</p> 
                        <p  className={i === 0 && contextObj.store === "light"?  "generalDescriptionActive":"generalDescriptionActiveDark",contextObj.store ==="lighjt"?  "generalDescription":"generalDescriptionDark"}>{description}</p>                        
                          <div className="generalAuthorContainer">
                             <div className={i === 0? "generalAuthorFatherActive" : "generalAuthorFather"}>
                             <p className={ i === 0 && contextObj.store ==="light"? "generalAuthorWordActive":"generalAuthorWordActiveDark", contextObj.store === "light"? "generalAuthorWord":"generalAuthorWordDark"}>Author: </p>
                              <p className={ i === 0 && contextObj.store === "light"? "generalAuthorActive":"generalAuthorActiveDark",contextObj.store ==="light"? "generalAuthor":"generalAuthorDark"}> {author}</p></div>
                              <div className={i === 0? "generalAuthorFatherActive" : "generalAuthorFather"} >
                              <p className={ i === 0 && contextObj.store ==="light"? "generalAuthorWordActive":"generalAuthorWordActiveDark", contextObj.store === "light"? "generalAuthorWord":"generalAuthorWordDark"}>Source: </p>
                              <p className={ i === 0 && contextObj.store ==="light"? "generalAuthorActive":"generalAuthorActiveDark",contextObj.store ==="light"? "generalAuthor":"generalAuthorDark"}> {source}</p></div>

                               </div>
                               </div>
                             </div> 
                             </div>
                             </div> 
               )
  })
    return (
     <div >
     <div onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"general"}})} id="general" style={{textAlign: "center"}}  className={contextObj.store === "dark"? "generalDark":"general"}>GENERAL</div> 
        
    <div className="generalFather"  >     
              {generalNews}
       </div>    
            </div>
    )
}
export default General;