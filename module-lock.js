// ============================================
// MODULE-LOCK — Dar Al-Kalimah / Kalicards
// Source unique de verite pour le deverrouillage sequentiel des modules 1 a 12.
// Reutilise par modules.html, module2.html a module12.html, dashboard.html.
// Ne concerne PAS le Parcours Tajwid, ni la Partie 2 (modules 13 a 18, qui garde
// son systeme de deverrouillage manuel independant via eleves/{uid}.partie2Debloquee).
// ============================================

import { collection, query, where, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Seuil minimum (%) pour qu'un quiz compte comme reussi. Meme valeur utilisee pour
// la carte "Evaluation finale" dans modules.html : une seule definition de "termine"
// dans toute l'app.
export const SEUIL_REUSSITE = 50;

// Un module est "termine" si sa leçon a ete faite ET que ses 3 quiz ont chacun au
// moins une tentative avec un pourcentage >= SEUIL_REUSSITE.
function moduleEstTermine(moduleNum, lecons, resultats) {
  const modKey = 'Module ' + moduleNum;
  const leconFaite = lecons.some((l) => l.module === modKey);
  const quizReussis = new Set();
  resultats.forEach((r) => {
    if (r.module === modKey && (r.pourcentage || 0) >= SEUIL_REUSSITE) {
      quizReussis.add(r.quiz);
    }
  });
  return leconFaite && quizReussis.size >= 3;
}

// Recupere les donnees Firestore necessaires et calcule le statut de deverrouillage
// des modules 1 a 12 pour l'utilisateur donne (uid).
// Retour :
//   estProf              : true si l'utilisateur est dans la collection profs/
//   termines             : { 1:bool, ..., 12:bool } — module "termine" au sens strict
//   accessible           : { 1:bool, ..., 12:bool } — module ouvrable par l'eleve
//   parcoursComplet      : true si les 12 modules sont "termines" (pour la carte finale)
//   lecons / resultats   : donnees brutes (reutilisees pour les messages "il te manque...")
//   modulesDebloquesManuel : liste des numeros debloques a la main par le prof
export async function getModuleLockStatus(db, uid) {
  const [leconsSnap, resultatsSnap, eleveSnap, profSnap] = await Promise.all([
    getDocs(query(collection(db, 'lecons'), where('eleveId', '==', uid))),
    getDocs(query(collection(db, 'resultats'), where('eleveId', '==', uid))),
    getDoc(doc(db, 'eleves', uid)),
    getDoc(doc(db, 'profs', uid))
  ]);

  const lecons = leconsSnap.docs.map((d) => d.data());
  const resultats = resultatsSnap.docs.map((d) => d.data());
  const estProf = profSnap.exists();
  const modulesDebloquesManuel = (eleveSnap.exists() && Array.isArray(eleveSnap.data().modulesDebloquesManuel))
    ? eleveSnap.data().modulesDebloquesManuel
    : [];

  // Garde-fou : un module ou l'eleve a deja une activite enregistree (leçon ou quiz)
  // reste toujours accessible, meme s'il ne remplit pas (encore) la regle des 50%.
  const dejaCommence = new Set();
  lecons.forEach((l) => {
    const n = parseInt(String(l.module || '').replace('Module ', ''), 10);
    if (n) dejaCommence.add(n);
  });
  resultats.forEach((r) => {
    const n = parseInt(String(r.module || '').replace('Module ', ''), 10);
    if (n) dejaCommence.add(n);
  });

  const termines = {};
  for (let n = 1; n <= 12; n++) termines[n] = moduleEstTermine(n, lecons, resultats);

  const accessible = {};
  for (let n = 1; n <= 12; n++) {
    accessible[n] = estProf
      || n === 1
      || modulesDebloquesManuel.includes(n)
      || dejaCommence.has(n)
      || termines[n - 1] === true;
  }

  let parcoursComplet = true;
  for (let n = 1; n <= 12; n++) { if (!termines[n]) { parcoursComplet = false; break; } }

  return { estProf, termines, accessible, parcoursComplet, lecons, resultats, modulesDebloquesManuel };
}

// Liste (en francais) de ce qu'il manque pour terminer un module donne — utilisee
// pour le message "Il te reste le quiz 2 a reussir" sur la carte verrouillee suivante.
export function elementsManquants(moduleNum, lecons, resultats) {
  const modKey = 'Module ' + moduleNum;
  const manque = [];
  if (!lecons.some((l) => l.module === modKey)) manque.push('la leçon');
  ['Quiz 1', 'Quiz 2', 'Quiz 3'].forEach((q) => {
    const ok = resultats.some((r) => r.module === modKey && r.quiz === q && (r.pourcentage || 0) >= SEUIL_REUSSITE);
    if (!ok) manque.push(q);
  });
  return manque;
}
