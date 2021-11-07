import React, { useEffect, useState } from 'react';
import axios from "axios";
import myKey from "../context/config";
import {useHistory} from "react-router-dom";

export const Navbar = () => {
    const [categories, setCategories] = useState("");
    const [lang, setLang] = useState("");
    const [countries, setCountries] = useState("");
    const [dropdown, setDropdown] = useState({ cat: false, lang: false, countries: false });
    const API_KEY = myKey.apiKey;
    const history = useHistory();
    
    useEffect(() => {
        document.addEventListener("mousedown", ()=>{
            if (dropdown.cat || dropdown.lang || dropdown.countries ){
                setDropdown({cat: false, lang:false , countries: false})

            }
        })
        
    }, [dropdown.cat, dropdown.lang, dropdown.countries])


  

    return (
        <div>   
            <div className="nav-div">    
                    <div className="dropDownFather" >
                      <div>
                        <div className={dropdown.cat? "openDropDown": "closeDropDown"} onClick={() => {dropdown.cat? setDropdown ({ cat: false, lang: false, countries: false }): setDropdown ({ cat: true, lang: false, countries: false })}}>categories{dropdown.cat? "ᐯ ": "ᐱ"  }</div>
                    
                        {dropdown.cat &&
                        <ul className="dropdownUl" >
                            
                            <li className="categoryLi" onClick={()=>{history.push({pathname:"/newscollection", state: {category: "general"}}); setDropdown({ cat: false, lang: false, countries: false })  }}>General</li>
                            <li className="categoryLi" onClick={()=>{history.push({pathname: "/newscollection", state:{category: "sports"}}); setDropdown({ cat: false, lang: false, countries: false }) }}>Sports</li>
                            <li className="categoryLi" onClick={()=>{history.push({pathname:"/newscollection", state:{category: "business"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Technology</li>
                            <li className="categoryLi" onClick={()=>{history.push({pathname:"/newscollection", state:{category: "science"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Business</li>
                            <li className="categoryLi" onClick={()=>{history.push({pathname:"/newscollection", state:{category:"technology"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Science</li>
                            <li className="categoryLi" onClick={()=>{history.push({pathname:"/newscollection", state:{category:"health"}});setDropdown({ cat: false, lang: false, countries: false }) }}>Entertainment</li>
                            <li className="categoryLi" onClick={()=>{history.push({pathname:"/newscollection", state:{category:"entertainment"}}); setDropdown({ cat: false, lang: false, countries: false })}}>Health</li>

                        </ul>
                                }
                                </div>
                                <div>
                                <div className={dropdown.lang? "openDropDown": "closeDropDown"} onClick={() => {dropdown.lang? setDropdown ({ cat: false, lang: false, countries: false }): setDropdown ({ cat: false, lang: true, countries: false })}}>Languages{dropdown.lang? "ᐯ ": "ᐱ"  }</div>
                        
                        {dropdown.lang &&

                        <ul className="dropdownUl" >
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"en"}); setDropdown({ cat: false, lang: false, countries: false })}}>English</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"de"}); setDropdown({ cat: false, lang: false, countries: false })}}>Germany</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"ar"}); setDropdown({ cat: false, lang: false, countries: false })}}>Arabic</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"es"}); setDropdown({ cat: false, lang: false, countries: false })}}>Spanish</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"it"}); setDropdown({ cat: false, lang: false, countries: false })}}>Italian</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"fr"}); setDropdown({ cat: false, lang: false, countries: false })}}>French</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"nl"}); setDropdown({ cat: false, lang: false, countries: false })}}>Dutch</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"no"}); setDropdown({ cat: false, lang: false, countries: false })}}>Norweigan</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"pt"}); setDropdown({ cat: false, lang: false, countries: false })}}>Portgueese</li>
                            <li className="langLi" onClick={()=>{history.push({pathname:"/languagescollection", language:"ru"}); setDropdown({ cat: false, lang: false, countries: false })}}>Russian</li>

                        </ul>
        
}
</div>

<div>


<div className={dropdown.countries? "openDropDown": "closeDropDown"} onClick={() => {dropdown.countries? setDropdown ({ cat: false, lang: false, countries: false }): setDropdown ({ cat: false, lang: false, countries: true })}}>Countries{dropdown.countries? "ᐯ": "ᐱ"  }</div>
                        
                        {dropdown.countries &&

                        <ul className="dropdownUl" >
                            
                            <li className="countriesLi" onClick={()=>{history.push({pathname: "/countriescollection", country: "au"}); setDropdown({ cat: false, lang: false, countries: false })}}>Australia</li>
                           <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "be"})}; setDropdown({ cat: false, lang: false, countries: false })}}>Belgium</li> 
                           <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "ca"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Canda</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "eg"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Egypt</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "fr"}); setDropdown({ cat: false, lang: false, countries: false })}}}>France</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "de"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Germany</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "nl"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Nethertheland</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "no"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Norway</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "pt"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Portugal</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "ch"}); setDropdown({ cat: false, lang: false, countries: false })}}}>Switzerland</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "us"}); setDropdown({ cat: false, lang: false, countries: false })}}}>U.S.A</li>
                            <li className="countriesLi" onClick={()=>{{history.push({pathname: "/countriescollection", country: "gb"}); setDropdown({ cat: false, lang: false, countries: false })}}}>United Kingdom</li>
                        </ul>                      
}
</div>
</div>
</div>           
        </div>
    )
}
export default Navbar;
