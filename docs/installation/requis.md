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
👉 [https://clientxcms.com/pricing](https://clientxcms.com/pricing)

## Installation on-premise
ClientXCMS peut également être installé en **autohébergement (on-premise)**, à condition de disposer :
- d’une **base de données** ;
- d’une **version de PHP compatible**.

Cette option requiert :
- des **connaissances techniques de base** en administration système ;
- un **plan Community actif sur la plateforme ClientXCMS**.

Les plans correspondants sont disponibles sur la page suivante :  
👉 [https://clientxcms.com/pricing](https://clientxcms.com/pricing)

### Prérequis techniques
- **Système d’exploitation** : Linux (Ubuntu 22.04+, Debian 11+, CentOS 8+) ou Windows Server
- **Espace disque** : minimum **25 Go** requis
- **Mémoire vive (RAM)** : minimum **2 Go** (4 Go recommandés)

:::info CTXHosting
Il est possible de louer une machine virtuelle **préconfigurée et optimisée** pour ClientXCMS.  
Nous vous recommandons de vous tourner vers notre projet [CTXHosting](https://ctxhosting.fr).
:::


### PHP

ClientXCMS nécessite **PHP 8.1 ou supérieur** pour fonctionner.  
Toutefois, il est **fortement recommandé d’utiliser PHP 8.3 ou supérieur** afin de bénéficier des dernières améliorations en matière de **performances**, de **sécurité** et de **compatibilité**.

PHP 8.3 bénéficie de **correctifs de sécurité jusqu’au 31 décembre 2027**.  
Au-delà de cette date, il sera préférable de migrer vers **une autre version de PHP** afin de continuer à recevoir les mises à jour de sécurité.

Pour connaître les versions de PHP actuellement supportées et recommandées, veuillez consulter le site officiel :  
👉 https://www.php.net/supported-versions.php

#### Vérifier la version de PHP installée

Vous pouvez vérifier la version de PHP installée sur votre serveur à l’aide de la commande suivante :

```bash
php -v
```

:::warning Fin de vie de PHP 8.1
PHP 8.1 arrivera à sa fin de vie (EOL – End Of Life) à partir de janvier 2026.
Cela signifie qu’il ne recevra plus de mises à jour de sécurité ni de correctifs officiels.

👉 Il est fortement conseillé de mettre à jour votre environnement PHP afin de garantir la sécurité et la stabilité de votre application.
:::

#### Extensions PHP

ClientXCMS nécessite plusieurs **extensions PHP** afin de fonctionner correctement.  
Assurez-vous que les extensions suivantes sont bien **installées et activées** sur votre serveur :

**Extensions essentielles :**

*Extensions requises par ClientXCMS :*
- **php-dom** - Manipulation des documents DOM/XML
- **php-gd** - Manipulation et génération d'images (QR codes, captchas)
- **php-intl** - Fonctions d'internationalisation (ICU)
- **php-libxml** - Bibliothèque XML de base
- **php-simplexml** - Traitement simplifié des données XML
- **php-zip** - Compression et décompression d'archives

*Extensions Laravel standard (incluses avec php-common) :*
- **php-common** (inclut : ctype, fileinfo, json, tokenizer, filter)
- **php-curl** - Communication HTTP/HTTPS et API externes
- **php-mbstring** - Support des chaînes de caractères multi-octets (UTF-8)
- **php-bcmath** - Calculs mathématiques de précision arbitraire
- **php-openssl** - Chiffrement SSL/TLS et certificats
- **php-pdo** - Interface d'accès aux bases de données
- **php-pdo-mysql** - Driver MySQL/MariaDB pour PDO
- **php-xml** - Support XML complémentaire

*Extensions recommandées :*
- **php-fpm** - Gestionnaire de processus FastCGI (production)
- **php-opcache** - Cache d'opcode pour meilleures performances

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

Pour l'installation de PHP 8.3 et ses extensions, veuillez consulter le guide d'installation détaillé selon votre environnement :
- [Installation sur serveur dédié/VPS](./selfhosted)
- [Installation avec Plesk](./plesk)
- [Installation avec Docker](./docker)

### Base de données

ClientXCMS nécessite une base de données pour stocker les informations de votre application.

#### MariaDB (Recommandé)
**MariaDB 10.11+** est la solution recommandée pour ClientXCMS en raison de :
- **Performances optimales** avec les requêtes Laravel
- **Compatibilité totale** avec l'écosystème MySQL
- **Stabilité** et support à long terme (LTS)
- **Open source** sans restrictions de licence

#### MySQL
**MySQL 8.0.38+** est également supporté et offre une excellente compatibilité.

#### Autres bases de données supportées
ClientXCMS peut fonctionner avec d'autres SGBD compatibles Laravel :
- **PostgreSQL 15+** (alternative robuste)
- **SQLite** (pour tests et développement uniquement)

:::info Recommandation production
Pour un environnement de production, nous recommandons fortement **MariaDB** pour ses performances et sa fiabilité éprouvée.
:::

### Serveur web

Le choix du serveur web impacte directement les performances de ClientXCMS.

#### Nginx (Recommandé)
**Nginx** est le serveur web recommandé pour ClientXCMS grâce à :
- **Performant** pour les fichiers statiques
- **Gestion optimisée** des connexions simultanées
- **Consommation mémoire réduite**
- **Configuration flexible** et moderne

#### Apache HTTP Server
**Apache 2.4+** reste une alternative viable avec :
- Configuration via fichiers `.htaccess`
- Large compatibilité avec les hébergements partagés
- Modules étendus disponibles

#### Serveurs d'applications PHP
- **PHP-FPM** (recommandé avec Nginx)
- **mod_php** (avec Apache)

:::tip Conseil performance
L'association **Nginx + PHP-FPM** offre les meilleures performances pour ClientXCMS en production.
:::

### Solutions d'installation

#### Installation manuelle
Guides détaillés par environnement :
- **[Serveur dédié/VPS](./selfhosted)** - Installation complète sur Linux
- **[Hébergement Plesk](./plesk)** - Déploiement via panneau Plesk

#### Conteneurisation Docker
**Docker** offre un déploiement rapide et isolé :
- **Environnement standardisé** (Nginx, PHP-FPM, MariaDB)
- **Déploiement en quelques minutes**
- **Isolation des dépendances**
- **Facilité de mise à jour**

👉 [Guide d'installation Docker](./docker)

### Déploiement automatisé avec Ansible

**Ansible** offre une solution d'automatisation complète pour le déploiement de ClientXCMS :

#### Avantages d'Ansible
- **Déploiement en une commande** - Installation complète automatisée
- **Configuration standardisée** - Environnement optimisé et sécurisé
- **Reproductibilité** - Déploiement identique sur tous vos serveurs
- **Gestion des mises à jour** - Automatisation des upgrades
- **Multi-serveurs** - Déploiement simultané sur plusieurs machines

#### Composants automatisés
- Installation et configuration de **PHP 8.3** avec toutes les extensions
- Configuration de **Nginx + PHP-FPM** optimisée
- Installation et sécurisation de **MariaDB**
- Configuration des **certificats SSL** (Let's Encrypt)
- Mise en place des **tâches cron** et **queues Laravel**
- Configuration des **permissions** et de la **sécurité**

#### Ressources disponibles
**[Guide de déploiement automatisé](./ansible)**  
**[Playbook Ansible officiel sur GitHub](https://github.com/ClientXCMS/ansible)**

:::tip Recommandation
Pour les déploiements en production ou multi-serveurs, Ansible est la méthode recommandée pour sa fiabilité et sa rapidité.
:::