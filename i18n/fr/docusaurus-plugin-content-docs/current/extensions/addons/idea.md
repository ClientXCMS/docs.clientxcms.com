# Idea

L'addon **Idea** ajoute un portail de suggestions et de retours directement dans l'espace client de CLIENTXCMS. Vos clients peuvent proposer des idées, voter pour les améliorations qu'ils jugent prioritaires, discuter des propositions et suivre leur avancement.

Il offre une expérience comparable à une plateforme dédiée telle que Fider, tout en restant entièrement intégré à CLIENTXCMS.

:::info
L'addon **Idea** doit être installé et activé sur votre instance CLIENTXCMS pour utiliser ces fonctionnalités.
:::

## Espace client

La page des idées donne aux clients une vue d'ensemble des suggestions envoyées par la communauté. Chaque entrée affiche son nombre de votes, son statut, ses tags, son nombre de commentaires et son auteur.

La barre latérale permet aux clients de :

- rechercher une idée par mot-clé ;
- trier la liste, par exemple par popularité ;
- filtrer les idées par statut ou par tag ;
- proposer une nouvelle idée avec un titre, un contenu et un ou plusieurs tags.

Les statuts disponibles sont **Ouvert**, **Planifié**, **En cours**, **Terminé**, **Refusé** et **Dupliqué**. Ils rendent l'avancement de chaque suggestion explicite et donnent aux clients de la visibilité sur votre feuille de route.

![Portail des idées dans l'espace client](/img/next_gen/extensions/addons/idea/front_index.png)

### Consulter et suivre une idée

La page de détail affiche la suggestion complète, son statut actuel, ses tags, son auteur et son nombre de votes.

Depuis cette page, un client peut :

- voter pour l'idée ou retirer son vote ;
- suivre l'idée ou ne plus la suivre ;
- consulter la discussion et ajouter des commentaires ;
- lire une réponse officielle publiée par votre équipe.

Les réponses officielles sont mises en évidence afin de distinguer facilement les communications de l'équipe d'administration des commentaires de la communauté.

![Détail d'une idée, vote et réponse officielle](/img/next_gen/extensions/addons/idea/front_show.png)

## Administration

La gestion de l'addon est accessible depuis `Espace d'administration` → `Paramètres` → `Idées`.

L'espace d'administration propose trois sections :

- **Idées** : gérer les suggestions, leurs statuts, leurs tags et les réponses officielles ;
- **Commentaires des idées** : modérer les commentaires publiés sur les idées ;
- **Tags des idées** : organiser les suggestions avec des tags publics ou internes.

![Sections d'administration de l'addon Idea](/img/next_gen/extensions/addons/idea/admin_settings.png)

### Gérer les idées

La section **Idées** répertorie les suggestions envoyées depuis le portail. Les administrateurs peuvent effectuer une recherche par mot-clé et filtrer la liste par statut ou par tag. Le tableau indique également le titre, le statut, le nombre de votes et le nombre de commentaires de chaque idée.

Depuis cette section, les administrateurs peuvent créer ou gérer les idées, modifier leur statut et leurs tags, puis publier une réponse officielle pour communiquer une décision ou une avancée.

![Gestion des idées dans l'administration](/img/next_gen/extensions/addons/idea/admin_posts.png)

### Modérer les commentaires

La section **Commentaires des idées** centralise les commentaires publiés par les clients. Chaque entrée précise l'idée concernée, le client, la date de publication et le contenu du commentaire.

Les administrateurs peuvent rechercher les commentaires, appliquer le filtre disponible et supprimer les contributions inappropriées ou obsolètes.

![Modération des commentaires des idées](/img/next_gen/extensions/addons/idea/admin_comments.png)

### Gérer les tags

Les tags permettent de classer les idées et de faciliter la navigation dans le portail. Pour chaque tag, vous pouvez configurer :

- **Nom** : le libellé affiché dans l'interface ;
- **Slug** : l'identifiant du tag adapté aux URL ;
- **Couleur** : la couleur hexadécimale utilisée pour son badge ;
- **Public** : détermine si les clients peuvent voir et utiliser le tag. Désactivez cette option pour conserver un tag interne.

La même page permet de créer, modifier, enregistrer ou supprimer des tags.

![Création et gestion des tags des idées](/img/next_gen/extensions/addons/idea/admin_tags.png)

## Flux de travail recommandé

1. Créez des tags correspondant à vos produits ou catégories de retours.
2. Examinez les nouvelles idées et attribuez-leur les tags et le statut appropriés.
3. Modérez les échanges entre clients lorsque cela est nécessaire.
4. Utilisez les réponses officielles pour confirmer la prise en compte d'une suggestion ou expliquer votre décision.
5. Actualisez le statut à mesure que l'idée progresse dans votre feuille de route.

Ce fonctionnement informe vos clients tout en aidant votre équipe à identifier les améliorations les plus demandées grâce aux votes et aux discussions.

## Découvrir Idea en action

L'addon Idea est utilisé par CLIENTXCMS pour son propre portail public de suggestions. Rendez-vous sur [clientxcms.com/ideas](https://clientxcms.com/ideas) pour découvrir l'extension en conditions réelles, voter pour les prochaines améliorations et voir comment elle crée un lien direct et transparent avec la communauté.
