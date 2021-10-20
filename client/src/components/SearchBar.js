import React, { useState, useEffect, useContext } from "react";
import { Store, StoreContext } from "../context";
import axios from "axios";
import myKey from "../context/config";
const API_KEY = myKey.apiKey;


function SearchBar() {
    const contextObj = useContext(StoreContext);
    console.log(contextObj);
    // Store.fetchData();


    const [userInput, setUserInput] = useState(false);
    // const handelChange = () => setUserInput(!userInput);
    // const  [userInput , setUserInput] = useState(false);
    // const [categories, setCategories] = useState("general");
    // const [lang, setLang] = useState("en");
    // const [countries, setCountries] = useState("");
    // const [dropdown, setDropdown] = useState({ cat: false, lang: false, countries: false });

    // useEffect(() => {
    //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=${categories}&languages=${lang}&countries=${countries}&keywords=corona&offset=4`).then(response=>console.log(response.data));
    // }, [dropdown, categories, lang, countries])

    return (
        <div>

<div>
<ul className="ul-header">
    <li className="li-header"><a  href="#"/>General</li>
    <li className="li-header<"><a href="#"/>Bunsiness</li>
    <li className="li-header"><a href="#"/>Entertainment</li>
    <li className="li-header"><a href="#"/>Health</li>
    <li className="li-header"><a href="#"/>Science</li>
    <li className="li-header"><a href="#"/>Sports</li>
    <li className="li-header"><a href="#"/>Technology</li>
</ul>
                    </div>

<div className="icon"/>
                
                <div className={userInput ? "search-div-active" : "search - div"}>
        < input className = "search-input" type = "text" placeholder = "Type here" /> <button className="search-click">search</button>
                </div >
            </div >
        
    )
};
export default SearchBar;


