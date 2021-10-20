import React from "react";
import myKey from "./config"
const API_KEY =  myKey.apiKey
const Store = {
  dataNew: [],
//  fetchData: function () {
//     fetch(
//       `http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&keywords=corona&offset=4`
// )
//       .then((response) => response.json())
//       .then((data) => {
//              Store.dataNew.push(data);
//       });
//   },
    print: () => console.log(Store)

     
 };
const StoreContext = React.createContext(Store);
export { Store, StoreContext };