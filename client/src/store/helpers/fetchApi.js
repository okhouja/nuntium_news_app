import axios from "axios";
const myKey = require("./config");
const API_KEY = myKey.apiKey;



export const helpFetchNews = async () => {
    const categories = "&categories=health,sports,business,science,technology,entertainment";
    const lang = "&languages=en,de,ar,es,fr,it,nl,no,pt,ru";//mins 3 languages
    const countries = "&countries=au,at,de,eg,ca,il,it,al";
    return await (await axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}${categories}${lang}${countries}`));
};

