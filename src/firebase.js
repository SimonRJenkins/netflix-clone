import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTlAYH9wn37ixu2zO7lRZYsXeZyLPzPQY",
  authDomain: "netflix-clone-593d7.firebaseapp.com",
  projectId: "netflix-clone-593d7",
  storageBucket: "netflix-clone-593d7.appspot.com",
  messagingSenderId: "134088428668",
  appId: "1:134088428668:web:a2f49dedafa6a4be428df9",
};


const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth();

export { auth };
export { db as default };