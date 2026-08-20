---
sidebar_position: 9
---

# Base de données

Le module Base de données permet de vendre des services de bases de données gérées depuis CLIENTXCMS. Il prend en charge **MySQL/MariaDB**, **PostgreSQL** et **MongoDB**. Les services MySQL/MariaDB peuvent également être accessibles à travers **ProxySQL**.

:::info Module
Le module Base de données doit être activé dans CLIENTXCMS avant de pouvoir créer un serveur ou un produit. [Découvrez comment activer un module](../).
:::

## Fonctionnalités prises en charge

- Création automatique de la base de données et de l'utilisateur principal après une commande
- Gestion des bases de données et des utilisateurs supplémentaires depuis l'espace client
- Limites de bases de données, d'utilisateurs, de connexions et de stockage
- Suspension et réactivation automatiques
- Expiration et résiliation automatiques
- Mise à niveau du produit avec application des nouvelles limites au service
- Accès facultatif à phpMyAdmin pour MySQL/MariaDB
- Enregistrement et routage facultatifs des utilisateurs dans ProxySQL pour MySQL/MariaDB

## Préparer le serveur de bases de données

Avant d'ajouter le serveur dans CLIENTXCMS :

1. Installez et démarrez le moteur de base de données choisi.
2. Créez un compte d'administration dédié à CLIENTXCMS. Il doit pouvoir créer, modifier et supprimer les bases de données et les utilisateurs, puis attribuer les permissions sélectionnées par les clients.
3. Autorisez les connexions distantes provenant uniquement du serveur CLIENTXCMS.
4. Ouvrez le port de la base de données dans le pare-feu uniquement pour l'adresse IP de CLIENTXCMS.
5. Testez la connexion depuis l'hôte CLIENTXCMS avant d'enregistrer le serveur.

:::warning Sécurité en production
N'exposez pas publiquement le port d'administration. Utilisez une liste blanche d'adresses IP, un réseau privé ou un VPN, et réservez un mot de passe dédié à CLIENTXCMS. Ne réutilisez pas le compte `root` de la base de données lorsqu'un compte d'administration restreint peut être employé.
:::

### Informations de connexion par moteur

| Moteur | Port par défaut | Permissions requises pour le compte d'administration |
|--------|-----------------|-------------------------------------------------------|
| MySQL/MariaDB | `3306` | Gérer les bases, les utilisateurs, les privilèges, les limites de connexion et les quotas pris en charge par le serveur |
| PostgreSQL | `5432` | Créer et supprimer des bases et des rôles, modifier les limites des rôles et attribuer les privilèges des bases |
| MongoDB | `27017` | Créer et supprimer les bases/utilisateurs, puis gérer leurs rôles et leurs permissions |

Le nom d'hôte doit être résolu depuis le serveur CLIENTXCMS. Si le serveur de bases de données utilise un port personnalisé, saisissez ce port à la place du port par défaut.

### Extension PHP MongoDB

La prise en charge de MongoDB nécessite l'extension PHP **MongoDB** sur le serveur qui exécute CLIENTXCMS. Sous Debian ou Ubuntu, installez-la facilement avec :

```bash
sudo apt update
sudo apt install php-mongodb
```

Redémarrez ensuite le service PHP utilisé par votre installation et, si nécessaire, votre serveur web. Par exemple, remplacez `8.4` par votre version de PHP :

```bash
sudo systemctl restart php8.4-fpm
sudo systemctl restart nginx
```

Vérifiez que l'extension est bien activée :

```bash
php -m | grep mongodb
```

La commande doit retourner `mongodb`. Si CLIENTXCMS utilise une version de PHP différente de celle de la ligne de commande, installez et activez également l'extension pour cette version.

## Créer le serveur CLIENTXCMS

Accédez à `Espace d'administration` > `Paramètres` > `Approvisionnement` > `Serveurs` > `Nouveau`, puis sélectionnez **Database** comme type de serveur.

![Configuration du serveur de bases de données](/img/next_gen/extensions/modules/database/config_server.png)

Remplissez la fiche du serveur comme suit :

| Champ | Configuration |
|-------|---------------|
| **Nom** | Nom interne permettant d'identifier clairement le nœud de bases de données |
| **Type de serveur** | `Database` |
| **Nom d'hôte** | Nom d'hôte public ou privé utilisé par les clients pour se connecter |
| **Adresse IP** | Adresse utilisée par CLIENTXCMS pour joindre le serveur de bases de données |
| **Statut** | `Actif` pour autoriser le provisionnement sur ce serveur |
| **Port** | Port du moteur choisi, par exemple `3306`, `5432` ou `27017` |
| **Nom d'utilisateur** | Compte d'administration dédié à la base de données |
| **Mot de passe** | Mot de passe du compte d'administration |

Enregistrez le serveur, puis testez sa connexion. Un échec indique généralement une erreur d'hôte, de port, d'identifiants, de règles d'accès distant ou de pare-feu.

## MySQL/MariaDB avec ProxySQL

ProxySQL est facultatif et disponible uniquement pour les services MySQL/MariaDB. Laissez-le désactivé lorsque les clients se connectent directement au serveur MySQL.

![Configuration de ProxySQL](/img/next_gen/extensions/modules/database/config_proxy.png)

Lorsque ProxySQL est activé, CLIENTXCMS y enregistre et y gère automatiquement les utilisateurs provisionnés. Configurez les champs suivants :

| Champ | Configuration |
|-------|---------------|
| **Hôte d'administration ProxySQL** | Hôte de l'interface d'administration ProxySQL ; laissez-le vide uniquement si le module peut utiliser l'hôte du serveur de bases de données |
| **Port d'administration ProxySQL** | Généralement `6032` |
| **Utilisateur administrateur ProxySQL** | Compte autorisé à gérer les utilisateurs et la configuration d'exécution de ProxySQL |
| **Mot de passe administrateur ProxySQL** | Mot de passe du compte d'administration ProxySQL |
| **Connexions maximales par client** | Limite de connexions attribuée à chaque utilisateur client provisionné |
| **Groupe d'hôtes par défaut** | Groupe d'hôtes ProxySQL vers lequel les connexions des clients sont dirigées |

Le backend ProxySQL doit déjà pointer vers le serveur MySQL/MariaDB. Vérifiez que le groupe d'hôtes par défaut existe et que l'adresse fournie aux clients correspond à l'interface frontend de ProxySQL, et non à son interface d'administration.

## Créer un produit de base de données

Commencez par [créer un produit](../../settings/store/products.md#créer-un-nouveau-produit), puis sélectionnez **Database** comme type.

![Produit de base de données](/img/next_gen/extensions/modules/database/product.png)

Configurez son nom, son groupe, son prix, son stock, sa description et sa visibilité comme pour tout autre produit CLIENTXCMS. Enregistrez-le, puis sélectionnez **Configurer l'offre**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mysql" label="MySQL/MariaDB" default>

![Configuration d'une offre MySQL/MariaDB](/img/next_gen/extensions/modules/database/config_mysql.png)

Sélectionnez MySQL/MariaDB pour configurer les limites de stockage et de connexions, le jeu de caractères, la collation, les préfixes des ressources, l'accès à phpMyAdmin et le nombre maximal de bases et d'utilisateurs supplémentaires. Il s'agit du seul moteur compatible avec la configuration ProxySQL facultative.

</TabItem>
<TabItem value="postgresql" label="PostgreSQL">

![Configuration d'une offre PostgreSQL](/img/next_gen/extensions/modules/database/config_postgres.png)

Sélectionnez PostgreSQL pour provisionner des bases et des rôles sur le serveur PostgreSQL choisi. Configurez les préfixes générés pour les bases et les utilisateurs, ainsi que le nombre maximal de bases et d'utilisateurs supplémentaires.

</TabItem>
<TabItem value="mongodb" label="MongoDB">

![Configuration d'une offre MongoDB](/img/next_gen/extensions/modules/database/config_mongo.png)

Sélectionnez MongoDB pour configurer les limites de stockage et de connexions, les préfixes générés et le nombre maximal de bases et d'utilisateurs supplémentaires. L'extension PHP MongoDB présentée précédemment doit être activée avant le provisionnement.

</TabItem>
</Tabs>

Les champs disponibles dépendent du moteur sélectionné :

| Champ | Description |
|-------|-------------|
| **Serveur de bases de données** | Nœud sur lequel le service sera provisionné |
| **Moteur** | MySQL/MariaDB, PostgreSQL ou MongoDB |
| **Taille maximale (Mo)** | Quota de stockage attribué au service lorsque le moteur le prend en charge |
| **Connexions simultanées maximales** | Nombre maximal de connexions autorisées pour le service |
| **Jeu de caractères et collation** | Encodage et règles de tri par défaut des bases MySQL/MariaDB |
| **Préfixe de base de données** | Préfixe facultatif ajouté aux noms de bases générés |
| **Préfixe utilisateur** | Préfixe facultatif ajouté aux noms d'utilisateurs générés |
| **Sous-utilisateurs maximaux** | Nombre d'utilisateurs que le client peut créer en plus de l'utilisateur principal |
| **Bases de données maximales** | Nombre de bases que le client peut créer |
| **Activer phpMyAdmin** | Affiche l'accès à phpMyAdmin pour un service MySQL/MariaDB |

:::tip Préfixes
Utilisez des préfixes courts terminés par un tiret bas, comme `ctx_`. Ils permettent d'identifier facilement les ressources provisionnées tout en laissant suffisamment de place au nom unique généré.
:::

Choisissez des limites que le serveur de bases de données peut réellement appliquer et supporter. Veillez notamment à conserver des limites de connexion inférieures à la capacité globale du moteur en tenant compte de tous les produits hébergés sur le même nœud.

## Automatisation du service

Une fois le produit configuré, le module suit le cycle de vie standard des services CLIENTXCMS :

| Événement | Action automatisée |
|-----------|--------------------|
| **Création** | Crée la base et l'utilisateur principaux, génère les identifiants, applique les limites de l'offre et enregistre l'utilisateur dans ProxySQL lorsque celui-ci est activé |
| **Suspension** | Bloque l'utilisation du service de base de données jusqu'à sa réactivation |
| **Réactivation** | Rétablit l'accès au service existant et à ses ressources |
| **Mise à niveau** | Applique les limites et les options de la nouvelle configuration du produit |
| **Expiration/résiliation** | Supprime les ressources du service selon le processus d'expiration configuré dans CLIENTXCMS |

:::danger Résiliation et perte de données
La suppression d'une base de données est irréversible sans sauvegarde externe. Configurez soigneusement les rappels de paiement et les délais de résiliation, puis sauvegardez les bases de production en dehors du serveur provisionné.
:::

:::warning Importation des services existants impossible
Les services de bases de données ne peuvent pas être importés manuellement dans CLIENTXCMS. Cette restriction évite que CLIENTXCMS prenne le contrôle de bases, d'utilisateurs ou d'identifiants qui n'ont pas été créés et sécurisés par le module. Chaque service doit donc être provisionné automatiquement depuis un produit Database configuré.
:::

## Gestion depuis l'espace client

Les clients peuvent consulter leurs informations de connexion et gérer les ressources autorisées par les limites du produit.

### Bases de données

![Gestion des bases de données](/img/next_gen/extensions/modules/database/manage_databases.png)

Le client peut afficher ses bases, identifier la base principale, créer des bases supplémentaires jusqu'à la limite configurée et supprimer les bases supplémentaires éligibles.

### Utilisateurs et permissions

![Gestion des utilisateurs de bases de données](/img/next_gen/extensions/modules/database/manage_users.png)

Le client peut créer des utilisateurs supplémentaires, les associer à une ou plusieurs bases, choisir leurs permissions, réinitialiser leurs mots de passe et les supprimer. Les permissions disponibles dépendent du moteur sélectionné. N'accordez que les permissions nécessaires à l'application ; par exemple, un utilisateur destiné aux rapports n'a généralement besoin que d'un accès en lecture.

## Résolution des problèmes

- **La connexion au serveur échoue :** vérifiez le DNS, l'adresse IP, le port, le pare-feu, l'adresse d'écoute distante et les identifiants d'administration.
- **Le provisionnement échoue :** vérifiez que le compte d'administration peut créer des bases/utilisateurs et attribuer des permissions.
- **Un client ne peut pas se connecter :** contrôlez le statut du service, la limite de connexions, le réseau autorisé, les logs du moteur et le nom d'hôte affiché au client.
- **L'accès via ProxySQL échoue :** vérifiez le port d'administration `6032`, l'adresse de connexion frontend, les identifiants administrateur, le groupe d'hôtes par défaut et l'état du backend MySQL.
- **Une mise à niveau ne s'applique pas :** vérifiez que le moteur cible prend en charge la limite modifiée et consultez les logs CLIENTXCMS dans `Paramètres` > `Sécurité` > `Historique`.
