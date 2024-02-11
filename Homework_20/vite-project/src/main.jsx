/*
На сторінці відображається список смайликів та лічильник кліків по кожному

Нижче є кнопка “Show Results” яка виводить смайл, що переміг, на підставі кількості голосів
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
