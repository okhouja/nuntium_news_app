import {React, useState, useContext} from "react";
import {useMediaQuery} from '@react-hook/media-query';
import WrapperCategories from "./WrapperCategories";
import { StoreContext } from "../context/index";

function Home() {
  const contextObj = useContext(StoreContext);
  const  matches = useMediaQuery('only screen and (max-width: 400px)')

  return (
  <div   className={matches && contextObj.store === "dark" ? "homeDark":contextObj.store === "light"?"home":"homeDarkMobile" }  >    
<WrapperCategories  />
</div>   
  );
}
export default Home;