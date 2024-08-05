---
sidebar_position: 1
---

# Pterodactyl
Pterodactyl est un panel très répandu pour gérer des serveurs de jeux très rapidement et simplement. Ce module permet de créer les services de vos clients avec les performances choisis.
Il permet de proposer tous les types d'œuf Pterodactyl possible à la vente.


| Création 	| Suspension 	| Expiration 	| Unsuspend 	| Importation 	|
|----------	|------------	|------------	|-----------	|-------------	|
|     ✅    	|      ✅     	|      ✅     	|     ✅     	|      ✅      	|

:::warning Attention
Les versions 0.7 de Pterodactyl sont dépréciées et donc plus supportés sur ce module.
:::
:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Pterodactyl soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../)
:::

## Authentification
Créez un serveur ClientXCMS dans `Espace d'administration ` > `Paramètre` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Pterodactyl". 

![img](/img/next_gen/Modules/Pterodactyl/images_1.png)

**Adresse IP** : Sous domaine ou Adresse IP du Pterodactyl.

**Client API** : Clé client.

**Application API** : Clé application.

### Clé client 

Clé d'api client disponible sur votre Pterodactyl `/account/api`
![img](/img/next_gen/Modules/Pterodactyl/images_2.png)

**Description** : CLIENTXCMSAPI

**Allowed ips** : Laissez vide ou mettez l'IP de votre ClientXCMS pour plus de sécurité.

Votre clé d'api client vous sera donnée qu'une seule fois, après elle sera tronquée.
### Clé application
Clé d'api client (Account) disponible sur votre Pterodactyl `/admin/api/new`

![img](/img/next_gen/Modules/Pterodactyl/images_3.png)
**Permissions** : Comme dans la capture

**Description** : CLIENTXCMSAPI

## Configuration de l'offre
![img](/img/next_gen/Modules/Pterodactyl/images_4.png)
- **Mémoire (MB)**: Mémoire du serveur
- **Espace Disque (MB)**: Espace disque du serveur
- **Block IO**: poids IO du serveur.
- **Swap**: Swap du serveur
- **ID Egg Pterodactyl**: Eggs disponible
- **ID Location Pterodactyl**: Location Pterodactyl
- **Serveur**: Serveur Pterodactyl où le service va être livrer
- **Port à attribuer au serveur**: Ports spécifiques (Exemple FIVEM)
- **Nom du serveur**: Nom du serveur**
- **Bases de données à attribuer au serveur**: Nombre de bases de données
- **Sauvegardes de données à attribuer au serveur**: Nombre de sauvegardes
- **Allocation à attributer au serveur**: Nombre d'allocation (port à donner)

:::success Conseil de pro
Vous pouvez sélectionner plusieurs eggs et vos clients pourront choisir l'œuf pterodactyl qui veulent parmi la liste
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
![img](/img/next_gen/Modules/Pterodactyl/images_5.png)

