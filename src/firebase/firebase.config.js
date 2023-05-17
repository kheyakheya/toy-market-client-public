// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId:  import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAMi3qU1VZK4GuBwz2UHTBU9bVyvMfpB4c",
//   authDomain: "assignment-eleven-11d98.firebaseapp.com",
//   projectId: "assignment-eleven-11d98",
//   storageBucket: "assignment-eleven-11d98.appspot.com",
//   messagingSenderId: "576036903668",
//   appId: "1:576036903668:web:1694c3ddab96dac93bdca1"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;