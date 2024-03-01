/*
Переписати колишню програму про todo на використання redux.

Дані зберігаємо в редаксівському сторі, на сервер нічого не відправляємо.
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from "./components/Body/Body.jsx";
import './index.css'
import {Provider} from "react-redux";
import store from "./storage/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}><Body/></Provider>
  </React.StrictMode>,
)
