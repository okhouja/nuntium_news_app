import {React, useEffect, useState} from 'react';
import axios from 'axios';

const Trending = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      getData();
    }, []);
    const getData = () => {
        

      axios.get("http://localhost:5000/articles", {
       
        credentials: "include",// we have omit don allow to send cookies 
        //same origine 
      })
        .then((data) => setUsers(data))
        // .then((result) => setUsers(result));
    };
    console.log(users);
    

    return (
        <div>
            <div className="trendingContainer">
                <div className="trendingFather">
                    <img       />
                    <h1>
                    </h1>
                    <p></p>
                    <p></p>

                </div>

            </div>
            
        </div>
    )
}
export default Trending;
