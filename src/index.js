import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import puppyData from './data/mockdata.json';
import firebase from 'firebase/app';
import 'firebase/database';
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

//Router
import { BrowserRouter } from 'react-router-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK5DNwoFLLhwXVy429StlNE7COl5dk4qE",
  authDomain: "info340-dayup-415be.firebaseapp.com",
  databaseURL: "https://info340-dayup-415be-default-rtdb.firebaseio.com",
  projectId: "info340-dayup-415be",
  storageBucket: "info340-dayup-415be.appspot.com",
  messagingSenderId: "675388777441",
  appId: "1:675388777441:web:9563d88a61947ac87928a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App puppyData={puppyData} />
  </BrowserRouter>
);
