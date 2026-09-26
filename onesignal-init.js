/* ==========================================================================
   Dar Al-Kalimah — Initialisation OneSignal unique (onesignal-init.js)

   Corrige a la racine le bug des abonnements qui cessent de recevoir apres
   quelques jours (OneSignal renvoie successful, received 0, surtout
   safari_web_push) : jusqu'ici, OneSignal.init() et OneSignal.login(uid)
   n'etaient appeles que sur 3 pages (auth.html, modules.html,
   notifications.html). Un eleve qui navigue surtout dans les lecons/quiz
   sans repasser par ces 3 pages ne relie/rafraichit jamais son abonnement
   push a son compte, d'ou la derive observee au bout de quelques jours.

   Ce fichier est charge sur TOUTES les pages (index, modules, lecons, quiz,
   dashboard...) en plus du SDK OneSignal lui-meme :

     <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
     <script src="onesignal-init.js" type="module"></script>

   Il fait deux choses a chaque chargement de page :
   1. Initialise OneSignal avec serviceWorkerPath/serviceWorkerParam pointant
      vers le sw.js deja enregistre par chaque page (jamais d'enregistrement
      concurrent d'un autre service worker).
   2. Ecoute l'etat de connexion Firebase (independamment de ce que fait deja
      la page) et appelle OneSignal.login(uid) des qu'un eleve connecte est
      detecte, pour reasserter le lien abonnement <-> eleve a chaque visite.

   Usage dans le code de la page (bouton cloche, etc.) :
     const OneSignal = await window.getOneSignal();   // instance prete, ou null apres 8s
   ========================================================================== */

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const DAK_ONESIGNAL_APP_ID = "45f20a47-8afe-4b34-b847-8493041430bf";
const DAK_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBz5vRQUf4N7Px0YR4csyOlk72s1eOLLHQ",
  authDomain: "dar-al-kalimah.firebaseapp.com",
  projectId: "dar-al-kalimah",
  storageBucket: "dar-al-kalimah.firebasestorage.app",
  messagingSenderId: "472629258",
  appId: "1:472629258:web:29b755d38efe89421f1ff3"
};

// --- OneSignal ---------------------------------------------------------
let _resolveOneSignal;
const oneSignalReady = new Promise((resolve) => { _resolveOneSignal = resolve; });
window.OneSignalDeferred = window.OneSignalDeferred || [];
window.OneSignalDeferred.push(async function (OneSignal) {
  try {
    // serviceWorkerPath/serviceWorkerParam explicites : sans eux, OneSignal
    // cherche par defaut OneSignalSDKWorker.js (fichier qui n'existe pas chez
    // nous) et l'abonnement push ne se cree plus correctement pour les
    // nouveaux appareils/reinscriptions (cause de la panne totale du
    // 19-24/09/2026, corrigee par retour a ce parametrage explicite). sw.js
    // importe deja le script worker OneSignal (importScripts dans sw.js) et
    // est enregistre manuellement par chaque page : avec ces options,
    // OneSignal reutilise ce service worker au lieu d'en enregistrer un
    // second en concurrence sur le meme scope.
    await OneSignal.init({
      appId: DAK_ONESIGNAL_APP_ID,
      serviceWorkerPath: "sw.js",
      serviceWorkerParam: { scope: "/" }
    });
    _resolveOneSignal(OneSignal);
  } catch (e) {
    console.error("onesignal-init.js — erreur init OneSignal:", e);
    _resolveOneSignal(null);
  }
});

// Instance OneSignal des qu'elle est prete, ou null apres timeoutMs si le
// SDK ne repond jamais (ne bloque jamais le reste de la page).
window.getOneSignal = function (timeoutMs = 8000) {
  return Promise.race([
    oneSignalReady,
    new Promise((resolve) => setTimeout(() => resolve(null), timeoutMs))
  ]);
};

// --- Rattachement automatique de l'abonnement a l'eleve connecte -------
// Independant de ce que fait deja la page avec Firebase (certaines pages
// n'utilisent pas Firebase du tout) : reutilise l'app Firebase si une autre
// partie de la page l'a deja initialisee, sinon en cree une — l'etat de
// connexion est de toute facon partage (meme origine, meme persistance).
const firebaseApp = getApps().length ? getApps()[0] : initializeApp(DAK_FIREBASE_CONFIG);
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, async (user) => {
  if (!user) return;
  const OneSignal = await window.getOneSignal();
  if (!OneSignal) return;
  try {
    await Promise.race([
      OneSignal.login(user.uid),
      new Promise((resolve) => setTimeout(resolve, 5000))
    ]);
  } catch (e) {
    console.error("onesignal-init.js — erreur OneSignal.login (on continue quand meme) :", e);
  }
});
