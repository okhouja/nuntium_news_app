import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { Link } from 'react-router-dom';

 const General = () => {
     const [general, setGeneral] = useState([]);
     const API_KEY = myKey.apiKey;
     
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=general&languages=en&sort=published_desc`)
  // .then((data)=>setGeneral(data.data.data.filter((item)=> item.image).slice(0,6)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(general);
  

  const generalNews = general.map((item,i)=>{
    const {author, title, image, url, description} = item;
    return(
                   <div   >          
                      <div   key={i} className= {"generalwrapper"+i}  >
                           
                         <img className="img" src={image} alt={title} width="200px" height="250px"   />
                   
                       
                       <h3 className="generalTitle"><a href={url}>{title}</a></h3>
                        <p style={{height: "8vh"}} className="generalDescription">{description}</p>
                       <p className="generalAuthor">{author}</p> 
                     </div>           
                    </div>
                    
               )
  })
    return (
     <div >
        <Link to="/generalredirect">  <div  id="general" className="general">GENERAL</div> 
        </Link>
    <div className="generalFather"  >     
              {generalNews}
       </div>    
            </div>
       
    )
}
export default General;