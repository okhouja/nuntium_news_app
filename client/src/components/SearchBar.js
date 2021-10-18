import React, { useState, useEffect, useContext } from "react";
import {Store, StoreContext} from "../context";
import axios from "axios";
import myKey from "../context/config";
const API_KEY = myKey.apiKey;


function SearchBar() {
    const contextObj = useContext(StoreContext);
console.log(contextObj);
// Store.fetchData();
    

    // const [userInput, setUserInput] = useState(false);
    // const handelChange = () => setUserInput(!userInput);
  
    const [categories, setCategories] = useState("general");
    const [lang, setLang] = useState("");
    const [countries, setCountries] = useState("");
    const [dropdown, setDropdown] = useState({ cat: false, lang: false, countries: false });

    // useEffect(() => {
    //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${lang}&countries=${countries}&keywords=corona&offset=4`).then(response=>console.log(response.data));
    // }, [dropdown, categories, lang, countries])

    return (
        <div>

            <div>
                

                <div  >
                    
                    <div >
                        <div>categories</div>
                        <div onClick={() => {setDropdown({ cat: true, lang: false, countries: false }) }}>+{categories} </div>
                        {dropdown.cat &&
                        <div >
                            <li onClick={()=>{setCategories("general"); setDropdown({ cat: false, lang: false, countries: false })}}>General</li>
                            <li onClick={()=>{setCategories("sports"); setDropdown({ cat: false, lang: false, countries: false })}}>Sports</li>
                            <li onClick={()=>{setCategories("technology"); setDropdown({ cat: false, lang: false, countries: false })}}>Technology</li>
                            <li onClick={()=>{setCategories("business"); setDropdown({ cat: false, lang: false, countries: false })}}>Business</li>
                            <li onClick={()=>{setCategories("science"); setDropdown({ cat: false, lang: false, countries: false })}}>Science</li>
                            <li onClick={()=>{setCategories("entertainment"); setDropdown({ cat: false, lang: false, countries: false })}}>Entertainment</li>
                            <li onClick={()=>{setCategories("health"); setDropdown({ cat: false, lang: false, countries: false })}}>Health</li>

                        </div>
                                }
                    </div>
                    <div>
                        <div>Languages</div>
                        <div onClick={() => setDropdown({ cat: false, lang: true, countries: false })}>+{lang} </div>
                        {dropdown.cat &&

                        <div >
                            <li onClick={()=>{setLang("en"); setDropdown({ cat: false, lang: false, countries: false })}}>English</li>
                            <li onClick={()=>{setLang("de"); setDropdown({ cat: false, lang: false, countries: false })}}>Germany</li>
                            <li onClick={()=>{setLang("ar"); setDropdown({ cat: false, lang: false, countries: false })}}>Arabic</li>
                            <li onClick={()=>{setLang("es"); setDropdown({ cat: false, lang: false, countries: false })}}>Spanish</li>
                            <li onClick={()=>{setLang("it"); setDropdown({ cat: false, lang: false, countries: false })}}>Italian</li>
                            <li onClick={()=>{setLang("fr"); setDropdown({ cat: false, lang: false, countries: false })}}>French</li>
                            <li onClick={()=>{setLang("nl"); setDropdown({ cat: false, lang: false, countries: false })}}>Dutch</li>
                            <li onClick={()=>{setLang("no"); setDropdown({ cat: false, lang: false, countries: false })}}>Norweigan</li>
                            <li onClick={()=>{setLang("pt"); setDropdown({ cat: false, lang: false, countries: false })}}>Portgueese</li>
                            <li onClick={()=>{setLang("ru"); setDropdown({ cat: false, lang: false, countries: false })}}>Russian</li>

                        </div>
}
                    </div>

                    <div>


                        <div>Countries</div>
                        <div onClick={() => setDropdown({ cat: false, lang: false, countries: true })}>+{countries} </div>
                        {dropdown.cat &&

                        <div >
                            
                            <li onClick={()=>{setCountries("au"); setDropdown({ cat: false, lang: false, countries: false })}}>Australia</li>
                           <li onClick={()=>{setCountries("be"); setDropdown({ cat: false, lang: false, countries: false })}}>Belgium</li> 
                           <li onClick={()=>{setCountries("ca"); setDropdown({ cat: false, lang: false, countries: false })}}>Canda</li>
                            <li onClick={()=>{setCountries("eh"); setDropdown({ cat: false, lang: false, countries: false })}}>Egypt</li>
                            <li onClick={()=>{setCountries("fr"); setDropdown({ cat: false, lang: false, countries: false })}}>France</li>
                            <li onClick={()=>{setCountries("de"); setDropdown({ cat: false, lang: false, countries: false })}}>Germany</li>
                            <li onClick={()=>{setCountries("it"); setDropdown({ cat: false, lang: false, countries: false })}}>Italy</li>
                            <li onClick={()=>{setCountries("nl"); setDropdown({ cat: false, lang: false, countries: false })}}>Nethertheland</li>
                            <li onClick={()=>{setCountries("no"); setDropdown({ cat: false, lang: false, countries: false })}}>Norway</li>
                            <li onClick={()=>{setCountries("sa"); setDropdown({ cat: false, lang: false, countries: false })}}>Saudi Arabia</li>
                            <li onClick={()=>{setCountries("ae"); setDropdown({ cat: false, lang: false, countries: false })}}>UAE</li>
                            <li onClick={()=>{setCountries("gb"); setDropdown({ cat: false, lang: false, countries: false })}}>United Kingdom</li>


                        </div>
}
                    </div>
                </div>
                {/* <div className={userInput ? "search-div-active" : "search-div"}>
                    <input className="search-input" type="text" placeholder="Type here" /><button className="search-click">search</button>
                </div> */}
            </div>
        </div>
    )
};
export default SearchBar;


