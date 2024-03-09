// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQxUm9TauX75MOcUFD6OqrdtSdKkOT2NQ",
  authDomain: "carpishop-b70d0.firebaseapp.com",
  projectId: "carpishop-b70d0",
  storageBucket: "carpishop-b70d0.appspot.com",
  messagingSenderId: "413009585652",
  appId: "1:413009585652:web:e5a4660ee4d45511e785a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

