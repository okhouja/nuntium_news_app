import {React , useEffect, useState} from 'react'
import axios from "axios";
import myKey from "../context/config";




 const NewsCollection = (props) => {
    const API_KEY = myKey.apiKey;

     const [newsarray, setNewsarray] = useState([]);
     const [category, setCategorx] =useState(props.state && props.state.category)
    // useEffect(() => {
    //         axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&category=${category}&languages=en&sort=published_desc`)
    //     .then((data)=>setNewsarray(data.data.data.filter((item)=> item.image).slice(0,6)))
    //     .catch((err) => console.log(`Your had an ${err}`));
            
    //     }, [])
    //     console.log(category);
    
    return (
        <div>
            hello from news collwctions
        </div>
    )
}
export default NewsCollection;
