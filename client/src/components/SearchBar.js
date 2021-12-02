import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import myKey from "../context/config";
import {Link, useHistory} from "react-router-dom";
import {useMediaQuery} from '@react-hook/media-query';
import { StoreContext } from "../context/index";


const API_KEY = myKey.apiKey;

function SearchBar() {
  const [searchIcon, setSearchIcon] = useState(false);
  const [data , setData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const contextObj = useContext(StoreContext);


  const history = useHistory();

  const  matches = useMediaQuery('only screen and (max-width: 400px)')

  const handelChange = () => setSearchIcon(!searchIcon);
  const categories = "business,sports,entertainment,health,science,technology,general";
  const search = "virus,fragrances,netflix,starvation,coup,share,inflation,shrink,vaccine"
  
    
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=${categories}&languages=en&search=${search}&sort=published_desc`)
  // .then((data)=>setData(data.data.data.filter((item)=> item.image)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(data);
  // console.log(search);
  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const text = search.split(" ");
    text.filter((item)=>{
      if(userText === ""){
        return item;
      } else if (item.toLocaleLowerCase().includes(userText)){
        return item;
      }
      
    })

  };

const handleSubmit = (e) => {
  e.preventDefault();
  lookUp();

};


  return (
    <div className={contextObj.store === "light"? "searchFather":"searchFatherDark"}>
      <div className={contextObj.store === "light"? "searchBar":"searchBarDark"} >
        <div>
          <ul className="ul-search-bar">

          <li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push( "/")} >Home</li> 
          <li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"general"}})} >General</li> 

<li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"business"}})} >Business</li> 
          
          <li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"sports"}})} >Sports</li> 
          
          <li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"science"}})} >Science</li> 
          
          <li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"technology"}})} >Technology</li> 
          
          <li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"health"}})} >Health</li> 
          
          <li className={contextObj.store === "light"? "searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"entertainment"}})} >Entertainment</li> 

            <li className="searchClick" onClick={handelChange}>
              🔍
            </li>
          </ul>
        </div>
        <div />

        <div className={searchIcon ? "search-div-active" :matches && contextObj.store === "dark" ? "searchDivDarkMobile" : contextObj.store === "light"? "search-div":"search-divDark"  }>
          
    <form onSubmit={handleSubmit}>
          <input className={contextObj.store === "light"? "searchInput":"searchInputDark"} type="text" placeholder="Type here" onChange={changeHandle}
          value={userInput} 
          />{" "}
          <button className="search-button">search</button>
         </form> 
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
