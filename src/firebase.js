// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8SQcyNYW7d5CuT1xqXKzPGmyPThhCEkA",
  authDomain: "nft-petitions-8708d.firebaseapp.com",
  projectId: "nft-petitions-8708d",
  storageBucket: "nft-petitions-8708d.appspot.com",
  messagingSenderId: "433676217504",
  appId: "1:433676217504:web:6fb6df0d978a3424a7adc5",
  measurementId: "G-8H1R457B26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) , db = getDatabase(app);

export {app,db}
