import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJKeyW9U1vpCvynGSq5lBdVAPraJnylwc",
  authDomain: "buy-busssy.firebaseapp.com",
  projectId: "buy-busssy",
  storageBucket: "buy-busssy.appspot.com",
  messagingSenderId: "611973505566",
  appId: "1:611973505566:web:5b4a7d18132606fdb0040f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
export {db,auth};