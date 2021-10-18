// import {React , useEffect} from 'react';
// import newsAction from "../store/actions/newsAction";
// import { useDispatch, useSelector } from 'react-redux';


//  const General = () => {
     
//     const dispatch = useDispatch();
//     const news = useSelector(state => state.newsReducer.news);
//     useEffect(() => {
        
//         dispatch(newsAction())

        
//     }, []);
//     console.log(news);
//     return (
//         <div>
//             <ul>
//                         {news.map((item,i)=> <li key={i}>{item.author}</li>)}

//             </ul>
//         </div>
//     )
// }

// export default General;