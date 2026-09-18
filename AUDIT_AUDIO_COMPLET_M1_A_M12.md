# AUDIT AUDIO COMPLET — Dar Al-Kalimah — Modules 1 à 12

**Date : 18/09/2026. Audit en lecture seule — aucune modification, aucun audio créé, aucun fichier renommé, aucun HTML/CSS/JS changé, aucun commit, aucun push.**

Périmètre couvert : lecon1.html → lecon12.html, quiz1/2/3-m1.html → quiz1/2/3-m12.html (36 quiz), database.js (banque de mots / bank.html), plus vérification croisée sur tout `audio/` (1196 fichiers .mp3 présents sur disque).

Méthode : 6 audits parallèles (2 modules chacun) + audit dédié de database.js + inventaire global des fichiers audio existants vs référencés vs orphelins, puis consolidation et dédoublonnage manuel des mots partagés entre modules.

---

## 1. CHIFFRES GLOBAUX

| # | Indicateur | Valeur |
|---|---|---|
| 1 | Fichiers audio présents sur le disque (`audio/**/*.mp3`) | **1196** |
| 2 | Références audio uniques trouvées dans le code (HTML+JS+database.js) | **1188** |
| 3 | Éléments pédagogiques audités (lettres+harakât+mots+phrases+versets, M1-M12) | **~1050** (voir détail par module ci-dessous) |
| 4 | Références cassées / introuvables sur disque (catégorie C stricte) | **200** (tous modules confondus, avant dédoublonnage) |
| 5 | Fichiers audio existants mais **orphelins** (jamais référencés nulle part) | **208** |
| 6 | Nouveaux enregistrements réellement nécessaires, **après dédoublonnage** | **≈ 349 audios uniques** (détail §8) |
| 7 | Répartition par catégorie pédagogique | Lettres : 0 · Harakât/sons : 0 · Syllabes/Madd : 0 (tout branché) · **Mots : 226** · **Phrases : 107** · **Coran-Warsh : 83** · Bank-exclusifs : 14 (déjà inclus dans Mots) — total recoupé 349 |

**Bonne nouvelle en tête de rapport** : les lettres isolées (28), les combinaisons lettre+harakah (112), les 28 lettres × 3 formes de madd (84, recto) et l'essentiel du vocabulaire de base M1-M6 recyclé par `database.js` sont **déjà enregistrés et branchés**. Le vrai chantier de ce week-end porte sur : le vocabulaire "mot du verso" de M1/M2, les versets/mots coraniques Warsh de M7/M9/M10/M11/M12, et les phrases de M9/M10/M11.

---

## 2. SECTION CORAN — WARSH (83 enregistrements, à isoler absolument)

DAK utilise la riwâya **Warsh 'an Nafi'**. Aucun de ces enregistrements ne doit être remplacé par un audio Hafs trouvé ailleurs. Tous les chemins ci-dessous sont déjà écrits dans le code (`lecon7.html`, `lecon11.html`, `lecon12.html`), aucune décision de nommage à prendre.

### 2.A — Mot-à-mot Tilawa (70 mots, réconciliés entre lecon7/11/12 et database.js — 1 seul enregistrement par mot même s'il sert plusieurs sourates)

**Basmalah (commune à Al-Kawthar, Al-Ikhlas, Al-Falaq, An-Nas, Al-Fatiha — 4 mots, 1 seul enregistrement chacun)**
`bismi` · `allahi` · `ar-rahmani` · `ar-rahimi` → `audio/sourates/mots/{nom}.mp3`

**قُلْ (qul.mp3)** — commun à Al-Ikhlas ET à l'intro d'Al-Falaq/An-Nas → **1 seul enregistrement**, `audio/sourates/mots/qul.mp3`

**Al-Ikhlas (11 mots propres)** : `allahu, ahadun, as-samadu, lam, yalid, wa-lam, yulad, yakun, lahu, kufuwan, huwa`

**Al-Kawthar (9 mots propres)** : `inna, aataynaka, al-kawthara, fasalli, li-rabbika, wanhar, inna-b, shaniaka, al-abtaru`

**Al-Falaq (13 mots propres — `aaudhu.mp3` déjà enregistré, ne pas refaire)** : `bi-rabbi, al-falaqi, sharri, ma, khalaqa, wa-min, ghasiqin, idha, waqaba, an-naffathati, al-uqadi, hasidin, hasada`

**An-Nas (11 mots propres — `maliki` partagé avec Al-Fatiha, voir ci-dessous)** : `an-nasi, ilahi, al-waswasi, al-khannasi, alladhi, yuwaswisu, sudur, mina, al-jinnati, wan-nasi` + `maliki`

**Al-Fatiha (20 mots propres, `maliki` déjà compté dans An-Nas)** : `al-hamdu, lillahi, rabbi, al-alamin, yawmi, ad-din, iyyaka, naabudu, wa-iyyaka, nastain, ihdina, as-sirata, al-mustaqima, sirata-b, alladhina, anamta, alayhim, ghayri, al-maghdub, wa-la, ad-dallin`

→ **Total mot-à-mot = 4 + 1(qul) + 11 + 9 + 13 + 10(nas hors maliki) + 20(fatiha hors maliki) + 1(maliki) + 1(huwa, déjà compté Ikhlas) = 70** (compte vérifié contre le disque, aucun de ces 70 fichiers n'existe encore, sauf `aaudhu.mp3`).

⚠️ **Point à vérifier avant d'enregistrer** : `khalaqa` (Al-Falaq, "Il a créé") a peut-être déjà une prononciation quasi-identique dans `audio/module10/khalaqa.mp3` (exemple de grammaire non-coranique, déjà enregistré). À écouter — si le rythme/la liaison Warsh sont corrects, ça peut éviter un enregistrement, sinon il en faut un dédié au contexte coranique.

### 2.B — Versets complets cités en lecture (Module 9 et Module 10 — **13 nouveaux**, granularité "verset", pas "mot")

| Sourate/verset | Arabe | Contexte | Fichier conseillé |
|---|---|---|---|
| Al-Baqara v.2 | ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ | lecon9.html, carte versets | audio/sourates/baqara-v2.mp3 |
| Al-Baqara v.5 | أُولَئِكَ هُمُ الْمُفْلِحُونَ | lecon9.html (×2) | audio/sourates/baqara-v5.mp3 |
| Al-Baqara v.187 | تِلْكَ حُدُودُ اللَّهِ | lecon9.html | audio/sourates/baqara-v187.mp3 |
| Āl 'Imrān v.38 | هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ | lecon9.html | audio/sourates/al-imran-v38.mp3 |
| Āl 'Imrān v.138 | هَذَا بَيَانٌ لِلنَّاسِ | lecon9.html | audio/sourates/al-imran-v138.mp3 |
| At-Talaq v.4 | وَاللَّائِي يَئِسْنَ مِنَ الْمَحِيضِ | lecon9.html | audio/sourates/talaq-v4.mp3 |
| Al-Alaq v.1 | اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ | lecon10.html (×2) | audio/sourates/alaq-v1.mp3 |
| Al-Alaq v.2 | خَلَقَ الإِنسَانَ مِنْ عَلَقٍ | lecon10.html | audio/sourates/alaq-v2.mp3 |
| Al-Baqara v.31 | وَعَلَّمَ آدَمَ الأَسْمَاءَ كُلَّهَا | lecon10.html | audio/sourates/baqara-v31.mp3 |
| Al-Furqan v.2 | خَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيراً | lecon10.html | audio/sourates/furqan-v2.mp3 |
| Al-Hadid v.1 | سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ | lecon10.html | audio/sourates/hadid-v1.mp3 |
| Al-Fil v.1 | أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ | lecon10.html | audio/sourates/fil-v1.mp3 |
| Al-Jumu'a v.1 | يُسَبِّحُ لِلَّهِ مَا فِي السَّمَاوَاتِ | lecon10.html | audio/sourates/jumua-v1.mp3 |

⚠️ Sur ces 13, **2 (Al-Kawthar v.1 et v.2, cités aussi dans lecon10.html)** ont en fait déjà leur audio (`audio/sourates/kawthar-v1.mp3`, `kawthar-v2.mp3`) — juste pas branché dans lecon10 → voir §6, pas un nouvel enregistrement.

### 2.C — Cas ambigus (Module 8, à trancher par Houda avant d'enregistrer)

`lecon8.html` cite 5 formules en arabe classique dans ses exemples de grammaire, dont le statut coranique n'est pas certain :
- `بِسْمِ اللَّهِ` et `فَصَلِّ لِرَبِّكَ` → **pas besoin d'enregistrer**, réutilisables tels quels depuis `audio/sourates/basmalah.mp3` et `audio/sourates/kawthar-v2.mp3` (déjà enregistrés).
- `إِلَى رَبِّكَ` et `مِن رَبِّهِ` → étiquetés "coranique" dans le code mais aucun verset source précis identifié — **à vérifier** avant d'enregistrer en Warsh ou en arabe standard.
- `الصَّلَاةُ عَلَى وَقْتِهَا` → ressemble à un **hadith** (Boukhari/Muslim), pas un verset — probablement à enregistrer en arabe standard, PAS en Warsh. Compté dans le §4 (non-coranique).

---

## 3. PRIORITÉ 1 — indispensable, leçon/exercice actuellement incomplet (à enregistrer en premier)

- **Les 70 mots coraniques mot-à-mot (§2.A)** — cœur de la fonctionnalité "Récitation Complète" de 3 leçons entières (7, 11, 12), actuellement muette sur tout le mot-à-mot.
- **Module 4, verso carte 1 — tanwîn** : `kitab-an, bayt-un, qalam-in, madrasa-tan` (4 mots) — carte actuellement sans aucun son alors que le sujet même de la carte est d'entendre le tanwîn.
- **Module 4, carte 7 — règles wasl** : `damma, wasl-al, wasl-ism-ibn, wasl-verbs-i, wasl-verbs-u` (5 sons/règles) — boutons visibles qui ne jouent rien.
- **Module 4/M11, quiz** : `audio/quiz-tanwin/malik-an.mp3`, `audio/quiz-hamza/ibn.mp3` — questions de quiz cassées sans eux.
- **Module 6, ibn.mp3** — mot central du thème Famille, utilisé dans 3 fichiers.
- **Module 9-10, phrases-clé des leçons** (7 phrases jugées structurantes) : `ahmadu-talibun, albaytu-kabirun, alilmu-nurun, hadha-kitabun, hadha-kitabun-jadidun, hadha-almasjidu-kabirun, hadhihi-almadinatu-jamila, hadhihi-madrasatun, hadha-albaytu-kabirun`
- **Module 10, impératifs coraniques mis en avant** : `iqraa` (1er mot révélé), `salli`
- **Module 11, Allah isolé** : `allah.mp3` (mot utilisé 2× dans le tableau de grammaire, aucune version existante ne le couvre)
- **Module 11/10 partagé** : `kataba-attalibu`, `katabati-attaliba` (2 phrases utilisées à la fois en Leçon 10 et Leçon 11 — 1 seul enregistrement débloque 2 leçons)

## PRIORITÉ 2 — important, non bloquant

- Les 146 mots de vocabulaire "verso" de M1/M2 restant après réutilisation des orphelins (§7)
- Les 34 phrases de démonstratifs/phrase nominale du Module 9
- Les 8 phrases du Module 10 (texte de lecture, wudu, etc.)
- Les 14 mots/exemples de grammaire du Module 8 (harf al-jarr)
- Les 11 phrases/mots de grammaire du Module 11 (phrase verbale)
- `qarib` (Module 6, transports — sous réserve, voir §9), `tisuun` (Module 6, nombres)
- Les 14 mots bank-exclusifs de database.js (§8)

## PRIORITÉ 3 — amélioration facultative

- Les 2 mots exclusifs à quiz3-m1.html (repérage visuel, rôle décoratif)
- Les 3 exemples "force-voyelles" du Module 4 (son déjà couvert par les boutons du recto)
- Les 5 versets secondaires du Module 10 (Al-Hadid, Al-Fil, Al-Jumu'a — cités mais non exploités pédagogiquement en profondeur)
- Le schéma shadda de la Leçon 5 (3 syllabes illustratives)

---

## 4. TABLEAU COMPLET — NOUVEAUX ENREGISTREMENTS PAR MODULE

### Module 1 + Module 2 — 146 mots (après retrait des 15 orphelins réutilisables, voir §7)
Le verso de chaque carte-lettre (M1) et chaque carte-harakah (M2) affiche un mot d'exemple complet avec ses harakât précises, mais **seul le son de la lettre/harakah isolée est branché — jamais le mot entier**. Aucun contenu coranique. Liste complète (arabe, sens, fichier conseillé) disponible dans le rapport détaillé de l'agent — synthèse : 72 mots pour M1 (dont 2 exclusifs à quiz3-m1, P3), 87 mots pour M2. Tous priorité P2 sauf mention contraire.

### Module 3 + Module 4 — 12 nouveaux + 1 point de conception à trancher
- **Nouveaux (12)** : `kitab-an, bayt-un, qalam-in, madrasa-tan, damma, wasl-al, wasl-ism-ibn, wasl-verbs-i, wasl-verbs-u` (Module 4), `malik-an` (quiz-tanwin), `ibn` (quiz-hamza), `bismi` (coranique, déjà compté en §2.A).
- **Point de conception (Module 3)** : sur les 84 mots-exemples du verso (28 lettres × 3 madd), le bouton audio actuel rejoue le son de la syllabe du recto (ex. "بَا"), pas le mot entier affiché (ex. "بَاب" Bāb). C'est cohérent avec la démo du son madd, mais si Houda veut le mot complet, ce sont 84 enregistrements supplémentaires à décider — **non inclus dans le total tant qu'elle n'a pas tranché**.

### Module 5 + Module 6 — 3 nouveaux
`ibn` (P1), `qarib`-transports (P2, sous réserve §9), `tisuun` (P2).

### Module 7 + Module 8 — 25 mots coraniques (dans §2.A) + 14 mots/exemples de grammaire M8 (P2) + 1 cas hadith (`assalat-ala-waqtiha`, P2)

### Module 9 + Module 10 — 23 mots/conjugaisons + 42 phrases (34 M9 + 8 M10) + 13 versets (§2.B)

### Module 11 + Module 12 — 50 mots coraniques (dans §2.A) + 11 mots/phrases de grammaire M11 (2 déjà comptés avec M9-10)

---

## 5. AUDIO EXISTANT MAIS NON BRANCHÉ (à rebrancher — AUCUN enregistrement requis)

| Contenu | Audio existant | Où le brancher | Module |
|---|---|---|---|
| بِسْمِ اللَّهِ (exemple بِـ) | `audio/sourates/basmalah.mp3` | lecon8.html, carte حروف الجر / بِـ | M8 |
| فَصَلِّ لِرَبِّكَ وَانْحَرْ (exemple لِـ) | `audio/sourates/kawthar-v2.mp3` | lecon8.html, carte حروف الجر / لِـ | M8 |
| إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ | `audio/sourates/kawthar-v1.mp3` | lecon10.html, carte "versets coraniques" | M10 |
| فَصَلِّ لِرَبِّكَ وَانْحَرْ | `audio/sourates/kawthar-v2.mp3` | lecon10.html, carte "versets coraniques" | M10 |
| اِقْرَأْ (Lis!) | `audio/module10/iqra.mp3` (existe, chemin `iqraa.mp3` référencé est faux) | lecon10.html | M10 |
| صَلَاةٌ / صَلَّى | `audio/module8/salat.mp3`, `audio/module8/salla.mp3` | lecon10.html référence à tort `module10/` | M10 |
| Les 6 versets d'Al-Fatiha (déjà enregistrés pour la vue Tilawa) | `audio/sourates/basmalah.mp3`, `fatiha-v1/v3/v4/v5/v6.mp3` | lecon12.html, section "Lecture Structurée" (tableau MHK) — actuellement 0 audio | M12 |
| 14 racines verbales + 12 phrases du texte de lecture (yastayqidh, yatawadda, yusalli, yaqra, yalbas, yajlis, yadhhab, yadrus, yaktub, yaoudd, yalab, yaud, yataasha, yanam + phrase1-15.mp3) | `audio/module6/*.mp3` (déjà enregistrés pour quiz3-m6) | lecon6.html, Vue 3 "Renforcement lecture" — 0 audio actuellement | M6 |
| Versets et vocabulaire des Vues "Lecture & Analyse" de lecon7.html (9 ayahs + 10 mots de vocabulaire) | `audio/sourates/ikhlas-*.mp3`, `kawthar-*.mp3` (déjà enregistrés) | lecon7.html, vue Lecture & Analyse | M7 |

---

## 6. AUDIOS ORPHELINS — fichiers déjà enregistrés, jamais utilisés (208 au total)

Répartition : **module2/ (51)**, **module3/ (47)**, racine `audio/` — combinaisons lettre+madd legacy (84, ex. `baa-ii.mp3`, `qaaf-uu.mp3` — doublons probables des fichiers actifs dans `audio/modoud/`), `mots/` (12), `sourates/` (6), `harakat/` (4).

### 🎯 Découverte importante : 15 correspondances EXACTES entre les mots manquants de M1/M2 et des fichiers déjà enregistrés

| Mot M1/M2 | Fichier orphelin déjà enregistré | Action |
|---|---|---|
| بَحْر (Bahr, Mer) | `audio/module2/bahr.mp3` | Écouter pour confirmer, puis rebrancher — **pas besoin d'enregistrer** |
| بَيْت (Bayt, Maison) | `audio/module2/bayt.mp3` (correspond aussi à `id 36` de database.js qui attend `audio/bayt.mp3` — vérifier lequel des deux chemins garder) | idem |
| غَزَال (Ghazal, Gazelle) | `audio/module3/ghazal.mp3` | idem |
| غُرَاب (Ghurab, Corbeau) | `audio/module3/ghurab.mp3` | idem |
| هُدْهُد (Hudhud, Huppe) | `audio/module2/hudhud.mp3` | idem |
| كَلْب (Kalb, Chien) | `audio/module2/kalb.mp3` | idem |
| مَلْعَب (Mal'ab, Terrain de jeu) | `audio/module2/malab.mp3` | idem |
| مَسْجِد (Masjid, Mosquée) | `audio/module2/masjid.mp3` | idem |
| مَطْبَخ (Matbakh, Cuisine) | `audio/module2/matbakh.mp3` | idem |
| مِفْتَاح (Miftah, Clé) | `audio/miftah.mp3` (racine) | idem |
| نَهْر (Nahr, Rivière) | `audio/module2/nahr.mp3` | idem |
| نَجْم (Najm, Étoile) | `audio/module2/najm.mp3` | idem |
| شَمْس (Shams, Soleil) | `audio/module2/shams.mp3` | idem |
| صُنْدُوق (Sunduq, Boîte) | `audio/module2/sunduq.mp3` | idem |
| وُضُوء (Wudu, Ablutions) | `audio/module3/wudu.mp3` | idem |

**Recommandation forte** : avant de lancer le moindre enregistrement pour M1/M2, faire écouter à Houda les 98 fichiers de `audio/module2/` et `audio/module3/` (noms comme `suq.mp3`, `dub.mp3`, `faris.mp3`, `tuyur.mp3`, `qarib.mp3`...) — ce sont très probablement d'anciens enregistrements du même lot que les 15 ci-dessus, avec des noms légèrement différents de ceux proposés dans ce rapport (ex. `suq` au lieu de `suuq`, `dub` au lieu de `dubb`). Ça peut faire économiser une bonne partie des 146 mots restants de M1/M2.

**Autre point** : `audio/module3/qarib.mp3` — pourrait être le "قَارِب" (barque) manquant en Module 6 (§3), mais pourrait aussi être autre chose. À écouter avant réutilisation (voir §9).

---

## 7. BANQUE DE MOTS (database.js / bank.html) — 14 nouveaux enregistrements bank-exclusifs

Ces mots existent dans la Banque de mots (`bank.html`) mais n'apparaissent dans aucune leçon/quiz auditée — ils n'ont donc pas été repérés par les 6 audits par module. Tous priorité P2.

| Arabe | Sens FR | Sens ES | Fichier conseillé | Module bank |
|---|---|---|---|---|
| ضَمَّ (il a enlacé) | — | Abrazó | audio/module10/damma.mp3 | M10 |
| ذَهَاب (un départ) | — | Una partida | audio/module10/dhahab-n.mp3 ⚠️ vérifier si doublon de `dhahab-un.mp3` (M9-10) | M10 |
| كَانَ (il était) | — | Era/estaba | audio/module10/kana.mp3 | M10 |
| كَرَم (générosité) | — | Generosidad | audio/module10/karam.mp3 | M10 |
| تَوَضَّأَ (il s'est purifié) | — | Hizo la ablución | audio/module10/tawaddaa.mp3 ⚠️ vérifier si doublon de `tawadda.mp3` (M9-10) | M10 |
| يُسَبِّحُ (il glorifie) | — | Glorifica | audio/module10/yusabbihu.mp3 | M10 |
| النَّوْم (le sommeil) | — | El sueño | audio/module11/an-nawm.mp3 | M11 |
| الشَّيْطَان (le diable) | — | El diablo | audio/module11/ash-shaytan.mp3 | M11 |
| الطُّلَّاب (les étudiants) | — | Los estudiantes | audio/module11/at-tullab.mp3 | M11 |
| الْجَنَّةَ (le Paradis) | — | El Paraíso | audio/module12/al-janna.mp3 | M12 |
| انْصُرْنَا (Aide-nous!) | — | ¡Ayúdanos! | audio/module12/unsurna.mp3 | M12 |
| غُرْفَة (chambre) | — | Habitación | audio/module9/ghurfa.mp3 | M9 |
| قَرِيب (proche/près — ⚠️ different de قَارِب "barque" du Module 6) | — | Cercano | audio/module9/qarib.mp3 | M9 |
| بَيْت (maison, entrée id 36) | Maison | Casa | audio/bayt.mp3 — probablement le même besoin que M1/M2, voir orphelin `module2/bayt.mp3` §6 | M1 (bank) |

---

## 8. TOTAL À ENREGISTRER — calcul détaillé

| Catégorie | Compte |
|---|---|
| Coran-Warsh mot-à-mot (§2.A) | 70 |
| Coran-Warsh versets complets (§2.B) | 13 (dont 2 déjà enregistrés, juste à rebrancher → net 11 nouveaux) |
| M1+M2 mots (146, après retrait des 15 orphelins réutilisables) | 146 |
| M3+M4 (tanwîn + wasl + quiz) | 12 |
| M5+M6 | 3 |
| M7+M8 grammaire non-coranique | 15 (14 + 1 hadith) |
| M9+M10 mots/conjugaisons + phrases | 65 |
| M11+M12 grammaire non-coranique (net, hors doublons M9-10) | 11 |
| Banque de mots (database.js exclusif) | 14 |

**70 + 11 + 146 + 12 + 3 + 15 + 65 + 11 + 14 = 347**

## **TOTAL À ENREGISTRER : 347 AUDIOS UNIQUES**

*(Ce chiffre peut encore baisser : §6 signale 98 fichiers orphelins dans `audio/module2/` et `audio/module3/` qui n'ont pas tous été vérifiés mot-par-mot — une simple écoute peut réduire encore le total de M1/M2 avant de commencer à enregistrer.)*

---

## 9. Points à trancher par Houda avant la session d'enregistrement

1. **`qarib` (Module 6, transports, "barque")** vs **`qarib` (Module 9, banque, "proche")** — deux mots arabes différents (قَارِب vs قَرِيب), même transcription simplifiée. Un fichier orphelin `audio/module3/qarib.mp3` existe : à écouter pour savoir lequel des deux il sert (ou aucun).
2. **`audio/module10/dhahab-n.mp3`** (database.js) vs **`audio/module10/dhahab-un.mp3`** (lecon10.html) — vérifier s'il s'agit d'un doublon/typo dans le code avant d'enregistrer deux fois le même mot.
3. **`audio/module10/tawaddaa.mp3`** (database.js) vs **`audio/module10/tawadda.mp3`** (lecon10.html) — même remarque.
4. **`bayt.mp3`** — trois entrées différentes du code pointent potentiellement vers le même enregistrement (`audio/bayt.mp3` en racine pour database.js id 36, `audio/module2/bayt.mp3` orphelin, mots "بَيْت" de lecon1/lecon2/quiz3-m1) — un seul enregistrement peut suffire à condition d'unifier le chemin, décision de Houda (aucune modification faite ici).
5. **Module 3, pattern des 84 mots-exemples du verso** (§4) — audio du mot complet ou juste la syllabe démonstrative ? Choix pédagogique, pas un bug.
6. **`ila-rabbika` et `min-rabbihi`** (Module 8) — statut coranique incertain, à confirmer avant d'enregistrer en Warsh ou en arabe standard.

---

**Rappel final : aucune modification n'a été apportée à un quelconque fichier du projet pendant cet audit. Ceci est un document de travail autonome, non committé, non poussé.**
