import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";

 const General = () => {
     const [categories, setCategories] = useState("general");
     const [languages , setLanguages] = useState("en");
     const [general, setGeneral] = useState([]);
     const API_KEY = myKey.apiKey;
     
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${languages}&sort=published_desc`).then((data)=>setGeneral(data.data.data.filter((item)=> item.image).slice(0,6)));
      
  // }, [])
  // console.log(general);

  const generalNews = general.map((item)=>{
    const {author, title, image, url, description} = item;
    return(
                   <div>          
                      <div className="generalwrapper">
                           <div className="imgFather">
                                               <img className="img" src={image} alt={title} width="200px" height="250px"   />
        </div>               
                       <div className="othersportsFather">
                       <h1 className="generalTitle">{title}</h1>
                        <p className="generalDescription">{description}</p>
                        <a className="generalLink" href={url}>Click Here</a>
                       <p className="generalAuthor">{author}</p> 
                     </div>           
                    </div>
                        </div> 
               )
  })
    return (
     <div >
          <div  id="general" className="general">GENERAL</div> 
    <div  className="generalFather">     
              {generalNews}
       </div>    
            </div>
       
    )
}
export default General;