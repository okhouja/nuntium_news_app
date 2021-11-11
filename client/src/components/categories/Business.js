import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { useHistory} from 'react-router-dom';

 const Sports = () => {
    
     const [business, setBusiness] = useState([]);
     const API_KEY = myKey.news.apiKey;

     const history = useHistory();
     
//      useEffect(() => {
//       axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=business&languages=en&sort=published_desc`)
//   .then((data)=>setBusiness(data.data.data.filter((item)=> item.image).slice(0,6)))
//   .catch((err) => console.log(`Your had an ${err}`));
      
//   }, [])
//   console.log(business);

  const businessNews = business.map((item,i)=>{
  
    const {author, title, image, url, description,source,published_at} = item;
    return(
                   <div   >   
                   <div key={i}>    
                      <div    className= {i === 0 ? "businesswrapperActive":"businesswrapper"}  >                          
                        
                 <img className={i === 0? "imgActive" : "img"} src={image} alt={title} width="200px" height="250px"   />    
                      <div className="businessOthers">
                       <h3 className={i == 0 ? "generalTitleActive": "generalTitle"}
                       onClick={()=>
                        {if(i === 0 || i){
                         history.push({pathname: "/linkscollection", state: {item}
                        })}}}
                       >{title}</h3>
                       <p className={i === 0? "generalPublishActive": "generalPublish"}>{published_at}</p> 
                        <p  className={i === 0? "generalDescriptionActive": "generalDescription"}>{description}</p>
                        
                        <div className={i === 0?  "businessContainerActive": "businessContainer"}>
                             <div className={i === 0? "businessAuthorFatherActive" : "businessAuthorFather"}
                             ><p className={ i === 0? "businessAuthorWordActive": "businessAuthorWord"}>Author: </p>
                              <p className={ i === 0? "businessAuthorActive": "businessAuthor"}> {author}</p></div>
                              <div  className={i === 0? "businessAuthorFatherActive" : "businessAuthorFather"}>
                               <p className={ i === 0? "businessAuthorWordActive": "businessAuthorWord"} >Source: </p> 
                               <p className={ i === 0? "businessAuthorActive": "businessAuthor"}> {source}</p></div>
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
            state: {category:"sports"}})} id="business" className="general">BUSINESS</div> 

    <div  className="businessFather">     
              {businessNews}
       </div>    
            </div>
       
    )
}
export default Sports;