---
sidebar_position: 2
---

# Script d'installation

Le **script d'installation** met en place une stack ClientXCMS complète sur un
serveur Linux vierge en une seule commande. Il installe PHP 8.3, MariaDB, Nginx,
Redis et Node.js, télécharge ClientXCMS, configure le tout et (au choix) obtient
un certificat Let's Encrypt, puis passe la main à l'installateur web pour
l'activation de la licence.

C'est la manière la plus rapide de s'autohéberger. Si vous préférez installer
chaque composant à la main, consultez l'[Autohébergement](./selfhosted) ; pour
un déploiement multi-serveurs, voir [Ansible](./ansible).

:::info Script communautaire
Ce script est maintenu par la communauté et distribué séparément du cœur de
ClientXCMS. Relisez toujours un script avant de l'exécuter en root. Source :
[github.com/alexwrite/clientxcms-installer](https://github.com/alexwrite/clientxcms-installer)
:::

## Prérequis

- Un **serveur vierge** avec un accès root (ou `sudo`).
- Une licence **Community** (ou supérieure) valide - voir [Prérequis](./requis).
- L'un des systèmes d'exploitation supportés ci-dessous.

| Distribution | Versions |
|--------------|----------|
| Debian | 11, 12, 13 |
| Ubuntu | 22.04, 24.04 |
| Rocky Linux / AlmaLinux | 8, 9 |

Architectures : `x86_64` et `arm64`. Minimum 2 Go de RAM et 25 Go de disque.

:::warning
Lancez le script sur un serveur **dédié**. Il installe et configure des services
au niveau système (Nginx, MariaDB, PHP-FPM, Redis) ; des sites existants qui les
utilisent pourraient être impactés.
:::

## Démarrage rapide

À lancer en root (ou avec `sudo`) :

```bash
bash <(curl -sSL https://raw.githubusercontent.com/alexwrite/clientxcms-installer/main/install.sh)
```

Choisissez **Install ClientXCMS**, puis répondez aux questions. Le script affiche
un récapitulatif et demande confirmation avant toute action.

## Ce qu'il installe

| Étape | Détail |
|------|--------|
| Dépendances | PHP 8.3 + extensions requises (Sury sur Debian, PPA ondrej sur Ubuntu, Remi sur Rocky/Alma), MariaDB, Nginx, Redis, Node.js 20, Composer, Git |
| Application | `git clone` de ClientXCMS dans `/var/www/clientxcms`, `composer install`, `npm run build` |
| Configuration | Écrit le `.env`, génère l'`APP_KEY`, configure la base de données et (au choix) les drivers Redis |
| Base de données | Crée la base et l'utilisateur, exécute `php artisan migrate --force --seed` et `storage:link` |
| Services | Vhost Nginx, tâche planifiée (cron), worker de file systemd optionnel |
| Sécurité | Règles de pare-feu optionnelles et certificat Let's Encrypt via certbot |

## Options interactives

Pendant l'exécution, il vous sera demandé :

- le **nom de domaine** (FQDN) pointant vers le serveur (ou une IP pour un test local) ;
- la **langue** par défaut (`fr` / `en`) ;
- le nom, l'utilisateur et le mot de passe de la **base de données** (laissez le mot de passe vide pour en générer un robuste) ;
- l'utilisation de **Redis** pour le cache, les sessions et la file ;
- l'installation d'un **worker** de file persistant (service systemd) ;
- l'ouverture des ports **pare-feu** 22, 80 et 443 ;
- l'obtention d'un certificat **Let's Encrypt** (le domaine doit déjà résoudre vers le serveur).

:::info
Si l'obtention du certificat Let's Encrypt échoue (DNS non propagé, ports
fermés), l'installation se termine quand même - le site reste en HTTP et le
script affiche la commande pour relancer certbot plus tard.
:::

## Après le script : finaliser dans le navigateur

Comme toute installation en autohébergement, ClientXCMS se finalise via
l'**installateur web**, qui active votre licence en ligne. Une fois le script
terminé :

1. Ouvrez `http(s)://votre-domaine`.
2. Suivez l'assistant : paramètres → licence → compte administrateur.
3. Renseignez votre **OAuth Client ID / Secret** depuis
   [clientxcms.com/client/services](https://clientxcms.com/client/services/).

## Installation non-interactive

Chaque question a un équivalent en variable d'environnement, ce qui permet de
lancer le module d'installation sans interaction (CI, provisioning) :

```bash
env FQDN=panel.example.com APP_LOCALE=fr \
    MYSQL_DB=clientxcms MYSQL_USER=clientxcms \
    USE_REDIS=true CONFIGURE_WORKER=true \
    CONFIGURE_LETSENCRYPT=true email=admin@example.com \
    bash <(curl -sSL https://raw.githubusercontent.com/alexwrite/clientxcms-installer/main/installers/clientxcms.sh)
```

Laissez `MYSQL_PASSWORD` vide pour en générer un automatiquement. Parmi les
autres variables surchargeables : `INSTALL_DIR`, `CLIENTXCMS_BRANCH`,
`PHP_VERSION` et `NODE_VERSION`.

## Désinstallation

Relancez le point d'entrée et choisissez **Uninstall**, ou lancez-le directement :

```bash
bash <(curl -sSL https://raw.githubusercontent.com/alexwrite/clientxcms-installer/main/installers/uninstall.sh)
```

Il retire l'application, ses services, le vhost et le cron, et demande
confirmation avant de supprimer la base de données ou les fichiers. Une dernière
étape optionnelle peut aussi purger toute la stack (PHP, MariaDB, Nginx, Redis,
Node).
