# Captures d'écran

## Par défaut : texte vérifié à la source, pas de capture

Pour toute interface admin ou développeur (formulaire, page de paramètres, sortie CLI, dashboard), le défaut est de DÉCRIRE en texte plutôt que de montrer une capture. Cette doc sert des développeurs et des agents IA : un texte précis se lit, se cite, se grep et ne casse jamais visuellement en dark mode. Une capture est un pari sur la stabilité de l'UI qui, historiquement, a mal vieilli sur ce site, avec des URLs externes cassées (CDN Discord), des versions et libellés obsolètes, et aucune paire clair/dark - voir les captures déjà remplacées dans `docs/developpers/` pour des exemples concrets.

Méthode, dans cet ordre :
1. **Lire l'image existante** (l'outil de lecture de fichier affiche aussi les images) pour savoir ce qu'elle montre réellement, jamais deviner depuis son nom de fichier ou le texte alentour.
2. **Vérifier contre le code source réel** ce qui est affirmable durablement, comme les routes (`routes/admin.php`, `routes/web.php`), les règles de validation (`FormRequest::rules()`), les contrôleurs et les DTOs. Ce qui vient du code (une route qui existe, un champ requis vs optionnel, une valeur par défaut) est stable et vérifiable, alors que ce qui vient uniquement de la capture (libellé exact d'un bouton, couleur, disposition en colonnes, nombre d'onglets) est fragile et volatil.
3. **Rédiger un texte générique et précis** : décrire le COMPORTEMENT et les CONTRAINTES réelles (l'existence de champs requis/optionnels, l'effet d'une action, un mécanisme sous-jacent), jamais la mise en page exacte ni une liste figée d'éléments qui peut évoluer sans que la doc suive - items de menu enregistrés dynamiquement par des extensions, tags générés par annotation, texte marketing d'une bannière, ou champs précis d'un formulaire (un champ peut être ajouté ou retiré du `FormRequest` sans qu'on pense à mettre à jour une énumération figée dans la doc). Dire « remplissez les champs requis » plutôt que lister chaque nom de champ, même si la liste vient d'être vérifiée dans le code au moment de l'écriture. Voir `writing-style.md` pour la forme (pas de deux-points en milieu de phrase, conjonctions de coordination).
4. **Ne jamais énumérer par cœur ce qu'une commande CLI ou un formulaire va demander** sans avoir lu la classe qui la définit (`Command::$signature`, `Command::handle()`, `FormRequest::rules()`), car une capture tronquée ou un souvenir approximatif produit une description fausse (ex. affirmer qu'un champ est demandé interactivement alors qu'il est obligatoire en option et fait échouer la commande sinon).
5. Si un fait ne peut pas être vérifié à la source (UI tierce comme Pterodactyl/Proxmox/phpMyAdmin, ou détail purement visuel), le dire tel quel à partir de la lecture directe de l'image, sans extrapoler au-delà de ce qui est vu.

## Quand une capture reste légitime

Une capture (toujours en paire clair/dark, cf. section suivante) se justifie quand le rendu VISUEL est l'information : un aperçu de thème, un graphique, une palette de couleurs, un résultat de rendu front-end. Pas quand il s'agit d'un formulaire, d'une liste de champs, ou d'une sortie de commande - ça, ça se décrit.

## Application : au fil de l'eau, jamais en migration de masse

Cette règle s'applique PAGE PAR PAGE, à chaque fois qu'une page contenant des captures est de toute façon éditée pour une autre raison (correctif, ajout, revue). **Ne jamais lancer une migration dédiée sur tout le site pour supprimer les captures existantes** : le volume est trop important (plusieurs centaines sur ce dépôt) pour être traité en un lot sans perte de qualité ni revue humaine. Une capture rencontrée en dehors du scope de la tâche en cours n'est pas traitée, sauf demande explicite.

## Paires clair/dark (captures qui restent légitimes)

- Toute capture d'écran d'une interface ClientXCMS doit être fournie en paire : une version thème clair, une version thème sombre.
- Les deux images sont hébergées dans le dépôt (voir la structure des assets dans `CLAUDE.md`), jamais une seule des deux variantes.
- Une capture qui devient obsolète après un changement d'UI est refaite dans la même paire clair/dark, pas laissée partiellement à jour.
