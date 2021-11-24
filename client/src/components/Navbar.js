import {React, useEffect, useState} from 'react';
import axios from "axios";
import {useMediaQuery} from '@react-hook/media-query'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaUserAlt,
  } from "react-icons/fa";
  import { Link, useHistory } from "react-router-dom";
  import myKey from "../context/config";

export const Navbar = ({state}) => {
    const [dropdown, setDropdown] = useState({ cat: false, lang: false, countries: false });
    const [weather , setWeather] = useState({});
  const API_KEY = myKey.weather.apiKeyWeather;


  // useEffect(() => {
  //   axios.get(`http://api.weatherapi.com/v1/forecast.json?Key=${API_KEY}&q=hamburg&days=1`).then((data)=> setWeather(data.data));
  // }, []);
  // console.log(weather );

  let date = new Date();
let day = date.toLocaleString('en-us', {weekday: 'short'});
  
  const today = new Date().toLocaleString();
  const fulldate = day + " " +  today;
  
// useEffect(() => {
//   const weatherToParse = localStorage.getItem("weather");
//   if (weatherToParse){
// setWeather(JSON.parse(weatherToParse))
// }
// }, [])

  // useEffect(() => {
  // localStorage.setItem("weather", JSON.stringify(weather))
  // }, [weather])
  // console.log(localStorage);
  const  matches = useMediaQuery('only screen and (max-width: 400px)')



   
    useEffect(() => {
        document.addEventListener("mousedown", ()=>{
            if (dropdown.cat || dropdown.lang || dropdown.countries ){
                setDropdown({cat: false, lang:false , countries: false})
            }  
        })
    }, [dropdown.cat, dropdown.lang, dropdown.countries])

    const history = useHistory();
    return (
        <div>
              <div className={matches? "navbarFatherMob": "navbarFather"} >
          <div className="weather">
            <div className={matches? "weatherMobileFather":"imgWeatherFather"}>
              {/* <img src={`${process.env.PUBLIC_URL}/${weather.current.condition.icon}`} alt="img" />  */}
                 {/* <p className="temp">{weather.current.temp_c}</p>
              <p className="temp">{weather.forecast.forecastday[0].day.maxtemp_c}</p>
              <p className="temp">{weather.forecast.forecastday[0].day.mintemp_c}</p> */}

            </div> 
            </div>
       
                    <div className={matches? "dateFatherMobile":"dateFather"} >
                      <div className="date">{fulldate}</div>
                      </div> 

              <div className={matches?  "dropDownMobileFather":"dropDownFather"}>

                    <div className={  state? "dropdownMobileActive": matches? "dropDownMobile":"dropDown" }  >

                    <div className={dropdown.cat? "openDropDown": matches?"closedDropDownMobile":"closeDropDown"} onClick={() => {dropdown.cat? setDropdown ({ cat: false, lang: false, countries: false }): setDropdown ({ cat: true, lang: false, countries: false })}}>categories{dropdown.cat? <div className={matches?"dropopenSignMobile":"dropopenSign"}></div>:  <div className={matches?"dropcolseSignMobile":"dropcloseSign"}></div> }</div>
<div className={matches? "ulFatherMobile":"ulFather"}>
                        {dropdown.cat &&
                        <ul className={matches?"dropdownUlMobile":"dropdownUl"} >                        
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/newscollection", state: {category: "general"}}); setDropdown({cat:false, lang:false, countries:false})}}>General</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname: "/newscollection", state:{category: "sports"}}); setDropdown({ cat: false, lang: false, countries: false }) }}>Sports</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/newscollection", state:{category: "business"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Technology</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/newscollection", state:{category: "science"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Business</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/newscollection", state:{category:"technology"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Science</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/newscollection", state:{category:"health"}});setDropdown({ cat: false, lang: false, countries: false }) }}>Health</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/newscollection", state:{category:"entertainment"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Entertainment</li>                           
                        </ul>
                                }
                                </div>
                            
                                
                                </div>
                                <div className={  state? "dropdownMobileActive": matches? "dropDownMobile":"dropDown" }  >

                             <div className={dropdown.lang? "openDropDown": matches?"closedDropDownMobile":"closeDropDown"} onClick={() => {dropdown.lang? setDropdown ({ cat: false, lang: false, countries: false }): setDropdown ({ cat: false, lang: true, countries: false })}}>Languages{dropdown.lang? <div className={matches?"dropopenSignMobile":"dropopenSign"}></div>:  <div className={matches?"dropcolseSignMobile":"dropcloseSign"}></div> }</div>
                             <div className={matches? "ulFatherMobile":"ulFather"}>

                        {dropdown.lang &&
                          <ul className={matches?"dropdownUlMobile":"dropdownUl"} >               
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"en"}); setDropdown({ cat: false, lang: false, countries: false })}}>English</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"de"}); setDropdown({ cat: false, lang: false, countries: false })}}>Germany</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"ar"}); setDropdown({ cat: false, lang: false, countries: false })}}>Arabic</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"es"}); setDropdown({ cat: false, lang: false, countries: false })}}>Spanish</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"it"}); setDropdown({ cat: false, lang: false, countries: false })}}>Italian</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"fr"}); setDropdown({ cat: false, lang: false, countries: false })}}>French</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"nl"}); setDropdown({ cat: false, lang: false, countries: false })}}>Dutch</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"no"}); setDropdown({ cat: false, lang: false, countries: false })}}>Norweigan</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"pt"}); setDropdown({ cat: false, lang: false, countries: false })}}>Portgueese</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname:"/languagescollection", language:"ru"}); setDropdown({ cat: false, lang: false, countries: false })}}>Russian</li>     
                        </ul>
}
</div>
</div>
<div className={  state? "dropdownMobileActive": matches? "dropDownMobile":"dropDown" }  >


<div className={dropdown.countries? "openDropDown": matches?"closedDropDownMobile":"closeDropDown"} onClick={() => {dropdown.countries? setDropdown ({ cat: false, lang: false, countries: false }): setDropdown ({ cat: false, lang: false, countries: true })}}>Countries{dropdown.countries? <div className={matches?"dropopenSignMobile":"dropopenSign"}></div>:  <div className={matches?"dropcolseSignMobile":"dropcloseSign"}></div> }</div>
<div className={matches? "ulFatherMobile":"ulFather"}>
                        {dropdown.countries &&

<ul className={matches?"dropdownUlMobile":"dropdownUl"} >   
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{history.push({pathname: "/countriescollection", country: "au"}); setDropdown({ cat: false, lang: false, countries: false })}}>Australia</li>
                           <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "be"})}; setDropdown({ cat: false, lang: false, countries: false })}}>Belgium</li> 
                           <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "ca"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Canda</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "eg"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Egypt</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "fr"}); setDropdown({ cat: false, lang: false, countries: false })}}}>France</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "de"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Germany</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "nl"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Nethertheland</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "no"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Norway</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "pt"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Portugal</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "ch"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Switzerland</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "us"}); setDropdown({ cat: false, lang: false, countries: false })}}}>U.S.A</li>
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{{history.push({pathname: "/countriescollection", country: "gb"}); setDropdown({ cat: false, lang: false, countries: false })}}}>United Kingdom</li>
                        </ul>                      
}

</div>
</div>
</div>

<div className={matches? "iconFatherMobile":"iconFather"}>
                    <a className="icon" href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a  className="icon" href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a  className="icon" href="https://www.twitter.com/" target="_blank">
              < FaTwitter />
            </a>
            <a  className="icon" href="https://www.yoiutube.com/" target="_blank">
           < FaYoutube />
            </a>
         </div>   
<div className={matches? "signUpFatherMobile":"signUpFather"}>
                      <Link className="signUp" to="signup">  <i><FaUserAlt/></i> </Link>
                      <Link  to="login"><button className={matches?"logInMobile":"logIn"}>Log In</button></Link>   
</div>
</div>
</div>
      )
}
export default Navbar;