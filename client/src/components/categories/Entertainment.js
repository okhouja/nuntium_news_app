import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { useHistory } from 'react-router-dom';


 const Science = () => {
     
     const [entrrtainment, setEntertainment] = useState([]);
     const API_KEY = myKey.news.apiKey;

     const history = useHistory();
     
//      useEffect(() => {
//       axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=entertainment&languages=en&sort=published_desc`)
//   .then((data)=>setEntertainment(data.data.data.filter((item)=> item.image).slice(0,6)))
//   .catch((err) => console.log(`Your had an ${err}`));
      
//   }, [])
//   console.log(entrrtainment);

  const entertainmentNews = entrrtainment.map((item,i)=>{
  
    const {author, title, image, url, description,source,published_at} = item;
    return(
        <div>
            
                <div className="scienceFather">
                    <div>
                    <img className="scienceImg" src={image} alt={title} />
                      <h1 className="scienceTitle">{title}</h1>  
                      <p className="sciencePuplish">{published_at}</p>

                      <div className="scienceAuthorContainer">
                <div className="scienceAuthorFather">
                    <p className="scienceAuthorWord">Author:</p >
                <p className="scienceAuthor">{author}</p>
            
                </div> 
                     <div className="scienceAuthorFather">
                         <p  className="scienceAuthorWord">Source:</p>
                     <p className="scienceAuthor">{source}</p>
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
            ,state: {category:"science"}})} id="entertainment" className="general">ENTERTAINMENT</div> 

    <div  className="scienceContainer">     
              {entertainmentNews}
       </div>    
       <div className="line"></div>
        <div className="advertise">Place Your Ads Here</div>  
             
            </div>
       
    )
}
export default Science;