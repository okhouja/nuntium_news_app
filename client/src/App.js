import React from "react";
import { useState } from "react";
import { Store, StoreContext } from "./context";
import Home from "./components/Home";
import Header from "./components/Header";
import General from "./components/General";
import Navbar from "./components/Navbar"

import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
Store.print();





function App() {
  const [store, setStore] = useState(Store);
  return (
    <StoreContext.Provider value={{ store, setStore }}>

      <Home />
     <Header /> 
     <Navbar />
     <SearchBar/>
     </StoreContext.Provider>
     );
   }

export default App;
