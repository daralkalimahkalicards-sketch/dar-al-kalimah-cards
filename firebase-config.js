// ============================================
// FIREBASE CONFIG — Dar Al-Kalimah / Kalicards
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBz5vRQUf4N7Px0YR4csyOlk72s1eOLLHQ",
  authDomain: "dar-al-kalimah.firebaseapp.com",
  projectId: "dar-al-kalimah",
  storageBucket: "dar-al-kalimah.firebasestorage.app",
  messagingSenderId: "472629258",
  appId: "1:472629258:web:29b755d38efe89421f1ff3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
