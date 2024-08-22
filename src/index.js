import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contan from './component/Task1/InandDec';
import LogSign from './component/Task2/Two/Two';
import Sign from './component/Task2/LoSign/Sign';
import Log from './component/Task2/LoSign/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Contan />
    <LogSign />
    <Sign />
    <Log  />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
