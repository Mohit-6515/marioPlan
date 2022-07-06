import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBRq5FIPqOrLAHDcqxO2vLRCueQV1oa3gY",
  authDomain: "marioplan-dbabd.firebaseapp.com",
  projectId: "marioplan-dbabd",
  storageBucket: "marioplan-dbabd.appspot.com",
  messagingSenderId: "194766984640",
  appId: "1:194766984640:web:5e5c365b8816a44808a425",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
