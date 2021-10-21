import {React , useEffect, useState} from 'react';
import myKey from "../context/config";
import axios from "axios";



 const General = () => {
     const [categories, setCategories] = useState("general");
     const [languages , setLanguages] = useState("en");
     const [general, setGeneral] = useState([]);
     const API_KEY = myKey.apiKey;
     
     
    
    useEffect(() => {
      axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${languages}&keywords=corona&offset=4&sort=published_desc`).then((data)=>setGeneral(data.data.data));
      
  }, [])
  console.log(general);
  
    const generalNews = general.map((obj,i)=>{
        const {author, title, image, url, description} = obj;
        if (i < 6){
        return(
            <div className= "generalFather">
                <div className="generalFathe">
                    <div>
                    <img className="imgGeneral" src={image} alt={title}    />

                    </div>
                  < div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={url}>{title}</a>
                <p>{author}</p>
                </div>
                </div> 


              
            </div>

        )
        }

    })

    console.log()

    return (
        <div>
            <div>
                {generalNews}
            </div>
        </div>
    )
}

export default General;