import {React, useState} from "react";

import WrapperCategories from "./WrapperCategories";



function Home({theme}) {
  console.log(theme);
  

  return (
    
  <div className={`home ${theme}`} >    
<WrapperCategories  />

</div>   
  );
}

export default Home;
