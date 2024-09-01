



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "microssoft-loop-backend.firebaseapp.com",
  projectId: "microssoft-loop-backend",
  storageBucket: "microssoft-loop-backend.appspot.com",
  messagingSenderId: "585192439382",
  appId: "1:585192439382:web:21c289838db109478545f7",
  measurementId: "G-4LEJHM36JS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
const analytics = getAnalytics(app);
