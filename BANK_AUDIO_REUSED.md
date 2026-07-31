# BANK_AUDIO_REUSED.md

## Fiches de la Banque dont l'audio est déjà catalogué / requis par une Leçon ou un Quiz

Audit exact, fichier par fichier — comparaison de chaque `audio` de `database.js` contre les chemins réellement référencés dans les 50 fichiers `lecon*.html`/`quiz*.html` (correspondance littérale de chemin), en tenant compte du mécanisme de filtrage par plage d'ID utilisé par `quiz2-m2.html`, `quiz3-m2.html`, `quiz2-m3.html` et `quiz3-m3.html` (qui interrogent `wordsDatabase` par ID sans jamais écrire le chemin audio en dur dans leur code).

**Total : 357 fiches réutilisées.** (Mise à jour après fusion des 4 doublons hérités — voir `BANK_LEGACY_DUPLICATES.md`. Plus aucun chemin incohérent.)

## Alphabet (Module 1)

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 1 | أ | Lettre Alif | Letra Alif | `audio/01-alif.mp3` | Réutilisé |
| 2 | ب | Lettre Baa | Letra Baa | `audio/02-baa.mp3` | Réutilisé |
| 3 | ت | Lettre Taa | Letra Taa | `audio/03-taa.mp3` | Réutilisé |
| 4 | ث | Lettre Thaa | Letra Thaa | `audio/04-thaa.mp3` | Réutilisé |
| 5 | ج | Lettre Jiim | Letra Jiim | `audio/05-jim.mp3` | Réutilisé |
| 6 | ح | Lettre Haa | Letra Haa | `audio/06-haa.mp3` | Réutilisé |
| 7 | خ | Lettre Khaa | Letra Khaa | `audio/07-khaa.mp3` | Réutilisé |
| 8 | د | Lettre Daal | Letra Daal | `audio/08-dal.mp3` | Réutilisé |
| 9 | ذ | Lettre Dhaal | Letra Dhaal | `audio/09-dhal.mp3` | Réutilisé |
| 10 | ر | Lettre Raa | Letra Raa | `audio/10-raa.mp3` | Réutilisé |
| 11 | ز | Lettre Zaay | Letra Zaay | `audio/11-zay.mp3` | Réutilisé |
| 12 | س | Lettre Siin | Letra Siin | `audio/12-siin.mp3` | Réutilisé |
| 13 | ش | Lettre Shiin | Letra Shiin | `audio/13-shiin.mp3` | Réutilisé |
| 14 | ص | Lettre Saad | Letra Saad | `audio/14-saad.mp3` | Réutilisé |
| 15 | ض | Lettre Daad | Letra Daad | `audio/15-daad.mp3` | Réutilisé |
| 16 | ط | Lettre Taa | Letra Taa | `audio/16-taaa.mp3` | Réutilisé |
| 17 | ظ | Lettre Zaa | Letra Zaa | `audio/17-zaa.mp3` | Réutilisé |
| 18 | ع | Lettre Ayn | Letra Ayn | `audio/18-ayn.mp3` | Réutilisé |
| 19 | غ | Lettre Ghayn | Letra Ghayn | `audio/19-ghayn.mp3` | Réutilisé |
| 20 | ف | Lettre Faa | Letra Faa | `audio/20-faa.mp3` | Réutilisé |
| 21 | ق | Lettre Qaaf | Letra Qaaf | `audio/21-qaaf.mp3` | Réutilisé |
| 22 | ك | Lettre Kaaf | Letra Kaaf | `audio/22-kaaf.mp3` | Réutilisé |
| 23 | ل | Lettre Laam | Letra Laam | `audio/23-laam.mp3` | Réutilisé |
| 24 | م | Lettre Miim | Letra Miim | `audio/24-miim.mp3` | Réutilisé |
| 25 | ن | Lettre Nuun | Letra Nuun | `audio/25-nuun.mp3` | Réutilisé |
| 26 | ه | Lettre Haa | Letra Haa | `audio/26-haaa.mp3` | Réutilisé |
| 27 | و | Lettre Waaw | Letra Waaw | `audio/27-waaw.mp3` | Réutilisé |
| 28 | ي | Lettre Yaa | Letra Yaa | `audio/28-yaa.mp3` | Réutilisé |

## Module 1 (vocabulaire)

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 29 | أَسَد | Lion | León | `audio/asad.mp3` | Réutilisé |
| 30 | كَأْس | Verre | Vaso | `audio/kas.mp3` | Réutilisé |
| 34 | كِتَاب | Livre | Libro | `audio/kitab.mp3` | Réutilisé |
| 40 | جَمَل | Chameau | Camello | `audio/jamal.mp3` | Réutilisé |
| 44 | بَحْر | Mer | Mar | `audio/bahr.mp3` | Réutilisé |
| 46 | خُبْز | Pain | Pan | `audio/khobz.mp3` | Réutilisé |
| 50 | مَدْرَسَة | École | Escuela | `audio/madrasa.mp3` | Réutilisé |
| 51 | وَلَد | Garçon | Niño | `audio/walad.mp3` | Réutilisé |
| 55 | وَرْدَة | Une rose | Una rosa | `audio/warda.mp3` | Réutilisé |
| 56 | قَمَر | Lune | Luna | `audio/qamar.mp3` | Réutilisé |
| 77 | عَيْن | Œil | Ojo | `audio/ayn.mp3` | Réutilisé |
| 80 | غَيْم | Nuage | Nube | `audio/ghaym.mp3` | Réutilisé |
| 89 | قَلَم | Stylo | Bolígrafo | `audio/qalam.mp3` | Réutilisé |
| 90 | جَبَل | Montagne | Montaña | `audio/jabal.mp3` | Réutilisé |
| 91 | مَاء | Eau | Agua | `audio/ma.mp3` | Réutilisé |
| 94 | هِلَال | Croissant de lune | Luna creciente | `audio/hilal.mp3` | Réutilisé |
| 99 | يَد | Main | Mano | `audio/yad.mp3` | Réutilisé |
| 100 | كُرْسِي | Chaise | Silla | `audio/kursi.mp3` | Réutilisé |

## Module 2 (quiz2-m2/quiz3-m2)

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 101 | مَعَ | Avec | Con | `audio/module2/maa.mp3` | Réutilisé |
| 102 | لَكَ | À toi | Para ti | `audio/module2/laka.mp3` | Réutilisé |
| 103 | قُمْ | Lève-toi | Levántate | `audio/module2/qum.mp3` | Réutilisé |
| 104 | خُذْ | Prends | Toma | `audio/module2/khudh.mp3` | Réutilisé |
| 105 | كُلْ | Mange | Come | `audio/module2/kul.mp3` | Réutilisé |
| 106 | هُمْ | Ils | Ellos | `audio/module2/hum.mp3` | Réutilisé |
| 107 | لَهُ | À lui | Para él | `audio/module2/lahu.mp3` | Réutilisé |
| 108 | عُدْ | Reviens | Vuelve | `audio/module2/ud.mp3` | Réutilisé |
| 109 | غِلْ | Trahison | Traición | `audio/module2/ghil.mp3` | Réutilisé |
| 110 | سِرْ | Marche | Camina | `audio/module2/sir.mp3` | Réutilisé |
| 111 | قِفْ | Arrête-toi | Detente | `audio/module2/qif.mp3` | Réutilisé |
| 112 | صِفْ | Décris | Describe | `audio/module2/sif.mp3` | Réutilisé |
| 113 | زِدْ | Ajoute | Añade | `audio/module2/zid.mp3` | Réutilisé |
| 114 | غِبْ | Absente-toi | Auséntate | `audio/module2/ghib.mp3` | Réutilisé |
| 115 | بِكَ | Par toi | Por ti | `audio/module2/bika.mp3` | Réutilisé |
| 116 | بِهِ | Par lui | Por él | `audio/module2/bihi.mp3` | Réutilisé |
| 117 | صُمْ | Jeûne | Ayuna | `audio/module2/sum.mp3` | Réutilisé |
| 118 | مُتْ | Meurs | Muere | `audio/module2/mut.mp3` | Réutilisé |
| 119 | أَب | Père | Padre | `audio/module2/abu.mp3` | Réutilisé |
| 120 | أَخ | Frère | Hermano | `audio/module2/akhu.mp3` | Réutilisé |
| 121 | دَم | Sang | Sangre | `audio/module2/damu.mp3` | Réutilisé |
| 122 | فَم | Bouche | Boca | `audio/module2/famu.mp3` | Réutilisé |
| 123 | مَنْ | Qui | Quién | `audio/module2/man.mp3` | Réutilisé |
| 124 | بَلْ | Mais | Pero | `audio/module2/bal.mp3` | Réutilisé |
| 125 | عَنْ | De | De | `audio/module2/an.mp3` | Réutilisé |
| 126 | قَدْ | Certes | Ciertamente | `audio/module2/qad.mp3` | Réutilisé |
| 127 | لَمْ | Ne pas | No | `audio/module2/lam.mp3` | Réutilisé |
| 128 | لَنْ | Ne jamais | Nunca | `audio/module2/lan.mp3` | Réutilisé |
| 129 | كَمْ | Combien | Cuánto | `audio/module2/kam.mp3` | Réutilisé |
| 130 | كَتَبَ | A écrit | Escribió | `audio/module2/kataba.mp3` | Réutilisé |
| 131 | دَخَلَ | Est entré | Entró | `audio/module2/dakhala.mp3` | Réutilisé |
| 132 | جَلَسَ | S'est assis | Se sentó | `audio/module2/jalasa.mp3` | Réutilisé |
| 133 | شَرِبَ | A bu | Bebió | `audio/module2/shariba.mp3` | Réutilisé |
| 134 | سَمِعَ | A entendu | Escuchó | `audio/module2/samia.mp3` | Réutilisé |
| 135 | لَعِبَ | A joué | Jugó | `audio/module2/laiba.mp3` | Réutilisé |
| 136 | حَسُنَ | Était bon | Fue bueno | `audio/module2/hasuna.mp3` | Réutilisé |
| 137 | كَبُرَ | A grandi | Creció | `audio/module2/kabura.mp3` | Réutilisé |
| 138 | صَغُرَ | A rapetissé | Achicó | `audio/module2/saghura.mp3` | Réutilisé |
| 139 | عَمِلَ | A travaillé | Trabajó | `audio/module2/amila.mp3` | Réutilisé |
| 140 | بِنْت | Fille | Niña | `audio/module2/bint.mp3` | Réutilisé |
| 141 | قَلْب | Cœur | Corazón | `audio/module2/qalb.mp3` | Réutilisé |
| 142 | أُذُن | Oreille | Oreja | `audio/module2/udhun.mp3` | Réutilisé |
| 143 | رِجْل | Jambe | Pierna | `audio/module2/rijl.mp3` | Réutilisé |
| 144 | قِرْد | Singe | Mono | `audio/module2/qird.mp3` | Réutilisé |
| 145 | ذِئْب | Loup | Lobo | `audio/module2/dhib.mp3` | Réutilisé |
| 146 | مَكْتَب | Bureau | Escritorio | `audio/module2/maktab.mp3` | Réutilisé |
| 147 | مُسْلِم | Musulman | Musulmán | `audio/module2/muslim.mp3` | Réutilisé |
| 148 | دَفْتَر | Cahier | Cuaderno | `audio/module2/daftar.mp3` | Réutilisé |

## Module 3 (quiz2-m3)

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 149 | بَاب | Porte | Puerta | `audio/module3/bab.mp3` | Réutilisé |
| 150 | تَاج | Couronne | Corona | `audio/module3/taj.mp3` | Réutilisé |
| 151 | نَار | Feu | Fuego | `audio/module3/nar.mp3` | Réutilisé |
| 152 | عُود | Luth | Laúd | `audio/module3/ud.mp3` | Réutilisé |
| 153 | غَار | Grotte | Cueva | `audio/module3/ghar.mp3` | Réutilisé |
| 154 | دَار | Maison | Casa | `audio/module3/dar.mp3` | Réutilisé |
| 155 | جَار | Voisin | Vecino | `audio/module3/jar.mp3` | Réutilisé |
| 156 | صَام | A jeûné | Ayunó | `audio/module3/sam.mp3` | Réutilisé |
| 157 | قَام | S'est levé | Se levantó | `audio/module3/qam.mp3` | Réutilisé |
| 158 | طَار | A volé | Voló | `audio/module3/tar.mp3` | Réutilisé |
| 159 | نَام | A dormi | Durmió | `audio/module3/nam.mp3` | Réutilisé |
| 160 | عَام | Année | Año | `audio/module3/am.mp3` | Réutilisé |
| 161 | خَال | Oncle | Tío | `audio/module3/khal.mp3` | Réutilisé |
| 162 | غَاب | A disparu | Desapareció | `audio/module3/ghab.mp3` | Réutilisé |
| 163 | سَاق | Jambe | Pierna | `audio/module3/saq.mp3` | Réutilisé |
| 164 | كُوب | Gobelet | Vaso | `audio/module3/kub.mp3` | Réutilisé |
| 165 | تُوت | Baies | Bayas | `audio/module3/tut.mp3` | Réutilisé |
| 166 | حُوت | Baleine | Ballena | `audio/module3/hut.mp3` | Réutilisé |
| 167 | دُود | Ver | Gusano | `audio/module3/dud.mp3` | Réutilisé |
| 168 | نُور | Lumière | Luz | `audio/module3/nur.mp3` | Réutilisé |
| 169 | صُوف | Laine | Lana | `audio/module3/suf.mp3` | Réutilisé |
| 170 | سُوق | Marché | Mercado | `audio/module3/suq.mp3` | Réutilisé |
| 171 | سُور | Mur | Muro | `audio/module3/sur.mp3` | Réutilisé |
| 172 | رُوح | Âme | Alma | `audio/module3/ruh.mp3` | Réutilisé |
| 173 | غُول | Ogre | Ogro | `audio/module3/ghul.mp3` | Réutilisé |
| 174 | تِين | Figue | Higo | `audio/module3/tin.mp3` | Réutilisé |
| 175 | دِين | Religion | Religión | `audio/module3/din.mp3` | Réutilisé |
| 176 | رِيح | Vent | Viento | `audio/module3/rih.mp3` | Réutilisé |
| 177 | جِيل | Génération | Generación | `audio/module3/jil.mp3` | Réutilisé |
| 178 | فِيل | Éléphant | Elefante | `audio/module3/fil.mp3` | Réutilisé |

## Module 3 (quiz3-m3)

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 179 | طَائِرَة | Avion | Avión | `audio/module3/taira.mp3` | Réutilisé |
| 180 | نَافِذَة | Fenêtre | Ventana | `audio/module3/nafidhah.mp3` | Réutilisé |
| 181 | حَقِيبَة | Valise | Maleta | `audio/module3/haqibah.mp3` | Réutilisé |
| 182 | سَفِينَة | Bateau | Barco | `audio/module3/safinah.mp3` | Réutilisé |
| 183 | بُرْتُقَال | Orange | Naranja | `audio/module3/burtuqal.mp3` | Réutilisé |
| 184 | صَارُوخ | Fusée | Cohete | `audio/module3/sarukh.mp3` | Réutilisé |
| 185 | تِمْسَاح | Crocodile | Cocodrilo | `audio/module3/timsah.mp3` | Réutilisé |
| 186 | عُصْفُور | Oiseau | Pájaro | `audio/module3/usfur.mp3` | Réutilisé |
| 187 | فَرَاشَة | Papillon | Mariposa | `audio/module3/farashah.mp3` | Réutilisé |
| 188 | حَلَزُون | Escargot | Caracol | `audio/module3/halazun.mp3` | Réutilisé |
| 189 | حَاسُوب | Ordinateur | Ordenador | `audio/module3/hasub.mp3` | Réutilisé |
| 190 | مِفْتَاح | Clé | Llave | `audio/module3/miftah.mp3` | Réutilisé |
| 191 | تِلْفَاز | Télévision | Televisión | `audio/module3/tilfaz.mp3` | Réutilisé |
| 192 | قَامُوس | Dictionnaire | Diccionario | `audio/module3/qamus.mp3` | Réutilisé |
| 193 | مِصْبَاح | Lampe | Lámpara | `audio/module3/misbah.mp3` | Réutilisé |
| 194 | صُنْدُوق | Boîte | Caja | `audio/module3/sunduq.mp3` | Réutilisé |
| 195 | عَاصِمَة | Capitale | Capital | `audio/module3/asimah.mp3` | Réutilisé |
| 196 | دَجَاجَة | Poule | Gallina | `audio/module3/dajajah.mp3` | Réutilisé |
| 197 | زَرَافَة | Girafe | Jirafa | `audio/module3/zarafah.mp3` | Réutilisé |
| 198 | سُلَحْفَاة | Tortue | Tortuga | `audio/module3/sulahfah.mp3` | Réutilisé |
| 199 | فَانُوس | Lanterne | Linterna | `audio/module3/fanus.mp3` | Réutilisé |
| 200 | مَكْتُوب | Lettre | Carta | `audio/module3/maktub.mp3` | Réutilisé |
| 201 | خِزَانَة | Armoire | Armario | `audio/module3/khizanah.mp3` | Réutilisé |
| 202 | مَائِدَة | Table | Mesa | `audio/module3/maidah.mp3` | Réutilisé |
| 203 | فَاتُورَة | Facture | Factura | `audio/module3/faturah.mp3` | Réutilisé |
| 204 | جَامِعَة | Université | Universidad | `audio/module3/jamiah.mp3` | Réutilisé |
| 205 | كَامِيرَا | Caméra | Cámara | `audio/module3/kamira.mp3` | Réutilisé |
| 206 | شَاحِنَة | Camion | Camión | `audio/module3/shahinah.mp3` | Réutilisé |
| 207 | ثَعَالِب | Renards | Zorros | `audio/module3/thaalib.mp3` | Réutilisé |
| 208 | أُسْبُوع | Semaine | Semana | `audio/module3/usbu.mp3` | Réutilisé |

## Module 3 (quiz3-m2)

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 209 | فَتَحَ | A ouvert | Abrió | `audio/module2/fataha.mp3` | Réutilisé |
| 210 | قَرَأَ | A lu | Leyó | `audio/module2/qaraa.mp3` | Réutilisé |
| 211 | نَظَرَ | A regardé | Miró | `audio/module2/nazhara.mp3` | Réutilisé |
| 212 | غَسَلَ | A lavé | Lavó | `audio/module2/ghasala.mp3` | Réutilisé |
| 213 | أَكَلَ | A mangé | Comió | `audio/module2/akala.mp3` | Réutilisé |
| 214 | رَسَمَ | A dessiné | Dibujó | `audio/module2/rasama.mp3` | Réutilisé |
| 215 | طَبَخَ | A cuisiné | Cocinó | `audio/module2/tabakha.mp3` | Réutilisé |
| 216 | قَفَزَ | A sauté | Saltó | `audio/module2/qafaza.mp3` | Réutilisé |
| 217 | مَسَحَ | A essuyé | Limpió | `audio/module2/masaha.mp3` | Réutilisé |
| 218 | ضَحِكَ | A ri | Rió | `audio/module2/dahika.mp3` | Réutilisé |
| 219 | رَكَعَ | S'est incliné | Se inclinó | `audio/module2/rakaa.mp3` | Réutilisé |

## Module 4 - Tanwin

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 500 | طَبِيب | Médecin | Médico | `audio/quiz-tanwin/tabib-un.mp3` | Réutilisé |
| 501 | مُعَلِّم | Professeur | Profesor | `audio/quiz-tanwin/mouallim-un.mp3` | Réutilisé |
| 502 | حَدِيقَة | Jardin | Jardín | `audio/quiz-tanwin/hadiqa-un.mp3` | Réutilisé |
| 503 | مَدِينَة | Ville | Ciudad | `audio/quiz-tanwin/madina-un.mp3` | Réutilisé |
| 504 | صَدِيق | Ami | Amigo | `audio/quiz-tanwin/sadiq-un.mp3` | Réutilisé |
| 505 | مَلِك | Roi | Rey | `audio/quiz-tanwin/malik-un.mp3` | Réutilisé |
| 506 | سَرِير | Lit | Cama | `audio/quiz-tanwin/sarir-un.mp3` | Réutilisé |
| 507 | سَاعَة | Montre / Heure | Reloj / Hora | `audio/quiz-tanwin/saaa-un.mp3` | Réutilisé |

## Module 6

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 508 | قَارِب | Barque | Barca | `audio/module6/qarib.mp3` | Réutilisé |

## Module 4 - Tanwin

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 509 | صُورَة | Image | Imagen | `audio/quiz-tanwin/sura-un.mp3` | Réutilisé |
| 510 | مَطْعَم | Restaurant | Restaurante | `audio/quiz-tanwin/matam-un.mp3` | Réutilisé |
| 511 | شَارِع | Rue | Calle | `audio/quiz-tanwin/shari-un.mp3` | Réutilisé |
| 512 | جَوَاب | Réponse | Respuesta | `audio/quiz-tanwin/jawab-un.mp3` | Réutilisé |
| 513 | حَانُوت | Boutique | Tienda | `audio/quiz-tanwin/hanut-un.mp3` | Réutilisé |
| 514 | طَرِيق | Chemin | Camino | `audio/quiz-tanwin/tariq-un.mp3` | Réutilisé |
| 515 | قَلْعَة | Château | Castillo | `audio/quiz-tanwin/qala-un.mp3` | Réutilisé |
| 516 | مِقَصّ | Ciseaux | Tijeras | `audio/quiz-tanwin/miqass-un.mp3` | Réutilisé |
| 517 | مُمَرِّض | Infirmier | Enfermero | `audio/quiz-tanwin/moumarrid-un.mp3` | Réutilisé |
| 518 | فَصْل | Classe / Saison | Clase / Estación | `audio/quiz-tanwin/fasl-un.mp3` | Réutilisé |
| 519 | طِفْل | Enfant | Niño | `audio/quiz-tanwin/tifl-un.mp3` | Réutilisé |

## Module 6

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 520 | قِطَار | Train | Tren | `audio/module6/qitar.mp3` | Réutilisé |

## Module 4 - Hamzat al-Qat'

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 521 | إِبْرِيق | Cruche | Jarra | `audio/quiz-qat/ibriq.mp3` | Réutilisé |
| 522 | أُمّ | Mère | Madre | `audio/quiz-qat/umm.mp3` | Réutilisé |
| 523 | رَأْس | Tête | Cabeza | `audio/quiz-qat/ras.mp3` | Réutilisé |
| 524 | بِئْر | Puits | Pozo | `audio/quiz-qat/bir.mp3` | Réutilisé |
| 525 | فَأْس | Hache | Hacha | `audio/quiz-qat/fas.mp3` | Réutilisé |
| 526 | مُؤْمِن | Croyant | Creyente | `audio/quiz-qat/mumin.mp3` | Réutilisé |
| 527 | سُؤَال | Question | Pregunta | `audio/quiz-qat/sual.mp3` | Réutilisé |
| 528 | سَمَاء | Ciel | Cielo | `audio/quiz-qat/sama.mp3` | Réutilisé |
| 529 | شَيْء | Chose | Cosa | `audio/quiz-qat/shay.mp3` | Réutilisé |
| 530 | بَدَأَ | A commencé | Empezó | `audio/quiz-qat/badaa.mp3` | Réutilisé |
| 531 | يَأْكُلُ | Il mange | Él come | `audio/quiz-qat/yakul.mp3` | Réutilisé |
| 532 | مُؤَسَّسَة | Institution | Institución | `audio/quiz-qat/muassasa.mp3` | Réutilisé |
| 533 | أَرْنَب | Lapin | Conejo | `audio/quiz-qat/arnab.mp3` | Réutilisé |
| 534 | إِسْلَام | Islam | Islam | `audio/quiz-qat/islam.mp3` | Réutilisé |
| 535 | أُسْرَة | Famille | Familia | `audio/quiz-qat/usra.mp3` | Réutilisé |
| 536 | مَسَاء | Soir | Tarde | `audio/quiz-qat/masa.mp3` | Réutilisé |
| 537 | شَاطِئ | Plage | Playa | `audio/quiz-qat/shati.mp3` | Réutilisé |
| 538 | قَارِئ | Lecteur | Lector | `audio/quiz-qat/qari.mp3` | Réutilisé |
| 539 | دِفْء | Chaleur | Calor | `audio/quiz-qat/dif.mp3` | Réutilisé |
| 540 | بُطْء | Lenteur | Lentitud | `audio/quiz-qat/but.mp3` | Réutilisé |
| 541 | رُؤْيَة | Vision | Visión | `audio/quiz-qat/ruya.mp3` | Réutilisé |
| 542 | فَأْر | Souris | Ratón | `audio/quiz-qat/far.mp3` | Réutilisé |
| 543 | مِئْذَنَة | Minaret | Minarete | `audio/quiz-qat/midhana.mp3` | Réutilisé |
| 544 | رِئَة | Poumon | Pulmón | `audio/quiz-qat/ria.mp3` | Réutilisé |
| 545 | يَقْرَأُ | Il lit | Él lee | `audio/quiz-qat/yaqrau.mp3` | Réutilisé |

## Module 4 - Hamza complet

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 546 | سُئِلَ | On lui a demandé | Le preguntaron | `audio/quiz-hamza/suila.mp3` | Réutilisé |
| 547 | ٱسْم | Nom | Nombre | `audio/quiz-hamza/ism.mp3` | Réutilisé |
| 548 | ٱلْبَيْت | La maison | La casa | `audio/quiz-hamza/albayt.mp3` | Réutilisé |
| 549 | ٱكْتُبْ | Écris | Escribe | `audio/quiz-hamza/uktub.mp3` | Réutilisé |
| 550 | ٱفْتَحْ | Ouvre | Abre | `audio/quiz-hamza/iftah.mp3` | Réutilisé |
| 551 | ٱجْلِسْ | Assieds-toi | Siéntate | `audio/quiz-hamza/ijlis.mp3` | Réutilisé |
| 552 | جُزْء | Une partie | Una parte | `audio/quiz-hamza/juz.mp3` | Réutilisé |
| 553 | هُدُوء | Le calme | La calma | `audio/quiz-hamza/huduu.mp3` | Réutilisé |
| 554 | ٱبْن | Un fils | Un hijo | `audio/quiz-hamza/ibn.mp3` | Réutilisé |
| 555 | ٱشْرَبْ | Bois | Bebe | `audio/quiz-hamza/ishrab.mp3` | Réutilisé |

## Module 5 - Ash-Shamsiyya

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 556 | الشَّمْس | Le soleil | El sol | `audio/shamsiyya/shams.mp3` | Réutilisé |
| 557 | التُّفَّاح | La pomme | La manzana | `audio/shamsiyya/tuffah.mp3` | Réutilisé |
| 558 | الثَّلْج | La neige | La nieve | `audio/shamsiyya/thalj.mp3` | Réutilisé |
| 559 | الدِّيك | Le coq | El gallo | `audio/shamsiyya/dik.mp3` | Réutilisé |
| 560 | الشَّجَرَة | L'arbre | El árbol | `audio/shamsiyya/shajara.mp3` | Réutilisé |
| 561 | الصَّقْر | Le faucon | El halcón | `audio/shamsiyya/saqr.mp3` | Réutilisé |
| 562 | الطَّيْر | L'oiseau | El pájaro | `audio/shamsiyya/tayr.mp3` | Réutilisé |
| 563 | اللَّيْل | La nuit | La noche | `audio/shamsiyya/layl.mp3` | Réutilisé |
| 564 | التَّاجِر | Le marchand | El comerciante | `audio/shamsiyya/tajir.mp3` | Réutilisé |
| 565 | الثَّعْلَب | Le renard | El zorro | `audio/shamsiyya/thalab.mp3` | Réutilisé |

## Module 5 - La Shadda

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 566 | السَّيَّارَة | La voiture | El coche | `audio/shadda/sayyara.mp3` | Réutilisé |

## Module 5 - Ash-Shamsiyya

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 567 | الضِّفْدَع | La grenouille | La rana | `audio/shamsiyya/difda.mp3` | Réutilisé |
| 568 | الطَّالِب | L'étudiant | El estudiante | `audio/shamsiyya/talib.mp3` | Réutilisé |
| 569 | الظَّرْف | L'enveloppe | El sobre | `audio/shamsiyya/zarf.mp3` | Réutilisé |
| 570 | اللِّسَان | La langue (organe) | La lengua (órgano) | `audio/shamsiyya/lisan.mp3` | Réutilisé |

## Module 5 - Al-Qamariyya

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 571 | الأَمِير | Le prince | El príncipe | `audio/qamariyya/amir.mp3` | Réutilisé |
| 572 | البَيْت | La maison | La casa | `audio/qamariyya/bayt.mp3` | Réutilisé |
| 573 | الحِصَان | Le cheval | El caballo | `audio/qamariyya/hisan.mp3` | Réutilisé |
| 574 | الحَلِيب | Le lait | La leche | `audio/qamariyya/halib.mp3` | Réutilisé |
| 575 | الخَرُوف | Le mouton | La oveja | `audio/qamariyya/kharuf.mp3` | Réutilisé |
| 576 | العَسَل | Le miel | La miel | `audio/qamariyya/asal.mp3` | Réutilisé |
| 577 | الغُرَاب | Le corbeau | El cuervo | `audio/qamariyya/ghurab.mp3` | Réutilisé |
| 578 | الكَلْب | Le chien | El perro | `audio/qamariyya/kalb.mp3` | Réutilisé |
| 579 | الهَوَاء | L'air | El aire | `audio/qamariyya/hawa.mp3` | Réutilisé |
| 580 | اليَاسَمِين | Le jasmin | El jazmín | `audio/qamariyya/yasamin.mp3` | Réutilisé |

## Module 5 - La Shadda

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 581 | قِطَّة | Chatte | Gata | `audio/shadda/qitta.mp3` | Réutilisé |
| 582 | سُلَّم | Échelle | Escalera | `audio/shadda/sullam.mp3` | Réutilisé |
| 583 | رُمَّان | Grenade (fruit) | Granada (fruta) | `audio/shadda/rumman.mp3` | Réutilisé |
| 584 | سُكَّر | Sucre | Azúcar | `audio/shadda/sukkar.mp3` | Réutilisé |
| 585 | دَرَّاجَة | Vélo | Bicicleta | `audio/shadda/darraja.mp3` | Réutilisé |
| 586 | سَبُّورَة | Tableau (classe) | Pizarra | `audio/shadda/sabbura.mp3` | Réutilisé |
| 587 | رَسَّام | Peintre | Pintor | `audio/shadda/rassam.mp3` | Réutilisé |
| 588 | نَجَّار | Menuisier | Carpintero | `audio/shadda/najjar.mp3` | Réutilisé |
| 589 | خَبَّاز | Boulanger | Panadero | `audio/shadda/khabbaz.mp3` | Réutilisé |
| 590 | شَمَّام | Melon | Melón | `audio/shadda/shammam.mp3` | Réutilisé |
| 591 | صَيَّاد | Chasseur / Pêcheur | Cazador / Pescador | `audio/shadda/sayyad.mp3` | Réutilisé |
| 592 | جَدَّة | Grand-mère | Abuela | `audio/shadda/jadda.mp3` | Réutilisé |
| 593 | جَدّ | Grand-père | Abuelo | `audio/shadda/jadd.mp3` | Réutilisé |
| 594 | بَطَّة | Canard | Pato | `audio/shadda/batta.mp3` | Réutilisé |
| 595 | مُدَرِّس | Enseignant | Docente | `audio/shadda/mudarris.mp3` | Réutilisé |
| 596 | أُمِّي | Ma mère | Mi madre | `audio/shadda/ummi.mp3` | Réutilisé |
| 597 | دُكَّان | Boutique | Tienda | `audio/shadda/dukkan.mp3` | Réutilisé |
| 598 | طَبَّاخ | Cuisinier | Cocinero | `audio/shadda/tabbakh.mp3` | Réutilisé |
| 599 | فَلَّاح | Paysan | Campesino | `audio/shadda/fallah.mp3` | Réutilisé |
| 600 | بَقَّال | Épicier | Tendero | `audio/shadda/baqqal.mp3` | Réutilisé |
| 601 | سَيِّد | Monsieur | Señor | `audio/shadda/sayyid.mp3` | Réutilisé |
| 602 | سِكِّين | Couteau | Cuchillo | `audio/shadda/sikkin.mp3` | Réutilisé |
| 603 | مِخَدَّة | Coussin | Almohada | `audio/shadda/mikhadda.mp3` | Réutilisé |
| 604 | دَبُّوس | Punaise | Chincheta | `audio/shadda/dabbus.mp3` | Réutilisé |
| 605 | نَظَّارَة | Lunettes | Gafas | `audio/shadda/nazzara.mp3` | Réutilisé |

## Module 6

| ID | Mot arabe | FR | ES | Chemin audio | Statut |
|---|---|---|---|---|---|
| 606 | الاثْنَيْن | Lundi | Lunes | `audio/module6/al-ithnayn.mp3` | Réutilisé |
| 607 | الثُّلَاثَاء | Mardi | Martes | `audio/module6/ath-thulatha.mp3` | Réutilisé |
| 608 | الأَرْبِعَاء | Mercredi | Miércoles | `audio/module6/al-arbia.mp3` | Réutilisé |
| 609 | الخَمِيس | Jeudi | Jueves | `audio/module6/al-khamis.mp3` | Réutilisé |
| 610 | الجُمُعَة | Vendredi | Viernes | `audio/module6/al-jumua.mp3` | Réutilisé |
| 611 | السَّبْت | Samedi | Sábado | `audio/module6/as-sabt.mp3` | Réutilisé |
| 612 | الأَحَد | Dimanche | Domingo | `audio/module6/al-ahad.mp3` | Réutilisé |
| 613 | الفَجْر | L'Aube | El amanecer | `audio/module6/al-fajr.mp3` | Réutilisé |
| 614 | الصُّبْح | Le Matin | La mañana | `audio/module6/as-subh.mp3` | Réutilisé |
| 615 | الضُّحَى | La Matinée | Media mañana | `audio/module6/ad-duha.mp3` | Réutilisé |
| 616 | الصَّبَاح | Le Matin | La mañana | `audio/module6/as-sabah.mp3` | Réutilisé |
| 617 | الظُّهْر | Midi | El mediodía | `audio/module6/az-zuhr.mp3` | Réutilisé |
| 618 | العَصْر | L'Après-midi | La tarde | `audio/module6/al-asr.mp3` | Réutilisé |
| 619 | المَسَاء | Le Soir | La tarde | `audio/module6/al-masa.mp3` | Réutilisé |
| 620 | المَغْرِب | Le Coucher | El atardecer | `audio/module6/al-maghrib.mp3` | Réutilisé |
| 621 | العِشَاء | La Nuit | La noche | `audio/module6/al-isha.mp3` | Réutilisé |
| 622 | أُخْت | Sœur | Hermana | `audio/module6/ukht.mp3` | Réutilisé |
| 623 | اِبْن | Fils | Hijo | `audio/module6/ibn.mp3` | Réutilisé |
| 624 | حَفِيد | Petit-fils | Nieto | `audio/module6/hafid.mp3` | Réutilisé |
| 625 | حَفِيدَة | Petite-fille | Nieta | `audio/module6/hafida.mp3` | Réutilisé |
| 626 | عَمّ | Oncle (côté père) | Tío (paterno) | `audio/module6/amm.mp3` | Réutilisé |
| 627 | عَمَّة | Tante (côté père) | Tía (paterna) | `audio/module6/amma.mp3` | Réutilisé |
| 628 | خَالَة | Tante (côté mère) | Tía (materna) | `audio/module6/khala.mp3` | Réutilisé |
| 629 | اِبْنُ العَمّ | Cousin (oncle pat.) | Primo (tío paterno) | `audio/module6/ibn-al-amm.mp3` | Réutilisé |
| 630 | اِبْنُ العَمَّة | Cousin (tante pat.) | Primo (tía paterna) | `audio/module6/ibn-al-amma.mp3` | Réutilisé |
| 631 | اِبْنُ الخَال | Cousin (oncle mat.) | Primo (tío materno) | `audio/module6/ibn-al-khal.mp3` | Réutilisé |
| 632 | اِبْنُ الخَالَة | Cousin (tante mat.) | Primo (tía materna) | `audio/module6/ibn-al-khala.mp3` | Réutilisé |
| 633 | صِفْر | Zéro | Cero | `audio/module6/sifr.mp3` | Réutilisé |
| 634 | وَاحِد | Un | Uno | `audio/module6/wahid.mp3` | Réutilisé |
| 635 | اِثْنَان | Deux | Dos | `audio/module6/ithnan.mp3` | Réutilisé |
| 636 | ثَلَاثَة | Trois | Tres | `audio/module6/thalatha.mp3` | Réutilisé |
| 637 | أَرْبَعَة | Quatre | Cuatro | `audio/module6/arbaa.mp3` | Réutilisé |
| 638 | خَمْسَة | Cinq | Cinco | `audio/module6/khamsa.mp3` | Réutilisé |
| 639 | سِتَّة | Six | Seis | `audio/module6/sitta.mp3` | Réutilisé |
| 640 | سَبْعَة | Sept | Siete | `audio/module6/sabaa.mp3` | Réutilisé |
| 641 | ثَمَانِيَة | Huit | Ocho | `audio/module6/thamaniya.mp3` | Réutilisé |
| 642 | تِسْعَة | Neuf | Nueve | `audio/module6/tisaa.mp3` | Réutilisé |
| 643 | عَشَرَة | Dix | Diez | `audio/module6/ashara.mp3` | Réutilisé |
| 644 | أَحَدَ عَشَر | Onze | Once | `audio/module6/ahada-ashar.mp3` | Réutilisé |
| 645 | اثْنَا عَشَر | Douze | Doce | `audio/module6/ithna-ashar.mp3` | Réutilisé |
| 646 | ثَلَاثَةَ عَشَر | Treize | Trece | `audio/module6/thalathata-ashar.mp3` | Réutilisé |
| 647 | أَرْبَعَةَ عَشَر | Quatorze | Catorce | `audio/module6/arbaata-ashar.mp3` | Réutilisé |
| 648 | خَمْسَةَ عَشَر | Quinze | Quince | `audio/module6/khamsata-ashar.mp3` | Réutilisé |
| 649 | سِتَّةَ عَشَر | Seize | Dieciséis | `audio/module6/sittata-ashar.mp3` | Réutilisé |
| 650 | سَبْعَةَ عَشَر | Dix-sept | Diecisiete | `audio/module6/sabaata-ashar.mp3` | Réutilisé |
| 651 | ثَمَانِيَةَ عَشَر | Dix-huit | Dieciocho | `audio/module6/thamaniyata-ashar.mp3` | Réutilisé |
| 652 | تِسْعَةَ عَشَر | Dix-neuf | Diecinueve | `audio/module6/tisaata-ashar.mp3` | Réutilisé |
| 653 | عِشْرُون | Vingt | Veinte | `audio/module6/ishrun.mp3` | Réutilisé |
| 654 | ثَلَاثُون | Trente | Treinta | `audio/module6/thalathun.mp3` | Réutilisé |
| 655 | أَرْبَعُون | Quarante | Cuarenta | `audio/module6/arbaun.mp3` | Réutilisé |
| 656 | خَمْسُون | Cinquante | Cincuenta | `audio/module6/khamsun.mp3` | Réutilisé |
| 657 | سِتُّون | Soixante | Sesenta | `audio/module6/sittun.mp3` | Réutilisé |
| 658 | سَبْعُون | Soixante-dix | Setenta | `audio/module6/sabuun.mp3` | Réutilisé |
| 659 | ثَمَانُون | Quatre-vingts | Ochenta | `audio/module6/thamanun.mp3` | Réutilisé |
| 660 | مِئَة | Cent | Cien | `audio/module6/miah.mp3` | Réutilisé |
| 661 | أَلْف | Mille | Mil | `audio/module6/alf.mp3` | Réutilisé |
| 662 | دَرَّاجَة هَوَائِيَّة | Vélo | Bicicleta | `audio/module6/darraja-hawaiya.mp3` | Réutilisé |
| 663 | دَرَّاجَة نَارِيَّة | Moto | Moto | `audio/module6/darraja-nariya.mp3` | Réutilisé |
| 664 | حَافِلَة | Bus | Autobús | `audio/module6/hafila.mp3` | Réutilisé |
| 665 | قِطَارٌ سَرِيع | TGV | Tren de alta velocidad | `audio/module6/qitar-sari.mp3` | Réutilisé |
| 666 | تَاكْسِي | Taxi | Taxi | `audio/module6/taxi.mp3` | Réutilisé |
| 667 | مِتْرُو | Métro | Metro | `audio/module6/metro.mp3` | Réutilisé |
| 668 | سْكُوتَر | Scooter | Scooter | `audio/module6/scooter.mp3` | Réutilisé |
| 669 | أَحْمَر | Rouge | Rojo | `audio/module6/ahmar.mp3` | Réutilisé |
| 670 | أَزْرَق | Bleu | Azul | `audio/module6/azraq.mp3` | Réutilisé |
| 671 | أَخْضَر | Vert | Verde | `audio/module6/akhdar.mp3` | Réutilisé |
| 672 | أَسْوَد | Noir | Negro | `audio/module6/aswad.mp3` | Réutilisé |
| 673 | أَبْيَض | Blanc | Blanco | `audio/module6/abyad.mp3` | Réutilisé |
| 674 | بُنِّي | Marron | Marrón | `audio/module6/bunni.mp3` | Réutilisé |
| 675 | بَنَفْسَجِي | Violet | Violeta | `audio/module6/banafsaji.mp3` | Réutilisé |
| 676 | أَصْفَر | Jaune | Amarillo | `audio/module6/asfar.mp3` | Réutilisé |
| 677 | بُرْتُقَالِي | Orange | Naranja | `audio/module6/burtuqali.mp3` | Réutilisé |
| 678 | نِيلِي | Indigo | Índigo | `audio/module6/nili.mp3` | Réutilisé |
| 679 | يَسْتَيْقِظُ | Il se réveille | Se despierta | `audio/module6/yastayqidh.mp3` | Réutilisé |
| 680 | يَتَوَضَّأُ | Il fait ses ablutions | Hace la ablución | `audio/module6/yatawadda.mp3` | Réutilisé |
| 681 | يُصَلِّي | Il prie | Reza | `audio/module6/yusalli.mp3` | Réutilisé |
| 683 | يَلْبَسُ | Il s'habille | Se viste | `audio/module6/yalbas.mp3` | Réutilisé |
| 684 | يَجْلِسُ | Il s'assoit | Se sienta | `audio/module6/yajlis.mp3` | Réutilisé |
| 685 | يَذْهَبُ | Il va / il part | Va / se va | `audio/module6/yadhhab.mp3` | Réutilisé |
| 686 | يَدْرُسُ | Il étudie | Estudia | `audio/module6/yadrus.mp3` | Réutilisé |
| 687 | يَكْتُبُ | Il écrit | Escribe | `audio/module6/yaktub.mp3` | Réutilisé |
| 688 | يَلْعَبُ | Il joue | Juega | `audio/module6/yalab.mp3` | Réutilisé |
| 689 | يَعُودُ | Il revient / rentre | Vuelve / regresa | `audio/module6/yaud.mp3` | Réutilisé |
| 690 | يَتَعَشَّى | Il dîne | Cena | `audio/module6/yataasha.mp3` | Réutilisé |
| 691 | يَنَامُ | Il dort / s'endort | Duerme / se duerme | `audio/module6/yanam.mp3` | Réutilisé |
| 692 | يَعُدُّ | Il compte | Cuenta | `audio/module6/yaoudd.mp3` | Réutilisé |
