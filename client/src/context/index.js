import React from "react";

const Store = {
  
    theme: "light",
    
  }
 
const StoreContext = React.createContext(Store);
export { Store, StoreContext };