import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import myKey from "../context/config";
import {Link} from "react-router-dom";
const API_KEY = myKey.apiKey;

function SearchBar() {
  const [searchIcon, setSearchIcon] = useState(false);
  const [data , setData] = useState("");
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);



  const handelChange = () => setSearchIcon(!searchIcon);
  const categories = "business,sports,entertainment,health,science,technology,general";
  const search = "corona,netflix,"
    
  //   useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=${categories}&languages=en&search=${search}&sort=published_desc`)
  // .then((data)=>setData(data.data.data.filter((item)=> item.image)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(data);
  console.log(search);
  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    // const searchText = userText ? userText : "";
    let newArr = data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };
  

const handleSubmit = (e) => {
  e.preventDefault();

};


  return (
    <div>
      <div className="search-bar">
        <div>
          <ul className="ul-search-bar">
          <Link to="/home"><li className="searchLi">Home</li></Link>
          <Link to="/generalredirect"><li className="searchLi">General</li></Link>
          <Link to="/sportsrediredt"><li className="searchLi">Sports</li></Link>
          <Link to="/businessredirect"><li className="searchLi">Business</li></Link>
          <Link to="/scienceredirect"><li className="searchLi">Science</li></Link>
          <Link to="/technologyredirect"><li className="searchLi">Technology</li></Link>
          <Link to="/healthredirect"><li className="searchLi">Health</li></Link>
          <Link to="/home"><li className="searchLi">Entertainment</li></Link>
            <li className="searchClick" onClick={handelChange}>
              🔍
            </li>
          </ul>
        </div>
        <div />

        <div className={searchIcon ? "search-div-active" : "search-div"}>
          
    <form onSubmit={handleSubmit}>
          <input className="searchInput" type="text" placeholder="Type here" onChange={changeHandle}
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
