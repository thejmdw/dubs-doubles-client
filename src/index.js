import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DubsDoubles } from './components/DubsDoubles';
import { BrowserRouter as Router } from "react-router-dom"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrWspojz00JYSpcNu56Pp1Yd4676smfEs",
  authDomain: "dub-s-doubles.firebaseapp.com",
  projectId: "dub-s-doubles",
  storageBucket: "dub-s-doubles.appspot.com",
  messagingSenderId: "380330997470",
  appId: "1:380330997470:web:4289bdcce23333974cb44f",
  measurementId: "G-Q24S1CEFYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DubsDoubles />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
