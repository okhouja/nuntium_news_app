import General from "../../components/General";
import { helpFetchNews } from "../helpers/fetchApi";


 const newsAction = function () {
    return async function (dispatch) {
        
            const response =await helpFetchNews(); 

        dispatch({
            type: "GET-NEWS",
            payload: response.data
        })
        console.log(response.data);
    }
}
export default newsAction;