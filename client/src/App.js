import {React, useState} from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NewsCollection from "./components/NewsCollection";
import LinksCollection from "./components/LinksCollection";
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
       <Route path="/linkscollection" exact component={LinksCollection}/>

     </Switch>
     <Footer />

     </Router>
     );
   }

export default App;
