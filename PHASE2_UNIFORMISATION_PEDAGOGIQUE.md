# DAR AL-KALIMAH — PHASE 2 : AUDIT D'UNIFORMISATION PÉDAGOGIQUE

**Statut : AUDIT SEUL — aucune modification effectuée. Aucun commit, aucun push.**
**Référence officielle et intouchable : `lecon1.html` (Module 1). Ce fichier n'a pas été analysé pour lui-même, uniquement utilisé comme base de comparaison.**

---

## 0. Méthodologie et périmètre réel

### 0.1 Précision indispensable sur le périmètre

La demande initiale mentionne "Module 1 → Leçon 2 → Leçon 3". Vérification faite sur `module1.html` :

```
<a href="lecon1.html">LA LEÇON</a>
<a href="quiz1-m1.html">QUIZ 1</a>
<a href="quiz2-m1.html">QUIZ 2</a>
<a href="quiz3-m1.html">QUIZ 3</a>
```

**Le Module 1 ne contient qu'une seule leçon (`lecon1.html`) et 3 quiz.** Il n'existe pas de "Leçon 2" ou "Leçon 3" à l'intérieur du Module 1 — cette structure "1 module = 1 leçon" a été confirmée exhaustivement lors d'un audit précédent. `lecon2.html` et `lecon3.html` sont les leçons des **Modules 2 et 3**, pas des sous-leçons du Module 1.

**Interprétation retenue (la plus cohérente avec l'objectif énoncé "NE PAS analyser Leçon 1, analyser tout le reste") :**
- Module 1 : `quiz1-m1.html`, `quiz2-m1.html`, `quiz3-m1.html` comparés directement à `lecon1.html`.
- Modules 2 à 12 : chaque leçon + ses 3 quiz, en intégralité.

### 0.2 Fichiers orphelins détectés (hors périmètre d'analyse)

`quiz1-lecon12.html` et `quiz12.html` existent sur le disque mais **ne sont liés depuis aucune page de l'application** (vérifié par recherche exhaustive de toute référence HTML). Le Module 12 utilise exclusivement `quiz1-m12.html` / `quiz2-m12.html` / `quiz3-m12.html`. Ces deux fichiers orphelins n'ont pas été analysés — ils devront être supprimés ou clarifiés dans une phase de nettoyage ultérieure, hors périmètre de cette Phase 2.

### 0.3 Méthode

Chaque module a été audité par comparaison directe caractère-par-caractère (hamza, harakat, shadda, tanwin, madd) contre :
1. Le tableau `cards` de `lecon1.html` (lignes 700-869) — référence canonique des 28 lettres et de leurs 3 formes positionnelles.
2. `database.js` — référence secondaire (`wordsDatabase`, `alphabetData`, `tanwinData`, `qatData`, `waslData`).
3. Les leçons et quiz entre eux (cohérence interne et inter-module).

Chaque chemin audio référencé dans le code a été vérifié par **test d'existence réel sur le disque** (jamais une supposition).

**La Banque des mots (`bank.html`) n'a pas été analysée**, conformément à l'exclusion explicite — elle sera traitée dans une phase ultérieure, après validation complète des leçons/quiz/audios. *Une seule exception signalée à titre informatif : l'agent chargé des Modules 4-6 a détecté que les 40 entrées orphelines `wordsDatabase` (ids 401-440) n'ont pas de champs `fr`/`es`, ce qui casse potentiellement `bank.html` (`w.fr.toLowerCase()` sur un champ `undefined`). Ce point est noté ici mais volontairement **non traité** dans cette phase, à reprendre lors de la reconstruction de la Banque des mots.*

---

## ÉTAPE 1 — INCOHÉRENCES DE CONTENU (leçon vs référence, leçon vs leçon)

| # | Module | Fichier | Élément arabe exact (harakat) | Problème détecté | Comparé à |
|---|---|---|---|---|---|
| 1 | 2 | `lecon2.html` (carte ه + kasrah) | **هِلال** | Fatha manquante sur ل avant le alif de prolongation. Forme correcte : **هِلَال** | `lecon1.html` ("هِلَال") + `database.js` id 94 |
| 2 | 2 | `lecon2.html` (carte م + kasrah) | **مِقَص** | Shadda manquante sur ص final. Forme attendue : **مِقَصّ** | `database.js` (`tanwinData`, "مِقَصّ") |
| 3 | 2 | `lecon2.html` (carte س + dammah) | **سُلْحَفَاة** | Harakat interverties (sukoun sur ل + fatha sur ح). Forme correcte : **سُلَحْفَاة** | `database.js` id 198 |
| 4 | 1→2/3 | Toute l'app | Noms de lettres ح/ه, ت/ط | `lecon1.html` transcrit sans diacritiques ("Haa"/"Ha", "Taa"/"Ta") → collision non résolue ; `lecon2.html`/`lecon3.html`/`database.js` utilisent des diacritiques ("Ḥâ'"/"Hâ'", "Ṭâ'"/"Tâ'") | `lecon1.html` (`fr`/`es` des cards) vs `alphabetData` |
| 5 | 1→partout | Toute l'app | أ | `lecon1.html` seul nomme la lettre **"Alif hamza"** ; partout ailleurs : **"Alif"** | `lecon1.html` vs `database.js`/`lecon2.html`/`lecon3.html`/`quiz1-m1.html` |
| 6 | 5 | `lecon5.html` (traduction ES) | ٱلْكِتَاب | Champ ES contient **"El livre"** (mot français, pas espagnol) | `database.js` → `waslData` : "El libro" (correct) |
| 7 | 5 | `lecon5.html` | قِطَّة | Traduite au **masculin** ("Chat"/"Gato") alors que le mot est grammaticalement féminin (ta marbuta) | `quiz3-m5.html` : "Une chatte"/"Una gata" (correct) |
| 8 | 4/5 | `database.js` (`qatData`) + `quiz2-m4.html` | **أَِبْرِيق** (piège) | Bug d'écriture réel : deux harakat empilées sur la même lettre (FATHA U+0614 + KASRA U+0650 sur le alif-hamza) | `quiz3-m4.html` : "أَبْرِيق" (une seule harakat, propre) |
| 9 | 6 | `lecon6.html` + `quiz1/2-m6.html` | **الإثْنَيْن** (Lundi) | Utilise la hamza fixe (إ, hamzat al-qat') alors que c'est une hamza de liaison (hamzat al-wasl) | `database.js` → `waslData` liste explicitement "إِثْنَان" comme **piège incorrect** pour ce mot — le Module 6 reproduit l'erreur que le Module 4/5 enseigne comme fautive |
| 10 | 4 (donnée orpheline) | `database.js` ids 401-440 | ex. "ٱلتَّمْسَاح", "ٱلسَّيْف"… | 40 entrées sans champs `fr`/`es`, non chargées par aucun fichier Module 4/5/6 réel | Reste de `wordsDatabase` (systématiquement `fr`/`es` renseignés) |
| 11 | 4/1 | `database.js` ids 84 et 407 | صَيْف (Été) vs ٱلسَّيْف (l'épée, forme assimilée) | **Confirmé** : les deux mots partagent le même fichier `audio/sayf.mp3`, enregistré seulement pour "été" | id 84 vs id 407 |
| 12 | 5 | `lecon5.html` (banque lettres lunaires) | **هـ** (avec tatweel) | Forme avec ligature au lieu de la forme isolée | `lecon1.html` cards[25].letter = **"ه"** (forme isolée canonique) |
| 13 | 7 | `lecon7.html` (verset, l.431/438) | **ٱلاَبْتَرُ** | Rasm Warsh : fatha placée après le alif | Référence interne au verset (Al-Kawthar v.3) |
| 14 | 7 | `lecon7.html` (asbab, l.417) | **الأَبْتَرَ** | 3ᵉ graphie du même mot **dans le même fichier** : hamza qat' + terminaison fatha (accusatif, justifié grammaticalement mais graphie différente du verset) | `lecon7.html` lui-même |
| 15 | 7 | `lecon7.html` (l.436) | `"وَانْحَرْ 🐑"` | Emoji concaténé **dans le champ `ar`** (censé contenir uniquement le mot arabe) | Autres entrées du même tableau vocab |
| 16 | 7 | `lecon7.html` (l.472) | `"كُفُؤًا ورش"` | Annotation "ورش" collée au mot arabe dans le champ `ar` | Autres entrées vocab sans annotation |
| 17 | 8 vs 9 | `lecon8.html` (l.386) vs `lecon9.html` (l.402, 447) | **الاِسْم** (avec kasra) vs **اسْمٌ** (sans kasra) | Même terme grammatical clé ("le nom") vocalisé différemment d'un module à l'autre | `lecon8.html` vs `lecon9.html` |
| 18 | 9 | `lecon9.html` (l.1240 recto vs l.1263 verso, même carte) | **أُولَٰئِكَ** (dagger-alif) vs **أُولَئِكَ** (sans) | Le recto et le verso de la **même flashcard** citant le même verset (Al-Baqara v.5) diffèrent | Interne à la carte |
| 19 | 9 | `lecon9.html` (l.1178) | `fb_ok_es:'...фраза номинальная ✓'` | **Texte russe/cyrillique** injecté dans un champ de traduction espagnole (attendu : "frase nominal") | Autres traductions ES du fichier |
| 20 | 11 | `lecon11.html` (l.795) | `خَلَقَ = فعل ماضي (ق-ل-خ)` | **Confirmé** : ordre des lettres racines inversé (Qāf-Lām-Khā au lieu de Khā-Lām-Qāf) | `lecon11.html` L803 (racine correcte "خ ل ق") + `lecon10.html` L429 |
| 21 | 11 | `lecon11.html` (l.798) | `"...quand il envie."` | **Confirmé** : caractère de contrôle invisible U+0001 corrompant le mot français "envie" | Encodage cassé, anomalie isolée |
| 22 | 12 | `lecon12.html` (l.513 vs l.522, même fichier) | اللَّهِ root "أ ل ه" vs لِلَّهِ root "ل ل ه" | Racine du même nom divin notée de deux façons différentes dans le même fichier | Interne au fichier |
| 23 | 12 | `quiz3-m12.html` (l.189) | الْكَوْثَرَ, racine proposée "ك و ث ر" (4 lettres) | Contredit la règle du gabarit trilitère enseignée en Module 10 ; la vraie racine "ك ث ر" est marquée comme mauvaise réponse | `lecon10.html` (règle "toute racine est trilitère") |

---

## ÉTAPE 2 — DIVERGENCES QUIZ vs LEÇON CORRESPONDANTE

| # | Module | Quiz | Élément | Version quiz | Version leçon | Type |
|---|---|---|---|---|---|---|
| 1 | 1 | `quiz3-m1.html` | Mot médian pour ك | **مَكْتَبَة** (bibliothèque) | **كِتَاب** (livre) — mot canonique de `lecon1.html` | Mot d'exemple différent (seule lettre sur 28 concernée) |
| 2 | 2 | `quiz3-m2.html` | Filtre JS `id<130 \|\| id>148` | 19 mots testés | `database.js` prévoit 30 mots (11 mots additionnels ids 209-219 jamais interrogés) | Couverture incomplète |
| 3 | 3 | `quiz2-m3.html` | Contenu entier | Teste les **mots de 2 lettres du Module 2** (clone non adapté de `quiz2-m2.html`, dossier audio `audio/module2/*`, lien certificat renvoyant vers `module2.html`) | `lecon3.html` enseigne le **Al-Modoud** ; `database.js` prévoit un bloc dédié de 30 mots (ids 149-178) jamais utilisé nulle part | **Divergence totale de contenu** — le quiz ne teste rien de la leçon |
| 4 | 4 | `quiz2-m4.html` | Métadonnées certificat | `moduleId`, `storage`, message final disent tous **"module 5"** | Fichier routé et affiché comme Module 4 | Incohérence de numérotation visible par l'élève |
| 5 | 4 | `quiz2-m4.html` vs `quiz3-m4.html` | Piège إِبْرِيق | quiz2 : "أَِبْرِيق" (bug double-harakat) | quiz3 : "أَبْرِيق" (propre) | Le même mot est testé avec deux orthographes-pièges différentes selon le quiz |
| 6 | 5 | `quiz2-m5.html` | Contenu entier | **Copie conforme** de `quiz1-m5.html` (mêmes 29 mots Shamsiyya, même titre affiché) | `lecon5.html` enseigne 3 thèmes à parts égales (Shamsiyya / Qamariyya / Shadda) | **Al-Qamariyya n'est jamais testée** dans aucun des 3 quiz du module |
| 7 | 6 | `quiz1-m6.html` vs `quiz2-m6.html` | Banque `ALL_WORDS` | 59 entrées | 52 entrées (7 mots absents de quiz2) | Couverture lexicale incohérente entre les 2 quiz du même module |
| 8 | 7 | `quiz1-m7.html` | الأبتر | **ٱلَابْتَرُ** (fatha avant le alif) | `lecon7.html` : **ٱلاَبْتَرُ** (fatha après le alif) | Position de la fatha inversée |
| 9 | 7 | `quiz2-m7.html` / `quiz3-m7.html` | الأبتر | **الْأَبْتَرُ** (alif normal + hamza qat') | `lecon7.html` : **ٱلاَبْتَرُ** (alif wasla) | Graphie hamza totalement différente — **4 orthographes distinctes du même mot coranique coexistent dans le seul Module 7** |
| 10 | 7 | `quiz2-m7.html` / `quiz3-m7.html` | الصَّمَدُ, الْكَوْثَرَ, اللَّهُ | Alif normal systématique | `lecon7.html` : alif wasla (rasm Warsh) partout | Divergence systémique quiz2/quiz3 vs leçon+quiz1 |
| 11 | 9 | Les 3 quiz du Module 9 | هَؤُلَاءِ / أُولَئِكَ / اللَّوَاتِي | Jamais testés | Enseignés dans `lecon9.html` | Lacune de couverture (pas une erreur de contenu) |
| 12 | 12 | `quiz3-m12.html` (l.211) | Source du mot كَتَبَ | `src:"Module 11 · Verbe"` | Mot-pivot du **Module 10** (`lecon10.html`) | Mauvaise attribution de module |

**Conformité constatée (aucune divergence trouvée) :** `quiz1-m1.html`, `quiz2-m1.html`, `quiz1-m2.html`, `quiz2-m2.html`, `quiz1-m3.html`, `quiz3-m3.html`, tous les quiz des Modules 8, 9 (hors lacune de couverture ci-dessus) et 10.

---

## ÉTAPE 3 — AUDIT AUDIO COMPLET

### 3.A Boutons micro dont le fichier référencé existe mais sous un autre nom (simple renommage disque nécessaire, pas un nouvel enregistrement)

| Module | Fichier(s) référençant | Chemin dans le code | Fichier réel sur disque | Problème |
|---|---|---|---|---|
| 2 | `lecon2.html`, `quiz1-m2.html` | `audio/harakat/thaa-fathah.mp3` | `thaa-fathah .mp3` | Espace parasite avant l'extension |
| 2 | `lecon2.html`, `quiz1-m2.html` | `audio/harakat/shiin-fathah.mp3` | `shiin-fatfah.mp3` | Faute de frappe ("fatfah" au lieu de "fathah") |
| 2 | `lecon2.html`, `quiz1-m2.html` | `audio/harakat/haaa-fathah.mp3` | `haaa-fathah .mp3` | Espace parasite |
| 3 | `lecon3.html`, `quiz1-m3.html`, `database.js` | `audio/modoud/siin-aa.mp3` | `Siin-aa.mp3` | **Casse différente (S majuscule)** — fonctionne sur Windows/NTFS mais **cassera sur GitHub Pages / tout serveur sensible à la casse** |
| 3 | `quiz2-m3.html` | pointe vers `audio/module2/*` | — | Conséquence du clone non adapté (voir Étape 2 #3) — pointe vers le mauvais dossier de module |

### 3.B Fichiers audio référencés mais totalement absents du disque (dossier ou fichier individuel)

| Module | Fichier(s) | Élément | Dossier/fichier manquant |
|---|---|---|---|
| 2 | `lecon2.html`, `quiz1-m2.html` | ز + dammah/kasrah/soukoun | `audio/harakat/zay-dammah.mp3`, `zay-kasrah.mp3`, `zay-soukoun.mp3` (seul `zay-fathah.mp3` existe) |
| 3 | `lecon3.html`, `quiz1-m3.html`, `database.js` | ظ + madd alif/waw/yaa | `audio/modoud/zaa-aa.mp3`, `zaa-uu.mp3`, `zaa-ii.mp3` (aucun fichier "zaa-*" n'existe) |
| 2 | `quiz2-m2.html` | غِلْ (id 109) | `audio/module2/ghil.mp3` |
| 2 | `quiz3-m2.html` (si couverture corrigée, cf. Étape 2 #2) | فَتَحَ, قَرَأَ, نَظَرَ, غَسَلَ, أَكَلَ, رَسَمَ, طَبَخَ, قَفَزَ, مَسَحَ, ضَحِكَ, رَكَعَ | `audio/module2/*.mp3` (11 fichiers) |
| 3 | `quiz3-m3.html` | حَقِيبَة (id 181) | `audio/module3/haqibah.mp3` |
| 4 | `quiz1-m4.html` | 30 mots tanwin × 3 formes (voir `database.js` → `tanwinData`) | **Dossier `audio/quiz-tanwin/` entièrement absent** (90 fichiers) |
| 4 | `quiz2-m4.html` | 30 mots hamzat al-qat' (voir `database.js` → `qatData`) | **Dossier `audio/quiz-qat/` entièrement absent** (30 fichiers) |
| 4 | `quiz3-m4.html` | 30 mots (voir données internes du quiz) | **Dossier `audio/quiz3/` entièrement absent** (30 fichiers) |
| 4/5 | `database.js` → `waslData` (30 mots hamzat al-wasl, orpheline — non chargée par une page live actuellement) | 30 mots | **Dossier `audio/quiz-wasl/` absent** — latent, à corriger si cette donnée est un jour rattachée à une page |
| 5 | `quiz1-m5.html`, `quiz2-m5.html` | 29 mots Shamsiyya | **Dossier `audio/shamsiyya/` entièrement absent** |
| 5 | `quiz3-m5.html` | 29 mots Shadda | **Dossier `audio/shadda/` entièrement absent** |
| 6 | `quiz1-m6.html`, `quiz2-m6.html` | ≈59 mots (noms de fichiers générés dynamiquement à partir du mot arabe brut, ex. `الإثْنَيْن.mp3`) | **Dossier `audio/m6/` entièrement absent** ; convention de nommage fragile à corriger (translittérer en latin) |
| 6 | `quiz3-m6.html` | 15 phrases + verbes du texte "يَوْمُ عَزِيز" | **Dossier `audio/m6/` entièrement absent** |
| 6 | `lecon6.html` | 68 mots (6 thèmes) | Aucune clé/chemin audio n'existe dans les données `THEMES` — à créer intégralement |
| 4 | `lecon4.html` | 20 éléments pédagogiques (tanwin, hamza, harakat, signe de liaison…) | `audioMap` entièrement vide (20 clés = `""`) — aucun fichier n'a jamais été prévu ni nommé |

### 3.C Boutons micro visuellement présents mais totalement inertes (aucun gestionnaire JS, indépendamment de l'existence d'un fichier)

| Module | Fichier | Élément | Constat |
|---|---|---|---|
| 4 | `lecon4.html` | 20 boutons (`audioMap` vide) | `handleAudioBtn()` fait `if (!src) return;` → échec **totalement silencieux**, pas même le toast d'erreur habituel des autres leçons |
| 6 | `lecon6.html` | Bouton `#btn-audio` (`.btn-mic`) | Présent dans le DOM, référencé en JS (`DOM.btnAudio`), mais **aucun `addEventListener` n'est jamais attaché** — clic sans aucun effet |
| 7 | `lecon7.html` (l.271, vue Flashcards) | `<button class="btn-audio" id="btn-audio">🎙️</button>` | Aucun `addEventListener`, `onclick`, ni fichier `.mp3` référencé — bouton mort |
| 7 | `lecon7.html` (l.346, vue Tilawa) | `<button class="btn-audio" id="btn-tilawa-audio">🎙️</button>` | `onclick="event.stopPropagation()"` seulement — ne déclenche aucune lecture |
| 11 | `lecon11.html` (l.416, vue flashcards Al-Falaq/An-Nas) | `<button class="fc7-btn-audio" id="btn-fc7-audio">🎙️</button>` | Aucun handler, aucun fichier, aucune référence dans les scripts externes |
| 11 | `lecon11.html` (l.488, vue tilawa) | `<button class="btn-audio7" id="btn-tilawa7-audio">🎙️</button>` | Idem |
| 12 | `lecon12.html` (l.300, vue flashcards Al-Fatiha) | `<button class="btn-audio" id="btn-audio">🎙️</button>` | Idem |
| 12 | `lecon12.html` (l.372, vue tilawa) | `<button class="btn-audio" id="btn-tilawa-audio">🎙️</button>` | Idem |

**Cas particulier — `lecon5.html` :** contrairement à `lecon1.html`, `lecon4.html` et `lecon6.html`, cette leçon ne comporte **aucun** bouton micro (0 occurrence de `btn-audio`). Ce n'est pas un bouton cassé mais une absence totale de fonctionnalité audio pour cette leçon — à trancher : choix assumé ou oubli, à uniformiser avec le reste de l'app.

### 3.D Conformité confirmée (aucune anomalie)

- Modules 1 (quiz1/2-m1, lettres/audio identiques à `lecon1.html`), 2 (hors bugs listés en 3.A/3.B), 3 (hors bugs listés).
- Modules 8, 9, 10 : **aucun bouton micro trouvé nulle part** — conforme au design "modules avancés sans audio".
- `mabruk.mp3` (son de fin de quiz, tous modules) : fichier confirmé présent et fonctionnel partout — non concerné par cet audit pédagogique (son générique, pas lié à un mot arabe).
- Fichiers résiduels `test.txt` trouvés dans `audio/modoud/` et `audio/module2/` — ne cassent rien, mais à nettoyer (hors périmètre strict).

---

## ÉTAPE 4 — LISTE OFFICIELLE DES AUDIOS À ENREGISTRER

**Note de méthode :** pour les blocs de données structurées où le texte arabe exact de chaque mot est déjà intégralement présent et vérifiable dans le code source (`tanwinData`, `qatData`, `waslData` dans `database.js` ; listes internes de `quiz1/2/3-m5.html`, `quiz1/2-m6.html`), ce rapport référence l'emplacement exact plutôt que de retranscrire manuellement des dizaines de mots arabes avec harakat à la main — une retranscription manuelle introduirait elle-même un risque d'erreur de harakat, contraire à l'objectif de cet audit. Le texte arabe exact de chaque mot individuel cité isolément est, lui, donné en entier.

| Module | Leçon/Quiz | Texte arabe exact | Nom de fichier recommandé | Chemin recommandé |
|---|---|---|---|---|
| 2 | `lecon2.html` / `quiz1-m2.html` | زُ (ز + dammah) | `zay-dammah.mp3` | `audio/harakat/zay-dammah.mp3` |
| 2 | `lecon2.html` / `quiz1-m2.html` | زِ (ز + kasrah) | `zay-kasrah.mp3` | `audio/harakat/zay-kasrah.mp3` |
| 2 | `lecon2.html` / `quiz1-m2.html` | زْ (ز + soukoun) | `zay-soukoun.mp3` | `audio/harakat/zay-soukoun.mp3` |
| 3 | `lecon3.html` / `quiz1-m3.html` | ظَا (madd alif, ظ) | `zaa-aa.mp3` | `audio/modoud/zaa-aa.mp3` |
| 3 | `lecon3.html` / `quiz1-m3.html` | ظُو (madd waw, ظ) | `zaa-uu.mp3` | `audio/modoud/zaa-uu.mp3` |
| 3 | `lecon3.html` / `quiz1-m3.html` | ظِي (madd yaa, ظ) | `zaa-ii.mp3` | `audio/modoud/zaa-ii.mp3` |
| 2 | `quiz2-m2.html` | غِلْ | `ghil.mp3` | `audio/module2/ghil.mp3` |
| 2 | `quiz3-m2.html` | فَتَحَ, قَرَأَ, نَظَرَ, غَسَلَ, أَكَلَ, رَسَمَ, طَبَخَ, قَفَزَ, مَسَحَ, ضَحِكَ, رَكَعَ | `fataha.mp3`, `qaraa.mp3`, `nazhara.mp3`, `ghasala.mp3`, `akala.mp3`, `rasama.mp3`, `tabakha.mp3`, `qafaza.mp3`, `masaha.mp3`, `dahika.mp3`, `rakaa.mp3` | `audio/module2/` (11 fichiers) |
| 3 | `quiz3-m3.html` | حَقِيبَة | `haqibah.mp3` | `audio/module3/haqibah.mp3` |
| 4 | `quiz1-m4.html` | 30 mots tanwin (voir `database.js` → `tanwinData`, chaque mot × 3 formes fatḥatayn/ḍammatayn/kasratayn) | noms déjà définis dans le code (ex. `maktab-an.mp3`) | `audio/quiz-tanwin/` (90 fichiers à créer) |
| 4 | `quiz2-m4.html` | 30 mots hamzat al-qat' (voir `database.js` → `qatData`) | noms déjà définis (ex. `asad.mp3`, `ibriq.mp3`, `umm.mp3`) | `audio/quiz-qat/` (30 fichiers à créer) |
| 4 | `quiz3-m4.html` | 30 mots (voir données internes du fichier) | noms déjà définis (ex. `suila.mp3`, `mumin.mp3`) | `audio/quiz3/` (30 fichiers à créer) |
| 4/5 | `database.js` → `waslData` (latent, non branché à une page live) | 30 mots hamzat al-wasl | noms déjà définis dans le code | `audio/quiz-wasl/` (30 fichiers, si réactivé) |
| 4 | `lecon4.html` | 20 éléments pédagogiques (tanwin fatha/damma/kasra, hamza sur alif/waw/ya/ligne, harakat isolées, signe de liaison…) | à définir — aucun nom n'a jamais été choisi | `audio/module4/` (dossier à créer, 20 fichiers) |
| 5 | `quiz1-m5.html`, `quiz2-m5.html` | 29 mots Shamsiyya (ex. الشَّمْس, التُّفَّاح, النَّهْر) | noms déjà définis (ex. `shams.mp3`, `tuffah.mp3`, `nahr.mp3`) | `audio/shamsiyya/` (29 fichiers) |
| 5 | `quiz3-m5.html` | 29 mots Shadda (ex. مُعَلِّم, قِطَّة, سُكَّر) | noms déjà définis (ex. `muallim.mp3`, `qitta.mp3`, `sukkar.mp3`) | `audio/shadda/` (29 fichiers) |
| 6 | `quiz1-m6.html`, `quiz2-m6.html` | ≈59 mots (ex. الإثْنَيْن, أَب, قِطَار) | **recommandé : translittération latine** (ex. `al-ithnayn.mp3` au lieu du nom arabe brut actuellement généré) | `audio/m6/` (dossier à créer) |
| 6 | `quiz3-m6.html` | 15 phrases + verbes du texte "يَوْمُ عَزِيز" | `phrase1.mp3`…`phrase15.mp3`, `yastayqidh.mp3`, `yaqra.mp3`, etc. | `audio/m6/` |
| 6 | `lecon6.html` | 68 mots de vocabulaire (6 thèmes) | à définir | dossier à créer, ex. `audio/module6/` |
| 7 | `lecon7.html` (flashcards + tilawa, Al-Kawthar / Al-Ikhlas) | ٱلْكَوْثَرَ, ٱلصَّمَدُ, etc. (texte complet des 2 sourates) | `kawthar-v{n}.mp3`, `ikhlas-v{n}.mp3`, `kawthar-tilawa.mp3`, `ikhlas-tilawa.mp3` | `audio/module7/` (si la fonctionnalité est conservée — voir Étape 5 pour l'alternative "suppression du bouton") |
| 11 | `lecon11.html` (flashcards + tilawa, Al-Falaq / An-Nas) | texte complet des 2 sourates | `m11-falaq-v{n}.mp3`, `m11-nas-v{n}.mp3`, `m11-falaq-full.mp3`, `m11-nas-full.mp3` | `audio/module11/` (si conservé — voir Étape 5) |
| 12 | `lecon12.html` (flashcards + tilawa, Al-Fatiha) | texte complet de la sourate | `m12-fatiha-v{n}.mp3`, `m12-fatiha-full.mp3` | `audio/module12/` (si conservé — voir Étape 5) |

---

## ÉTAPE 5 — RECOMMANDATIONS D'UNIFORMISATION

| Module | Fichier | Version actuelle | Version recommandée | Justification pédagogique |
|---|---|---|---|---|
| 2 | `lecon2.html` | هِلال | هِلَال | Aligner sur `lecon1.html` et `database.js` |
| 2 | `lecon2.html` | مِقَص | مِقَصّ | Restaurer la shadda de la racine ق-ص-ص, alignement avec `database.js` |
| 2 | `lecon2.html` | سُلْحَفَاة | سُلَحْفَاة | Aligner sur `database.js` id 198, repris identique en Module 3 |
| 1→partout | `lecon1.html` (référence gelée) vs reste de l'app | "Alif hamza" (lecon1) / "Haa"-"Taa" sans diacritiques (lecon1) vs "Alif" / "Ḥâ'"-"Ṭâ'" avec diacritiques (partout ailleurs) | Ne pas modifier `lecon1.html` (référence figée) ; documenter formellement ce choix de style comme exception connue, ou harmoniser le reste de l'app sur le style simplifié de `lecon1.html` | Un même élève rencontre deux conventions de transcription différentes pour les mêmes lettres selon la leçon consultée |
| 5 | `lecon5.html` | ES "El livre" | ES "El libro" | Corrige un faux-ami français/espagnol, aligne sur `database.js` |
| 5 | `lecon5.html` | FR/ES "Chat"/"Gato" (قِطَّة) | FR/ES "Une chatte"/"Una gata" | Respecte le genre grammatical du mot, aligne sur `quiz3-m5.html` |
| 4/5 | `database.js` (`qatData`) + `quiz2-m4.html` | "أَِبْرِيق" (double harakat) | "أَبْرِيق" | Orthographe impossible en arabe corrigée, alignement sur `quiz3-m4.html` |
| 6 | `lecon6.html` + `quiz1/2-m6.html` | الإثْنَيْن (hamza qat' إ) | ٱلإِثْنَيْن ou اِثْنَان (hamza de liaison, cohérent avec `waslData`) | Ce mot enseigne actuellement l'orthographe que le Module 4/5 qualifie explicitement de piège incorrect |
| 4 | `quiz2-m4.html` | Certificat/metadata "module 5" | "module 4" partout | Le fichier est routé et affiché comme Module 4 ; ne pas induire l'élève en erreur sur le module qu'il vient de terminer |
| 5 | `quiz2-m5.html` | Duplicata de Quiz 1 (Shamsiyya) | Nouveau quiz dédié à Al-Qamariyya, sur le modèle de quiz1/quiz3 | La leçon enseigne 3 concepts à parts égales ; le 2ᵉ (souvent le plus difficile) n'est jamais évalué |
| 6 | `quiz1-m6.html` vs `quiz2-m6.html` | 59 vs 52 mots dans `ALL_WORDS` | Synchroniser les deux listes | Un élève qui refait le quiz 2 doit retrouver le même périmètre que le quiz 1 |
| 7 | `quiz1/2/3-m7.html` | 4 orthographes différentes de الأبتر | Adopter partout la graphie exacte de `lecon7.html` : **ٱلاَبْتَرُ** | La leçon est la source canonique (rasm Warsh) ; le quiz doit tester la mémoire visuelle du texte réellement enseigné, pas une variante |
| 7 | `quiz2-m7.html`, `quiz3-m7.html` | Alif normal pour tous les mots "ال-" du Kawthar/Ikhlas | Restaurer le alif wasla (ٱ), comme `lecon7.html` et `quiz1-m7.html` | Cohérence du rasm Warsh sur l'ensemble du module |
| 7 | `lecon7.html` (l.436, l.472) | Emoji/annotation dans le champ `ar` | Déplacer hors du champ `ar` (champ `note` séparé) | Le champ `ar` alimente un rendu RTL isolé ; toute pollution non-arabe risque de casser l'affichage ou la copie du mot |
| 8/9 | `lecon8.html` vs `lecon9.html` | الاِسْم vs اسْمٌ | Choisir une convention unique de vocalisation pour ce terme grammatical central | Le même terme technique doit s'écrire identiquement d'un module à l'autre |
| 9 | `lecon9.html` (même carte, recto/verso) | أُولَٰئِكَ vs أُولَئِكَ | Utiliser أُولَٰئِكَ (rasm coranique) sur les deux faces | Les deux faces d'une même flashcard citant le même verset doivent afficher un texte identique |
| 9 | `lecon9.html` (l.1178) | "фраза номинальная" (cyrillique) | "frase nominal" | Bug de contenu pur à corriger |
| 11 | `lecon11.html` (l.795) | خَلَقَ (ق-ل-خ) | خَلَقَ (خ-ل-ق) | Corrige la typo d'ordre des lettres racines, aligne avec le reste du même fichier et `lecon10.html` |
| 11 | `lecon11.html` (l.798) | "...envi[U+0001]e." | "...envie." | Supprime le caractère de contrôle corrompu |
| 12 | `lecon12.html` (l.522) | لِلَّهِ root "ل ل ه" | لِلَّهِ root "أ ل ه" | Harmonise avec la racine du même nom divin donnée en L513 dans le même fichier |
| 12 | `quiz3-m12.html` (l.189) | الكوثر root "ك و ث ر" (réponse correcte) + "ك ث ر" en distracteur | Inverser : "ك ث ر" en réponse correcte | Respecte la règle du gabarit trilitère enseignée en Module 10 |
| 12 | `quiz3-m12.html` (l.211) | كَتَبَ, src "Module 11" | src "Module 10" | Corrige l'attribution ; كَتَبَ est le mot-pivot du Module 10 |
| 4-7,11,12 | 9 boutons micro morts recensés (Étape 3.C) | Boutons visibles sans aucune fonctionnalité | Soit les supprimer (cohérence avec le design "pas d'audio en Module 7-12"), soit les câbler avec de vrais fichiers audio | Un bouton cliquable sans effet dégrade la confiance de l'utilisateur dans l'application |
| 5 | `lecon5.html` | 0 bouton micro (contrairement aux leçons voisines) | Décider explicitement : ajouter la fonctionnalité (cohérence avec `lecon1.html`/`lecon4.html`/`lecon6.html`) ou documenter l'absence comme un choix assumé | Éviter une incohérence d'expérience utilisateur d'une leçon à l'autre |

---

## ÉTAPE 6 — PLAN DE CORRECTION (ordre imposé, non exécuté)

1. **Uniformiser les leçons** — appliquer toutes les corrections de l'Étape 5 concernant les fichiers `leconN.html` (Modules 2, 5, 6, 7, 8/9, 11, 12).
2. **Uniformiser les quiz** — appliquer toutes les corrections concernant `quizN-mX.html` (orthographe الأبتر Module 7, racines Module 12, filtres de couverture Modules 2/3/9, métadonnées Module 4, duplication Module 5).
3. **Corriger les textes** — traductions FR/ES erronées (Module 5), texte cyrillique (Module 9), caractère de contrôle corrompu (Module 11), annotations parasites dans les champs `ar` (Module 7).
4. **Créer les audios manquants** — dans l'ordre de volume : renommages simples (Étape 3.A, 5 corrections) → fichiers isolés manquants (Étape 3.B, ~16 fichiers) → dossiers structurés complets (Modules 4, 5, 6 : ~260 fichiers) → décision sur les 9 boutons morts des Modules 7/11/12 (enregistrer ou supprimer).
5. **Relier les boutons micro** — câbler `lecon4.html` (audioMap vide), `lecon6.html` (handler manquant), et les 8 autres boutons morts une fois les fichiers audio disponibles (ou les retirer si la décision de l'Étape 4 est de ne pas enregistrer ces sourates).
6. **Tester chaque module** — validation manuelle module par module après correction (navigation, contenu, audio).
7. **Passer au module suivant** — répéter jusqu'au Module 12.

---

## RAPPORT FINAL — SYNTHÈSE CHIFFRÉE

| Catégorie | Total détecté |
|---|---|
| Incohérences de contenu (orthographe/harakat/hamza/shadda/tanwin/madd/texte) | 23 |
| Divergences Quiz vs Leçon correspondante | 12 |
| Chemins audio référencés mais mal nommés sur le disque (renommage simple) | 5 |
| Fichiers/dossiers audio référencés mais totalement absents du disque | 14 emplacements (dont 7 dossiers entiers représentant ~260 fichiers) |
| Boutons micro visuellement présents mais sans aucune fonctionnalité JS | 9 (dont 1 groupe de 20 dans `lecon4.html`) |
| Leçon sans aucune fonctionnalité audio (incohérence d'expérience) | 1 (`lecon5.html`) |
| Fichiers orphelins hors périmètre applicatif | 2 (`quiz1-lecon12.html`, `quiz12.html`) |
| Fichiers résiduels de test à nettoyer | 2 (`test.txt` dans `audio/modoud/` et `audio/module2/`) |
| Recommandations d'uniformisation formulées | 24 |

**Modules les plus critiques par volume de correction :**
- **Module 4** : quasi-totalité de l'audio non fonctionnelle (3 dossiers entiers absents + `audioMap` vide), bug de métadonnées de certificat, piège orthographique invalide.
- **Module 7** : 4 orthographes distinctes du même mot coranique الأبتر coexistantes entre la leçon et ses 3 quiz.
- **Module 5** : Al-Qamariyya jamais testée, traduction erronée, incohérence de genre.
- **Module 3** : Quiz 2 ne teste rien du contenu réellement enseigné par la leçon (clone non adapté).

Aucune modification n'a été appliquée au projet. Aucun commit, aucun push. Ce document constitue la base de la correction unique et définitive à mener avant l'enregistrement des audios, selon l'ordre fixé à l'Étape 6.
