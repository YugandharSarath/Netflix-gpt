// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVW5bel39iBnC6MwmXEvuVJWWTK9AlBlQ",
  authDomain: "netflixgpt-df9ac.firebaseapp.com",
  projectId: "netflixgpt-df9ac",
  storageBucket: "netflixgpt-df9ac.appspot.com",
  messagingSenderId: "624661926734",
  appId: "1:624661926734:web:d6d06e72e38169d592c41f",
  measurementId: "G-7VQJXVMZ64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();