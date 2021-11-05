import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { useHistory } from 'react-router-dom';


 const Entertainment = () => {
     const [entertainment, setEntertainment] = useState([]);
     const API_KEY = myKey.apiKey;

     const history = useHistory();
     
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=1000&categories=entertainment&languages=en&sort=published_desc`)
  // .then((data)=>setEntertainment(data.data.data.filter((item)=> item.image).slice(0,6)))
  //  .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(entertainment);

  const entertainmentNews = entertainment.map((item,i)=>{
  
    const {author, title, image, url, description,source,published_at} = item;
    return(
                   <div   >   
                   <div key={i}>    
                      <div    className= {i === 0 ? "generalwrapperActive":"generalwrapper"}  >                          
                         <img className={i === 0? "imgActive" : "img"} src={image} alt={title} width="200px" height="250px"   />    
                       <h3 className={i == 0 ? "generalTitleActive": "generalTitle"}
                       onClick={()=>
                        {if(i === 0 || i){
                         history.push({pathname: "/linkscollection", state: {item}
                        })}}}
                       >{title}</h3>
                       <p className={i === 0? "generalPublishActive": "generalPublish"}>{published_at}</p> 
                        <p  className={i === 0? "generalDescriptionActive": "generalDescription"}>{description}</p>
                        <div className="generalDown">
                          
                             <div className={i === 0? "generalAuthorFatherActive" : "generalAuthorFather"}
                             ><p className={ i === 0? "generalAuthorWordActive": "generalAuthorWord"}>Author: </p>
                              <p className={ i === 0? "generalAuthorActive": "generalAuthor"}> {author}</p></div>
                             <div className={i === 0? "generalAuthorFatherActive" : "generalAuthorFather"}>
                               <p className={ i === 0? "generalAuthorWordActive": "generalAuthorWord"} >Source: </p> 
                               <p className={ i === 0? "generalAuthorActive": "generalAuthor"}> {source}</p></div>
                             </div> 
                     </div>           
                     </div>    
                     </div>   
               )
  })
    return (
     <div >
            <div onClick={()=>history.push({pathname:"/newscollection",
            state: {category:"entertainment"}})} id="general" className="general">ENTERTAINMENT</div> 

    <div  className="generalFather">     
              {entertainmentNews}
       </div>    
            </div>
       
    )
}
export default Entertainment;