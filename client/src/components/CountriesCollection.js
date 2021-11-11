import {React, useState, useEffect } from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import myKey from "../context/config";

const CountriesCollection = (props) => {
    const [country , setCountry] = useState(props.location.country);
    const [countryArr, setCountryArr] = useState({});
    const API_KEY = myKey.apiKey;
    const history = useHistory();


    // useEffect(() => {
    //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&&countries=${country}&sort=published_desc`)
    //           .then((data)=>setCountryArr(data.data.data.filter((item)=> item.image)))
    //     .catch((err) => console.log(`Your had an ${err}`));
                    
    // }, [])
    // console.log(countryArr);
    // console.log(country);

    const showNews =  Object.entries(countryArr).map(([key, value], i) =>{
    
        return(
                       <div  >          
                          <div className="redirectContainer">
                               <div className="redirectimgFather" >
                                                   <img className="imgRedirect" src={value.image} alt={value.title} width="200px" height="250px"   />
            </div>               
                           <div className="otherredirectFather">
                           <h3 className="redirectTitle"onClick={()=>{
                               if(i === 0 || i){
                            history.push({pathname: "/linkscollection",state:{value} })
                           }}}
                   
                   >{value.title}</h3>
                           <p className="redirectPuplished">{value.published_at}</p>
                            <p  className="redirectDescription">{value.description}</p>
                            <div className="down">
                         <div className="authorFather"><p className="redirectAuthorWord">Author: </p> <p className="redirectAuthor"> {value.author}</p></div>
                         <div className="authorFather"><p className="redirectAuthorWord">Source: </p> <p className="redirectSource"> {value.source}</p></div>
                         </div> 
     
                         </div>           
                        </div>
                            </div> 
                   )
      });
        return (
         <div >
        <div  className="redirectFather">     
                  {showNews}
                  <Link className="backLink" to="/home"><p className="back">Back</p></Link>
           <div className="goUpRedirect"><a className="goUpanchor" href="#img">˄</a></div>
           <p className="goupwordRedirect">Go up</p>

           </div> 
          
               
                </div>
           
        )
    


}
export default CountriesCollection;
