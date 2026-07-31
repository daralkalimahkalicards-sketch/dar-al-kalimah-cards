# GUIDE D'ENREGISTREMENT OFFICIEL — MODULE 12

Sourate Al-Fatiha (سُورَةُ الْفَاتِحَة، رواية ورش) + Lecture Structurée mot-par-mot (قِرَاءَةٌ مُهَيْكَلَةٌ).

Convention appliquée : voir `AUDIO_NAMING_CONVENTION.md`. Dossier dédié `audio/sourates/`.

Fichiers concernés : `lecon12.html` (seul fichier du module portant de l'audio), `quiz1-m12.html`, `quiz2-m12.html`, `quiz3-m12.html` (aucun audio propre — quiz textuels de révision globale/racines, sans bouton micro par conception).

**Important — enregistrement coranique** : à réciter par un lecteur qualifié en riwaya Warsh 'an Nafi', avec validation avant mise en ligne. Aucune synthèse vocale.

**Correction appliquée cette session** : le numéro de sourate affiché (`surahNum`) était `"٠١"` (avec un zéro superflu) — corrigé en `"١"` pour rester cohérent avec le format sans padding utilisé pour toutes les autres sourates du projet (١٠٨, ١١٢, etc.).

---

## Leçon 12 — `lecon12.html`

### Vue Flashcards (آيَةً بِآيَةٍ) — audio par verset

Le bouton micro `#btn-audio` était présent dans le DOM mais **totalement muet (aucun listener)** avant cette phase — corrigé cette session (même bug que Leçons 7 et 11).

| # | Verset | Arabe (exact) | Nom fichier | Chemin exact | Réutilisation |
|---|--------|----------------|-------------|---------------|-----------------|
| 1 | Basmalah | بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ | basmalah.mp3 | audio/sourates/basmalah.mp3 | **Réutilisation du fichier déjà requis pour Module 7 et Leçon 11** |
| 2 | v1 | الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿١﴾ | fatiha-v1.mp3 | audio/sourates/fatiha-v1.mp3 | — |
| 3 | v2 | الرَّحْمَنِ الرَّحِيمِ ﴿٢﴾ | fatiha-v2.mp3 | audio/sourates/fatiha-v2.mp3 | — |
| 4 | v3 | مَلِكِ يَوْمِ الدِّينِ ﴿٣﴾ | fatiha-v3.mp3 | audio/sourates/fatiha-v3.mp3 | — |
| 5 | v4 | إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٤﴾ | fatiha-v4.mp3 | audio/sourates/fatiha-v4.mp3 | — |
| 6 | v5 | اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٥﴾ | fatiha-v5.mp3 | audio/sourates/fatiha-v5.mp3 | — |
| 7 | v6-7 (regroupés dans une seule flashcard) | صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٦﴾ | fatiha-v6.mp3 | audio/sourates/fatiha-v6.mp3 | — (couvre les 2 derniers versets de la sourate, présentés en une seule carte) |

### Vue Tilawa (تِلَاوَةُ السُّورَةِ) — récitation complète

Le bouton micro `#btn-tilawa-audio` était présent (avec `event.stopPropagation()`) mais **aucun listener de lecture** — corrigé cette session.

| # | Nom fichier | Chemin exact |
|---|-------------|---------------|
| 8 | fatiha-complete.mp3 (7 versets, Basmalah incluse) | audio/sourates/fatiha-complete.mp3 |

**Total Leçon 12 : 7 sons uniques à enregistrer (basmalah déjà comptée dans les totaux Module 7 / Leçon 11, réutilisée ici).**

### Vue Muhaykalah (قِرَاءَةٌ مُهَيْكَلَةٌ) — analyse mot par mot

Aucun bouton micro dans cette vue : c'est un outil d'analyse grammaticale interactive (cliquer un mot affiche sa racine, son gabarit et son i'râb), sans lecture audio par conception — l'élève lit le texte affiché directement, déjà appris avec sa prononciation dans les vues Flashcards/Tilawa ci-dessus.

### Effet sonore commun
`mabruk.mp3` (racine du projet) — déjà présent, réutilisé dans les 3 quiz via `DAKAudio.playEffect("mabruk.mp3")`.

---

## Quiz 1, 2, 3 — Module 12

Aucun bouton micro : quiz textuels de révision globale (تمييز فعل/اسم/جملة/حرف) et d'analyse des racines trilitères (quiz 3 couvre le vocabulaire coranique de tous les Modules 7-12 + quelques mots d'autres modules). Seul `mabruk.mp3` (déjà existant) y est joué en fin de quiz.

---

## RÉCAPITULATIF MODULE 12

| Fichier | Sons uniques | Déjà présents (réutilisation) | À enregistrer |
|---------|-------------|-----------------------------------|-----------------|
| lecon12.html | 8 | 1 (basmalah, déjà requise Module 7 / Leçon 11) | 7 |
| quiz1/2/3-m12.html | 0 (mabruk réutilisé) | — | 0 |
| **TOTAL MODULE 12** | **8** | **1** | **7** |

## Checklist par audio (à dupliquer pour chacun des 7 fichiers à enregistrer)
☐ À enregistrer ☐ Enregistré ☐ Exporté ☐ Déposé GitHub ☐ Détecté ☐ Fonctionnel
