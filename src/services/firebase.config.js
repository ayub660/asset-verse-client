// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOrLXBjkRLvhfAWjN_V1fQP9ID1QRwOfc",
  authDomain: "asset-verse-63a9d.firebaseapp.com",
  projectId: "asset-verse-63a9d",
  storageBucket: "asset-verse-63a9d.appspot.com",
  messagingSenderId: "31134187996",
  appId: "1:31134187996:web:6bd3fd6d522d9cbb740f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Export
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
