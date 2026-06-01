// ============================================
// TRACKER LEÇONS — Dar Al-Kalimah / Kalicards
// Version 1.1 — Correction currentUser timing
// ============================================

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBz5vRQUf4N7Px0YR4csyOlk72s1eOLLHQ",
  authDomain: "dar-al-kalimah.firebaseapp.com",
  projectId: "dar-al-kalimah",
  storageBucket: "dar-al-kalimah.firebasestorage.app",
  messagingSenderId: "472629258",
  appId: "1:472629258:web:29b755d38efe89421f1ff3"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;
const startTime = Date.now();

onAuthStateChanged(auth, (user) => {
  currentUser = user || null;
  if (!user && !window.location.href.includes('auth.html')) {
    window.location.href = 'auth.html';
  }
});

// ============================================
// Récupère l'utilisateur connecté — immédiat ou attend Firebase
// ============================================
function getUser() {
  return new Promise((resolve) => {
    // 1. Essai immédiat — auth.currentUser
    if (auth.currentUser) {
      resolve(auth.currentUser);
      return;
    }
    // 2. Essai via variable locale
    if (currentUser) {
      resolve(currentUser);
      return;
    }
    // 3. Attendre le prochain callback onAuthStateChanged (max 3s)
    const timeout = setTimeout(() => resolve(null), 3000);
    const unsub = onAuthStateChanged(auth, (user) => {
      clearTimeout(timeout);
      unsub();
      resolve(user || null);
    });
  });
}

// ============================================
// FONCTION PRINCIPALE
// ============================================
window.DAK_enregistrerLecon = async function({ module, lecon, total }) {
  const user = await getUser();

  if (!user) {
    console.warn('DAK Tracker Leçons: utilisateur non connecté');
    return { success: false };
  }

  const dureeSecondes = Math.round((Date.now() - startTime) / 1000);
  const docId = user.uid + '_' + module.replace(/\s/g, '') + '_' + lecon.replace(/\s/g, '');

  try {
    await setDoc(doc(db, 'lecons', docId), {
      eleveId:       user.uid,
      eleveNom:      user.displayName || 'Élève',
      eleveEmail:    user.email,
      module:        module,
      lecon:         lecon,
      statut:        'terminée',
      cartesTotal:   total,
      dureeSecondes: dureeSecondes,
      date:          serverTimestamp()
    }, { merge: true });

    console.log('✅ DAK Leçon enregistrée : ' + module + ' — ' + lecon);
    return { success: true };

  } catch(e) {
    console.error('DAK Tracker Leçons erreur:', e);
    return { success: false };
  }
};

window.DAK_isConnected = () => currentUser !== null;
