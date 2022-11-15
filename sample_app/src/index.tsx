import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Options from './Options';
import Popup from './Popup';
import History from './History';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('popup') as HTMLElement ||
  document.getElementById('options') || 
  document.createElement('div') ||
  document.getElementById('history') ||
  document.createElement('div') 
);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
root.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
)
root.render(
  <React.StrictMode>
    <History />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
