# MODULE 2 — GUIDE D'ENREGISTREMENT AUDIO OFFICIEL

**Statut du module : CERTIFIÉ** (contenu pédagogique vérifié zéro incohérence, voir rapport de certification)
**Généré à partir de** : `lecon2.html`, `quiz1-m2.html`, `quiz2-m2.html`, `quiz3-m2.html`, `database.js` — état réel du disque vérifié fichier par fichier au moment de la génération de ce guide.

**Système audio** : les 4 fichiers de ce module utilisent désormais le composant unique [audio-controller.js](audio-controller.js) / [audio-controller.css](audio-controller.css) — un seul bouton peut être en lecture à la fois, il se remplit de doré pendant la lecture puis revient à son état clair automatiquement (fin, interruption ou échec), avec un toast si le fichier est absent. Comportement strictement identique sur les 4 fichiers. Voir [AUDIO_NAMING_CONVENTION.md](AUDIO_NAMING_CONVENTION.md) pour la convention de nommage définitive appliquée ci-dessous.

**Comment lire ce guide** : chaque élément a un statut. **✅ Déjà présent et fonctionnel** = rien à faire. **❌ À enregistrer** = fichier réellement absent du disque, à créer. Si un mot est réutilisé à plusieurs endroits, il n'apparaît qu'**une seule fois** dans la liste à enregistrer, avec toutes ses réutilisations listées.

---

## PARTIE 1 — LEÇON 2 (Al-Harakat)

140 éléments audio : pour chacune des 28 lettres, 1 audio "lettre seule" + 4 audios "lettre + harakah" (fathah/dammah/kasrah/soukoun).

**Réutilisation** : Quiz 1 du Module 2 (`quiz1-m2.html`) utilise exactement les **mêmes 140 fichiers**, aux mêmes chemins — voir Partie 2, aucun enregistrement supplémentaire n'est nécessaire pour le Quiz 1.

| # | Lettre | Audio principal | Fathah (فَتْحَة) | Dammah (ضَمَّة) | Kasrah (كَسْرَة) | Soukoun (سُكُون) |
|---|---|---|---|---|---|---|
| 1 | أ | `audio/01-alif.mp3` ✅ | أَ → `audio/harakat/alif-fathah.mp3` ✅ | أُ → `audio/harakat/alif-dammah.mp3` ✅ | إِ → `audio/harakat/alif-kasrah.mp3` ✅ | أْ → `audio/harakat/alif-soukoun.mp3` ✅ |
| 2 | ب | `audio/02-baa.mp3` ✅ | بَ → `audio/harakat/baa-fathah.mp3` ✅ | بُ → `audio/harakat/baa-dammah.mp3` ✅ | بِ → `audio/harakat/baa-kasrah.mp3` ✅ | بْ → `audio/harakat/baa-soukoun.mp3` ✅ |
| 3 | ت | `audio/03-taa.mp3` ✅ | تَ → `audio/harakat/taa-fathah.mp3` ✅ | تُ → `audio/harakat/taa-dammah.mp3` ✅ | تِ → `audio/harakat/taa-kasrah.mp3` ✅ | تْ → `audio/harakat/taa-soukoun.mp3` ✅ |
| 4 | ث | `audio/04-thaa.mp3` ✅ | ثَ → `audio/harakat/thaa-fathah.mp3` ✅ *(renommé cette phase, fichier déjà enregistré)* | ثُ → `audio/harakat/thaa-dammah.mp3` ✅ | ثِ → `audio/harakat/thaa-kasrah.mp3` ✅ | ثْ → `audio/harakat/thaa-soukoun.mp3` ✅ |
| 5 | ج | `audio/05-jim.mp3` ✅ | جَ → `audio/harakat/jim-fathah.mp3` ✅ | جُ → `audio/harakat/jim-dammah.mp3` ✅ | جِ → `audio/harakat/jim-kasrah.mp3` ✅ | جْ → `audio/harakat/jim-soukoun.mp3` ✅ |
| 6 | ح | `audio/06-haa.mp3` ✅ | حَ → `audio/harakat/haa-fathah.mp3` ✅ | حُ → `audio/harakat/haa-dammah.mp3` ✅ | حِ → `audio/harakat/haa-kasrah.mp3` ✅ | حْ → `audio/harakat/haa-soukoun.mp3` ✅ |
| 7 | خ | `audio/07-khaa.mp3` ✅ | خَ → `audio/harakat/khaa-fathah.mp3` ✅ | خُ → `audio/harakat/khaa-dammah.mp3` ✅ | خِ → `audio/harakat/khaa-kasrah.mp3` ✅ | خْ → `audio/harakat/khaa-soukoun.mp3` ✅ |
| 8 | د | `audio/08-dal.mp3` ✅ | دَ → `audio/harakat/dal-fathah.mp3` ✅ | دُ → `audio/harakat/dal-dammah.mp3` ✅ | دِ → `audio/harakat/dal-kasrah.mp3` ✅ | دْ → `audio/harakat/dal-soukoun.mp3` ✅ |
| 9 | ذ | `audio/09-dhal.mp3` ✅ | ذَ → `audio/harakat/dhal-fathah.mp3` ✅ | ذُ → `audio/harakat/dhal-dammah.mp3` ✅ | ذِ → `audio/harakat/dhal-kasrah.mp3` ✅ | ذْ → `audio/harakat/dhal-soukoun.mp3` ✅ |
| 10 | ر | `audio/10-raa.mp3` ✅ | رَ → `audio/harakat/raa-fathah.mp3` ✅ | رُ → `audio/harakat/raa-dammah.mp3` ✅ | رِ → `audio/harakat/raa-kasrah.mp3` ✅ | رْ → `audio/harakat/raa-soukoun.mp3` ✅ |
| 11 | ز | `audio/11-zay.mp3` ✅ | زَ → `audio/harakat/zay-fathah.mp3` ✅ | زُ → `audio/harakat/zay-dammah.mp3` **❌ À ENREGISTRER** | زِ → `audio/harakat/zay-kasrah.mp3` **❌ À ENREGISTRER** | زْ → `audio/harakat/zay-soukoun.mp3` **❌ À ENREGISTRER** |
| 12 | س | `audio/12-siin.mp3` ✅ | سَ → `audio/harakat/siin-fathah.mp3` ✅ | سُ → `audio/harakat/siin-dammah.mp3` ✅ | سِ → `audio/harakat/siin-kasrah.mp3` ✅ | سْ → `audio/harakat/siin-soukoun.mp3` ✅ |
| 13 | ش | `audio/13-shiin.mp3` ✅ | شَ → `audio/harakat/shiin-fathah.mp3` ✅ *(renommé cette phase, fichier déjà enregistré)* | شُ → `audio/harakat/shiin-dammah.mp3` ✅ | شِ → `audio/harakat/shiin-kasrah.mp3` ✅ | شْ → `audio/harakat/shiin-soukoun.mp3` ✅ |
| 14 | ص | `audio/14-saad.mp3` ✅ | صَ → `audio/harakat/saad-fathah.mp3` ✅ | صُ → `audio/harakat/saad-dammah.mp3` ✅ | صِ → `audio/harakat/saad-kasrah.mp3` ✅ | صْ → `audio/harakat/saad-soukoun.mp3` ✅ |
| 15 | ض | `audio/15-daad.mp3` ✅ | ضَ → `audio/harakat/daad-fathah.mp3` ✅ | ضُ → `audio/harakat/daad-dammah.mp3` ✅ | ضِ → `audio/harakat/daad-kasrah.mp3` ✅ | ضْ → `audio/harakat/daad-soukoun.mp3` ✅ |
| 16 | ط | `audio/16-taaa.mp3` ✅ | طَ → `audio/harakat/taaa-fathah.mp3` ✅ | طُ → `audio/harakat/taaa-dammah.mp3` ✅ | طِ → `audio/harakat/taaa-kasrah.mp3` ✅ | طْ → `audio/harakat/taaa-soukoun.mp3` ✅ |
| 17 | ظ | `audio/17-zaa.mp3` ✅ | ظَ → `audio/harakat/zaa-fathah.mp3` ✅ | ظُ → `audio/harakat/zaa-dammah.mp3` ✅ | ظِ → `audio/harakat/zaa-kasrah.mp3` ✅ | ظْ → `audio/harakat/zaa-soukoun.mp3` ✅ |
| 18 | ع | `audio/18-ayn.mp3` ✅ | عَ → `audio/harakat/ayn-fathah.mp3` ✅ | عُ → `audio/harakat/ayn-dammah.mp3` ✅ | عِ → `audio/harakat/ayn-kasrah.mp3` ✅ | عْ → `audio/harakat/ayn-soukoun.mp3` ✅ |
| 19 | غ | `audio/19-ghayn.mp3` ✅ | غَ → `audio/harakat/ghayn-fathah.mp3` ✅ | غُ → `audio/harakat/ghayn-dammah.mp3` ✅ | غِ → `audio/harakat/ghayn-kasrah.mp3` ✅ | غْ → `audio/harakat/ghayn-soukoun.mp3` ✅ |
| 20 | ف | `audio/20-faa.mp3` ✅ | فَ → `audio/harakat/faa-fathah.mp3` ✅ | فُ → `audio/harakat/faa-dammah.mp3` ✅ | فِ → `audio/harakat/faa-kasrah.mp3` ✅ | فْ → `audio/harakat/faa-soukoun.mp3` ✅ |
| 21 | ق | `audio/21-qaaf.mp3` ✅ | قَ → `audio/harakat/qaaf-fathah.mp3` ✅ | قُ → `audio/harakat/qaaf-dammah.mp3` ✅ | قِ → `audio/harakat/qaaf-kasrah.mp3` ✅ | قْ → `audio/harakat/qaaf-soukoun.mp3` ✅ |
| 22 | ك | `audio/22-kaaf.mp3` ✅ | كَ → `audio/harakat/kaaf-fathah.mp3` ✅ | كُ → `audio/harakat/kaaf-dammah.mp3` ✅ | كِ → `audio/harakat/kaaf-kasrah.mp3` ✅ | كْ → `audio/harakat/kaaf-soukoun.mp3` ✅ |
| 23 | ل | `audio/23-laam.mp3` ✅ | لَ → `audio/harakat/laam-fathah.mp3` ✅ | لُ → `audio/harakat/laam-dammah.mp3` ✅ | لِ → `audio/harakat/laam-kasrah.mp3` ✅ | لْ → `audio/harakat/laam-soukoun.mp3` ✅ |
| 24 | م | `audio/24-miim.mp3` ✅ | مَ → `audio/harakat/miim-fathah.mp3` ✅ | مُ → `audio/harakat/miim-dammah.mp3` ✅ | مِ → `audio/harakat/miim-kasrah.mp3` ✅ | مْ → `audio/harakat/miim-soukoun.mp3` ✅ |
| 25 | ن | `audio/25-nuun.mp3` ✅ | نَ → `audio/harakat/nuun-fathah.mp3` ✅ | نُ → `audio/harakat/nuun-dammah.mp3` ✅ | نِ → `audio/harakat/nuun-kasrah.mp3` ✅ | نْ → `audio/harakat/nuun-soukoun.mp3` ✅ |
| 26 | ه | `audio/26-haaa.mp3` ✅ | هَ → `audio/harakat/haaa-fathah.mp3` ✅ *(renommé cette phase, fichier déjà enregistré)* | هُ → `audio/harakat/haaa-dammah.mp3` ✅ | هِ → `audio/harakat/haaa-kasrah.mp3` ✅ | هْ → `audio/harakat/haaa-soukoun.mp3` ✅ |
| 27 | و | `audio/27-waaw.mp3` ✅ | وَ → `audio/harakat/waaw-fathah.mp3` ✅ | وُ → `audio/harakat/waaw-dammah.mp3` ✅ | وِ → `audio/harakat/waaw-kasrah.mp3` ✅ | وْ → `audio/harakat/waaw-soukoun.mp3` ✅ |
| 28 | ي | `audio/28-yaa.mp3` ✅ | يَ → `audio/harakat/yaa-fathah.mp3` ✅ | يُ → `audio/harakat/yaa-dammah.mp3` ✅ | يِ → `audio/harakat/yaa-kasrah.mp3` ✅ | يْ → `audio/harakat/yaa-soukoun.mp3` ✅ |

**Bilan Leçon 2 / Quiz 1 : 137 / 140 déjà présents. 3 à enregistrer (zay-dammah, zay-kasrah, zay-soukoun).**

> Note : les mots d'exemple affichés au verso de chaque carte (بَقَرَة, بُرْج, بِنْت, حَبْل…) n'ont **pas** de bouton audio propre dans `lecon2.html` — seul le son lettre+harakah est joué. Ils ne figurent donc pas dans ce guide comme éléments audio séparés.

---

## PARTIE 2 — QUIZ 1 (Reconnaître les Harakat)

**Aucun enregistrement à faire.** `quiz1-m2.html` charge une copie de la même table `alphabetData` (lettre + 4 harakat) que `lecon2.html`, avec les **chemins identiques** listés en Partie 1. Dès que les 3 fichiers zay manquants seront déposés dans `audio/harakat/`, le Quiz 1 sera automatiquement à 100 % fonctionnel — aucune modification de code supplémentaire ne sera nécessaire.

---

## PARTIE 3 — QUIZ 2 (Mots de 2 lettres)

29 mots (`database.js`, ids 101-129). Chargés dynamiquement par `quiz2-m2.html` depuis `database.js` (aucune donnée dupliquée).

| ID | Texte arabe exact | Nom du fichier | Chemin exact | Statut | Réutilisé dans |
|---|---|---|---|---|---|
| 101 | مَعَ | `maa.mp3` | `audio/module2/maa.mp3` | ✅ | Banque des mots (si recherché) |
| 102 | لَكَ | `laka.mp3` | `audio/module2/laka.mp3` | ✅ | Banque des mots |
| 103 | قُمْ | `qum.mp3` | `audio/module2/qum.mp3` | ✅ | Banque des mots |
| 104 | خُذْ | `khudh.mp3` | `audio/module2/khudh.mp3` | ✅ | Banque des mots |
| 105 | كُلْ | `kul.mp3` | `audio/module2/kul.mp3` | ✅ | Banque des mots |
| 106 | هُمْ | `hum.mp3` | `audio/module2/hum.mp3` | ✅ | Banque des mots |
| 107 | لَهُ | `lahu.mp3` | `audio/module2/lahu.mp3` | ✅ | Banque des mots |
| 108 | عُدْ | `ud.mp3` | `audio/module2/ud.mp3` | ✅ | Banque des mots |
| 109 | غِلْ | `ghil.mp3` | `audio/module2/ghil.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 110 | سِرْ | `sir.mp3` | `audio/module2/sir.mp3` | ✅ | Banque des mots |
| 111 | قِفْ | `qif.mp3` | `audio/module2/qif.mp3` | ✅ | Banque des mots |
| 112 | صِفْ | `sif.mp3` | `audio/module2/sif.mp3` | ✅ | Banque des mots |
| 113 | زِدْ | `zid.mp3` | `audio/module2/zid.mp3` | ✅ | Banque des mots |
| 114 | غِبْ | `ghib.mp3` | `audio/module2/ghib.mp3` | ✅ | Banque des mots |
| 115 | بِكَ | `bika.mp3` | `audio/module2/bika.mp3` | ✅ | Banque des mots |
| 116 | بِهِ | `bihi.mp3` | `audio/module2/bihi.mp3` | ✅ | Banque des mots |
| 117 | صُمْ | `sum.mp3` | `audio/module2/sum.mp3` | ✅ | Banque des mots |
| 118 | مُتْ | `mut.mp3` | `audio/module2/mut.mp3` | ✅ | Banque des mots |
| 119 | أَب | `abu.mp3` | `audio/module2/abu.mp3` | ✅ | Banque des mots |
| 120 | أَخ | `akhu.mp3` | `audio/module2/akhu.mp3` | ✅ | Banque des mots |
| 121 | دَم | `damu.mp3` | `audio/module2/damu.mp3` | ✅ | Banque des mots |
| 122 | فَم | `famu.mp3` | `audio/module2/famu.mp3` | ✅ | Banque des mots |
| 123 | مَنْ | `man.mp3` | `audio/module2/man.mp3` | ✅ | Banque des mots |
| 124 | بَلْ | `bal.mp3` | `audio/module2/bal.mp3` | ✅ | Banque des mots |
| 125 | عَنْ | `an.mp3` | `audio/module2/an.mp3` | ✅ | Banque des mots |
| 126 | قَدْ | `qad.mp3` | `audio/module2/qad.mp3` | ✅ | Banque des mots |
| 127 | لَمْ | `lam.mp3` | `audio/module2/lam.mp3` | ✅ | Banque des mots |
| 128 | لَنْ | `lan.mp3` | `audio/module2/lan.mp3` | ✅ | Banque des mots |
| 129 | كَمْ | `kam.mp3` | `audio/module2/kam.mp3` | ✅ | Banque des mots |

**Bilan Quiz 2 : 28 / 29 déjà présents. 1 à enregistrer (غِلْ → ghil.mp3).**

---

## PARTIE 4 — QUIZ 3 (Mots de 3-4 lettres)

30 mots (`database.js`, ids 130-148 + ids 209-219). Chargés dynamiquement par `quiz3-m2.html` — le filtre a été corrigé cette phase pour inclure les 11 mots ids 209-219, jusqu'ici jamais utilisés par aucun quiz.

| ID | Texte arabe exact | Nom du fichier | Chemin exact | Statut | Réutilisé dans |
|---|---|---|---|---|---|
| 130 | كَتَبَ | `kataba.mp3` | `audio/module2/kataba.mp3` | ✅ | Banque des mots |
| 131 | دَخَلَ | `dakhala.mp3` | `audio/module2/dakhala.mp3` | ✅ | Banque des mots |
| 132 | جَلَسَ | `jalasa.mp3` | `audio/module2/jalasa.mp3` | ✅ | Banque des mots |
| 133 | شَرِبَ | `shariba.mp3` | `audio/module2/shariba.mp3` | ✅ | Banque des mots |
| 134 | سَمِعَ | `samia.mp3` | `audio/module2/samia.mp3` | ✅ | Banque des mots |
| 135 | لَعِبَ | `laiba.mp3` | `audio/module2/laiba.mp3` | ✅ | Banque des mots |
| 136 | حَسُنَ | `hasuna.mp3` | `audio/module2/hasuna.mp3` | ✅ | Banque des mots |
| 137 | كَبُرَ | `kabura.mp3` | `audio/module2/kabura.mp3` | ✅ | Banque des mots |
| 138 | صَغُرَ | `saghura.mp3` | `audio/module2/saghura.mp3` | ✅ | Banque des mots |
| 139 | عَمِلَ | `amila.mp3` | `audio/module2/amila.mp3` | ✅ | Banque des mots |
| 140 | بِنْت | `bint.mp3` | `audio/module2/bint.mp3` | ✅ | Banque des mots |
| 141 | قَلْب | `qalb.mp3` | `audio/module2/qalb.mp3` | ✅ | Banque des mots |
| 142 | أُذُن | `udhun.mp3` | `audio/module2/udhun.mp3` | ✅ | Banque des mots |
| 143 | رِجْل | `rijl.mp3` | `audio/module2/rijl.mp3` | ✅ | Banque des mots |
| 144 | قِرْد | `qird.mp3` | `audio/module2/qird.mp3` | ✅ | Banque des mots |
| 145 | ذِئْب | `dhib.mp3` | `audio/module2/dhib.mp3` | ✅ | Banque des mots |
| 146 | مَكْتَب | `maktab.mp3` | `audio/module2/maktab.mp3` | ✅ | Banque des mots |
| 147 | مُسْلِم | `muslim.mp3` | `audio/module2/muslim.mp3` | ✅ | Banque des mots |
| 148 | دَفْتَر | `daftar.mp3` | `audio/module2/daftar.mp3` | ✅ | Banque des mots |
| 209 | فَتَحَ | `fataha.mp3` | `audio/module2/fataha.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 210 | قَرَأَ | `qaraa.mp3` | `audio/module2/qaraa.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 211 | نَظَرَ | `nazhara.mp3` | `audio/module2/nazhara.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 212 | غَسَلَ | `ghasala.mp3` | `audio/module2/ghasala.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 213 | أَكَلَ | `akala.mp3` | `audio/module2/akala.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 214 | رَسَمَ | `rasama.mp3` | `audio/module2/rasama.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 215 | طَبَخَ | `tabakha.mp3` | `audio/module2/tabakha.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 216 | قَفَزَ | `qafaza.mp3` | `audio/module2/qafaza.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 217 | مَسَحَ | `masaha.mp3` | `audio/module2/masaha.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 218 | ضَحِكَ | `dahika.mp3` | `audio/module2/dahika.mp3` | **❌ À ENREGISTRER** | Banque des mots |
| 219 | رَكَعَ | `rakaa.mp3` | `audio/module2/rakaa.mp3` | **❌ À ENREGISTRER** | Banque des mots |

**Bilan Quiz 3 : 19 / 30 déjà présents. 11 à enregistrer (ids 209-219 — ce sont ces 11 mots qui viennent d'être reliés au quiz cette phase ; sans eux, un quart des questions du Quiz 3 afficheront le message "Audio non disponible").**

---

## RÉCAPITULATIF MODULE 2

| Partie | Total éléments | Déjà présents | À enregistrer |
|---|---|---|---|
| Leçon 2 (+ Quiz 1, réutilisation) | 140 | 137 | 3 |
| Quiz 2 | 29 | 28 | 1 |
| Quiz 3 | 30 | 19 | 11 |
| **TOTAL (dédoublonné)** | **199** | **184** | **15** |

### Liste consolidée des 15 fichiers à enregistrer pour le Module 2

| # | Texte arabe | Fichier | Dossier | Checklist |
|---|---|---|---|---|
| 1 | زُ (ز+dammah) | `zay-dammah.mp3` | `audio/harakat/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 2 | زِ (ز+kasrah) | `zay-kasrah.mp3` | `audio/harakat/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 3 | زْ (ز+soukoun) | `zay-soukoun.mp3` | `audio/harakat/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 4 | غِلْ | `ghil.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 5 | فَتَحَ | `fataha.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 6 | قَرَأَ | `qaraa.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 7 | نَظَرَ | `nazhara.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 8 | غَسَلَ | `ghasala.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 9 | أَكَلَ | `akala.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 10 | رَسَمَ | `rasama.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 11 | طَبَخَ | `tabakha.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 12 | قَفَزَ | `qafaza.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 13 | مَسَحَ | `masaha.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 14 | ضَحِكَ | `dahika.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |
| 15 | رَكَعَ | `rakaa.mp3` | `audio/module2/` | ☐ À enregistrer ☐ Audacity ☐ Exporté ☐ GitHub ☐ Détecté ☐ Fonctionnel |

### Corrections déjà appliquées cette phase (aucune action de votre part)

Trois fichiers déjà enregistrés étaient invisibles pour l'application à cause d'un nom de fichier différent de celui attendu par le code. Ils ont été renommés sur le disque (aucun nouvel enregistrement, aucun contenu audio modifié) :
- `thaa-fathah .mp3` (espace parasite) → `thaa-fathah.mp3`
- `shiin-fatfah.mp3` (faute de frappe) → `shiin-fathah.mp3`
- `haaa-fathah .mp3` (espace parasite) → `haaa-fathah.mp3`

### Fichiers orphelins détectés dans `audio/module2/` (hors périmètre, à statuer plus tard)

Ces fichiers existent mais ne sont référencés par aucun mot du Module 2 actuel : `aqrab, bada, bayt, bit, bulbul, daa, din, dub, fulful, funduq, ghudh, ghul, haba, hala, hudhud, kalb, kama, khanjar, khardal, kid, madkhal, majlis, makhraj, malbas, masbah, maskan, mundhir, mursil, nama, raa, ruj, sara, shif, shud, sunduq, thalab, tib, tuf, yada, zum` (+ un fichier `kawkab .mp3` avec espace parasite). Aucune action requise pour la certification du Module 2 — signalés pour une phase de nettoyage ultérieure éventuelle.
