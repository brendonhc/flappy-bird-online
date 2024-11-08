// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7OVNj3CNC7LVDpNr8esrFwNegohowuGw",
  authDomain: "flappy-bird-etec-dracena.firebaseapp.com",
  databaseURL: "https://flappy-bird-etec-dracena-default-rtdb.firebaseio.com",
  projectId: "flappy-bird-etec-dracena",
  storageBucket: "flappy-bird-etec-dracena.firebasestorage.app",
  messagingSenderId: "901925041875",
  appId: "1:901925041875:web:7f7bac78fd7fc128de0626",
  measurementId: "G-EEK40ZMLHZ"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var analytics = getAnalytics(app);
var database = getDatabase(app);

export { app, analytics, database };