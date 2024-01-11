// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "ai-alchemist-fc086.firebaseapp.com",
  projectId: "ai-alchemist-fc086",
  storageBucket: "ai-alchemist-fc086.appspot.com",
  messagingSenderId: "581363547943",
  appId: "1:581363547943:web:85c45c2db717cad1faf302"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);