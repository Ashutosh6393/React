// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACYSHTiT3bUX4s78SSa8f4rymQ42_KxWw",
  authDomain: "contacts-app-66885.firebaseapp.com",
  projectId: "contacts-app-66885",
  storageBucket: "contacts-app-66885.appspot.com",
  messagingSenderId: "97905277431",
  appId: "1:97905277431:web:aa17d26b385f85e16ad6f2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);