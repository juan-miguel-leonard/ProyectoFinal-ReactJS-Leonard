import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPhEEO-opU59dRA7wsBhZ_4EVDCC9llyc",
  authDomain: "bacustoms-d3e66.firebaseapp.com",
  projectId: "bacustoms-d3e66",
  storageBucket: "bacustoms-d3e66.appspot.com",
  messagingSenderId: "492348236834",
  appId: "1:492348236834:web:43e0614940cfc6f834967b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
