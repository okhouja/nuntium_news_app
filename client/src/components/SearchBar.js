import React, {  useContext, useState } from "react";
import { useHistory} from "react-router-dom";
import {useMediaQuery} from '@react-hook/media-query';
import { StoreContext } from "../context/index";

function SearchBar() {
  const [searchIcon, setSearchIcon] = useState(false);
  const [userInput, setUserInput] = useState("");
  const contextObj = useContext(StoreContext);

  const history = useHistory();
  const  matches = useMediaQuery('only screen and (max-width: 400px)')
  const handelChange = () => setSearchIcon(!searchIcon);
  
  const searchHandel = (e) => {
    setUserInput(e.target.value);
   
  }


const handleSubmit = (e) => {
  e.preventDefault();
};

const searchAccess = ()=>{
  history.push({pathname:"/searchshow", state: {userInput}}) ;setUserInput("");

}

  return (
    <div className={contextObj.store === "light"? "searchFather":"searchFatherDark"}>
      <div className={contextObj.store === "light"? "searchBar":"searchBarDark"} >
        <div>
          <ul className="ul-search-bar">

          <li  className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"} onClick={()=>history.push( "/")} >Home</li> 
          <li  className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"}onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"general"}})} >General</li> 

<li className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"business"}})} >Business</li> 
          
          <li  className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"sports"}})} >Sports</li> 
          
          <li  className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"science"}})} >Science</li> 
          
          <li  className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"technology"}})} >Technology</li> 
          
          <li  className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"health"}})} >Health</li> 
          
          <li  className={contextObj.store === "dark" && matches? "searchLiDarkMobile":contextObj.store === "light"?"searchLi":"searchLiDark"} onClick={()=>history.push({pathname:"/newscollection",
     state: {category:"health"}})} >Entertainment</li> 
          


            <li className="searchClick" onClick={handelChange}>
              🔍
            </li>
          </ul>
        </div>
        <div />

        <div className={searchIcon ? "search-div-active" :matches && contextObj.store === "dark" ? "searchDivDarkMobile" : contextObj.store === "light"? "search-div":"search-divDark"  }>
          
    <form onSubmit={handleSubmit}>
          <input className={contextObj.store === "light"? "searchInput":"searchInputDark"}
           type="text"  placeholder="Type here" onChange={searchHandel}
          value={userInput} name="name"
          />{" "}
          <button className="search-button" onClick={searchAccess}>search</button>
         </form> 
        </div>
      </div>
    </div>
  );
}
export default SearchBar;