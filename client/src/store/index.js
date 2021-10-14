import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { allReducers } from "./reducers/allReducers";


export const myStore = createStore(
    allReducers ,
    composeWithDevTools(applyMiddleware(thunk))
);