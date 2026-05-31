// ============================================
// TRACKER — Dar Al-Kalimah / Kalicards v2
// Intégration : ajouter dans <head> de chaque quiz :
// <script type="module" src="tracker.js"></script>
// ============================================

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, addDoc, collection, serverTimestamp, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

// Détecter la page courante
const pagePath = window.location.pathname;
const pageName = pagePath.split('/').pop().replace('.html', '') || 'index';

// Surveiller l'état de connexion
onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    // Mettre à jour dernier accès
    try {
      await updateDoc(doc(db, 'eleves', user.uid), {
        dernierAcces: serverTimestamp(),
        pageActuelle: pageName
      });
    } catch(e) {
      // Créer le document si il n'existe pas
      await setDoc(doc(db, 'eleves', user.uid), {
        nom: user.displayName || 'Élève',
        email: user.email,
        dateInscription: serverTimestamp(),
        dernierAcces: serverTimestamp(),
        pageActuelle: pageName
      }, { merge: true });
    }
  } else {
    // Pas connecté — rediriger vers auth.html
    // Délai pour éviter flash de redirection
    setTimeout(() => {
      if (!window.location.href.includes('auth.html') && !window.location.href.includes('dashboard')) {
        window.location.href = 'auth.html';
      }
    }, 500);
  }
});

// ============================================
// FONCTION PRINCIPALE — appeler à la fin d'un quiz
// Usage : DAK_enregistrerScore({ module:'Module 1', quiz:'Quiz 1', score:8, total:10, erreurs:[] })
// ============================================
window.DAK_enregistrerScore = async function({ module, quiz, score, total, erreurs = [] }) {
  if (!currentUser) {
    console.warn('DAK Tracker: utilisateur non connecté');
    return;
  }

  const pourcentage = Math.round((score / total) * 100);
  const dureeSecondes = Math.round((Date.now() - startTime) / 1000);

  try {
    // 1. Enregistrer dans la collection résultats
    await addDoc(collection(db, 'resultats'), {
      eleveId: currentUser.uid,
      eleveNom: currentUser.displayName || 'Élève',
      eleveEmail: currentUser.email,
      module: module,
      quiz: quiz,
      score: score,
      total: total,
      pourcentage: pourcentage,
      dureeSecondes: dureeSecondes,
      erreurs: erreurs,
      date: serverTimestamp()
    });

    // 2. Mettre à jour la progression dans le profil élève
    await updateDoc(doc(db, 'eleves', currentUser.uid), {
      [`progression.${module.replace(/\s/g,'_')}.${quiz.replace(/\s/g,'_')}`]: {
        score, total, pourcentage,
        date: new Date().toISOString()
      },
      dernierAcces: serverTimestamp()
    });

    console.log(`✅ DAK Tracker: ${module} — ${quiz} — ${score}/${total} (${pourcentage}%)`);
    return { success: true, pourcentage };

  } catch(e) {
    console.error('DAK Tracker erreur:', e);
    return { success: false };
  }
};

// Exposer l'utilisateur courant
window.DAK_getUser = () => currentUser;
window.DAK_isConnected = () => currentUser !== null;
