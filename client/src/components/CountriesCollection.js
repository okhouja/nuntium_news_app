import {React, useState, useEffect, useContext } from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import myKey from "../context/config";
import LatestNews from './categories/LatestNews';
import MustRead from './categories/MustRead';
import { StoreContext } from "../context/index";

const CountriesCollection = (props) => {
    const contextObj = useContext(StoreContext);
    const [country , setCountry] = useState(props.location && props.location.country);
    const [countryArr, setCountryArr] = useState({});
    const API_KEY = myKey.news.apiKey;
    const history = useHistory();


    useEffect(() => {
        axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&&countries=${country}&sort=published_desc`)
              .then((data)=>setCountryArr(data.data.data.filter((item)=> item.image)))
        .catch((err) => console.log(`Your had an ${err}`));
                    
    }, [])
    console.log(countryArr);
    console.log(country);
    

    const showNews =  Object.entries(countryArr).map(([key, value], i) =>{
        return(
            <div  >          
               <div className="redirectContainer">
                    <div className="redirectimgFather" >
                                        <img className="imgRedirect" src={value.image} alt={value.title} width="200px" height="250px"   />
 </div>               
                <div className="otherredirectFather">
                <h3 className={contextObj.store ==="light"?"redirectTitle":"redirectTitleDark"}
                onClick={()=>{
                    if(i === 0 || i){
                 history.push({pathname: "/linkscollection",state:{value} })
                }}}
        
        >{value.title}</h3>
                <p className={contextObj.store ==="light"?"redirectPuplished":"redirectPuplishedDark"}>{value.published_at}</p>
                 <p  className={contextObj.store ==="light"?"redirectDescription":"redirectDescriptionDark"}>{value.description}</p>
                 <div className="down">
              <div className="authorFather"><p className={contextObj.store ==="light"?"redirectAuthorWord":"redirectAuthorWordDark"}>Author: </p> <p className={contextObj.store ==="light"?"redirectAuthor":"redirectAuthorDark"}> {value.author}</p></div>
              <div className="authorFather"><p className={contextObj.store ==="light"?"redirectAuthorWord":"redirectAuthorWordDark"}>Source: </p> <p lassName={contextObj.store ==="light"?"redirectAuthor":"redirectAuthorDark"}> {value.source}</p></div>
              </div> 

              </div>           
             </div>
                 </div> 
        )
});
return (
<div className={contextObj.store === "light"? "redirectContainerFather":"redirectContainerFatherDark"} >

     <LatestNews />
   
<div  className="redirectFather"> 
<div className="redirectTopTitle"> 
<div style={{marginTop: "4vh"}} className={contextObj.store ==="light"?"redirectTopTitle":"redirectTopTitleDark"}> {props.location.country} </div>
<div className="lineredirect"></div>
</div>
      {showNews}  
      <div className="goUpRedirect">        
      <Link className="backLink" to="/home"><p className="back">Back</p></Link>
      <a className={contextObj.store ==="light"?"goUpanchor":"goUpanchorredirectDark"} href="#img">Go Up</a>
      <p className={contextObj.store ==="light"?"goupwordRedirect":"goupwordRedirectDrak"}>ᐱ</p>
</div>    
    </div>
    <MustRead /> 
    </div>
)
}
export default CountriesCollection;
