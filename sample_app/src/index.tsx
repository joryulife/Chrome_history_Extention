import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Popup from './Popup';
import Options from './Options';
import History from './History';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('Popup') as HTMLElement);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
reportWebVitals();
