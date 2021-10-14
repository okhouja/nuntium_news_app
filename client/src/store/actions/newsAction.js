import { helpFetchNews } from "../helpers/fetchApi";


 const newsAction = function () {
    return async function (dispatch) {
        
            const response =await helpFetchNews(); 
            const data = response.data;
        

        dispatch({
            type: "GET-NEWS",
            payload:  data
            
        })
        console.log(response);
    }
}
export default newsAction;