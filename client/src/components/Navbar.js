import {React, useEffect, useState, useRef, useContext} from 'react';
import axios from "axios";
import {useMediaQuery} from '@react-hook/media-query';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { StoreContext } from "../context/index";


import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaUserAlt,
  } from "react-icons/fa";
  import { Link, useHistory } from "react-router-dom";
  import myKey from "../context/config";


const label = { inputProps: { 'aria-label': 'Switch demo' } };
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  
export const Navbar = ({nav}) => {
    const [dropdown, setDropdown] = useState({ cat: false, lang: false, countries: false });
    const [weather , setWeather] = useState({});
    const [themeState , setThemeState] =  useState(false);
    const inputRef = useRef();

  const API_KEY = myKey.weather.apiKeyWeather;
  const contextObj = useContext(StoreContext);
  console.log(contextObj.store.data);


  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?Key=${API_KEY}&q=hamburg&days=1`).then((data)=> setWeather(data.data));
  }, []);
  console.log(weather );

  let date = new Date();
let day = date.toLocaleString('en-us', {weekday: 'short'});
  const today = new Date().toLocaleString();
  const fulldate = day + " " +  today;
  
  const  matches = useMediaQuery('only screen and (max-width: 400px)')

    // useEffect(() => {
  
    //   inputRef.current.addEventListener("mousedown", ()=>{
    //         if (dropdown.cat || dropdown.lang || dropdown.countries ){
    //             setDropdown({cat: false, lang:false , countries: false})
    //         }  
    //     })
    // }, [dropdown.cat, dropdown.lang, dropdown.countries])

    

    const history = useHistory();
    return (
      <FormGroup >
        <div  >
              <div className={matches? "navbarFatherMob": "navbarFather"} >
                <div className={matches? "themeMobileFather": "themeFather"}>
              <span className={matches? "toggelMobile": "toggel"}>{themeState? "Light Mode": "Dark Mode"}</span>
      <FormControlLabel className={matches? "iconThemeMobile":"iconTheme"}
      onChange={()=>setThemeState(!themeState)}
      
      onClick={()=>contextObj.store === "light"? contextObj.setStore("dark"):
    contextObj.setStore("light")
    }
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
      </div>
      {weather &&
          <div className={matches? "weatherMobile":"weather"}>
            <div className={matches? "weatherMobileFather":"imgWeatherFather"}>
              <img src={weather?.current?.condition?.icon} alt="img"/> 
              </div>
              <div className={matches?"weatherOtherFatherMobile":"weatherOtherFather"}>
                <div className={matches? "tempFatherMobile":"temFather"}>
                  <p className={matches?"tempInfoMobile":"temInfo"}>Cur</p>
                 <p className="temp">{weather?.current?.temp_c}</p>
                 </div>
                 <div className={matches? "tempFatherMobile":"temFather"}>
                 <p className={matches?"tempInfoMobile":"temInfo"}>Max</p>
              <p className="temp">{weather?.forecast?.forecastday[0]?.day?.maxtemp_c}</p>
              </div>
              <div className={matches? "tempFatherMobile":"temFather"}>
              <p className={matches?"tempInfoMobile":"temInfo"}>Min</p>
              <p className="temp">{weather?.forecast?.forecastday[0]?.day?.mintemp_c}</p>
              </div>

            </div> 
            </div>
            }
       
                    <div className={matches? "dateFatherMobile":"dateFather"} >
                      <div className={matches?"dateMobile":"date"}>{fulldate}</div>
                      </div> 

              <div className={matches?  "dropDownMobileFather":"dropDownFather"}>

                    <div className={  nav? "dropdownMobileActive": matches? "dropDownMobile":"dropDown" }  >

                    <div className={dropdown.cat? "openDropDown": matches?"closedDropDownMobile":"closeDropDown"} onClick={() =>  {   dropdown.cat? setDropdown ({ cat: false, lang: false, countries: false }): setDropdown ({ cat: true, lang: false, countries: false })}}>categories{dropdown.cat? <div className={matches?"dropopenSignMobile":"dropopenSign"}></div>:  <div className={matches?"dropcolseSignMobile":"dropcloseSign"}></div> }</div>
<div className={matches? "ulFatherMobile":"ulFather"}>
                        { dropdown.cat &&
                        <ul className={matches?"dropdownUlMobile":"dropdownUl"} >                        
                            <li className={matches?"liMobile":"categoryLi"} onClick={()=>{  history.push({pathname:"/newscollection", state:{category: "general"}}); setDropdown({cat:false, lang:false, countries:false})} }>General</li>
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
                                <div className={  nav? "dropdownMobileActive": matches? "dropDownMobile":"dropDown" }  >

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
<div className={  nav? "dropdownMobileActive": matches? "dropDownMobile":"dropDown" }  >


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
</FormGroup >
      )
}
export default Navbar;