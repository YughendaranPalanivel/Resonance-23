import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBzJy89JT-orgzcyAtNan-IlYWx18yX1Bg",
  authDomain: "resonance-2023.firebaseapp.com",
  databaseURL: "https://resonance-2023-default-rtdb.firebaseio.com",
  projectId: "resonance-2023",
  storageBucket: "resonance-2023.appspot.com",
  messagingSenderId: "78554866661",
  appId: "1:78554866661:web:86232bd7bf74a96db1850c",
  measurementId: "G-EZZGHKVE29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };