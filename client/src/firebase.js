// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APP_FIREBASE_API_KEY}`,
  authDomain: "success-clone.firebaseapp.com",
  databaseURL: `${import.meta.env.VITE_APP_FIREBASE_BD_URI}`,
  projectId: "success-clone",
  storageBucket: "success-clone.appspot.com",
  messagingSenderId: "189431815177",
  appId: "1:189431815177:web:15ed22c60195f1d3982cd8",
  measurementId: "G-0SY60YP3G9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

