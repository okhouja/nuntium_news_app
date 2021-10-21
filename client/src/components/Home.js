import React from "react";
import Header from "./Header";
import General from "./General";
import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Searchbar />
      <General />
     <Footer /> 
    
    </div>
  );
}

export default Home;
