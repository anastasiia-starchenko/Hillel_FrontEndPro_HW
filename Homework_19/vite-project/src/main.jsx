/*
Додаток повинен складатися з трьох блоків:
хедер;
ліва бічна навігація;
центральний контейнер.
Контент всередині блоків довільний
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.jsx'
import Body from "./components/Body/Body.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header/>
      <Body/>
  </React.StrictMode>,
)
