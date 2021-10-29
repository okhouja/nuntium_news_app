import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { Link } from 'react-router-dom';


 const Business = () => {
     const [business, setBusiness] = useState([]);
     const API_KEY = myKey.apiKey;
     
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=business&languages=en&sort=published_desc`)
  //     .then((data)=>setBusiness(data.data.data.filter((item)=> item.image).slice(0,6)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(business);

  const businessNews = business.map((item,i)=>{
    const {author, title, image, url, description} = item;
    return(
                   <div className={"newsContainer"+i} key={i}>          
                      <div className="sportswrapper">
                           <div className="imgFather">
                                               <img className="imgGeneral" src={image} alt={title} width="200px" height="250px"   />
        </div>               
                       <div className="othersportsFather">
                       <h3 className="sportsTitle"><a href={url}>{title}</a></h3>
                        <p style={{height: "8vh"}} className="sportsDescription">{description}</p>
                       <p className="sportsAuthor">{author}</p> 
                     </div>           
                    </div>
                        </div> 
               )
  })
    return (
     <div >
       <Link to="/businessredirect"
>          <div id="business" className="business">BUSINESS</div></Link> 
    <div  className="sportsFather">     
              {businessNews}
       </div>    
            </div>
       
    )
}
export default Business;