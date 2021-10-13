import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import General from "./components/General";

import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (

<div>
      <Home />
     <Header /> 
     <SearchBar/>
    <General  /> 
     {/* <Route path="/general" exact component={General} /> */}
    
</div>
  );
}

export default App;
