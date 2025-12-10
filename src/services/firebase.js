// src/services/firebase.js

// 1️⃣ Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 2️⃣ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOrLXBjkRLvhfAWjN_V1fQP9ID1QRwOfc",
  authDomain: "asset-verse-63a9d.firebaseapp.com",
  projectId: "asset-verse-63a9d",
  storageBucket: "asset-verse-63a9d.appspot.com",
  messagingSenderId: "31134187996",
  appId: "1:31134187996:web:6bd3fd6d522d9cbb740f19"
};

// 3️⃣ Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4️⃣ Initialize services
export const auth = getAuth(app);         // Firebase Auth
export const db = getFirestore(app);      // Firestore
export const storage = getStorage(app);   // Firebase Storage

export default app;
