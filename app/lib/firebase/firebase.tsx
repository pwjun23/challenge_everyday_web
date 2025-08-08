// lib/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOioNA2npe8VpMtFlOLXJjIYzTbiu3hWY",
  authDomain: "molespapa2025.firebaseapp.com",
  projectId: "molespapa2025",
  storageBucket: "molespapa2025.firebasestorage.app",
  messagingSenderId: "601631315534",
  appId: "1:601631315534:web:9b8853fdefab730388551f",
  measurementId: "G-ZH69TWC3DJ"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
