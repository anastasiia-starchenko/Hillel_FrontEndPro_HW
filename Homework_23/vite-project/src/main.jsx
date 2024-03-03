/*Створити форму за допомогою форми з наступними полями:

ім'я, обов'язкове для заповнення;
електронна пошта, обов'язкове для заповнення, формат email;
телефон, обов'язкове до заповнення, тільки цифри та довжина 12.

Провалідувати всі поля і вивести повідомлення у відповідь*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
