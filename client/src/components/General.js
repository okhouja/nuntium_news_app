import {React , useEffect, useState} from 'react';
import myKey from "../context/config";
import axios from "axios";



 const General = () => {
     const [categories, setCategories] = useState("general");
     const [languages , setLanguages] = useState("en");
     const [general, setGeneral] = useState([]);
     const API_KEY = myKey.apiKey;
     
     
    
    useEffect(() => {
      axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${languages}&sort=published_desc`).then((data)=>setGeneral(data.data.data));
      
  }, [])
  console.log(general);
  
    const generalNews = general.map((obj,i)=>{
        const {author, title, image, url, description} = obj;
        if (i < 3 && image != (null))  {
        return(
            <div>
            
                <div className="generalwrapper">
                    <div className="imgFather">
                    
                     <img className="imgGeneral" src={image} alt={title} width="200px" height="200px"   />
</div>
                    
                  
                <div className="otherFather">
                <h1 className="generalTitle">{title}</h1>
                <p>{description}</p>
                <a className="linkGereral" href={url}>Click Here</a>
                <p className="authorGeneral">{author}</p> 
                </div>
                
                
                </div>
                </div> 
        )
        }

    })

    

    return (
        <div className="generalupFather">
           <div className="general">GENERAL</div> 
        <div  className="generalFather">
            
                {generalNews}

        </div>
        </div>
    )
}

export default General;