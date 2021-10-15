import React from 'react'

 function SearchBar  () {
    return (
        <div>
             <div className="search-bar">
                 
                  <ul className="ul-search-bar">
                      <li className="li-search-bar"><a className="latest-news" href="#">Latest News</a><div className="latest-news-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a  className="general" href="#">General</a><div className="general-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a className="busniess" href="#">Busniess</a><div className="busniess-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a className="entertainment" href="#">Entertainment</a><div className="entertainment-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a className="health"  href="#">Health</a><div className="health-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a  className="science-" href="#">Science</a><div className="science-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a className="sports"  href="#">Sports</a><div className="sports-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a className="tech"  href="#">Technology</a><div className="tech-overlay">
                      <a href="#"></a></div></li>
                      <li className="li-search-bar"><a className="more"  href="#">More</a><div className="more-overlay">
                      <a href="#"></a></div></li>
                     <li className="search-li" > <button className="search-but">&#128269;</button> </li> 
                  
                  </ul>
                  ""


                </div>
            
        </div>
    )
};
export default SearchBar;
