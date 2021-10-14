import axios from "axios";
const myKey = require("./config");
const API_KEY = myKey.apiKey;



export const  helpFetchNews = async  () => {
    let categories ;
    let languages ;
    let countries ;
    let keywords ;
    return await (axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=${categories}&languages=${languages}&countries=${countries}&kewwords=${keywords}`));
   
};

