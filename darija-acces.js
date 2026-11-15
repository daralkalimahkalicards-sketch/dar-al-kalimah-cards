// ============================================
// DARIJA-ACCES — porte d'entree + suivi de chaque page de module Darija
// (darija-mN.html, -lecon1, -quiz1/2/3, -mission).
// Dans le <head> de chaque page :
//   <style id="dak-gate">html{visibility:hidden}</style>
//   <script type="module" src="darija-acces.js"></script>
// 1) La page reste cachee tant que l'acces n'est pas confirme. Pas connecte ou pas dans la
//    liste Darija -> auth-darija.html. Module pas encore ouvert pour cette eleve -> darija.html.
// 2) Le suivi n'ajoute aucun code dans les pages : elles ecrivent deja leur avancement dans
//    localStorage (dak-darija-mN-lecon1 / -quizK / -mission) ; on ecoute ces ecritures et on
//    les enregistre dans Firestore pour le suivi de Houda et le deverrouillage du module suivant.
// ============================================
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { auth, db, getStatutDarija, cleModule, blocDe, modulesDuBloc, LECON, MISSION, langue } from "./darija-core.js";

const page = (window.location.pathname.split('/').pop() || '').replace('.html', '');
const m = /^darija-m(\d+)/.exec(page);
const N = m ? parseInt(m[1], 10) : null;
const debut = Date.now();
let user = null, statutInitial = null;

function ouvrir() { const g = document.getElementById('dak-gate'); if (g) g.remove(); }

onAuthStateChanged(auth, async (u) => {
  if (!u) { window.location.replace('auth-darija.html'); return; }
  let statut;
  try { statut = await getStatutDarija(u); } catch (e) { console.error('darija-acces :', e); statut = { acces: false }; }
  if (!statut.acces) { window.location.replace('auth-darija.html'); return; }
  if (N && !statut.accessible[N]) { window.location.replace('darija.html'); return; }
  user = u; statutInitial = statut;
  ouvrir();
  // Derniere visite dans l'espace Darija (pour le suivi "qui entre, qui sort")
  setDoc(doc(db, 'eleves', u.uid), { dernierAccesDarija: serverTimestamp(), pageDarija: page }, { merge: true })
    .catch((e) => console.error('darija-acces — dernierAccesDarija :', e));
  rattraper();
});

const base = () => ({
  eleveId: user.uid,
  eleveNom: user.displayName || (statutInitial && statutInitial.nom) || 'Élève',
  eleveEmail: user.email,
  module: cleModule(N),
  espace: 'darija',
  date: serverTimestamp()
});
const duree = () => Math.round((Date.now() - debut) / 1000);
const idLecon = (quoi) => user.uid + '_Darija' + N + '_' + quoi;

async function enregistrerLecon() {
  await setDoc(doc(db, 'lecons', idLecon('Lecon1')), Object.assign(base(), {
    lecon: LECON, statut: 'terminée', cartesTotal: 10, dureeSecondes: duree()
  }), { merge: true });
}
async function enregistrerMission(faite) {
  await setDoc(doc(db, 'lecons', idLecon('Mission')), Object.assign(base(), {
    lecon: MISSION, statut: faite ? 'faite' : 'à faire'
  }), { merge: true });
}
async function enregistrerQuiz(k, valeur) {
  const p = /^(\d+)\/(\d+)$/.exec(valeur || '');
  if (!p) return;
  const score = parseInt(p[1], 10), total = parseInt(p[2], 10);
  await addDoc(collection(db, 'resultats'), Object.assign(base(), {
    quiz: 'Quiz ' + k, score, total, pourcentage: Math.round((score / total) * 100), dureeSecondes: duree(), erreurs: []
  }));
  // Le module vient-il d'etre termine grace a ce quiz ? -> petit message, comme dans DAK Arabe.
  try {
    if (statutInitial && statutInitial.termines[N] === false) {
      const apres = await getStatutDarija(user);
      if (apres.termines[N] === true) { statutInitial = apres; feliciter(apres); }
    }
  } catch (e) { console.error('darija-acces — verification apres quiz :', e); }
}

function feliciter(statut) {
  const b = blocDe(N), dernier = modulesDuBloc(b)[7];
  let fr, es;
  if (N === dernier) {
    fr = 'Module ' + N + ' terminé — Examen de la partie ' + b + ' débloqué';
    es = 'Módulo ' + N + ' completado — Examen de la parte ' + b + ' desbloqueado';
  } else {
    fr = 'Module ' + N + ' terminé — Module ' + (N + 1) + ' débloqué';
    es = 'Módulo ' + N + ' completado — Módulo ' + (N + 1) + ' desbloqueado';
  }
  const l = langue();
  const el = document.createElement('div');
  el.setAttribute('role', 'status');
  el.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);'
    + 'background:#5D1828;color:#FFFFFF;border:1px solid #C8A462;border-radius:12px;'
    + 'padding:14px 26px;box-shadow:0 8px 25px rgba(93,24,40,0.35);z-index:99999;'
    + 'font-family:Montserrat,sans-serif;text-align:center;max-width:90vw;'
    + 'opacity:0;transition:opacity 0.4s ease, transform 0.4s ease;';
  const t = document.createElement('div');
  t.style.cssText = 'font-family:Cinzel,Georgia,serif;font-size:0.95rem;letter-spacing:0.5px;color:#C8A462;';
  t.textContent = l === 'es' ? es : fr;
  el.appendChild(t);
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateX(-50%) translateY(0)'; });
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 500); }, 6000);
}

// --- Ecoute des ecritures localStorage des pages (aucune modification de leur code) ---
const leconDejaNotee = () => { try { return sessionStorage.getItem('dak-darija-suivi-lecon-' + N) === '1'; } catch (_) { return false; } };
function traiter(cle, valeur) {
  if (!N || !user) return;
  const prefixe = 'dak-darija-m' + N + '-';
  if (cle.indexOf(prefixe) !== 0) return;
  const quoi = cle.slice(prefixe.length);
  let p = null;
  if (quoi === 'lecon1') {
    if (leconDejaNotee()) return;
    try { sessionStorage.setItem('dak-darija-suivi-lecon-' + N, '1'); } catch (_) {}
    p = enregistrerLecon();
  } else if (quoi === 'mission') {
    p = enregistrerMission(valeur === '1');
  } else if (/^quiz[123]$/.test(quoi)) {
    p = enregistrerQuiz(quoi.slice(4), valeur);
  }
  if (p) p.catch((e) => console.error('darija-acces — enregistrement impossible :', e));
}
const setItemOriginal = Storage.prototype.setItem;
const attente = [];
Storage.prototype.setItem = function (cle, valeur) {
  setItemOriginal.apply(this, arguments);
  try {
    if (this === window.localStorage && typeof cle === 'string' && cle.indexOf('dak-darija-m') === 0) {
      if (user) traiter(cle, String(valeur)); else attente.push([cle, String(valeur)]);
    }
  } catch (_) {}
};
// Ecritures faites avant la fin de la verification d'acces + rattrapage d'une lecon deja
// terminee sur cet appareil avant la mise en place du suivi.
function rattraper() {
  attente.splice(0).forEach((x) => traiter(x[0], x[1]));
  if (!N) return;
  try {
    if (localStorage.getItem('dak-darija-m' + N + '-lecon1') === '1' && statutInitial && !statutInitial.leconFaite[N] && page.indexOf('-lecon1') > 0) {
      traiter('dak-darija-m' + N + '-lecon1', '1');
    }
  } catch (_) {}
}
