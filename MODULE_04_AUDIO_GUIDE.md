# MODULE 4 — GUIDE D'ENREGISTREMENT AUDIO OFFICIEL

**Statut du module : CERTIFIÉ** (incohérences corrigées : trap إبريق à double harakat, mislabeling "module 5" dans les certificats/localStorage de Quiz 2)
**Généré à partir de** : `lecon4.html`, `quiz1-m4.html`, `quiz2-m4.html`, `quiz3-m4.html` — état réel du disque vérifié (aucun des dossiers audio de ce module n'existe encore).

**Système audio** : les 4 fichiers utilisent le composant unique [audio-controller.js](audio-controller.js) / [audio-controller.css](audio-controller.css). `lecon4.html` avait déjà sa propre implémentation indépendante avec état de lecture (`.is-playing`) — migrée vers le composant unique sans perte de comportement.

**Réutilisation exceptionnelle sur ce module** : Module 4 partage énormément de vocabulaire avec lui-même (Quiz 2 et Quiz 3 testent en grande partie les mêmes mots) et avec les Modules 1 et 2 déjà enregistrés. Le code a été mis à jour pour que chaque mot déjà enregistré ailleurs soit **réutilisé directement** plutôt que dupliqué. Cela réduit le nombre réel d'enregistrements de 167 à **142**.

---

## PARTIE 1 — LEÇON 4 (At-Tanwīn / La Hamza)

17 sons uniques (3 sont réutilisés deux fois chacun au sein même de la leçon — voir colonne Réutilisation).

| Clé | Élément | Nom de fichier | Chemin exact | Réutilisé dans |
|---|---|---|---|---|
| tanwin-fath | ـًا (tanwin fatha, ex. كِتَابًا) | `tanwin-fath.mp3` | `audio/module4/tanwin-fath.mp3` | Carte "At-Tanwīn" uniquement |
| tanwin-damm | ـٌ (tanwin damma, ex. بَيْتٌ) | `tanwin-damm.mp3` | `audio/module4/tanwin-damm.mp3` | Carte "At-Tanwīn" uniquement |
| tanwin-kasr | ـٍ (tanwin kasra, ex. قَلَمٍ) | `tanwin-kasr.mp3` | `audio/module4/tanwin-kasr.mp3` | Carte "At-Tanwīn" uniquement |
| hamza-alif | أَ | `hamza-alif.mp3` | `audio/module4/hamza-alif.mp3` | Carte "Hamzat Al-Qat'" **et** carte "Force des voyelles" (bouton chair-alif) |
| hamza-under-alif | إِ | `hamza-under-alif.mp3` | `audio/module4/hamza-under-alif.mp3` | Carte "Hamzat Al-Qat'" uniquement |
| hamza-waw | ؤُ | `hamza-waw.mp3` | `audio/module4/hamza-waw.mp3` | Carte "Hamzat Al-Qat'" **et** carte "Force des voyelles" (bouton chair-waw) |
| hamza-ya | ئِ | `hamza-ya.mp3` | `audio/module4/hamza-ya.mp3` | Carte "Hamzat Al-Qat'" **et** carte "Force des voyelles" (bouton chair-ya) |
| hamza-line | ءَ | `hamza-line.mp3` | `audio/module4/hamza-line.mp3` | Carte "Hamzat Al-Qat'" uniquement |
| kasra | ◌ِ (générique) | `kasra.mp3` | `audio/module4/kasra.mp3` | Carte "Force des voyelles" |
| damma | ◌ُ (générique) | `damma.mp3` | `audio/module4/damma.mp3` | Carte "Force des voyelles" |
| fatha | ◌َ (générique) | `fatha.mp3` | `audio/module4/fatha.mp3` | Carte "Force des voyelles" |
| sukoun | ◌ْ (générique) | `sukoun.mp3` | `audio/module4/sukoun.mp3` | Carte "Force des voyelles" |
| wasl-sign | ٱ | `wasl-sign.mp3` | `audio/module4/wasl-sign.mp3` | Carte "Hamzat Al-Wasl" **et** carte "Exemples Hamzat Al-Wasl" (même clé réutilisée 2×, déjà géré par le code) |
| wasl-al | مَعَ (ال) → فَتْحَة | `wasl-al.mp3` | `audio/module4/wasl-al.mp3` | Carte "Prononciation Hamzat Al-Wasl" |
| wasl-ism-ibn | فِي ٱسْم، ٱبْن → كَسْرَة | `wasl-ism-ibn.mp3` | `audio/module4/wasl-ism-ibn.mp3` | Carte "Prononciation Hamzat Al-Wasl" |
| wasl-verbs-i | فَتْحَة/كَسْرَة → إِ | `wasl-verbs-i.mp3` | `audio/module4/wasl-verbs-i.mp3` | Carte "Prononciation Hamzat Al-Wasl" |
| wasl-verbs-u | ضَمَّة → أُ | `wasl-verbs-u.mp3` | `audio/module4/wasl-verbs-u.mp3` | Carte "Prononciation Hamzat Al-Wasl" |

**Bilan Leçon 4 : 0 / 17 présents. 17 à enregistrer** (dossier `audio/module4/` entièrement à créer).

---

## PARTIE 2 — QUIZ 1 (At-Tanwīn) — 30 mots × 3 formes = 90 fichiers

Dossier `audio/quiz-tanwin/`, entièrement absent. Chaque forme a une prononciation distincte (le tanwin s'entend) : **aucune réutilisation possible** avec les mots de base déjà enregistrés ailleurs.

| Mot de base | Piège (ne pas enregistrer) | Forme ـًا (an) | Forme ـٌ (un) | Forme ـٍ (in) |
|---|---|---|---|---|
| مَكْتَب (bureau) | مَكْتَبُ | `maktab-an.mp3` | `maktab-un.mp3` | `maktab-in.mp3` |
| طَبِيب (médecin) | طَبِيبُ | `tabib-an.mp3` | `tabib-un.mp3` | `tabib-in.mp3` |
| مُعَلِّم (professeur) | مُعَلِّمُ | `mouallim-an.mp3` | `mouallim-un.mp3` | `mouallim-in.mp3` |
| حَدِيقَة (jardin) | حَدِيقَةُ | `hadiqa-an.mp3` | `hadiqa-un.mp3` | `hadiqa-in.mp3` |
| عُصْفُور (oiseau) | عُصْفُورُ | `ousfour-an.mp3` | `ousfour-un.mp3` | `ousfour-in.mp3` |
| قِطَار (train) | قِطَارُ | `qitar-an.mp3` | `qitar-un.mp3` | `qitar-in.mp3` |
| مَدِينَة (ville) | مَدِينَةُ | `madina-an.mp3` | `madina-un.mp3` | `madina-in.mp3` |
| كُوب (tasse) | كُوبُ | `koub-an.mp3` | `koub-un.mp3` | `koub-in.mp3` |
| صَدِيق (ami) | صَدِيقُ | `sadiq-an.mp3` | `sadiq-un.mp3` | `sadiq-in.mp3` |
| مَلِك (roi) | مَلِكُ | `malik-an.mp3` | `malik-un.mp3` | `malik-in.mp3` |
| سَرِير (lit) | سَرِيرُ | `sarir-an.mp3` | `sarir-un.mp3` | `sarir-in.mp3` |
| نَافِذَة (fenêtre) | نَافِذَةُ | `nafidha-an.mp3` | `nafidha-un.mp3` | `nafidha-in.mp3` |
| حَقِيبَة (sac) | حَقِيبَةُ | `haqiba-an.mp3` | `haqiba-un.mp3` | `haqiba-in.mp3` |
| سَاعَة (montre) | سَاعَةُ | `saaa-an.mp3` | `saaa-un.mp3` | `saaa-in.mp3` |
| قَارِب (bateau) | قَارِبُ | `qarib-an.mp3` | `qarib-un.mp3` | `qarib-in.mp3` |
| مِصْبَاح (lampe) | مِصْبَاحُ | `misbah-an.mp3` | `misbah-un.mp3` | `misbah-in.mp3` |
| صُورَة (image) | صُورَةُ | `sura-an.mp3` | `sura-un.mp3` | `sura-in.mp3` |
| جَار (voisin) | جَارُ | `jar-an.mp3` | `jar-un.mp3` | `jar-in.mp3` |
| مَطْعَم (restaurant) | مَطْعَمُ | `matam-an.mp3` | `matam-un.mp3` | `matam-in.mp3` |
| شَارِع (rue) | شَارِعُ | `shari-an.mp3` | `shari-un.mp3` | `shari-in.mp3` |
| جَوَاب (réponse) | جَوَابُ | `jawab-an.mp3` | `jawab-un.mp3` | `jawab-in.mp3` |
| حَانُوت (boutique) | حَانُوتُ | `hanut-an.mp3` | `hanut-un.mp3` | `hanut-in.mp3` |
| نَار (feu) | نَارُ | `nar-an.mp3` | `nar-un.mp3` | `nar-in.mp3` |
| طَرِيق (chemin) | طَرِيقُ | `tariq-an.mp3` | `tariq-un.mp3` | `tariq-in.mp3` |
| قَلْعَة (château) | قَلْعَةُ | `qala-an.mp3` | `qala-un.mp3` | `qala-in.mp3` |
| مِقَصّ (ciseaux) | مِقَصُّ | `miqass-an.mp3` | `miqass-un.mp3` | `miqass-in.mp3` |
| دَفْتَر (cahier) | دَفْتَرُ | `daftar-an.mp3` | `daftar-un.mp3` | `daftar-in.mp3` |
| مُمَرِّض (infirmier) | مُمَرِّضُ | `moumarrid-an.mp3` | `moumarrid-un.mp3` | `moumarrid-in.mp3` |
| فَصْل (classe/saison) | فَصْلُ | `fasl-an.mp3` | `fasl-un.mp3` | `fasl-in.mp3` |
| طِفْل (enfant) | طِفْلُ | `tifl-an.mp3` | `tifl-un.mp3` | `tifl-in.mp3` |

*(30 lignes × 3 colonnes de formes = 90 fichiers, tous dans `audio/quiz-tanwin/`, tous à enregistrer)*

**Bilan Quiz 1 : 0 / 90 présents. 90 à enregistrer.**

---

## PARTIE 3 — QUIZ 2 (Hamzat Al-Qat') — 30 mots

Dossier `audio/quiz-qat/`. **5 mots déjà enregistrés ailleurs — réutilisés, ne pas ré-enregistrer** (chemins déjà mis à jour dans le code).

| ID | Texte arabe exact | Statut | Chemin (déjà à jour dans le code) | Réutilisé de |
|---|---|---|---|---|
| qat-01 | أَسَد (lion) | ✅ Déjà présent | `audio/asad.mp3` | Module 1 (id 29) |
| qat-02 | إِبْرِيق (cruche) | ❌ À enregistrer | `audio/quiz-qat/ibriq.mp3` | — (aussi utilisé par Quiz 3, hamza-27) |
| qat-03 | أُمّ (mère) | ❌ À enregistrer | `audio/quiz-qat/umm.mp3` | — (aussi Quiz 3, hamza-13) |
| qat-04 | رَأْس (tête) | ❌ À enregistrer | `audio/quiz-qat/ras.mp3` | — (aussi Quiz 3, hamza-19) |
| qat-05 | كَأْس (verre) | ✅ Déjà présent | `audio/kas.mp3` | Module 1 (id 30) — aussi Quiz 3, hamza-30 |
| qat-06 | بِئْر (puits) | ❌ À enregistrer | `audio/quiz-qat/bir.mp3` | — (aussi Quiz 3, hamza-05) |
| qat-07 | ذِئْب (loup) | ✅ Déjà présent | `audio/module2/dhib.mp3` | Module 2 (id 145) — aussi Quiz 3, hamza-06 |
| qat-08 | فَأْس (hache) | ❌ À enregistrer | `audio/quiz-qat/fas.mp3` | — (aussi Quiz 3, hamza-20) |
| qat-09 | مُؤْمِن (croyant) | ❌ À enregistrer | `audio/quiz-qat/mumin.mp3` | — (aussi Quiz 3, hamza-02) |
| qat-10 | سُؤَال (question) | ❌ À enregistrer | `audio/quiz-qat/sual.mp3` | — (aussi Quiz 3, hamza-04) |
| qat-11 | مَاء (eau) | ✅ Déjà présent | `audio/ma.mp3` | Module 1 (id 91) — aussi Quiz 3, hamza-10 |
| qat-12 | سَمَاء (ciel) | ❌ À enregistrer | `audio/quiz-qat/sama.mp3` | — (aussi Quiz 3, hamza-25) |
| qat-13 | شَيْء (chose) | ❌ À enregistrer | `audio/quiz-qat/shay.mp3` | — (aussi Quiz 3, hamza-07) |
| qat-14 | قَرَأَ (il a lu) | ✅ Déjà présent | `audio/module2/qaraa.mp3` | Module 2 (id 210) — aussi Quiz 3, hamza-08 |
| qat-15 | بَدَأَ (il a commencé) | ❌ À enregistrer | `audio/quiz-qat/badaa.mp3` | — (aussi Quiz 3, hamza-22) |
| qat-16 | يَأْكُل (il mange) | ❌ À enregistrer | `audio/quiz-qat/yakul.mp3` | — (aussi Quiz 3, hamza-03) |
| qat-17 | مُؤَسَّسَة (institution) | ❌ À enregistrer | `audio/quiz-qat/muassasa.mp3` | — (aussi Quiz 3, hamza-21) |
| qat-18 | أَرْنَب (lapin) | ❌ À enregistrer | `audio/quiz-qat/arnab.mp3` | — |
| qat-19 | إِسْلَام (Islam) | ❌ À enregistrer | `audio/quiz-qat/islam.mp3` | — (aussi Quiz 3, hamza-12) |
| qat-20 | أُسْرَة (famille) | ❌ À enregistrer | `audio/quiz-qat/usra.mp3` | — |
| qat-21 | مَسَاء (soir) | ❌ À enregistrer | `audio/quiz-qat/masa.mp3` | — |
| qat-22 | شَاطِئ (plage) | ❌ À enregistrer | `audio/quiz-qat/shati.mp3` | — (aussi Quiz 3, hamza-09) |
| qat-23 | قَارِئ (lecteur) | ❌ À enregistrer | `audio/quiz-qat/qari.mp3` | — (aussi Quiz 3, hamza-26) |
| qat-24 | دِفْء (chaleur) | ❌ À enregistrer | `audio/quiz-qat/dif.mp3` | — |
| qat-25 | بُطْء (lenteur) | ❌ À enregistrer | `audio/quiz-qat/but.mp3` | — |
| qat-26 | رُؤْيَة (vision) | ❌ À enregistrer | `audio/quiz-qat/ruya.mp3` | — |
| qat-27 | فَأْر (souris) | ❌ À enregistrer | `audio/quiz-qat/far.mp3` | — |
| qat-28 | مِئْذَنَة (minaret) | ❌ À enregistrer | `audio/quiz-qat/midhana.mp3` | — |
| qat-29 | رِئَة (poumon) | ❌ À enregistrer | `audio/quiz-qat/ria.mp3` | — |
| qat-30 | يَقْرَأُ (il lit) | ❌ À enregistrer | `audio/quiz-qat/yaqrau.mp3` | — |

**Bilan Quiz 2 : 5 / 30 déjà présents (réutilisés). 25 à enregistrer.**

---

## PARTIE 4 — QUIZ 3 (Hamza complet) — 30 items

Dossier `audio/quiz-hamza/`. **20 mots identiques à ceux du Quiz 2 — déjà réutilisés dans le code (chemins mis à jour), ne pas ré-enregistrer.** Seuls 10 items sont du contenu réellement nouveau.

| ID | Texte arabe exact | Statut | Chemin (déjà à jour) |
|---|---|---|---|
| hamza-01 | سُئِلَ (on lui a demandé) | ❌ À enregistrer | `audio/quiz-hamza/suila.mp3` |
| hamza-02 | مُؤْمِن | ✅ Réutilisé | `audio/quiz-qat/mumin.mp3` (= qat-09) |
| hamza-03 | يَأْكُل | ✅ Réutilisé | `audio/quiz-qat/yakul.mp3` (= qat-16) |
| hamza-04 | سُؤَال | ✅ Réutilisé | `audio/quiz-qat/sual.mp3` (= qat-10) |
| hamza-05 | بِئْر | ✅ Réutilisé | `audio/quiz-qat/bir.mp3` (= qat-06) |
| hamza-06 | ذِئْب | ✅ Déjà présent | `audio/module2/dhib.mp3` (= Module 2) |
| hamza-07 | شَيْء | ✅ Réutilisé | `audio/quiz-qat/shay.mp3` (= qat-13) |
| hamza-08 | قَرَأَ | ✅ Déjà présent | `audio/module2/qaraa.mp3` (= Module 2) |
| hamza-09 | شَاطِئ | ✅ Réutilisé | `audio/quiz-qat/shati.mp3` (= qat-22) |
| hamza-10 | مَاء | ✅ Déjà présent | `audio/ma.mp3` (= Module 1) |
| hamza-11 | أَسَد | ✅ Déjà présent | `audio/asad.mp3` (= Module 1) |
| hamza-12 | إِسْلَام | ✅ Réutilisé | `audio/quiz-qat/islam.mp3` (= qat-19) |
| hamza-13 | أُمّ | ✅ Réutilisé | `audio/quiz-qat/umm.mp3` (= qat-03) |
| hamza-14 | ٱسْم (nom) | ❌ À enregistrer | `audio/quiz-hamza/ism.mp3` |
| hamza-15 | ٱلْبَيْت (la maison) | ❌ À enregistrer | `audio/quiz-hamza/albayt.mp3` |
| hamza-16 | ٱكْتُبْ (écris) | ❌ À enregistrer | `audio/quiz-hamza/uktub.mp3` |
| hamza-17 | ٱفْتَحْ (ouvre) | ❌ À enregistrer | `audio/quiz-hamza/iftah.mp3` |
| hamza-18 | ٱجْلِسْ (assieds-toi) | ❌ À enregistrer | `audio/quiz-hamza/ijlis.mp3` |
| hamza-19 | رَأْس | ✅ Réutilisé | `audio/quiz-qat/ras.mp3` (= qat-04) |
| hamza-20 | فَأْس | ✅ Réutilisé | `audio/quiz-qat/fas.mp3` (= qat-08) |
| hamza-21 | مُؤَسَّسَة | ✅ Réutilisé | `audio/quiz-qat/muassasa.mp3` (= qat-17) |
| hamza-22 | بَدَأَ | ✅ Réutilisé | `audio/quiz-qat/badaa.mp3` (= qat-15) |
| hamza-23 | جُزْء (une partie) | ❌ À enregistrer | `audio/quiz-hamza/juz.mp3` |
| hamza-24 | هُدُوء (le calme) | ❌ À enregistrer | `audio/quiz-hamza/huduu.mp3` |
| hamza-25 | سَمَاء | ✅ Réutilisé | `audio/quiz-qat/sama.mp3` (= qat-12) |
| hamza-26 | قَارِئ | ✅ Réutilisé | `audio/quiz-qat/qari.mp3` (= qat-23) |
| hamza-27 | إِبْرِيق | ✅ Réutilisé | `audio/quiz-qat/ibriq.mp3` (= qat-02) |
| hamza-28 | ٱبْن (un fils) | ❌ À enregistrer | `audio/quiz-hamza/ibn.mp3` |
| hamza-29 | ٱشْرَبْ (bois) | ❌ À enregistrer | `audio/quiz-hamza/ishrab.mp3` |
| hamza-30 | كَأْس | ✅ Déjà présent | `audio/kas.mp3` (= Module 1) |

**Bilan Quiz 3 : 20 / 30 réutilisés (0 nouveaux enregistrements pour ces 20). 10 à enregistrer.**

*(Correction lors de la revue finale du Chantier 1 : ce guide indiquait initialement que hamza-14/15/28/29 seraient réutilisés par le Module 5 sous l'intitulé "Hamzat Al-Wasl". Le Module 5, une fois traité, s'est avéré porter sur un tout autre contenu — Ash-Shamsiyya / Al-Qamariyya / La Shadda, sans aucune section Hamzat Al-Wasl. Ces 4 fichiers sont donc bien 4 enregistrements autonomes du Module 4, sans réutilisation externe. Voir `AUDIO_REUSE_REPORT.md` pour le détail consolidé.)*

---

## RÉCAPITULATIF MODULE 4

| Partie | Total éléments | Déjà présents/réutilisés | À enregistrer |
|---|---|---|---|
| Leçon 4 | 17 | 0 | 17 |
| Quiz 1 (Tanwin) | 90 | 0 | 90 |
| Quiz 2 (Qat') | 30 | 5 | 25 |
| Quiz 3 (Hamza complet) — dont 20 mots strictement identiques à Quiz 2, non recomptés | 30 | 20 | 10 |
| **TOTAL (dédoublonné, Quiz2 ↔ Quiz3 partagent 20 chemins)** | **147** | **5** | **142** |

*(Corrigé lors de la revue finale du Chantier 1 : le tableau indiquait initialement un total de 167 et 25 "déjà présents", obtenu en additionnant chaque partie sans déduire les 20 chemins que Quiz 2 et Quiz 3 partagent réellement. Le nombre de fichiers **physiquement distincts** que ce module nécessite est 147, dont seulement 5 réellement déjà enregistrés ailleurs [Module 1 : asad.mp3, kas.mp3, ma.mp3 · Module 2 : dhib.mp3, qaraa.mp3]. Le nombre à enregistrer, 142, était déjà correct et ne change pas.)*

Sans la détection de réutilisation, ce module aurait demandé 167 enregistrements bruts (30+30+30+... comptés sans déduplication). Grâce aux recoupements (Module 1, Module 2, et Quiz 2 ↔ Quiz 3 en interne), le total réel tombe à 147 fichiers distincts, et seuls **142 restent à enregistrer**.

### Fichiers à enregistrer en priorité (nouveauté pure, aucune réutilisation future connue)

Dossiers à enregistrer : `audio/module4/` (17), `audio/quiz-tanwin/` (90), `audio/quiz-qat/` (25), `audio/quiz-hamza/` (10, tous autonomes — aucun partagé avec un autre module).

Checklist par fichier (☐ À enregistrer ☐ Enregistré ☐ Exporté ☐ Déposé GitHub ☐ Détecté ☐ Fonctionnel) — à cocher au fur et à mesure dans ce document au moment de l'enregistrement réel.
