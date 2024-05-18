import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import puppyData from './data/mockdata.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App puppyData={puppyData} />

  // <React.StrictMode>
  //   <App puppyData={puppyData} />
  // </React.StrictMode>
);

