# GUIDE D'ENREGISTREMENT OFFICIEL — MODULE 7

Sourates courtes (Al-Kawthar et Al-Ikhlas, lecture Warsh). Récitation coranique — dossier dédié `audio/sourates/` (voir `AUDIO_NAMING_CONVENTION.md`).

Fichiers concernés : `lecon7.html` (seul fichier du module portant de l'audio), `quiz1-m7.html`, `quiz2-m7.html`, `quiz3-m7.html` (aucun audio propre — quiz textuels de reconnaissance/compréhension/reconstruction, sans bouton micro par conception).

**Important — enregistrement coranique** : ces fichiers doivent être récités par un lecteur qualifié en riwaya Warsh 'an Nafi', idéalement avec validation d'un enseignant/imam avant mise en ligne. Aucun enregistrement de synthèse vocale ne doit être utilisé pour du contenu coranique.

---

## Leçon 7 — `lecon7.html`

### Vue Flashcards (آيَةً بِآيَةٍ) — audio par verset

Le bouton micro `#btn-audio` était présent dans le DOM mais **totalement muet (aucun listener)** avant cette phase — corrigé cette session.

| # | Sourate | Verset | Arabe (exact) | Nom fichier | Chemin exact | Réutilisation |
|---|---------|--------|----------------|-------------|---------------|-----------------|
| 1 | Kawthar + Ikhlas | Basmalah | بِسْمِ ٱللَّهِ ٱلرَّحْمَنِ ٱلرَّحِيمِ | basmalah.mp3 | audio/sourates/basmalah.mp3 | **Un seul enregistrement, réutilisé pour les 2 sourates** (texte identique) |
| 2 | Al-Kawthar | v1 | إِنَّا أَعْطَيْنَاكَ ٱلْكَوْثَرَ ﴿١﴾ | kawthar-v1.mp3 | audio/sourates/kawthar-v1.mp3 | — |
| 3 | Al-Kawthar | v2 | فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ | kawthar-v2.mp3 | audio/sourates/kawthar-v2.mp3 | — |
| 4 | Al-Kawthar | v3 | اِنَّ شَانِئَكَ هُوَ ٱلاَبْتَرُ ﴿٣﴾ | kawthar-v3.mp3 | audio/sourates/kawthar-v3.mp3 | — |
| 5 | Al-Ikhlas | v1 | قُلْ هُوَ ٱللَّهُ أَحَدٌ ﴿١﴾ | ikhlas-v1.mp3 | audio/sourates/ikhlas-v1.mp3 | — |
| 6 | Al-Ikhlas | v2 | ٱللَّهُ ٱلصَّمَدُ ﴿٢﴾ | ikhlas-v2.mp3 | audio/sourates/ikhlas-v2.mp3 | — |
| 7 | Al-Ikhlas | v3 | لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ | ikhlas-v3.mp3 | audio/sourates/ikhlas-v3.mp3 | — |
| 8 | Al-Ikhlas | v4 | وَلَمْ يَكُن لَّهُ كُفُؤًا أَحَدٌ ﴿٤﴾ | ikhlas-v4.mp3 | audio/sourates/ikhlas-v4.mp3 | — |

### Vue Tilawa (تِلَاوَةُ السُّورَةِ) — récitation complète

Le bouton micro `#btn-tilawa-audio` était présent dans le DOM avec `event.stopPropagation()` (pour ne pas déclencher le flip de carte) mais **aucun listener de lecture** — corrigé cette session.

| # | Sourate | Nom fichier | Chemin exact |
|---|---------|-------------|---------------|
| 9 | Al-Kawthar (3 versets, Basmalah incluse) | kawthar-complete.mp3 | audio/sourates/kawthar-complete.mp3 |
| 10 | Al-Ikhlas (4 versets, Basmalah incluse) | ikhlas-complete.mp3 | audio/sourates/ikhlas-complete.mp3 |

**Total Leçon 7 : 10 sons uniques, tous à enregistrer.**

### Effet sonore commun
`mabruk.mp3` (racine du projet) — déjà présent, réutilisé sans modification dans les 3 quiz via `DAKAudio.playEffect("mabruk.mp3")`.

---

## Quiz 1, 2, 3 — Module 7

Aucun bouton micro dans ces 3 fichiers : ce sont des quiz textuels (reconnaissance de diacritiques, compréhension du sens, reconstruction de versets) — l'élève lit/manipule le texte arabe directement, sans support audio, choix pédagogique cohérent avec leur nature. Seul `mabruk.mp3` (déjà existant) y est joué en fin de quiz.

---

## RÉCAPITULATIF MODULE 7

| Fichier | Sons uniques | Déjà présents | À enregistrer |
|---------|-------------|-----------------|-----------------|
| lecon7.html | 10 | 0 | 10 |
| quiz1/2/3-m7.html | 0 (mabruk réutilisé) | — | 0 |
| **TOTAL MODULE 7** | **10** | **0** | **10** |

## Checklist par audio (à dupliquer pour chacun des 10 fichiers à enregistrer)
☐ À enregistrer ☐ Enregistré ☐ Exporté ☐ Déposé GitHub ☐ Détecté ☐ Fonctionnel
