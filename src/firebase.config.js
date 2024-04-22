// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0cS7cyv6BW_3_Qbt4us-vM3_Z35XVpRc",
  authDomain: "coffee-store-7b96d.firebaseapp.com",
  projectId: "coffee-store-7b96d",
  storageBucket: "coffee-store-7b96d.appspot.com",
  messagingSenderId: "485691382221",
  appId: "1:485691382221:web:d8bf26ecafeec2ca5f8c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)