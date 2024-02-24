/*
Користувач бачить список усіх тудушок (зроблені від не зроблених).
При натисканні на конкретну тудушку її стан переключається на протилежне.

Під списком знаходиться форма з інпутом та кнопкою.
Користувач може ввести в інпут справу, яку хоче зробити, та натиснути кнопку.
Після натискання у списку з'являється нова тудушка
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from "./components/Body/Body.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Body/>
  </React.StrictMode>,
)
