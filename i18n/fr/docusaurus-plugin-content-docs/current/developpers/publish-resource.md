---
sidebar_position: 3
---

# Publier une ressource sur le marketplace

Le programme développeur CLIENTXCMS permet aux créateurs de publier des **thèmes**, **modules** et **addons** pour la communauté. Une ressource peut être gratuite ou payante. En tant que développeur, vous devez la maintenir, documenter son fonctionnement, accompagner ses utilisateurs et publier des mises à jour compatibles.

Ce guide présente le parcours commun de publication. Consultez ensuite les instructions propres aux [addons et modules](./extensions/publish-marketplace) ou aux [thèmes](./themes/publish-marketplace) avant d'envoyer votre ressource.

## Activer votre espace développeur

Connectez-vous puis ouvrez l'[espace des ressources CLIENTXCMS](https://clientxcms.com/client/ressources). Si votre espace développeur n'est pas encore actif, remplissez le formulaire d'inscription :

- **Nom du créateur** : nom public affiché sur vos ressources marketplace ;
- **URL de votre avatar** : URL publique facultative de votre image de profil ;
- **Contact du créateur** : adresse e-mail ou identifiant Discord utilisable par les clients ;
- **Règlement du marketplace** : lisez et acceptez le règlement avant d'activer votre espace.

Choisissez des informations publiques durables et gardez votre moyen de contact à jour.

![Formulaire d'inscription au programme développeur](/img/next_gen/developpers/marketplace/rejoindre-developpeur.png)

## Espace développeur

L'espace développeur centralise vos ressources publiées et votre profil. Pour chaque ressource, il affiche le nombre de téléchargements, les vues et son statut actuel. Vous pouvez également consulter votre certification, actualiser votre profil public, ouvrir une ressource existante ou en créer une nouvelle.

![Espace développeur CLIENTXCMS](/img/next_gen/developpers/marketplace/espace-developpeur.png)

### Certification et ressources payantes

Vous devez être **développeur certifié** pour définir un prix et vendre une ressource. Faites la demande de certification depuis votre espace développeur et certifiez que vous êtes en mesure d'émettre des factures afin que CLIENTXCMS puisse vous reverser vos gains. Effectuez cette démarche avant de soumettre un thème, module ou addon payant.

Une ressource gratuite ne nécessite pas de renseigner un prix de vente.

## Créer une ressource

Sélectionnez **Créer** depuis l'espace développeur, puis renseignez les champs communs.

### Informations de base

| Champ | Description |
| --- | --- |
| **Type de ressource** | Sélectionnez Thème, Module ou Addon. Ce choix détermine les champs techniques affichés ensuite. |
| **Nom de la ressource** | Nom public et facilement identifiable du produit. |
| **Identifiant unique (UUID)** | Identifiant stable en minuscules utilisé dans l'URL du marketplace et par la ressource. Ne le modifiez pas après publication. |
| **Groupe** | Catégorie du marketplace correspondant le mieux à la ressource. |
| **Tags** | Fonctionnalités pertinentes, par exemple utilitaire, sécurité, performance, intégration ou contenu inclus. Les tags restent soumis à la validation de l'administrateur. |

L'UUID doit correspondre à l'identifiant employé par le code et son dossier d'installation. Consultez le guide spécialisé pour connaître la convention exacte de votre type de ressource.

![Informations de base d'une ressource marketplace](/img/next_gen/developpers/marketplace/soumettre-ressource-informations.png)

### Contenu et média

- **Description courte** : une phrase claire résumant la ressource et son principal bénéfice.
- **Description** : présentez le besoin couvert, les fonctionnalités, les prérequis, l'installation, la configuration et les conditions de support. Utilisez des titres, listes, liens et captures pour faciliter la lecture.
- **Miniature** : importez une image JPG, PNG ou JPEG claire et reconnaissable au format d'une carte marketplace.

Promettez uniquement les fonctionnalités présentes dans la version soumise. N'insérez jamais d'identifiants, de clés API ou d'autres secrets dans la description ou les captures.

![Champs de description et de miniature](/img/next_gen/developpers/marketplace/soumettre-ressource-contenu.png)

## Soumettre et maintenir votre ressource

Vérifiez les métadonnées, le contenu, l'image, les champs techniques et le prix, puis sélectionnez **Soumettre la ressource pour validation**. Son statut est ensuite visible depuis votre tableau de bord.

Après la publication :

1. Maintenez à jour la description marketplace, la compatibilité, la documentation et le contact de support.
2. Testez chaque archive sur une installation CLIENTXCMS propre et compatible.
3. Créez une nouvelle version depuis l'interface développeur CLIENTXCMS pour chaque mise à jour et fournissez des notes de version utiles.
4. Mettez à jour la ressource marketplace existante au lieu de créer une fiche en double.
5. Ne réutilisez jamais un numéro de version pour un code différent.

## Créer une version

La création et la publication des versions s'effectuent directement depuis l'interface développeur CLIENTXCMS. Ouvrez la ressource existante, sélectionnez l'option permettant d'ajouter une version, puis renseignez :

- **Version de l'extension** : identifiant technique de la version, par exemple `v1.1` ;
- **État** : état de la version, par exemple stable ;
- **Nom de la version** : nom public affiché pour cette version ;
- **Release** : sélectionnez une release GitHub existante ou choisissez **Créer une release dynamiquement** afin que l'interface publie le changelog sur GitHub ;
- **Journal des modifications** : ajoutez les entrées dans Ajout, Suppression, Modification, Correction, Autre ou Sécurité.

Vérifiez le journal, puis sélectionnez **Publier la version**. Ne créez pas une nouvelle ressource marketplace pour une mise à jour et ne réutilisez pas un numéro de version pour un code différent.

![Création d'une version depuis l'interface développeur](/img/next_gen/developpers/marketplace/creer-version.png)

GitHub reste l'emplacement recommandé pour héberger et maintenir les sources, mais les versions du marketplace sont gérées depuis l'interface CLIENTXCMS. Le [guide des extensions](./extensions/publish-marketplace#préparer-le-dépôt-github) et le [guide des thèmes](./themes/publish-marketplace#préparer-le-dépôt-github) décrivent les structures de dépôt attendues.
