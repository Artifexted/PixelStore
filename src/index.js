import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARP0BuQRB7l0N75ZlnfSmFAnZc__3TiUY",
  authDomain: "ros-pixelstore.firebaseapp.com",
  projectId: "ros-pixelstore",
  storageBucket: "ros-pixelstore.appspot.com",
  messagingSenderId: "725360405701",
  appId: "1:725360405701:web:85f41f780b0ed7acd254ac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
