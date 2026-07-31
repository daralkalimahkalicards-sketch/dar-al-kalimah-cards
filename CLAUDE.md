# Dar Al-Kalimah — Politique de stabilité du projet

Dar Al Kalimah est en phase de stabilisation. Une fonctionnalité testée et validée est une fonctionnalité **stable**.

## Règle permanente

Une fonctionnalité stable ne doit **jamais** être modifiée uniquement pour :
- harmoniser le code ;
- moderniser l'architecture ;
- renommer des classes, variables ou fichiers ;
- faire du nettoyage préventif ;
- appliquer une refactorisation esthétique ;
- uniformiser des implémentations différentes mais fonctionnelles.

Le fait qu'il existe plusieurs implémentations différentes n'est **pas un problème** si elles fonctionnent correctement.

## Justifications valables pour modifier une fonctionnalité existante

Toute modification doit être justifiée par au moins un de ces cas :

1. un bug reproductible ;
2. une faille de sécurité ;
3. un problème de performance démontré ;
4. une nouvelle fonctionnalité explicitement demandée ;
5. une évolution technique expressément validée par Houda.

## Procédure obligatoire avant toute intervention

Avant de modifier une fonctionnalité existante, présenter systématiquement :

- le problème identifié ;
- la preuve qu'il existe réellement ;
- sa cause exacte ;
- les fichiers concernés ;
- la correction minimale nécessaire ;
- les risques de régression ;
- les impacts éventuels sur les autres modules.

**Aucune modification ne doit être effectuée avant l'accord explicite de Houda.**

Privilégier systématiquement des corrections ciblées et minimales plutôt que des refactorisations globales.

---

Cette politique s'applique à tous les développements futurs de Dar Al-Kalimah : leçons, quiz, modules, banque de mots, système audio, et tout autre fichier du projet.
