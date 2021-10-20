import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import myKey from "../context/config";
const API_KEY = myKey.apiKey;

function SearchBar() {
   
    const [userInput, setUserInput] = useState(false);
    const handelChange = ()=> setUserInput(!userInput);
  

    // useEffect(() => {
    //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${lang}&countries=${countries}&keywords=corona&offset=4`).then(response=>console.log(response.data));
    // }, [dropdown, categories, lang, countries])

    return (
        <div>
            <div className="search-bar">

<div>
<ul className="ul-search-bar">
    <li className="search-li"><a  href="#"/>General</li>
    <li className="search-li"><a href="#"/>Bunsiness</li>
    <li className="search-li"><a href="#"/>Entertainment</li>
    <li className="search-li"><a href="#"/>Health</li>
    <li className="search-li"><a href="#"/>Science</li>
    <li className="search-li"><a href="#"/>Sports</li>
    <li className="search-li"><a href="#"/>Technology</li>
    <li className="searchClick" onClick={handelChange}>🔍</li>

</ul>


                    </div>

<div />
                
                <div className={userInput ? "search-div-active" : "search-div" }> 
        < input className = "search-input" type = "text" placeholder = "Type here" /> <button className="search-button">search</button>
                </div >
            </div >
            </div>
        
    )
};
export default SearchBar;


