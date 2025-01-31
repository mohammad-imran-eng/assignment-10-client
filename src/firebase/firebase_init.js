// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVb5kY3TRou5PGG9yiDeT-E92doTTmQiY",
  authDomain: "lotus-927d7.firebaseapp.com",
  projectId: "lotus-927d7",
  storageBucket: "lotus-927d7.firebasestorage.app",
  messagingSenderId: "559614015318",
  appId: "1:559614015318:web:bb62aca4ec7d5a9a3248f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
