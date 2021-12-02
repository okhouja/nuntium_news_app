import { React, useState, useEffect} from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Register from "./components/Signup";
import Login from "./components/Login";
import NewsCollection from "./components/NewsCollection";
import LinksCollection from "./components/LinksCollection";
import LanguagesCollection from "./components/LanguagesCollection";
import CountriesCollection from "./components/CountriesCollection";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Loading from "./components/Loading";
import Dashboard from "./components/Dashboard";
import { Store, StoreContext } from "./context/index";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [store, setStore] = useState(Store);

  return (
    <StoreContext.Provider  value={{ store, setStore }}>
    <Router>
     

        {/* <Dashboard /> */}
      <DesktopNavbar   />
      <MobileNavbar  />
      <Header   />
      <SearchBar  />

      <Switch >
        <Route  path="/" exact component={Home}/>
        <Route path="/signup" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/newscollection" exact component={NewsCollection}/>
        <Route path="/linkscollection" exact component={LinksCollection} />
        <Route
          path="/languagescollection"
          exact
          component={LanguagesCollection}
        />
        <Route
          path="/countriescollection"
          exact
          component={CountriesCollection}
        />
      </Switch>
      <Footer />
    </Router>

    </StoreContext.Provider>
  );
}

export default App