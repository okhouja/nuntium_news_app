import {React, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import WrapperCategories from "./WrapperCategories";

import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import Footer from "./Footer";
import Signup from "./Signup";


function Home() {
  // const [menuopen, setMenuopen] = useState(false);

  const [authorized, setAuthorized] = useState(true);


  return (
    
  <div >

     
  
      <Header/>

<Navbar />
<Searchbar />
<WrapperCategories />
<Footer />   
</div>
      
      
      
        

      
     
       
    
  );
}

export default Home;
