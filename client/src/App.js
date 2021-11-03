import {React, useState} from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GeneralRediect from "./components/categoriesRedirect/GeneralRedirect";
import SportsRedirect from "./components/categoriesRedirect/SportsRedirect";
import BusinessRedirect from "./components/categoriesRedirect/BusinessRedirect";
import ScienceRedirect from "./components/categoriesRedirect/ScienceRedirect";
import TechnologyRedirect from "./components/categoriesRedirect/TechnologyRedirect";
import HealthRedirect from "./components/categoriesRedirect/HealthRedirect";
import EntertainmentRedirect from "./components/categoriesRedirect/EntertainmentRedirect";
import NewsCollection from "./components/NewsCollection";






import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  return (
   <Router>
    <Header />
    <Navbar />
    <SearchBar />
  
     <Switch>
       <Route path="/" exact component={Home}/>
       {/* <Route path="/home" exact component={Home} />  */}

       <Route path="/signup" exact component={Signup} />
       <Route path="/login" exact component={Login} />
       <Route path="/newscollection" exact component={NewsCollection}/>
     </Switch>
     <Footer />

     </Router>
     );
   }

export default App;
