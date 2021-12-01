import React from "react";
import axios from "axios";

const Store = {
  
    theme: "light",
    data: {},
    fetchData: function ()  {
        axios.get("http://localhost:5000/articles", {
          credentials: "include",
        })
        .then((data) => data.data.push(Store.data))
          
      },
  }
 
const StoreContext = React.createContext(Store);
export { Store, StoreContext };