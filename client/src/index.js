import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { myStore } from './store/index';



import App from "./App";
import "./sass/main.scss";


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
