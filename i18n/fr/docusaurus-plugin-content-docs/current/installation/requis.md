---
sidebar_position: 1
---
# Prérequis

Cette section décrit les conditions requises pour l’installation et l’utilisation de **ClientXCMS**.

## Installation SaaS
L’utilisation de ClientXCMS en mode **Software as a Service (SaaS)** permet de profiter de l’application directement au sein de l’écosystème ClientXCMS, sans avoir à gérer les aspects techniques tels que l’installation, l’hébergement ou la maintenance.

Les prérequis sont les suivants :
- disposer d’un **compte sur la plateforme ClientXCMS** ;
- souscrire à un **plan actif**.

Les plans sont disponibles à la commande à l’adresse suivante :  
[https://clientxcms.com/pricing](https://clientxcms.com/pricing)

## Installation on-premise
ClientXCMS peut également être installé en **autohébergement (on-premise)**, à condition de disposer :
- d’une **base de données** ;
- d’une **version de PHP compatible**.

Cette option requiert :
- des **connaissances techniques de base** en administration système ;
- un **plan Community actif sur la plateforme ClientXCMS**.

Les plans correspondants sont disponibles sur la page suivante :  
[https://clientxcms.com/pricing](https://clientxcms.com/pricing)

### Prérequis techniques
- **Système d’exploitation** : toute distribution Linux ou Windows Server capable de fournir la version de PHP requise ci-dessous, une base de données compatible, et Composer. Il n'y a pas de liste figée de distributions "supportées" à maintenir ici - ce qui compte, c'est si les dépôts de paquets de votre distribution (par défaut ou tiers) peuvent fournir les versions logicielles requises.
- **Espace disque** : minimum **25 Go** requis
- **Mémoire vive (RAM)** : minimum **2 Go** (4 Go recommandés)

### PHP

La version de PHP requise par ClientXCMS est déclarée dans le fichier `composer.json` de la version que vous installez (`require.php`) - c'est la source de vérité, pas un numéro de version écrit sur cette page. Vérifiez-la directement dans votre copie téléchargée :

```bash
grep '"php"' composer.json
```

:::warning
La plupart des distributions Linux fournissent par défaut une version de PHP plus ancienne que celle requise par ClientXCMS. Plutôt que de compiler PHP depuis les sources, utilisez le dépôt PHP tiers officiel de votre distribution : [le dépôt de Sury](https://packages.sury.org/php/) pour Debian/Ubuntu, [le dépôt de Remi](https://blog.remirepo.net/) pour RHEL/CentOS/Rocky/AlmaLinux.
:::

#### Vérifier la version de PHP installée

Vous pouvez vérifier la version de PHP installée sur votre serveur à l’aide de la commande suivante :

```bash
php -v
```

:::warning
Une version de PHP hors support ne reçoit plus de mises à jour de sécurité. Vérifiez le statut de votre version installée sur [php.net/supported-versions.php](https://www.php.net/supported-versions.php) et mettez à jour si elle a atteint sa fin de vie.
:::

#### Extensions PHP

La liste exacte des extensions PHP requises est déclarée dans le fichier `composer.json` de la version que vous installez (`require`, clés préfixées par `ext-`). Vérifiez-la directement :

```bash
grep '"ext-' composer.json
```

`php-fpm` et `php-opcache` sont également recommandées en production, même si ce ne sont pas des extensions déclarées via Composer.

#### Vérifier les extensions PHP installées

Vous pouvez afficher la liste des extensions PHP actuellement activées sur votre serveur à l’aide de la commande suivante :

```bash
php -m
```

Ou vérifier une extension spécifique :
```bash
php -m | grep -i "nom_extension"
# Exemple : php -m | grep -i "curl"
```

Pour l'installation de PHP et de ses extensions, veuillez consulter le guide d'installation détaillé selon votre environnement :
- [Installation sur serveur dédié/VPS](./selfhosted)
- [Installation avec Plesk](./plesk)
- [Installation avec Docker](./docker)

### Base de données

ClientXCMS nécessite une base de données pour stocker les informations de votre application. Il s'appuie sur la couche base de données de Laravel : la version minimale supportée pour chaque moteur est donc celle [officiellement supportée par Laravel](https://laravel.com/docs/database#introduction) pour la version de Laravel déclarée dans `composer.json` - pas un numéro de version maintenu sur cette page.

#### MariaDB (Recommandé)
MariaDB est la solution recommandée pour ClientXCMS en raison de :
- **Performances optimales** avec les requêtes Laravel
- **Compatibilité totale** avec l'écosystème MySQL
- **Stabilité** et support à long terme (LTS)
- **Open source** sans restrictions de licence

#### MySQL
Également supporté, et offre une excellente compatibilité.

#### Autres bases de données supportées
ClientXCMS peut fonctionner avec d'autres SGBD compatibles Laravel :
- **PostgreSQL** (alternative robuste)
- **SQLite** (pour tests et développement uniquement)

:::info Recommandation production
Pour un environnement de production, nous recommandons fortement **MariaDB** pour ses performances et sa fiabilité éprouvée.
:::

### Serveur web
ClientXCMS est compatible avec la plupart des serveurs web. Il est recommandé d'utiliser [Apache ou Nginx](./selfhosted) ou un [hébergement Plesk](./plesk). 
### Docker
Vous pouvez également installer ClientXCMS via Docker. Pour cela, vous devez disposer de Docker et Docker Compose installés sur votre serveur. Vous pouvez suivre les instructions d'installation via Docker [ici](./docker).
