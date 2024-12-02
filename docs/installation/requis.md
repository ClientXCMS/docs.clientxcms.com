---
sidebar_position: 2
---

# Prérequis
Retrouvez ici les prérequis pour l'installation de ClientXCMS en cloud ou en autohébergement.

## Cloud
L'unique prérequis pour l'installation de l'espace client sur les serveurs de CLIENTXCMS est de disposer **d'un compte CLIENTXCMS** et d'une **licence valide**. Pour cela, rendez-vous sur [cette page](https://clientxcms.com/pricing) pour la commander.

## Autohébergement
Il est possible d'installer ClientXCMS sur la plupart des hébergements web ainsi que sur un VPS ou un dédié linux et de certaines connaissances techniques. Il est également nécessaire de disposer d'une **licence valide** pour l'installation en autohébergement. Pour cela, rendez-vous sur [cette page](https://clientxcms.com/pricing) pour la commander.

### Prérequis techniques
Nous conseillons d'avoir au minimum 100 Mo d'espace disque pour l'installation de ClientXCMS.
:::info CTXHosting
Si vous souhaitez un VPS optimisé pour ClientXCMS, nous vous recommandons de vous tourner vers [CTXHosting](https://ctxhosting.fr). Notre filiale propose des VPS optimisés pour ClientXCMS.
:::
### PHP
ClientXCMS nécessite PHP 8.2 ou supérieur. Il est recommandé d'utiliser la **version 8.3** pour une compatibilité optimale. Vous pouvez vérifier la version de PHP installée sur votre serveur en utilisant la commande suivante :
```bash
php -v
```
:::warning
ClientXCMS ne supporte pas les versions de PHP inférieures à 8.2.
:::
#### Extensions PHP
| Extensions | Extensions |
|------------|------------|
| Curl       | JSON       |
| XML        | Zip        |
| MBString   | Intl       |
| BCMath     | Ctype      |
| Fileinfo   | OpenSSL    |
| JSON       | Mbstring   |
| PDO        | Tokenizer  |
| XML        |            |


Pour vérifier si ces extensions sont installées, vous pouvez créer un fichier `info.php` à la racine de votre serveur contenant le code suivant :
```php
<?php
phpinfo();
```

Pour installer les extensions manquantes, vous pouvez utiliser la commande suivante :
```bash
sudo apt-get update
sudo apt-get install php8.3 php8.3-bcmath php8.3-ctype php8.3-fileinfo php8.3-json php8.3-mbstring php8.3-openssl php8.3-pdo php8.3-tokenizer php8.3-xml
```

### Base de données
ClientXCMS supporte nativement MySQL. Il est recommandé d'utiliser la **version 8.0.38** ou supérieure pour une compatibilité optimale. Cependant, vous pouvez utiliser d'autres bases de données supportées par Laravel.
### Serveur web
ClientXCMS est compatible avec la plupart des serveurs web. Il est recommandé d'utiliser [Apache ou Nginx](./selfhosted) ou un [hébergement Plesk](./plesk). 
### Docker
ClientXCMS pourra bientôt être installé via Docker. Pour cela, vous aurez besoin de Docker et Docker Compose installés sur votre serveur.