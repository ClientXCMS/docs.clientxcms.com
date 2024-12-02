---
sidebar_position: 1
---

# PteroBox

PteroBox est une solution innovante, idéale pour les hébergeurs utilisant **Pterodactyl** ou **Wisp**. Ce module permet à vos clients de créer, modifier et supprimer leurs propres serveurs de jeu facilement, tout en garantissant une allocation précise des ressources dédiées. Proposez une expérience flexible et optimisée pour tous les types de jeux et besoins.

:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module PteroBox et Pterodactyl/Wisp soit activés sur votre CLIENTXCMS.
:::

## Authentification
Si ce n'est pas déjà fait, il suffit d'ajouter un serveur sur votre ClientXCMS, soit [Pterodactyl](https://docs.clientxcms.com/extensions/modules/Pterodactyl#authentification), soit [Wisp](https://docs.clientxcms.com/extensions/modules/Wisp#authentification), en fonction du panneau de jeux que vous utilisez.

### Configuration de l'offre  
![img](/img/next_gen/extensions/modules/pterobox/images_1.png)  

- **Mémoire (Go)** : Quantité totale de mémoire RAM allouée.  
- **Disque (Go)** : Espace disque total alloué.  
- **Serveurs autorisés** : Nombre maximal de serveurs que le client peut créer.  
- **I/O** : Poids des entrées/sorties (IO) alloué par serveur.  
- **Œufs de jeux** : Types d’œufs (Eggs) disponibles pour les serveurs.  
- **Emplacement** : Localisation des instances Pterodactyl ou Wisp.  
- **Serveur** : Serveur Pterodactyl ou Wisp configuré sur ClientXCMS où les serveurs de la Pterobox sont hébergés.  
- **Processeur** : Nombre total de cœurs CPU alloués (1 = 100 %, 3 = 300 %, etc.).  
- **Swap** : Quantité de mémoire virtuelle (swap) allouée par serveur.  
- **Bases de données** : Nombre total de bases de données allouées.  
- **Allocations** : Nombre total de ports réseau alloués.  
- **Sauvegardes** : Nombre total de sauvegardes autorisées.  
- **Plage de ports (optionnel)** : Plage spécifique de ports réseau alloués pour chaque serveur.  
- **Nom du serveur (optionnel)** : Nom par défaut attribué à chaque serveur créé dans la Pterobox.  
- **Description du serveur** : Description par défaut attribuée à chaque serveur créé dans la Pterobox.

:::success Conseil de pro
Vous pouvez sélectionner plusieurs eggs et vos clients pourront choisir l'œuf qui veulent pour chacun de leurs serveurs créés, parmi la liste.
:::

** Vous pouvez utiliser des variables pour personnaliser le nom du serveur.

### Variables disponibles 
| Variables            | Description                   |
|----------------------|-------------------------------|
| %service_expiration% | Date d'expiration du service  |
| %service_id%         | ID du service                 |
| %product_name%       | Nom du produit                |
| %owner_email%        | Email de l'utilisateur        |
| %owner_username%     | Nom + Prénom de l'utilisateur |
| %owner_firstname%    | Prénom de l'utilisateur       |
| %owner_lastname%     | Nom de l'utilisateur          |

## Aperçus
### Point de vue : Client
#### Panneau de gestion des serveurs
![img](/img/next_gen/extensions/modules/pterobox/pov_client_overview.png)

#### Création de serveur
![img](/img/next_gen/extensions/modules/pterobox/pov_client_create-server.png)


### Point de vue : Administrateur
![img](/img/next_gen/extensions/modules/pterobox/pov_admin.png)