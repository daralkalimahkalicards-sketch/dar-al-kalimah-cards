// ============================================
// DARIJA-CORE — Dar Al-Kalimah Darija
// Source unique de verite pour l'espace Darija : acces, blocs, deverrouillage
// sequentiel des modules, examens de bloc. Utilise par darija-acces.js (toutes les
// pages de module), darija.html, darija-examen.html, les certificats Darija,
// darija-progression.html et darija-suivi.html.
//
// Donnees (collections Firestore deja existantes, aucune nouvelle collection) :
//  - emails_autorises : { email, espace:'darija', blocs:[2,3] }  -> acces Darija + blocs
//    ouverts A LA MAIN par Houda (le bloc 1 est ouvert des que l'e-mail est ajoute).
//  - lecons    : { eleveId, module:'Darija N', lecon:'Leçon 1' | 'Mission', statut }
//  - resultats : { eleveId, module:'Darija N', quiz:'Quiz K', pourcentage }
//                { eleveId, module:'Darija Bloc B', quiz:'Examen', pourcentage }
// Les modules de DAK Arabe s'appellent 'Module N' : aucune collision possible.
// ============================================
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBz5vRQUf4N7Px0YR4csyOlk72s1eOLLHQ",
  authDomain: "dar-al-kalimah.firebaseapp.com",
  projectId: "dar-al-kalimah",
  storageBucket: "dar-al-kalimah.firebasestorage.app",
  messagingSenderId: "472629258",
  appId: "1:472629258:web:29b755d38efe89421f1ff3"
};
export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const PROF_EMAIL = "sunfertity2080@gmail.com";
export const SEUIL = 50;          // % minimum pour qu'un quiz ou un examen compte comme reussi
export const NB_MODULES = 24;
export const NB_EXAMEN = 30;      // questions par examen de bloc
export const BLOCS = [1, 2, 3];
export const blocDe = (n) => Math.ceil(n / 8);
export const modulesDuBloc = (b) => Array.from({ length: 8 }, (_, i) => (b - 1) * 8 + i + 1);
export const cleModule = (n) => 'Darija ' + n;
export const cleBloc = (b) => 'Darija Bloc ' + b;
export const LECON = 'Leçon 1';
export const MISSION = 'Mission';
export const QUIZZ = ['Quiz 1', 'Quiz 2', 'Quiz 3'];

export function langue() {
  try {
    const v = localStorage.getItem('dak-lang') || localStorage.getItem('dak_lang') || localStorage.getItem('dak_darija_lang');
    return v === 'es' ? 'es' : 'fr';
  } catch (_) { return 'fr'; }
}
export function memoriserLangue(l) {
  try { ['dak-lang', 'dak_lang', 'dak_darija_lang'].forEach((k) => localStorage.setItem(k, l)); } catch (_) {}
}

// Calcul pur (sans Firestore) : reutilise tel quel par la page de suivi de Houda.
export function calculerStatut({ prof = false, blocsManuels = [], lecons = [], resultats = [] }) {
  const estDarija = (x) => String(x.module || '').indexOf('Darija ') === 0;
  lecons = lecons.filter(estDarija);
  resultats = resultats.filter(estDarija);

  const blocsOuverts = { 1: true, 2: blocsManuels.includes(2), 3: blocsManuels.includes(3) };
  const leconFaite = {}, mission = {}, meilleur = {}, termines = {}, accessible = {}, commence = {};
  for (let n = 1; n <= NB_MODULES; n++) {
    const k = cleModule(n);
    leconFaite[n] = lecons.some((l) => l.module === k && l.lecon === LECON);
    mission[n] = lecons.some((l) => l.module === k && l.lecon === MISSION && l.statut === 'faite');
    meilleur[n] = {};
    QUIZZ.forEach((q) => {
      const essais = resultats.filter((r) => r.module === k && r.quiz === q);
      meilleur[n][q] = essais.length ? Math.max.apply(null, essais.map((r) => r.pourcentage || 0)) : null;
    });
    termines[n] = leconFaite[n] && QUIZZ.every((q) => meilleur[n][q] !== null && meilleur[n][q] >= SEUIL);
    commence[n] = leconFaite[n] || QUIZZ.some((q) => meilleur[n][q] !== null);
  }
  for (let n = 1; n <= NB_MODULES; n++) {
    const b = blocDe(n), premier = modulesDuBloc(b)[0];
    // Un module s'ouvre si son bloc est ouvert ET (c'est le premier du bloc, ou le precedent est
    // termine, ou l'eleve y a deja une activite). Le prof voit tout.
    accessible[n] = prof || (blocsOuverts[b] && (n === premier || termines[n - 1] === true || commence[n]));
  }
  const examens = {};
  BLOCS.forEach((b) => {
    const essais = resultats.filter((r) => r.module === cleBloc(b) && r.quiz === 'Examen');
    const best = essais.length ? Math.max.apply(null, essais.map((r) => r.pourcentage || 0)) : null;
    const modulesFinis = modulesDuBloc(b).every((n) => termines[n]);
    examens[b] = {
      ouvert: prof || (blocsOuverts[b] && modulesFinis),
      modulesFinis,
      essais: essais.length,
      meilleur: best,
      reussi: best !== null && best >= SEUIL
    };
  });
  const nbTermines = Object.values(termines).filter(Boolean).length;
  const nbMissions = Object.values(mission).filter(Boolean).length;
  return { prof, blocsOuverts, leconFaite, mission, meilleur, termines, accessible, commence, examens, nbTermines, nbMissions, lecons, resultats };
}

// Ce qu'il manque pour terminer un module (pour le message sur la carte verrouillee suivante).
export function manquePour(statut, n, l) {
  const fr = [], es = [];
  if (!statut.leconFaite[n]) { fr.push('la leçon'); es.push('la lección'); }
  QUIZZ.forEach((q, i) => {
    const v = statut.meilleur[n][q];
    if (v === null || v < SEUIL) { fr.push('le quiz ' + (i + 1)); es.push('el quiz ' + (i + 1)); }
  });
  return (l === 'es' ? es : fr).join(', ');
}

// Lit Firestore pour l'utilisateur connecte et renvoie { acces, prof, eleve, ...statut }.
// En cas d'erreur de lecture des acces : acces refuse (jamais d'ouverture par defaut).
export async function getStatutDarija(user) {
  const mail = (user.email || '').toLowerCase();
  let prof = mail === PROF_EMAIL;
  if (!prof) {
    try { prof = (await getDoc(doc(db, 'profs', user.uid))).exists(); } catch (_) { prof = false; }
  }
  let acces = prof, blocsManuels = [];
  try {
    const snap = await getDocs(query(collection(db, 'emails_autorises'), where('email', '==', mail)));
    snap.docs.forEach((d) => {
      const x = d.data();
      if (x.espace === 'darija') {
        acces = true;
        if (Array.isArray(x.blocs)) blocsManuels = blocsManuels.concat(x.blocs);
      }
    });
  } catch (e) {
    console.error('darija-core — lecture des acces impossible :', e);
    if (!prof) return { acces: false, prof: false };
  }
  if (!acces) return { acces: false, prof: false };

  const [leconsSnap, resultatsSnap, eleveSnap] = await Promise.all([
    getDocs(query(collection(db, 'lecons'), where('eleveId', '==', user.uid))),
    getDocs(query(collection(db, 'resultats'), where('eleveId', '==', user.uid))),
    getDoc(doc(db, 'eleves', user.uid))
  ]);
  const statut = calculerStatut({
    prof, blocsManuels,
    lecons: leconsSnap.docs.map((d) => d.data()),
    resultats: resultatsSnap.docs.map((d) => d.data())
  });
  statut.acces = true;
  statut.eleve = eleveSnap.exists() ? eleveSnap.data() : {};
  statut.nom = (statut.eleve.nom || user.displayName || '').trim();
  return statut;
}
