# BANK_LEGACY_DUPLICATES.md

## Les 4 doublons hérités — analysé, fusionné sans régression

Avant toute suppression, j'ai retracé précisément qui dépend de chaque fiche.

### Mécanisme en jeu

Quatre fichiers utilisent `wordsDatabase` non pas en écrivant un chemin audio en dur, mais en filtrant le tableau par **plage d'ID** :

| Fichier | Plage d'ID filtrée |
|---|---|
| `quiz2-m2.html` | 101–148 |
| `quiz3-m2.html` | 130–148 et 209–219 |
| `quiz2-m3.html` | 149–178 |
| `quiz3-m3.html` | 179–208 |

Ce filtrage se fait sur le **champ `id`**, jamais sur la position dans le tableau — supprimer une fiche ailleurs dans le tableau ne modifie donc jamais ce que ces 4 quiz affichent.

### Les 4 doublons

| Mot | Fiche A (Module 1, ids 29-100) | Fiche B (Module 3, ids 149-219) |
|---|---|---|
| بَاب | id 32 — `audio/bab.mp3` | id 149 — `audio/module3/bab.mp3` (dans la plage filtrée par `quiz2-m3.html`) |
| سُوق | id 86 — `audio/suq.mp3` | id 170 — `audio/module3/suq.mp3` (dans la plage filtrée par `quiz2-m3.html`) |
| فِيل | id 83 — `audio/fil.mp3` | id 178 — `audio/module3/fil.mp3` (borne haute de la plage filtrée par `quiz2-m3.html`) |
| مِفْتَاح | id 45 — `audio/miftah.mp3` | id 190 — `audio/module3/miftah.mp3` (dans la plage filtrée par `quiz3-m3.html`) |

### Vérifications effectuées avant toute suppression

1. **Recherche de toute référence aux IDs 32, 45, 83, 86** par filtre de plage, accès par index (`wordsDatabase[32]`) ou comparaison directe (`item.id === 32`) dans les 50 fichiers `lecon*.html`/`quiz*.html` → **aucune trouvée**. Ces IDs tombent hors de toutes les plages filtrées (101-219).
2. **Recherche des chemins audio propres à la Fiche A** (`audio/bab.mp3`, `audio/suq.mp3`, `audio/miftah.mp3`) ailleurs dans le code → **aucune trouvée**.
3. Cas particulier `فِيل`/id 83 : son chemin `audio/fil.mp3` apparaît bien dans `quiz2-m5.html`, mais **cette page ne référence jamais `wordsDatabase`** (0 occurrence) — elle possède ses propres données locales et cite ce nom de fichier par coïncidence, sans aucune dépendance envers la fiche id 83. Sa suppression n'a donc aucun effet sur `quiz2-m5.html`.
4. Confirmation que `bank.html` (recherche, navigation, ouverture de fiche) fonctionne uniquement par comparaison de `id`, jamais par position — donc insensible à la suppression d'entrées ailleurs dans le tableau.

**Conclusion : les 4 fiches A (ids 32, 45, 83, 86) n'étaient consommées par aucun code, ni par ID, ni par chemin.** Elles étaient de pures données orphelines issues de la reconstruction initiale de la Banque.

### Migration effectuée

Les 4 fiches A ont été supprimées de `database.js`. Les 4 fiches B (ids 149, 170, 178, 190), déjà correctement câblées dans `quiz2-m3.html`/`quiz3-m3.html` via le filtre par plage, deviennent les fiches uniques de ces mots dans la Banque — **aucune modification n'a été nécessaire dans les fichiers de quiz eux-mêmes**, aucun changement de comportement, aucune migration vers des listes d'ID explicites n'était requise puisque le filtrage par plage numérique restait déjà stable.

**Résultat** : 0 doublon restant dans la Banque (695 → 691 fiches). Vérifié par comparaison exacte de tous les champs `arabe` du tableau `wordsDatabase`.
