# DAR AL-KALIMAH — MASTER PEDAGOGICAL AUDIT
## Construction de la base de données pédagogique officielle

**Date de l'audit :** 2026-07-25
**Nature :** Audit exhaustif en lecture seule. **Aucun fichier modifié, aucun commit, aucun push.**
**Périmètre :** 12 modules, 12 leçons, 36 quiz, `database.js`, `bank.html` (Banque des mots).

---

## Méthodologie

Cet audit combine :
1. Lecture directe et intégrale de `database.js` (515 lignes — `wordsDatabase`, `alphabetData`, `tanwinData`, `qatData`, `waslData`) et comparaison programmatique avec `lecon1.html` / `quiz1-m1.html`.
2. Extraction structurée du contenu pédagogique des Modules 2 à 6 (leçons + quiz à données embarquées), avec diff automatique champ-par-champ.
3. Extraction structurée du contenu pédagogique des Modules 7 à 12 (grammaire, tajwid, versets coraniques), avec comparaison leçon ↔ quiz.
4. Réutilisation des résultats de l'audit audio technique précédent (677 fichiers audio recensés, chemins cassés déjà identifiés) pour la dimension pédagogique demandée ici (micro affiché / audio requis).

**Limite assumée et transparente** : les Modules 7 à 12 contiennent des dizaines de phrases/versets par leçon. Un échantillon représentatif a été extrait avec vérification de cohérence complète, plutôt qu'une retranscription exhaustive de chaque phrase — ceci est signalé explicitement partout où cela s'applique, pour ne jamais présenter une estimation comme un fait vérifié.

---

# ÉTAPE 1 — BASE PÉDAGOGIQUE

## 1.1 Les 28 lettres de l'alphabet

Source canonique : `database.js` → `wordsDatabase` (ids 1-28), confirmée **identique à 100%** dans `lecon1.html` et `quiz1-m1.html` → `QUIZ_DATABASE` (comparaison directe effectuée, zéro écart de texte arabe ou de chemin audio).

| # | Arabe | Translit. (fr) | Audio | Module | Leçon | Quiz | Micro | Audio présent |
|---|---|---|---|---|---|---|---|---|
| 1 | أ | Alif | `audio/01-alif.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 2 | ب | Baa | `audio/02-baa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 3 | ت | Taa | `audio/03-taa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 4 | ث | Thaa | `audio/04-thaa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 5 | ج | Jiim | `audio/05-jim.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 6 | ح | Haa | `audio/06-haa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 7 | خ | Khaa | `audio/07-khaa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 8 | د | Daal | `audio/08-dal.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 9 | ذ | Dhaal | `audio/09-dhal.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 10 | ر | Raa | `audio/10-raa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 11 | ز | Zaay | `audio/11-zay.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 12 | س | Siin | `audio/12-siin.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 13 | ش | Shiin | `audio/13-shiin.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 14 | ص | Saad | `audio/14-saad.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 15 | ض | Daad | `audio/15-daad.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 16 | ط | Taa (emph.) | `audio/16-taaa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 17 | ظ | Zaa | `audio/17-zaa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 18 | ع | Ayn | `audio/18-ayn.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 19 | غ | Ghayn | `audio/19-ghayn.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 20 | ف | Faa | `audio/20-faa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 21 | ق | Qaaf | `audio/21-qaaf.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 22 | ك | Kaaf | `audio/22-kaaf.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 23 | ل | Laam | `audio/23-laam.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 24 | م | Miim | `audio/24-miim.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 25 | ن | Nuun | `audio/25-nuun.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 26 | ه | Haa (douce) | `audio/26-haaa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 27 | و | Waaw | `audio/27-waaw.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |
| 28 | ي | Yaa | `audio/28-yaa.mp3` | 1 | Leçon 1 | Quiz 1/2/3-M1 | Oui | ✅ |

**Verdict Étape 1.1 : les 28 lettres sont 100% cohérentes entre `database.js`, `lecon1.html` et les 3 quiz du Module 1. Aucune correction requise.**

## 1.2 Les Madd / Modoud (formes longues : alif, waw, yaa)

Source : `database.js` → `alphabetData` (28 lettres × 3 formes = 84 items), utilisée directement par `lecon3.html`, et **dupliquée intégralement** (0 écart confirmé par comparaison automatique) dans `quiz1-m3.html`.

Exemple (lettre أ) :

| Forme | Texte | Translit. | Exemple | Audio | Présent dans |
|---|---|---|---|---|---|
| Alif | آ | â | قُرْآن | `audio/modoud/alif-aa.mp3` | database.js, lecon3, quiz1-m3 |
| Waw | أُو | oû | أُولَى | `audio/modoud/alif-uu.mp3` | database.js, lecon3, quiz1-m3 |
| Yaa | إِي | î | إِيمَان | `audio/modoud/alif-ii.mp3` | database.js, lecon3, quiz1-m3 |

**84 formes au total (28 lettres × 3), toutes vérifiées identiques entre les 3 sources.**

## 1.3 Harakat (fathah / dammah / kasrah / soukoun)

Source : `lecon2.html` → `alphabetData` (28 lettres × 4 harakat = 112 items), **dupliquée intégralement** (0 écart confirmé) dans `quiz1-m2.html`.

Exemple (lettre أ) :

| Harakah | Forme | Exemple | Audio |
|---|---|---|---|
| Fathah | أَ | أَسَد (Lion) | `audio/harakat/alif-fathah.mp3` |
| Dammah | أُ | أُذُن (Oreille) | `audio/harakat/alif-dammah.mp3` |
| Kasrah | إِ | إِبْرَة (Aiguille) | `audio/harakat/alif-kasrah.mp3` |
| Soukoun | أْ | فَأْر (Souris) | `audio/harakat/alif-soukoun.mp3` |

**112 formes au total, toutes vérifiées identiques entre `lecon2.html` et `quiz1-m2.html`. 6 fichiers audio cassés déjà identifiés (voir Étape 6).**

Les **traps** (fausses réponses) de `quiz1-m3.html` sont les 3 formes courtes (fathah/dammah/kasrah) de chaque lettre — **vérifiées identiques** aux formes de `lecon2.html`.

## 1.4 Tanwin

Source : `database.js` → `tanwinData` (30 mots × 3 formes = 90 formes), utilisée par `lecon4.html` (cartes de règles) et **dupliquée intégralement** (0 écart) dans `quiz1-m4.html`.

30 mots de base : مَكْتَب، طَبِيب، مُعَلِّم، حَدِيقَة، عُصْفُور، قِطَار، مَدِينَة، كُوب، صَدِيق، مَلِك، سَرِير، نَافِذَة، حَقِيبَة، سَاعَة، قَارِب، مِصْبَاح، صُورَة، جَار، مَطْعَم، شَارِع، جَوَاب، حَانُوت، نَار، طَرِيق، قَلْعَة، مِقَصّ، دَفْتَر، مُمَرِّض، فَصْل، طِفْل — chacun avec 3 formes (تنوين الفتح/الضم/الكسر).

## 1.5 Hamzat al-Qat' et Hamzat al-Wasl

- `qatData` (database.js, 30 mots) — utilisée par `lecon4.html` et **dupliquée intégralement** (0 écart) dans `quiz2-m4.html`.
- `waslData` (database.js, 30 mots) — non reliée à un quiz dédié actif dans le grid des 36 (voir Étape 9, point critique).
- `quiz3-m4.html` "Hamza complet" — **30 mots supplémentaires, distincts de `qatData`, absents de `database.js`** (catalogue complet fourni par l'agent, voir rapport détaillé conservé en annexe de session — inclut سُئِلَ، مُؤْمِن، يَأْكُل، شَاطِئ، رَأْس، فَأْس, etc.)

## 1.6 Shadda

Source : `quiz3-m5.html` → `shaddaData` (29 mots), **absente de `database.js`**. Exemples : مُعَلِّم، سَيَّارَة، قِطَّة، تُفَّاح، سُلَّم، رُمَّان، سُكَّر، دَرَّاجَة...

## 1.7 Ash-Shamsiyya / Al-Qamariyya

Source : `quiz1-m5.html` et `quiz2-m5.html` → `shamsiyyaData` (29 mots). **⚠️ Les deux fichiers contiennent EXACTEMENT le même jeu de données** (voir Étape 2/9 — anomalie critique : aucun quiz n'existe réellement pour Al-Qamariyya).

## 1.8 Vocabulaire général (Banque des mots / wordsDatabase)

`database.js` → `wordsDatabase` contient **259 entrées actives** : 28 lettres (ids 1-28) + 231 mots (ids 29-219 et 401-440 — **plage d'ids 220 à 400 volontairement vacante**, 181 ids non utilisés, réservés à un usage futur non exploité).

Répartition des 231 mots :
- ids 29-100 : 72 mots — vocabulaire de base Module 1
- ids 101-129 : 29 mots de 2 lettres (particules, impératifs) — Module 2
- ids 130-148 : 19 mots de 3-4 lettres (verbes/noms) — Module 2
- ids 149-178 : 30 mots avec Modoud (3 lettres) — Module 3 Quiz 2
- ids 179-208 : 30 mots avec Modoud (4+ lettres) — Module 3 Quiz 3
- ids 209-219 : 11 verbes — Module 2 (complément)
- ids 401-420 : 20 mots solaires — Module 4 Quiz 1
- ids 421-440 : 20 mots lunaires — Module 4 Quiz 1

## 1.9 Vocabulaire thématique (Leçon 6)

Source : `lecon6.html` → `THEMES` (86 mots, absents de `database.js`) répartis en 6 thèmes : Jours (7), Horaires de prière (10), Famille (18), Nombres (29), Transports (12), Couleurs (10). Plus un texte de lecture "يَوْمُ عَزِيز" (12 phrases) et 18 familles de racines.

## 1.10 Grammaire et Tajwid (Leçons 7 à 12) — échantillon représentatif

| Module | Sujet | Contenu type |
|---|---|---|
| 7 | قِصَارُ السُّوَر (Sourates Al-Kawthar et Al-Ikhlas, riwaya Warsh) | Versets complets, vocabulaire, tilawa |
| 8 | الاِسْمُ وَحُرُوفُ الْجَرّ (Le nom et les prépositions) | 6 prépositions, texte de lecture "عزيز au zoo" |
| 9 | الْجُمْلَةُ الاِسْمِيَّةُ (Phrase nominale, démonstratifs) | Paradigme complet هذا/هذه/ذلك/تلك... |
| 10 | الْفِعْل (Le verbe, 3 temps) | Racines ك-ت-ب/ذ-ه-ب/ق-ر-أ/ع-ل-م, conjugaisons |
| 11 | الجُمْلَةُ الفِعْلِيَّة + Al-Falaq/An-Nas | Grammaire VSO + tajwid Warsh |
| 12 | Sourate Al-Fatiha + lecture structurée (إعراب) | Analyse grammaticale mot-par-mot complète |

*(Contenu exhaustif — versets complets, tableaux d'iʿrāb — disponible dans les fichiers sources ; extraction complète possible sur demande dans une passe dédiée.)*

---

# ÉTAPE 2 — COHÉRENCE DES MOTS

## Résultat global

La très grande majorité du contenu est **rigoureusement cohérente** : les comparaisons automatiques (champ par champ, lettre par lettre) entre `database.js`, les leçons, et les quiz à données embarquées montrent **zéro écart** dans les catégories suivantes :
- Les 28 lettres (Module 1)
- Les 112 formes de harakat (Module 2)
- Les 84 formes de Madd (Module 3)
- Les 90 formes de Tanwin (Module 4 Quiz 1)
- Les 30 mots de Hamzat al-Qat' (Module 4 Quiz 2)
- Le vocabulaire thématique repris en Leçon 6 → Quiz 1/2

## Incohérences réelles détectées (orthographe / diacritiques / genre)

| # | Mot / item | Source A | Source B | Écart |
|---|---|---|---|---|
| 1 | الأبتر (Al-Kawthar v.3) | `lecon7.html` : `ٱلاَبْتَرُ` | `quiz1-m7.html` : `ٱلَابْتَرُ` | Position de la fatha inversée |
| 2 | الأبتر (Al-Kawthar v.3) | `lecon7.html` : `ٱلاَبْتَرُ` (sans hamza) | `quiz2-m7.html`/`quiz3-m7.html` : `الْأَبْتَرُ` (avec hamza) | Graphie hamza différente — **3 orthographes du même mot dans le même module** |
| 3 | قِطَّة (chatte) | `lecon5.html` : traduit "Chat / Gato" (masculin) | `quiz3-m5.html` : traduit "Une chatte / Una gata" (féminin, correct) | Incohérence de genre dans la traduction (même graphie arabe) |
| 4 | إِبْرِيق (cruche) — piège n°2 | `database.js` (`qatData`) / `quiz2-m4.html` : `أَِبْرِيق` (double diacritique) | `quiz3-m4.html` : `أَبْرِيق` (bien formé) | Piège malformé dans une des deux sources |
| 5 | خَلَقَ — racine | `lecon11.html`, une occurrence : racine notée `(ق-ل-خ)` | `lecon11.html`, autre occurrence (correcte) : `(خ ل ق)` | Incohérence interne à la même leçon (ordre des lettres) |
| 6 | Al-Kitab (exemple Qamariyya) | `lecon5.html` : traduction espagnole "El livre" | — | Mot français laissé à la place de l'espagnol ("El libro" attendu) |
| 7 | Al-Falaq v.5 (traduction FR) | `lecon11.html` : "quand il envi[caractère corrompu]e." | — | Caractère de contrôle corrompu dans le texte français |

## Doublons internes à `wordsDatabase` (même mot, deux entrées)

| Mot | ids | Chemins audio |
|---|---|---|
| بَاب (porte) | 32 et 149 | `audio/bab.mp3` vs `audio/module3/bab.mp3` |
| مِفْتَاح (clé) | 45 et 190 | `audio/miftah.mp3` vs `audio/module3/miftah.mp3` |
| فِيل (éléphant) | 83 et 178 | `audio/fil.mp3` vs `audio/module3/fil.mp3` |
| سُوق (marché) | 86 et 170 | `audio/suq.mp3` vs `audio/module3/suq.mp3` (fichiers physiquement dupliqués sur le disque, confirmé) |
| أَرْض / ٱلْأَرْض (terre) | 70 et 435 | même fichier `audio/ard.mp3` réutilisé pour la forme nue et la forme lunaire |
| صَيْف / ٱلسَّيْف (été/épée — attention, mots différents !) | 84 et 407 | même fichier `audio/sayf.mp3` réutilisé — **ceci mélange potentiellement deux mots différents (صَيْف "été" vs سَيْف "épée") sous le même audio, à vérifier en priorité** |

**Recommandation** : le dernier cas (id 84 vs id 407) mérite une vérification prioritaire — il ne s'agit pas forcément d'un simple doublon mais possiblement de deux mots différents partageant par erreur le même fichier audio.

---

# ÉTAPE 3 — LETTRES

**Verdict : conformité totale.** Les 28 lettres sont écrites de façon strictement identique dans :
- l'alphabet (`database.js`, `lecon1.html`)
- les exercices (`quiz1/2/3-m1.html`)
- les formes Madd (`alphabetData`, `lecon3.html`, `quiz1-m3.html`)
- les formes Harakat (`lecon2.html`, `quiz1-m2.html`)

Aucune lettre n'a été trouvée avec une graphie divergente entre ces sources. **Aucune correction requise pour les lettres elles-mêmes.**

---

# ÉTAPE 4 — MOTS (matrice d'existence)

| Catégorie | Dans une leçon ? | Dans un quiz ? | Dans plusieurs quiz ? | Dans la Banque ? | Avec audio ? | Avec micro ? |
|---|---|---|---|---|---|---|
| Vocabulaire Module 1 (72 mots) | Non (pas de leçon dédiée hors alphabet) | Quiz 3-M1 (via Banque) | Non | ✅ Oui | ✅ Oui | ✅ Oui |
| Mots 2-4 lettres Module 2 (48 mots) | Non | Quiz 2-M2, Quiz 3-M2 | Oui (partagés) | ✅ Oui | ✅ Oui (6 cassés) | ✅ Oui |
| Mots Modoud Module 3 (60 mots) | Non (leçon = lettres, pas mots) | Quiz 2-M3, Quiz 3-M3 | Oui (**partagés avec Quiz 2/3-M2**, filtre identique) | ✅ Oui | ✅ Oui (1 cassé, 1 manquant) | ✅ Oui |
| Mots Tanwin (30) | Leçon 4 (cartes règles) | Quiz 1-M4 | Non | ✅ Oui (`tanwinData`) | ❌ Dossier `audio/quiz-tanwin/` absent | ✅ Oui mais muet |
| Mots Hamzat al-Qat' (30) | Leçon 4 | Quiz 2-M4 | Non | ✅ Oui (`qatData`) | ❌ Dossier `audio/quiz-qat/` absent | ✅ Oui mais muet |
| Mots "Hamza complet" (30) | Leçon 4 (partiel) | Quiz 3-M4 | Non | ❌ Absent de la Banque | ❌ Dossier `audio/quiz3/` absent | ✅ Oui mais muet |
| Mots Shamsiyya (29) | Leçon 5 (exemples partiels) | Quiz 1-M5 **et** Quiz 2-M5 (doublon) | Oui (doublon, pas Qamariyya) | ❌ Absent de la Banque | ❌ Dossier `audio/shamsiyya/` absent | ✅ Oui mais muet |
| Mots Shadda (29) | Leçon 5 (exemples partiels) | Quiz 3-M5 | Non | ❌ Absent de la Banque | ❌ Dossier `audio/shadda/` absent | ✅ Oui mais muet |
| Vocabulaire thématique (86) | Leçon 6 | Quiz 1-M6, Quiz 2-M6 (sous-ensembles) | Oui | ❌ Absent de la Banque | ❌ Dossier `audio/m6/` absent | ✅ Oui mais muet |
| Grammaire/versets Modules 7-12 | Leçons 7-12 | Quiz 1/2/3-M7 à M12 | Oui (réutilisation inter-modules en M12) | ❌ Absent de la Banque | ⚪ Pas de micro prévu | n/a |

**Réponse directe à la question "le même mot possède-t-il plusieurs orthographes ?"** : oui, dans 4 cas précis identifiés à l'Étape 2 (الأبتر ×3 graphies, قِطَّة en genre, إِبْرِيق en piège, خَلَقَ en racine).

---

# ÉTAPE 5 — BANQUE DES MOTS (`bank.html` / `wordsDatabase`)

## Mots déjà présents dans la Banque
**259 entrées** (28 lettres + 231 mots), consultables/recherchables via `bank.html`.

## MOTS À AJOUTER À LA BANQUE DES MOTS

Les jeux de données suivants sont utilisés dans l'application mais **n'existent pas** dans `wordsDatabase` / `bank.html` :

### Depuis Module 4
- **`tanwinData`** (30 mots) — *note : ces mots existent dans `database.js` mais comme tableau séparé `tanwinData`, pas dans `wordsDatabase` lui-même* → à intégrer si l'on veut qu'ils soient consultables dans la Banque.
- **`qatData`** (30 mots) — même remarque.
- **`waslData`** (30 mots) — même remarque, et actuellement sans quiz actif l'utilisant dans le grid des 36.
- **Quiz 3-M4 "Hamza complet"** (30 mots) — **totalement absents de `database.js`**, à ajouter en priorité : سُئِلَ، مُؤْمِن، يَأْكُل، سُؤَال، بِئْر، ذِئْب، شَيْء، قَرَأَ، شَاطِئ، مَاء، أَسَد*، إِسْلَام، أُمّ، ٱسْم، ٱلْبَيْت*، ٱكْتُبْ، ٱفْتَحْ، ٱجْلِسْ، رَأْس، فَأْس، مُؤَسَّسَة، بَدَأَ، جُزْء، هُدُوء، سَمَاء*، قَارِئ، إِبْرِيق*، ٱبْن، ٱشْرَبْ، كَأْس *(\* déjà présents ailleurs sous une forme proche)*

### Depuis Module 5
- **Shamsiyya** (29 mots, `quiz1-m5`/`quiz2-m5`) : الشَّمْس، التُّفَّاح، الثَّلْج، الدِّيك، الذَّهَب، الرَّجُل، الزَّيْت، السَّمَك، الشَّجَرَة، الصَّقْر، الضَّوْء، الطَّيْر، الظِّلّ، اللَّيْل، النَّجْم، التَّاجِر، الثَّعْلَب، الدَّرْس، الذِّئْب، الرَّأْس، الزَّرَافَة، السَّيَّارَة، الشَّارِع، الصَّدِيق، الضِّفْدَع، الطَّالِب، الظَّرْف، اللِّسَان، النَّهْر
- **Shadda** (29 mots, `quiz3-m5`) : مُعَلِّم، سَيَّارَة، قِطَّة، تُفَّاح، سُلَّم، رُمَّان، سُكَّر، دَرَّاجَة، سَبُّورَة، رَسَّام، نَجَّار، خَبَّاز، شَمَّام، صَيَّاد، جَدَّة، جَدّ، بَطَّة، مُدَرِّس، أُمِّي، دُكَّان، طَبَّاخ، فَلَّاح، بَقَّال، سَيِّد، مِقَصّ، سِكِّين، مِخَدَّة، دَبُّوس، نَظَّارَة

### Depuis Module 6 (Leçon 6)
- **86 mots thématiques** (Jours, Horaires, Famille, Nombres, Transports, Couleurs) — liste complète disponible dans `lecon6.html` → `THEMES`, à intégrer intégralement.

## Mots utilisés à plusieurs endroits mais n'existant qu'une fois
- Les mots Modoud de Module 3 (`alphabetData`) existent en 2 exemplaires strictement identiques (`database.js` + copie intégrale dans `quiz1-m3.html`) — ce n'est pas un manque, mais une **duplication de code** à surveiller pour la maintenance future.
- Le vocabulaire Leçon 6 existe en 3 exemplaires imbriqués (86 dans la leçon → 59 dans Quiz 1 → 52 dans Quiz 2, chaque niveau étant un sous-ensemble fidèle du précédent).

---

# ÉTAPE 6 — AUDIT PÉDAGOGIQUE DES AUDIOS

Rappel du principe demandé : **si un micro est visible, un audio DOIT exister.** Les modules sans micro prévu (7 à 12) ne sont pas comptés comme anomalie.

| Catégorie | Micro affiché | Audio requis | Audio présent | Statut |
|---|---|---|---|---|
| 28 lettres (M1) | ✅ | ✅ | ✅ | Conforme |
| Harakat (M2, 112 formes) | ✅ | ✅ | ⚠️ 6 fichiers cassés | À corriger |
| Modoud (M3, 84 formes) | ✅ | ✅ | ⚠️ 1 cassé (casse), 1 manquant (`ghil.mp3`, `haqibah.mp3`) | À corriger |
| Tanwin (M4 Q1, 30 mots) | ✅ | ✅ | ❌ Dossier entier absent | **Critique** |
| Hamzat al-Qat' (M4 Q2, 30 mots) | ✅ | ✅ | ❌ Dossier entier absent | **Critique** |
| Hamza complet (M4 Q3, 30 mots) | ✅ | ✅ | ❌ Dossier entier absent | **Critique** |
| Shamsiyya (M5 Q1+Q2, 29 mots ×2) | ✅ | ✅ | ❌ Dossier entier absent | **Critique** |
| Shadda (M5 Q3, 29 mots) | ✅ | ✅ | ❌ Dossier entier absent | **Critique** |
| Vocabulaire M6 (59+52+30 mots) | ✅ | ✅ | ❌ Dossier entier absent | **Critique** |
| Mabrouk (36 quiz) | n/a (déclenchement automatique) | ✅ | ✅ (corrigé lors d'une passe précédente) | Conforme |
| Modules 7-12 (grammaire/tajwid) | ⚪ Micro décoratif présent sur 3 leçons (7, 11, 12) mais **non prévu comme fonctionnalité active** | — | — | Non traité comme anomalie, conformément à la consigne |
| Leçon 4 (20 boutons micro) | ✅ | ✅ | ❌ Chemin vide (`""`) — jamais renseigné | **Critique** |
| Leçon 6 (1 bouton) | ✅ (visuel) | — | — | Bouton décoratif, aucune logique câblée |

**Audios jamais utilisés** : le dossier `audio copy/` (83 fichiers) est une copie complète et totalement orpheline — aucune référence nulle part dans le code.

---

# ÉTAPE 7 — LES 36 QUIZ

Synthèse (le détail lettre/mot/phrase par quiz est disponible dans les extractions de l'audit — reproduit ici en version consolidée pour rester lisible) :

| Module | Quiz 1 | Quiz 2 | Quiz 3 | Cohérence avec la leçon |
|---|---|---|---|---|
| 1 | 28 lettres | 28 lettres | 28 lettres | ✅ Parfaite |
| 2 | 112 harakat | Mots 2 lettres (Banque) | Mots 3-4 lettres (Banque) | ✅ Parfaite (harakat) |
| 3 | 84 Modoud | Mots Modoud 3L (Banque) | Mots Modoud 4+L (Banque) | ✅ Parfaite ; **Quiz 2-M2 et Quiz 2-M3 utilisent le même filtre — quiz dupliqué** |
| 4 | 30 Tanwin | 30 Hamzat al-Qat' | 30 Hamza complet | ✅ Vocabulaire cohérent ; ❌ audio 100% mort ; ⚠️ Quiz 2 mal étiqueté "Module 5" en interne |
| 5 | 29 Shamsiyya | **29 Shamsiyya (copie du Quiz 1)** | 29 Shadda | ❌ **Pas de quiz Qamariyya malgré la leçon** |
| 6 | 59 mots thématiques | 52 mots thématiques | 30 items "يوم عزيز" | ✅ Vocabulaire fidèle ; ⚠️ 3 phrases de compréhension modifiées vs la leçon (Quiz 3) |
| 7 | Analyse linguistique Kawthar/Ikhlas | Sens/traduction | Reconstruction de versets | ⚠️ mot الأبتر à 2 graphies différentes selon le quiz |
| 8 | Reconnaissance du nom | Prépositions (phrases) | Prépositions (trous) | ✅ Vocabulaire cohérent, nouveau matériel volontaire |
| 9 | Phrase nominale | Démonstratifs | Démonstratifs + accord | ✅ Parfaite |
| 10 | Identification verbe | Classification temps | Trous (temps) | ✅ Parfaite |
| 11 | Phrase verbale | Identification fâ'il | Fâ'il/Maf'ûl/accord | ✅ Parfaite |
| 12 | Révision multi-module | Reconstruction Al-Fatiha | Racines multi-module | ✅ La plus cohérente de toutes (pièges Warsh corrects) |

---

# ÉTAPE 8 — LES 12 LEÇONS

| Leçon | Lettres | Mots | Phrases | Audios | Cohérence Quiz | Cohérence Banque | Cohérence Kalicards |
|---|---|---|---|---|---|---|---|
| 1 | 28 | — | — | 28/28 ✅ | ✅ | ✅ | ✅ |
| 2 | 28 (×4 harakat) | — | — | 106/112 ⚠️ | ✅ | n/a | ✅ |
| 3 | 28 (×3 Modoud) | — | — | ⚠️ 1 casse, 1 manquant | ✅ | n/a | ✅ |
| 4 | — | 30 Tanwin + règles Hamza | — | ❌ 0 (dossier absent) | ✅ vocabulaire | ❌ absent | ❌ audio mort |
| 5 | — | Shamsiyya/Qamariyya/Shadda (exemples) | — | ❌ 0 (dossiers absents) | ⚠️ Qamariyya non testée | ❌ absent | ❌ audio mort |
| 6 | — | 86 thématiques | 12 (texte "يوم عزيز") | ❌ 0 (dossier absent) | ✅ (avec 3 écarts Quiz 3) | ❌ absent | ❌ audio mort |
| 7 | — | vocabulaire sourates | Versets Kawthar/Ikhlas | ⚪ non prévu | ⚠️ الأبتر incohérent | ❌ absent | n/a |
| 8 | — | noms, prépositions | Texte "zoo" | ⚪ non prévu | ✅ | ❌ absent | n/a |
| 9 | — | démonstratifs | Texte "chambre" | ⚪ non prévu | ✅ | ❌ absent | n/a |
| 10 | — | verbes, racines | Texte "repas" | ⚪ non prévu | ✅ | ❌ absent | n/a |
| 11 | — | grammaire VSO | Versets Falaq/Nas | ⚪ non prévu | ✅ (2 bugs internes) | ❌ absent | n/a |
| 12 | — | iʿrāb | Sourate Al-Fatiha | ⚪ non prévu | ✅ | ❌ absent | n/a |

---

# ÉTAPE 9 — RAPPORT DES INCOHÉRENCES (classé par priorité)

## 🔴 CRITIQUE

1. **Aucun quiz pour Al-Qamariyya** — `quiz2-m5.html` est une copie conforme de `quiz1-m5.html` (Shamsiyya) au lieu de tester la Qamariyya enseignée en Leçon 5.
2. **6 dossiers audio entiers manquants** (`audio/quiz-tanwin/`, `audio/quiz-qat/`, `audio/quiz3/`, `audio/shamsiyya/`, `audio/shadda/`, `audio/m6/`) — rendent muets 9 quiz complets (Modules 4, 5, 6) et 20 boutons de la Leçon 4.
3. **Mot الأبتر avec 3 orthographes différentes** dans le même module (Leçon 7 vs Quiz 1-M7 vs Quiz 2/3-M7).
4. **Confusion possible صَيْف/سَيْف** — deux mots potentiellement différents partageant le même fichier audio (`sayf.mp3`) dans `wordsDatabase` (ids 84 et 407).
5. **Quiz 2-M4 mal étiqueté "Module 5"** en interne (identifiant, clé de sauvegarde, texte du certificat) alors que le fichier/titre affichent "Module 4".

## 🟠 IMPORTANT

6. Incohérence de genre : قِطَّة traduite "Chat/Gato" (masculin) en Leçon 5, "Une chatte/Una gata" (féminin, correct) en Quiz 3-M5.
7. Piège إِبْرِيق malformé (double diacritique `أَِبْرِيق`) dans `qatData`/Quiz 2-M4, alors que Quiz 3-M4 utilise la forme correcte `أَبْرِيق` pour le même mot.
8. 3 phrases de compréhension du Quiz 3-M6 divergent du texte original de la Leçon 6 (préfixe لِ manquant, substitution "à midi"→"à l'heure du Dhohr" créant une redondance, clause "il lit le Coran" supprimée).
9. Racine de خَلَقَ notée dans le mauvais ordre (`ق-ل-خ` au lieu de `خ-ل-ق`) à un endroit de la Leçon 11.
10. Caractère corrompu dans la traduction française du verset 5 d'Al-Falaq (Leçon 11).
11. Quiz 2-M2 et Quiz 2-M3 utilisent exactement le même filtre de mots (`id 101-148`) — contenu dupliqué sous deux numéros de module différents.
12. 5 mots dupliqués dans `wordsDatabase` (بَاب، مِفْتَاح، فِيل، سُوق) avec deux ids et deux chemins audio distincts pour le même mot.

## 🟡 MINEUR

13. Traduction espagnole erronée "El livre" (mot français) au lieu de "El libro" (Leçon 5, exemple Qamariyya).
14. Conventions de capitalisation espagnole différentes entre Leçon 6 ("El Amanecer") et Quiz 1-M6 ("El amanecer") — mêmes mots, cosmétique uniquement.
15. Nouveau vocabulaire introduit uniquement dans un quiz sans être enseigné dans la leçon correspondante (ex. يَأْكُلُ en Quiz 3-M6, absent de la Leçon 6 qui n'utilise que le pluriel).
16. Dossier `audio copy/` (83 fichiers) entièrement orphelin, jamais référencé.
17. `waslData` (30 mots, Hamzat al-Wasl) présent dans `database.js` mais sans quiz actif dans le grid des 36 pour l'exploiter.

---

# ÉTAPE 10 — PLAN DE CORRECTION RECOMMANDÉ (ordre uniquement — aucune exécution)

**Étape 1 — Uniformiser toutes les lettres.**
Déjà conforme ; vérification finale à faire uniquement après les étapes suivantes (pour s'assurer qu'aucune correction ultérieure ne casse cette cohérence).

**Étape 2 — Corriger les 4 incohérences d'orthographe/traduction critiques et importantes.**
الأبتر (choisir UNE graphie officielle Warsh), قِطَّة (corriger le genre en Leçon 5), خَلَقَ (corriger la racine en Leçon 11), "El livre"→"El libro".

**Étape 3 — Trancher le cas Quiz 2-M5 (Qamariyya manquante).**
Décider : construire un vrai quiz Qamariyya, ou réattribuer Quiz 2-M5 différemment. Ne rien enregistrer avant cette décision.

**Étape 4 — Compléter la Banque des mots (`wordsDatabase`).**
Intégrer les jeux de données actuellement hors-Banque : Tanwin (30), Qat (30), Wasl (30), Hamza complet M4-Q3 (30), Shamsiyya (29), Shadda (29), vocabulaire Leçon 6 (86) — soit ~264 mots à ajouter.

**Étape 5 — Dédupliquer `wordsDatabase`.**
Fusionner les 4 paires de mots dupliqués (بَاب، مِفْتَاح، فِيل، سُوق) ; vérifier en priorité le cas صَيْف/سَيْف avant toute fusion.

**Étape 6 — Créer les audios manquants.**
Enregistrer les 6 dossiers entiers manquants (~230 fichiers) + les 20 audios de la Leçon 4 + les 2 mots isolés (`ghil.mp3`, `haqibah.mp3`) + corriger les 3 fichiers harakat mal nommés sur disque.

**Étape 7 — Relier les nouveaux audios.**
Une fois enregistrés, relier chaque chemin dans le code correspondant (déjà cartographié précisément dans l'audit audio précédent).

**Étape 8 — Corriger l'étiquetage interne Quiz 2-M4** ("Module 5" → "Module 4" dans l'identifiant, la clé de sauvegarde, le certificat).

**Étape 9 — Revoir les 3 phrases modifiées du Quiz 3-M6** pour les réaligner sur le texte original de la Leçon 6 (ou documenter que la modification est volontaire).

**Étape 10 — Tester.**
Rejouer les 36 quiz et les 12 leçons après corrections, en particulier vérifier qu'aucun audio n'a été cassé par la correction des chemins.

---

# RAPPORT FINAL

| # | Indicateur | Valeur |
|---|---|---|
| 1 | Nombre total de lettres | **28** |
| 2 | Nombre total de mots (Banque + hors-Banque, ordre de grandeur) | **≈ 610** — 259 dans la Banque (`wordsDatabase`) + ~264 hors-Banque (Tanwin/Qat/Wasl/Hamza complet/Shamsiyya/Shadda/Vocabulaire M6) + 84 formes Modoud + 112 formes Harakat *(ces deux dernières catégories sont des formes de lettres, comptées séparément du vocabulaire)* |
| 3 | Nombre total de phrases | **≥ 12 phrases de lecture recensées précisément** (texte "يوم عزيز" M6, "zoo" M8, "chambre" M9, "repas" M10) **+ un corpus important de versets coraniques et exemples grammaticaux dans les Modules 7-12, non dénombré exhaustivement dans cette passe** (échantillon représentatif fourni, dénombrement complet possible sur demande) |
| 4 | Nombre total d'audios (fichiers sur disque) | **677** (593 dans `audio/`, 83 dans `audio copy/` [orphelin], 1 `mabruk.mp3`) |
| 5 | Nombre de mots présents dans la Banque | **259** (28 lettres + 231 mots) |
| 6 | Nombre de mots manquants dans la Banque | **≈ 264** (détail Étape 5) |
| 7 | Nombre d'orthographes incohérentes | **4 confirmées** (الأبتر, قِطَّة-genre, إِبْرِيق-piège, خَلَقَ-racine) + **5 doublons internes** à la Banque |
| 8 | Nombre d'audios manquants | **6 dossiers entiers** (~230 fichiers estimés) + **20 boutons à chemin vide** (Leçon 4) + **3 fichiers mal nommés** + **2 mots isolés manquants** |
| 9 | Nombre de micros sans audio | **≥ 9 quiz complets** (tous les boutons de M4-Q1/Q2/Q3, M5-Q1/Q2/Q3, M6-Q1/Q2/Q3) + **20 boutons Leçon 4** + **1 bouton décoratif Leçon 6** |
| 10 | Nombre de doublons | **5 mots dupliqués dans la Banque** + **1 quiz dupliqué** (Quiz 2-M5 = copie de Quiz 1-M5) + **1 filtre dupliqué** (Quiz 2-M2 = Quiz 2-M3) + **dossier `audio copy/` entier (83 fichiers)** |
| 11 | Liste complète des mots à ajouter à la Banque | Voir Étape 5 (listes complètes : Hamza complet 30, Shamsiyya 29, Shadda 29, Vocabulaire M6 86, + Tanwin/Qat/Wasl 90 déjà en tableaux séparés à fusionner) |
| 12 | Liste complète des mots à uniformiser | الأبتر (3 graphies), قِطَّة (genre), إِبْرِيق (piège), خَلَقَ (racine), بَاب/مِفْتَاح/فِيل/سُوق (doublons Banque), صَيْف/سَيْف (à vérifier en priorité) |
| 13 | Liste complète des audios à enregistrer | `audio/quiz-tanwin/*` (30 mots ×3), `audio/quiz-qat/*` (30), `audio/quiz3/*` (30), `audio/shamsiyya/*` (29), `audio/shadda/*` (29), `audio/m6/*` (~86), 20 audios Leçon 4, `zay-dammah/kasrah/soukoun.mp3`, `ghil.mp3`, `haqibah.mp3` |
| 14 | Plan de correction recommandé | Voir Étape 10 (10 étapes ordonnées) |

---

## Note finale

Cet audit établit les fondations du **référentiel pédagogique officiel** de Dar Al-Kalimah. Les catégories fondamentales (28 lettres, 112 harakat, 84 formes de Madd) sont déjà à 100% de cohérence et peuvent servir immédiatement de référence figée. Les zones nécessitant une décision humaine avant toute uniformisation sont clairement isolées (Étape 9, priorité critique) : le cas Qamariyya, le doublon صَيْف/سَيْف, et le choix de la graphie officielle pour الأبتر (Warsh sans hamza, ou forme standard avec hamza).

**Aucune modification, aucun commit, aucun push effectué. Ce document est le seul fichier créé.**
