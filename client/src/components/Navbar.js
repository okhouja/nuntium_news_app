import React, { useEffect, useState } from 'react';
import axios from "axios";
import myKey from "../context/config";

export const Navbar = () => {
    const [categories, setCategories] = useState("general");
    const [lang, setLang] = useState("en");
    const [countries, setCountries] = useState("");
    const [dropdown, setDropdown] = useState({ cat: false, lang: false, countries: false });
    const API_KEY = myKey.apiKey;

    
   
   
    


  
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${lang}&countries=${countries}&keywords=corona&offset=4`).then(response=>console.log(response.data));
  // }, [dropdown, categories, lang, countries])
  


    return (
        <div>
             
            <div className="nav-div">    
                    <div className="dropDownFather" >
                      <div>
                        <div className={dropdown.cat? "openDropDown": "closeDropDown"} onClick={() =>  {if ({ cat: false, lang: false, countries: false }) {setDropdown({ cat: true, lang: false, countries: false });} else if ({ cat: true, lang: false, countries: false }) {setDropdown({ cat: false, lang: false, countries: false });}} }>categories{dropdown.cat? "˅ ": "^"  }</div>
                    
                        {dropdown.cat &&
                        <ul className="dropdownUl" >
                            <li  className="categoryLi" onClick={()=>{setCategories("general"); setDropdown({ cat: false, lang: false, countries: false })  }}>General</li>
                            <li className="categoryLi" onClick={()=>{setCategories("sports"); setDropdown({ cat: false, lang: false, countries: false }) }}>Sports</li>
                            <li className="categoryLi" onClick={()=>{setCategories("technology"); setDropdown({ cat: false, lang: false, countries: false })}}>Technology</li>
                            <li className="categoryLi" onClick={()=>{setCategories("business"); setDropdown({ cat: false, lang: false, countries: false })}}>Business</li>
                            <li className="categoryLi" onClick={()=>{setCategories("science"); setDropdown({ cat: false, lang: false, countries: false })}}>Science</li>
                            <li className="categoryLi" onClick={()=>{setCategories("entertainment");setDropdown({ cat: false, lang: false, countries: false }) }}>Entertainment</li>
                            <li className="categoryLi" onClick={()=>{setCategories("health"); setDropdown({ cat: false, lang: false, countries: false })}}>Health</li>

                        </ul>
                                }
                                </div>
                                <div>
                        <div className={dropdown.lang? "openDropDown": "closeDropDown"} onClick={() => {setDropdown({ cat: false, lang: true, countries: false }) }}>Languages{dropdown.lang?  "˅ ": "^"  }</div>
                        
                        {dropdown.lang &&

                        <ul className="dropdownUl" >
                            <li className="langLi" onClick={()=>{setLang("en"); setDropdown({ cat: false, lang: false, countries: false })}}>English</li>
                            <li className="langLi" onClick={()=>{setLang("de"); setDropdown({ cat: false, lang: false, countries: false })}}>Germany</li>
                            <li className="langLi" onClick={()=>{setLang("ar"); setDropdown({ cat: false, lang: false, countries: false })}}>Arabic</li>
                            <li className="langLi" onClick={()=>{setLang("es"); setDropdown({ cat: false, lang: false, countries: false })}}>Spanish</li>
                            <li className="langLi" onClick={()=>{setLang("it"); setDropdown({ cat: false, lang: false, countries: false })}}>Italian</li>
                            <li className="langLi" onClick={()=>{setLang("fr"); setDropdown({ cat: false, lang: false, countries: false })}}>French</li>
                            <li className="langLi" onClick={()=>{setLang("nl"); setDropdown({ cat: false, lang: false, countries: false })}}>Dutch</li>
                            <li className="langLi" onClick={()=>{setLang("no"); setDropdown({ cat: false, lang: false, countries: false })}}>Norweigan</li>
                            <li className="langLi" onClick={()=>{setLang("pt"); setDropdown({ cat: false, lang: false, countries: false })}}>Portgueese</li>
                            <li className="langLi" onClick={()=>{setLang("ru"); setDropdown({ cat: false, lang: false, countries: false })}}>Russian</li>

                        </ul>
        
}
</div>

<div>


                        <div className={dropdown.countries? "openDropDown": "closeDropDown"} onClick={() => {setDropdown({ cat: false, lang: false, countries: true }) }}>Countries{dropdown.countries?   "˅ ": "^"  }</div>
                        
                        {dropdown.countries &&

                        <ul className="dropdownUl" >
                            
                            <li className="countriesLi" onClick={()=>{setCountries("au"); setDropdown({ cat: false, lang: false, countries: false })}}>Australia</li>
                           <li className="countriesLi" onClick={()=>{setCountries("be"); setDropdown({ cat: false, lang: false, countries: false })}}>Belgium</li> 
                           <li className="countriesLi" onClick={()=>{setCountries("ca"); setDropdown({ cat: false, lang: false, countries: false })}}>Canda</li>
                            <li className="countriesLi" onClick={()=>{setCountries("eh"); setDropdown({ cat: false, lang: false, countries: false })}}>Egypt</li>
                            <li className="countriesLi" onClick={()=>{setCountries("fr"); setDropdown({ cat: false, lang: false, countries: false })}}>France</li>
                            <li className="countriesLi" onClick={()=>{setCountries("de"); setDropdown({ cat: false, lang: false, countries: false })}}>Germany</li>
                            <li className="countriesLi" onClick={()=>{setCountries("it"); setDropdown({ cat: false, lang: false, countries: false })}}>Italy</li>
                            <li className="countriesLi" onClick={()=>{setCountries("nl"); setDropdown({ cat: false, lang: false, countries: false })}}>Nethertheland</li>
                            <li className="countriesLi" onClick={()=>{setCountries("no"); setDropdown({ cat: false, lang: false, countries: false })}}>Norway</li>
                            <li className="countriesLi" onClick={()=>{setCountries("sa"); setDropdown({ cat: false, lang: false, countries: false })}}>Saudi Arabia</li>
                            <li className="countriesLi" onClick={()=>{setCountries("ae"); setDropdown({ cat: false, lang: false, countries: false })}}>UAE</li>
                            <li className="countriesLi" onClick={()=>{setCountries("gb"); setDropdown({ cat: false, lang: false, countries: false })}}>United Kingdom</li>
                        </ul>
                        
}
</div>



</div>
</div>

            
        </div>
    )
}
export default Navbar;
