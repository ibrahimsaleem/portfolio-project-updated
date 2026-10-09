import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMSmhz1jFnJ8sgdl1LvGqoReSQehVveMc",
  authDomain: "ibrahimsaleem-portfolio.firebaseapp.com",
  projectId: "ibrahimsaleem-portfolio",
  storageBucket: "ibrahimsaleem-portfolio.firebasestorage.app",
  messagingSenderId: "628407563079",
  appId: "1:628407563079:web:036f0cdd9198771f9cd262",
  measurementId: "G-28JP8ZBDHK",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
