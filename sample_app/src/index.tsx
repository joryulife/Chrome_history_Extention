import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Popup from './Popup';
import Options from './Options';
import History from './History';
import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(
  document.getElementById('popup') as HTMLElement ||
  document.getElementById('options') || 
  document.getElementById('history') 
);*/

const root = ReactDOM.createRoot(document.getElementById('Popup') as HTMLElement);
//const options = ReactDOM.createRoot(document.getElementById('Options') as HTMLElement);
//const history = ReactDOM.createRoot(document.getElementById('History') as HTMLElement);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
/*options.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
)
history.render(
  <React.StrictMode>
    <History />
  </React.StrictMode>,
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
