import {React, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import WrapperCategories from "./WrapperCategories";



function Home() {
  // const [menuopen, setMenuopen] = useState(false);

  const [authorized, setAuthorized] = useState(true);


  return (
    
  <div >    
<WrapperCategories />

</div>   
  );
}

export default Home;
