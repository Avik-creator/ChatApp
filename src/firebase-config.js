// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQcL0Gi4syMYppA2hLU4UDJcFavJcFB8I",
  authDomain: "chatapp-cd7a3.firebaseapp.com",
  projectId: "chatapp-cd7a3",
  storageBucket: "chatapp-cd7a3.appspot.com",
  messagingSenderId: "260774232457",
  appId: "1:260774232457:web:366ea1693f6c405478e158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();