---
sidebar_position: 1
---

# Wisp
Wisp.gg est un panel très répandu pour gérer des serveurs de jeux très rapidement et simplement. Ce module permet de créer les services de vos clients avec les performances choisis. Il permet de proposer tous les types d'œuf Wisp possible à la vente.

:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Wisp soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../)
:::

## Authentification
Créez un serveur CLIENTXCMS dans `Espace d'administration ` > `Paramètre` > `Approvisionnement` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Wisp".
![img](/img/next_gen/extensions/modules/wisp/images_1.png)

**Adresse IP** : Adresse IP du Pterodactyl.

**Nom d'hôte** : Nom d'hôte du Pterodactyl.

**Port** : 443 avec un domaine ou 80 avec une IP.

**Client API** : Clé client.

**Application API** : Clé application.

### Clé client 

Clé d'api client disponible sur votre Wisp `/account/api`
![img](/img/next_gen/extensions/modules/wisp/images_2.png)

**Description** : CLIENTXCMSAPI

**Allowed ips** : Laissez vide ou mettez l'IP de votre ClientXCMS pour plus de sécurité.

Votre clé d'api client vous sera donnée qu'une seule fois, après elle sera tronquée.
### Clé application

Clé d'api client (Account) disponible sur votre Wisp `/admin/api/new`

![img](/img/next_gen/extensions/modules/wisp/images_3.png)

**Permissions** : Comme dans la capture

**Description** : CLIENTXCMSAPI

## Configuration de l'offre
![img](/img/next_gen/extensions/modules/wisp/images_4.png)
- **Mémoire (MB)** : Mémoire du serveur
- **Espace Disque (MB)** : Espace disque du serveur
- **Block IO** : poids IO du serveur.
- **Swap** : Swap du serveur
- **ID Egg Wisp** : Eggs disponible
- **ID Location Wisp** : Location Wisp
- **Serveur** : Serveur Wisp où le service va être livrer
- **Port à attribuer au serveur** : Ports spécifiques (Exemple FIVEM)
- **Nom du serveur** : Nom du serveur**
- **Bases de données à attribuer au serveur** : Nombre de bases de données
- **Sauvegardes de données à attribuer au serveur** : Nombre de sauvegardes
- **Allocation à attribuer au serveur** : Nombre d'allocations (port à donner)

:::success Conseil de pro
Vous pouvez sélectionner plusieurs eggs et vos clients pourront choisir l'œuf Wisp qui veulent parmi la liste
:::

** Vous pouvez utiliser des variables pour personnaliser le nom du serveur.

### Variables disponibles 

| Variables         | Description                   |
|-------------------|-------------------------------|
| %owner_email%     | Email de l'utilisateur        |
| %owner_username%  | Nom + Prénom de l'utilisateur |
| %owner_firstname% | Prénom de l'utilisateur       |
| %owner_lastname%  | Nom de l'utilisateur          |
| %product_name%    | Nom du produit                |
| %order_id%        | Id de la commande             |
| %service_id%      | Id du service                 |

## Panel de gestion
![img](/img/next_gen/extensions/modules/wisp/images_5.png)

## Options supportées
- Espace disque supplémentaires (curseurs ou menu déroulant)
- Mémoire RAM supplémentaires (curseurs ou menu déroulant)
- Swap supplémentaire (curseurs ou menu déroulant)
- IO supplémentaire (curseurs ou menu déroulant)
- CPU supplémentaire (curseurs ou menu déroulant)
- Bases de données supplémentaires (curseurs ou menu déroulant)
- Allocations supplémentaires (curseurs ou menu déroulant)
- Sauvegardes supplémentaires (curseurs ou menu déroulant)
- Emplacement (location_id) (menu déroulant)
- IP dédiée (case à cocher)

### Environnement personnalisé
Vous pouvez également ajouter des options supplémentaires avec les variables d'enviroennement du serveur. Pour cela, rendez-vous dans `Paramètres` > `Approvisionnement` > `Options supplémentaires` et sélectionnez le type texte avec une clé personnalisée ayant le nom de la variable d'environnement du serveur préfixé par `wisp_custom_` par exemple `wisp_custom_fivem_license` pour demander une licence FiveM à votre client.

Voici un exemple de configuration d'une option supplémentaire pour demander une licence FiveM à votre client.

![img](/img/next_gen/extensions/modules/pterodactyl/image.png)

Lors d'une commande, le client pourra renseigner la valeur de cette variable d'environnement.

![img](/img/next_gen/extensions/modules/pterodactyl/image_fivem.png)