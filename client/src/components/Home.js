import {React, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import General from "./General";
import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import Footer from "./Footer";
import Signup from "./Signup";


function Home() {
  // const [menuopen, setMenuopen] = useState(false);

  const [authorized, setAuthorized] = useState(true);


  return (
    
  

     
   <Router >
      <Header/>

<Navbar />
<Searchbar />
<General />
<Footer />   
      
      <Switch>
        <Route path="/home/signup" exact component={Signup}/>
      
        

      </Switch>
      </Router>
     
       
    
  );
}

export default Home;
