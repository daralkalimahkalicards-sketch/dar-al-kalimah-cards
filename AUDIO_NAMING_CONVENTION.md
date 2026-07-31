# DAR AL-KALIMAH — CONVENTION OFFICIELLE ET DÉFINITIVE DES NOMS DE FICHIERS AUDIO

**Statut : DÉFINITIF, verrouillé lors de la revue finale du Chantier 1.** Cette convention ne changera plus. Tous les chemins du code (Modules 2 à 12) et tous les guides `MODULE_XX_AUDIO_GUIDE.md` / `MASTER_AUDIO_RECORDING_GUIDE.md` / `MASTER_AUDIO_INDEX.md` s'y conforment strictement. Enregistrez chaque fichier exactement avec le nom indiqué.

## Audit de conformité aux principes (revue finale)

Avant de verrouiller cette convention, elle a été relue intégralement et vérifiée contre 4 principes non négociables :

| Principe | Vérifié | Constat |
|---|---|---|
| **Simple** | ✅ | Chaque nom est un mot ou une courte séquence translittérée (`ba.mp3`, `bab.mp3`, `al-kawthar` style `kawthar-v1.mp3`) — jamais de code opaque |
| **Lisible** | ✅ | Aucun identifiant technique (pas de `m02-l01-audio-001.mp3`) — un humain reconnaît le mot arabe rien qu'en lisant le nom du fichier |
| **Pérenne** | ✅ | Aucun nom ne référence un numéro de module, de leçon ou de quiz — un même fichier reste valide même si la leçon qui l'utilise est déplacée ou renumérotée |
| **Indépendante des modules/leçons/quiz** | ✅ | Le nom décrit uniquement le **contenu sonore** (le mot, la lettre, le verset) — jamais l'écran qui le joue |

**Corrections apportées lors de cette revue** (avant tout enregistrement — coût nul) :
- Trois dossiers réellement utilisés dans le code (`audio/quiz3/`, `audio/module5/`, ainsi que `audio/shamsiyya/` et `audio/shadda/` déjà conformes) n'avaient jamais été ajoutés à la table officielle ci-dessous — corrigé.
- `audio/quiz3/` (Module 4, Quiz 3) a été renommé `audio/quiz-hamza/` : "quiz3" est un numéro d'écran, pas une description du contenu — exactement le type de nom que cette convention refuse. Aligné sur ses dossiers-frères `audio/quiz-tanwin/` et `audio/quiz-qat/`, déjà conformes et déjà câblés dans `database.js` (non renommés, changement plus risqué pour un gain nul).
- `audio/module5/` (Module 5, Quiz 2 — Al-Qamariyya) a été renommé `audio/qamariyya/`, pour la même raison et pour rester cohérent avec ses dossiers-frères `audio/shamsiyya/` et `audio/shadda/` du même module.
- La réservation `audio/quiz-wasl/` a été retirée : elle anticipait un contenu "Hamzat Al-Wasl" pour le Module 5, qui s'est avéré porter sur un tout autre sujet (Ash-Shamsiyya / Al-Qamariyya / La Shadda). Aucun module actuel ne porte ce nom ; si un tel contenu apparaît un jour, il recevra son propre dossier `audio/quiz-{sujet}/` en suivant le même principe.

Le style illustratif donné en amont de cette phase (`ba.mp3`, `bab.mp3`, `al-kawthar-verse-1.mp3`…) a été comparé à la convention déjà en vigueur (`ba-fathah.mp3`, `bab.mp3`, `kawthar-v1.mp3`…) : les deux styles respectent identiquement les 4 principes ci-dessus. Le suffixe verset/complet (`-v{n}` / `-complete`) et les slugs de sourates sans article (`kawthar`, `fatiha`…) sont donc **conservés tels quels** — aucun changement nécessaire, aucun fichier de leçon (7, 11, 12) à retoucher.

---

## Règles générales

- Toujours en minuscules.
- Jamais d'espace (utiliser un tiret `-` si besoin de séparer).
- Jamais d'accent, de lettre arabe, ni de caractère spécial dans le nom de fichier — translittération latine simple uniquement.
- Extension `.mp3` toujours.
- Un même contenu sonore = un seul fichier, quel que soit le nombre d'endroits où il est utilisé (voir "Réutilisation" dans chaque guide).

## Dossiers

| Dossier | Contenu |
|---|---|
| `audio/` (racine) | Les 28 lettres seules (Module 1, déjà enregistrées, jamais renommées) + quelques mots historiques du Module 1 |
| `audio/harakat/` | Lettre + harakah courte (fathah/dammah/kasrah/soukoun) — Module 2 |
| `audio/modoud/` | Lettre + madd (alif/waw/yaa long) — Module 3 |
| `audio/module2/` | Mots de vocabulaire spécifiques au Module 2 |
| `audio/module3/` | Mots de vocabulaire spécifiques au Module 3 (mots avec Modoud) |
| `audio/moduleN/` | Mots de vocabulaire spécifiques au Module N (N = 4 à 12), un dossier par module |
| `audio/quiz-tanwin/`, `audio/quiz-qat/` | Dossiers déjà prévus par `database.js` pour les Quiz 1/2 du Module 4 (tanwin, hamzat al-qat') — conservés tels quels |
| `audio/quiz-hamza/` | Module 4, Quiz 3 (Hamza complet — tous types) — renommé depuis `audio/quiz3/` lors de la revue finale |
| `audio/shamsiyya/` | Module 5, Quiz 1 (Ash-Shamsiyya) |
| `audio/qamariyya/` | Module 5, Quiz 2 (Al-Qamariyya) — renommé depuis `audio/module5/` lors de la revue finale |
| `audio/shadda/` | Module 5, Quiz 3 (La Shadda) — dossier également réutilisé par le Module 6 (mots communs) |
| `audio/sourates/` | Textes coraniques complets et versets individuels (Modules 7, 11, 12) |

## Par type d'élément

| Type | Convention | Exemple |
|---|---|---|
| Lettre seule | `NN-lettre.mp3` (déjà fixé Module 1, jamais renommé) | `01-alif.mp3`, `11-zay.mp3` |
| Lettre + harakah | `{lettre}-{harakah}.mp3` | `zay-dammah.mp3`, `baa-fathah.mp3` |
| Lettre + madd (Modoud) | `{lettre}-{forme}.mp3` (`aa`\|`uu`\|`ii`) | `baa-aa.mp3`, `siin-uu.mp3` |
| Mot (vocabulaire) | `{translitération-simple}.mp3` | `kataba.mp3`, `maktab.mp3` |
| Syllabe isolée (si un module l'exige) | `{syllabe-translittérée}.mp3` | `ka.mp3`, `tab.mp3` |
| Phrase complète | `{slug-descriptif}.mp3` (3-5 mots clés translittérés, séparés par des tirets) | `phrase-jomla-01.mp3` |
| Verset coranique | `{sourate-slug}-v{numéro}.mp3` | `kawthar-v1.mp3`, `ikhlas-v2.mp3`, `falaq-v3.mp3` |
| Sourate complète | `{sourate-slug}-complete.mp3` | `kawthar-complete.mp3`, `fatiha-complete.mp3` |

## Slugs officiels des sourates concernées (Modules 7, 11, 12)

| Sourate | Slug |
|---|---|
| Al-Kawthar | `kawthar` |
| Al-Ikhlas | `ikhlas` |
| Al-Falaq | `falaq` |
| An-Nas | `nas` |
| Al-Fatiha | `fatiha` |

## Réutilisation — règle d'or

Avant d'enregistrer quoi que ce soit, chaque guide de module vérifie si le même contenu existe déjà ailleurs (Module 1, un autre module, un autre quiz). Si oui : le guide indique "Réutilisation — ne pas ré-enregistrer" et donne le chemin du fichier existant à référencer. Un contenu sonore identique n'est **jamais** enregistré deux fois.

## Composant technique associé

Tous les chemins de ce document sont ceux que consomme le composant audio unique [audio-controller.js](audio-controller.js) / [audio-controller.css](audio-controller.css) — voir ce fichier pour le comportement (état repos/lecture, toast, exclusivité).
