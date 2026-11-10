// ============================================
// TRACKER — Dar Al-Kalimah / Kalicards v2
// Intégration : ajouter dans <head> de chaque quiz :
// <script type="module" src="tracker.js"></script>
// ============================================

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, addDoc, collection, serverTimestamp, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getModuleLockStatus } from "./module-lock.js";

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

  // Deverrouillage sequentiel Modules 1-12 : etat AVANT ecriture du resultat,
  // pour detecter apres coup si CE quiz vient de faire passer le module de
  // "en cours" a "termine" (message de felicitations). Ne concerne que les
  // Modules 1-12 (Partie 2 et Parcours Tajwid non concernes) ; echoue en
  // silence si le module ne matche pas "Module N" ou si la lecture echoue --
  // n'a jamais pour effet de bloquer l'enregistrement du score.
  const moduleMatch = /^Module (\d+)$/.exec(module || '');
  const moduleNum = moduleMatch ? parseInt(moduleMatch[1], 10) : null;
  let etaitTermineAvant = null;
  if (moduleNum >= 1 && moduleNum <= 12) {
    try {
      const statusAvant = await getModuleLockStatus(db, currentUser.uid);
      etaitTermineAvant = statusAvant.termines[moduleNum];
    } catch (eLock) {
      console.error('DAK Tracker: verification module-lock (avant) impossible :', eLock);
    }
  }

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

    // Etat APRES ecriture : si le module vient de passer de "en cours" a
    // "termine" grace a CE quiz, afficher le message de felicitations.
    if (etaitTermineAvant === false) {
      try {
        const statusApres = await getModuleLockStatus(db, currentUser.uid);
        if (statusApres.termines[moduleNum] === true) {
          DAK_afficherFelicitations(moduleNum);
        }
      } catch (eLock2) {
        console.error('DAK Tracker: verification module-lock (apres) impossible :', eLock2);
      }
    }

    return { success: true, pourcentage };

  } catch(e) {
    console.error('DAK Tracker erreur:', e);
    return { success: false };
  }
};

// ============================================
// Message de felicitations, sobre et premium, quand un module vient d'etre
// termine (declenche le deverrouillage sequentiel du module suivant, ou de
// l'Evaluation finale pour le Module 12). N'utilise aucun style/couleur en
// dehors de l'identite visuelle existante du site (bordeaux/or).
// ============================================
function DAK_afficherFelicitations(moduleNum) {
  const texte = moduleNum < 12
    ? `Module ${moduleNum} terminé — Module ${moduleNum + 1} débloqué`
    : `Module 12 terminé — Évaluation finale débloquée`;
  const texteEs = moduleNum < 12
    ? `Módulo ${moduleNum} completado — Módulo ${moduleNum + 1} desbloqueado`
    : `Módulo 12 completado — Evaluación final desbloqueada`;

  const el = document.createElement('div');
  el.setAttribute('role', 'status');
  el.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);'
    + 'background:#5D1828;color:#FFFFFF;border:1px solid #C8A462;border-radius:12px;'
    + 'padding:14px 26px;box-shadow:0 8px 25px rgba(93,24,40,0.35);z-index:99999;'
    + 'font-family:Montserrat,sans-serif;text-align:center;max-width:90vw;'
    + 'opacity:0;transition:opacity 0.4s ease, transform 0.4s ease;';
  el.innerHTML = `<div style="font-family:Cinzel,Georgia,serif;font-size:0.95rem;letter-spacing:0.5px;color:#C8A462;">${texte}</div>`
    + `<div style="font-size:0.78rem;font-style:italic;opacity:0.85;margin-top:3px;">${texteEs}</div>`;
  document.body.appendChild(el);

  requestAnimationFrame(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => el.remove(), 500);
  }, 4500);
}

// Exposer l'utilisateur courant
window.DAK_getUser = () => currentUser;
window.DAK_isConnected = () => currentUser !== null;
