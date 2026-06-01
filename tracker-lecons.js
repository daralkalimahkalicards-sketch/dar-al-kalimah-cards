// ============================================
// TRACKER LEÇONS — Dar Al-Kalimah / Kalicards
// Version 1.0 — Phase 1
//
// Usage dans une leçon :
// 1. <script type="module" src="tracker-lecons.js"></script> dans <head>
// 2. Appeler à la dernière carte :
//    if (window.DAK_enregistrerLecon) {
//        window.DAK_enregistrerLecon({ module: "Module 2", lecon: "Leçon 2", total: alphabetData.length });
//    }
//
// Anti-doublon : ID déterministe uid_module_lecon → setDoc merge:true
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

// Initialiser Firebase une seule fois
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;
const startTime = Date.now();

// Surveiller l'état de connexion
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
  } else {
    // Pas connecté → rediriger vers auth.html
    if (!window.location.href.includes('auth.html')) {
      window.location.href = 'auth.html';
    }
  }
});

// ============================================
// FONCTION PRINCIPALE
// Appeler quand l'élève atteint la dernière carte
// ============================================
window.DAK_enregistrerLecon = async function({ module, lecon, total }) {
  if (!currentUser) {
    console.warn('DAK Tracker Leçons: utilisateur non connecté');
    return;
  }

  const dureeSecondes = Math.round((Date.now() - startTime) / 1000);

  // ID déterministe — anti-doublon garanti
  const docId = currentUser.uid + '_' + module.replace(/\s/g, '') + '_' + lecon.replace(/\s/g, '');

  try {
    // setDoc avec merge:true → crée ou met à jour, jamais de doublon
    await setDoc(doc(db, 'lecons', docId), {
      eleveId:        currentUser.uid,
      eleveNom:       currentUser.displayName || 'Élève',
      eleveEmail:     currentUser.email,
      module:         module,
      lecon:          lecon,
      statut:         'terminée',
      cartesTotal:    total,
      dureeSecondes:  dureeSecondes,
      date:           serverTimestamp()
    }, { merge: true });

    console.log('✅ DAK Leçon enregistrée : ' + module + ' — ' + lecon);
    return { success: true };

  } catch(e) {
    console.error('DAK Tracker Leçons erreur:', e);
    return { success: false };
  }
};

// Exposer l'état de connexion
window.DAK_isConnected = () => currentUser !== null;
