# Hizb 60 — Licences et sources (brouillon, à valider par Houda)

## Texte coranique
- **Source** : King Fahd Glorious Qur'an Printing Complex (KFGQPC), via le dépôt structuré `thetruetruth/quran-data-kfgqpc` (GitHub) — `hafs/data/hafsData_v18.json` et `warsh/data/warshData_v10.json`.
- **Site officiel** : https://qurancomplex.gov.sa/quran-dev/
- **Licence** : aucune mention de licence trouvée sur le dépôt GitHub ni dans les README des jeux de données consultés (05/08/2021 pour la v10 Warsh, v18 pour Ḥafṣ).
- **⚠️ À vérifier avant toute vente** : le texte coranique lui-même (le Muṣḥaf) n'est en général pas soumis à un droit d'auteur restrictif, mais le *typeset* KFGQPC spécifique (police, mise en page) peut avoir des conditions d'usage propres au Complexe. Je n'ai pas trouvé de confirmation explicite autorisant un usage commercial de ce typeset précis. **Ne pas considérer ce point comme réglé tant que Houda n'a pas une confirmation écrite ou n'a pas basculé vers une source dont la licence commerciale est explicite** (ex. Tanzil.net précise ses conditions pour le texte Ḥafṣ ; une source équivalente reste à trouver côté Warsh).

## Illustrations (dessins des sourates, coloriages, éléments d'accueil)
- **Source** : générées par Houda via ChatGPT (image generation), fournies en PNG/SVG.
- **Droits** : propriété de Houda en tant que commanditaire des images (sous réserve des conditions d'utilisation d'OpenAI applicables à la génération d'images, à vérifier par Houda directement auprès d'OpenAI si usage commercial).
- Aucune image ne représente le Prophète ﷺ, un prophète, un Compagnon ou un personnage de récit (vérifié visuellement cas par cas, voir le tableau fourni à Houda).

## Audio / récitateurs
- **Aucun fichier audio tiers n'a encore été intégré.** Rien n'est téléchargé ni hébergé tant que la source et les conditions d'utilisation commerciale n'ont pas été vérifiées et validées par Houda, conformément à la règle du projet.
- Les enregistrements de Houda ne sont **pas utilisés** dans Hizb 60 (décision du 31/10/2026) : seuls des récitateurs externes sont prévus.
- **Recherche du 01/11/2026 — aucune source gratuite trouvée n'autorise clairement un usage commercial :**
  - **EveryAyah.com** : pas de licence officielle trouvée sur le site lui-même ; la lecture la plus fiable (via un projet miroir) limite l'usage à du non-commercial (enseignement, mémorisation, apps gratuites, recherche) avec obligation de créditer le récitateur et le site.
  - **Quran.com / Quran Foundation API** : les conditions développeur (Developer Terms) l'écrivent noir sur blanc — tout usage de l'audio au-delà du simple affichage dans l'app (stockage, lecture hors-ligne, redistribution, usage commercial) demande un **accord de licence commerciale écrit séparé** avec la Quran Foundation.
  - **Omar Al-Qazabri (Warsh)** : aucune licence commerciale publique trouvée. Ses enregistrements circulent via des agrégateurs tiers (Assabile.com, SurahQuran.com) qui n'indiquent pas les droits de réutilisation.
  - **Conclusion** : aucune de ces sources ne peut être intégrée telle quelle dans une application payante. Trois pistes possibles : (1) contacter Assabile.com (qui héberge le catalogue structuré d'Al-Qazabri) pour demander une licence commerciale ; (2) souscrire à un fournisseur audio coranique payant avec licence claire ; (3) faire enregistrer un récitateur consentant spécifiquement pour Dar Al-Kalimah.
  - **Statut (01/11/2026)** : Houda a envoyé une demande de licence/autorisation (destinataire à préciser ici une fois connu). **En attente de réponse.**
  - Email de demande préparé (FR + AR) pour le Ministère des Habous et des Affaires Islamiques / Institut Mohammed VI / SNRT (chaîne Assadissa, Mohammed VI du Saint Coran), signé Houda Lahrichi — à envoyer via leurs formulaires de contact (habous.gov.ma, snrt.ma), aucune adresse email directe trouvée en ligne.
  - Ne rien intégrer tant que la réponse n'est pas reçue et positive.
  - Abdel Basset Abdel Samad et « Al-Haftari » vérifiés aussi : aucune licence commerciale publique trouvée pour aucun des deux (voir échange du 01/11/2026). Le fait qu'un récitateur soit décédé ne rend pas ses enregistrements libres de droits.

## ✅ RÉSOLU (02/11/2026) — MP3Quran.net a répondu, autorisation accordée
- **Demande envoyée par Houda** le 01/11/2026 à `mp3quran.net@gmail.com`, précisant explicitement qu'il s'agit d'une app **payante** et nommant Omar Al-Qazabri (Warsh).
- **Réponse reçue** le 01/11/2026 de `mp3quran.net@gmail.com` : « يحق لكم استخدام اي مادة في الموقع تريدونها » — « Vous avez le droit d'utiliser tout le contenu du site que vous voulez. » Accompagnée du lien vers leur documentation API/minutage des versets.
- **Vérifié techniquement (02/11/2026)** : MP3Quran expose une API publique gratuite, sans clé (`api-staging.mp3quran.net/v4`), avec minutage verset par verset (`has_ayah_timings: true`) — exactement ce qu'il faut pour le surlignage pendant l'écoute.
  - **Omar Al-Qazabri** (`omar-kazabri/r1`) — riwaya Warsh ʿan Nāfiʿ, murattal, couverture complète (114 sourates), minutage disponible. Fichiers audio : `https://cdn.mp3quran.net/audio/omar-kazabri/r1/{sourate}.mp3`.
  - **Mahmoud Khalil Al-Ḥuṣarī** (`mahmoud-husary/r1` murattal, `/r2` mujawwad) — riwaya Ḥafṣ ʿan ʿĀṣim, couverture complète, minutage disponible. Récitateur historiquement connu pour sa lecture lente et claire, adaptée à l'apprentissage (correspond au besoin « muʿallim lente » du brief).
- **Échange complet (01/11/2026, même fil)** : Houda a recontacté MP3Quran pour confirmer explicitement que l'autorisation couvre bien l'app payante Hizb 60 vendue dans la boutique Dar Al-Kalimah, et a proposé une formule de crédit. Réponse de MP3Quran : **« نعم يشمل وما يحتاج ذكر اسم موقعنا »** (« Oui, ça inclut [l'app payante], et pas besoin de mentionner le nom de notre site »). **Confirmation explicite, écrite, sans ambiguïté.**
- **Aucune mention de MP3Quran.net n'est donc nécessaire dans l'app** — ils l'ont dit eux-mêmes.
- **Point non confirmé explicitement** : si un récitateur individuel revendiquait ses droits séparément de MP3Quran (question 2 de notre email), ils n'ont pas répondu sur ce point précis — risque résiduel faible mais pas nul, vu qu'ils sont le site qui héberge et distribue ces fichiers.
- **Choix des récitateurs (02/11/2026)** : **Warsh → Omar Al-Qazabri** (`omar-kazabri/r1`) ; **Ḥafṣ → Mustafa Ismail**, murattal (`mustafa-ismail/r1`) et mujawwad (`mustafa-ismail/r2`), les deux versions.
- **Toujours en attente** : réponse du Ministère des Habous / SNRT (email envoyé en parallèle le 01/11/2026).
- **Peut maintenant être intégré** dans l'app.
