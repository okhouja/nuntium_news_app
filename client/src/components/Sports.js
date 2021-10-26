import {React , useEffect, useState} from 'react';
import myKey from "../context/config";
import axios from "axios";

 const Sports = () => {
     const [categories, setCategories] = useState("sports");
     const [languages , setLanguages] = useState("en");
     const [sports, setSports] = useState([]);
     const API_KEY = myKey.apiKey;
     
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${languages}&sort=published_desc`).then((data)=>setSports(data.data.data.filter((item)=> item.image).slice(0,3)));
      
  // }, [])
  // console.log(sports);

  const sportNews = sports.map((item)=>{
    const {author, title, image, url, description} = item;
    return(
                   <div>          
                      <div className="sportswrapper">
                           <div className="imgFather">
                                               <img className="imgGeneral" src={image} alt={title} width="200px" height="250px"   />
        </div>               
                       <div className="othersportsFather">
                       <h1 className="sportsTitle">{title}</h1>
                        <p className="sportsDescription">{description}</p>
                        <a className="sportsLink" href={url}>Click Here</a>
                       <p className="sportsAuthor">{author}</p> 
                     </div>           
                    </div>
                        </div> 
               )
  })
    return (
     <div >
          <div className="sports">SPORTS</div> 
    <div  className="sportsFather">     
              {sportNews}
       </div>    
            </div>
       
    )
}
export default Sports;