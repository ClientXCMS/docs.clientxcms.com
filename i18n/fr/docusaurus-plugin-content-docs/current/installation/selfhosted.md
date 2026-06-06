---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Autohébergement

Cette page vous guide dans l'installation de ClientXCMS Next Gen sur un VPS ou un serveur dédié. Elle cible une installation Debian 12 avec PHP 8.3, MariaDB et un serveur web Apache ou Nginx.

L'autohébergement est recommandé si vous voulez gérer vous-même le serveur, les mises à jour, les sauvegardes et la configuration système. Si vous voulez une installation plus automatisée, consultez plutôt l'installation [Cloud](./cloud), [Plesk](./plesk) ou [Docker](./docker).

:::info
Cette page complète les [prérequis techniques](./requis). Les commandes ci-dessous sont prévues pour Debian 12 et peuvent varier selon votre distribution.
:::

## Prérequis

Avant de commencer, vérifiez que vous disposez des éléments suivants :

- Un VPS ou serveur dédié Debian 12 avec accès SSH.
- Un utilisateur pouvant exécuter `sudo`.
- Un nom de domaine pointant vers le serveur.
- Un certificat SSL pour utiliser ClientXCMS en HTTPS.
- Une licence ClientXCMS valide.
- Vos identifiants OAuth ClientXCMS, disponibles dans la gestion de votre licence sur [l'espace client](https://clientxcms.com/client/services/).
- Au moins 100 Mo d'espace disque disponible pour l'application, hors sauvegardes et fichiers clients.

## Préparation du serveur

Mettez à jour le serveur et installez les outils de base :

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ca-certificates apt-transport-https software-properties-common wget curl git unzip nano lsb-release -y
```

Installez PHP 8.3 et les extensions nécessaires :

```bash
curl -sSL https://packages.sury.org/php/README.txt | sudo bash -x
sudo apt update
sudo apt install php8.3 php8.3-fpm php8.3-cli php8.3-common php8.3-curl php8.3-bcmath php8.3-intl php8.3-mbstring php8.3-mysql php8.3-gd php8.3-xml php8.3-zip php8.3-fileinfo php8.3-opcache -y
```

Vérifiez la version installée :

```bash
php -v
```

Installez Composer :

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
php -r "unlink('composer-setup.php');"
```

Installez Node.js LTS avec NVM :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
```

Vérifiez les versions disponibles :

```bash
node -v
npm -v
composer --version
```

## Récupération du code source

Créez le dossier d'installation :

```bash
sudo mkdir -p /var/www/clientxcms
sudo chown -R $USER:www-data /var/www/clientxcms
cd /var/www/clientxcms
```

<Tabs>
  <TabItem value="archive" label="Archive release recommandée">

Téléchargez la dernière archive de ClientXCMS depuis [l'espace téléchargement](https://clientxcms.com/client/downloads), puis envoyez-la sur votre serveur, par exemple dans `/tmp/clientxcms.zip`.

Extrayez ensuite l'archive dans le dossier d'installation :

```bash
unzip /tmp/clientxcms.zip -d /tmp/clientxcms-release
cp -R /tmp/clientxcms-release/*/* /var/www/clientxcms/
cd /var/www/clientxcms
```

:::info
L'archive release est recommandée pour une installation de production, car elle correspond à une version publiée.
:::

  </TabItem>
  <TabItem value="git" label="Git avancé">

Si vous préférez travailler avec Git, clonez le dépôt officiel :

```bash
cd /var/www
git clone https://github.com/ClientXCMS/ClientXCMS.git clientxcms
cd /var/www/clientxcms
```

Vous pourrez ensuite mettre à jour l'instance avec :

```bash
git fetch --all --prune
git checkout master
git pull origin master
```

:::warning
Cette méthode suit la branche principale du dépôt. Pour une utilisation en production, préférez une archive release stable.
:::

  </TabItem>
</Tabs>

## Configuration du serveur web

Le serveur web doit pointer vers le dossier `public` de ClientXCMS. Les exemples ci-dessous ne remplacent pas la configuration SSL : en production, configurez HTTPS avec votre certificat avant de finaliser l'installation.

<Tabs>
  <TabItem value="nginx" label="Nginx recommandé">

Installez Nginx :

```bash
sudo apt install nginx -y
```

Créez le vhost :

```bash
sudo nano /etc/nginx/sites-available/clientxcms.conf
```

Exemple de configuration :

```nginx
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;
    root /var/www/clientxcms/public;

    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

Activez le site puis redémarrez Nginx :

```bash
sudo ln -s /etc/nginx/sites-available/clientxcms.conf /etc/nginx/sites-enabled/clientxcms.conf
sudo nginx -t
sudo systemctl reload nginx
```

  </TabItem>
  <TabItem value="apache" label="Apache">

Installez Apache et le module PHP :

```bash
sudo apt install apache2 libapache2-mod-php8.3 -y
sudo a2enmod rewrite
```

Créez le vhost :

```bash
sudo nano /etc/apache2/sites-available/clientxcms.conf
```

Exemple de configuration :

```apache
<VirtualHost *:80>
    ServerName votre-domaine.com
    ServerAlias www.votre-domaine.com
    DocumentRoot /var/www/clientxcms/public

    <Directory /var/www/clientxcms/public>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/clientxcms-error.log
    CustomLog ${APACHE_LOG_DIR}/clientxcms-access.log combined
</VirtualHost>
```

Activez le site puis redémarrez Apache :

```bash
sudo a2ensite clientxcms.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
```

  </TabItem>
</Tabs>

## Base de données

Installez MariaDB :

```bash
sudo apt install mariadb-server -y
sudo mysql_secure_installation
```

Connectez-vous à MariaDB :

```bash
sudo mysql
```

Créez la base de données et l'utilisateur :

```sql
CREATE DATABASE clientxcms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'clientxcms'@'localhost' IDENTIFIED BY 'remplacez_ce_mot_de_passe';
GRANT ALL PRIVILEGES ON clientxcms.* TO 'clientxcms'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

:::warning
Remplacez `remplacez_ce_mot_de_passe` par un mot de passe robuste et conservez-le pour le fichier `.env`.
:::

## Configuration de l'environnement

Copiez le fichier d'exemple :

```bash
cd /var/www/clientxcms
cp .env.example .env
nano .env
```

Renseignez les valeurs principales :

```env
APP_ENV=production
APP_URL=https://votre-domaine.com

OAUTH_CLIENT_ID=votre_client_id
OAUTH_CLIENT_SECRET=votre_secret_client

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=clientxcms
DB_USERNAME=clientxcms
DB_PASSWORD=remplacez_ce_mot_de_passe

QUEUE_CONNECTION=database
CACHE_STORE=file
SESSION_DRIVER=file
```

Configurez aussi les variables mail selon votre fournisseur SMTP afin que ClientXCMS puisse envoyer les emails transactionnels.

:::tip
Dans `nano`, utilisez `Ctrl + X`, puis `Y` ou `O`, puis `Entrée` pour sauvegarder et quitter.
:::

## Installation de ClientXCMS

Installez les dépendances PHP :

```bash
cd /var/www/clientxcms
composer install --optimize-autoloader --no-dev
```

Initialisez Laravel :

```bash
php artisan key:generate
php artisan migrate --force --seed
php artisan storage:link
php artisan optimize:clear
```

Appliquez les permissions nécessaires au serveur web :

```bash
sudo chown -R www-data:www-data /var/www/clientxcms/storage /var/www/clientxcms/bootstrap/cache
sudo chmod -R 775 /var/www/clientxcms/storage /var/www/clientxcms/bootstrap/cache
```

## Compilation des assets

Installez les dépendances JavaScript puis compilez les assets :

```bash
cd /var/www/clientxcms
npm install
npm run build
```

:::info
Si vous installez ou activez un thème plus tard, relancez `npm run build`.
:::

## Taches planifiées et queues

Ajoutez le scheduler Laravel dans la crontab de l'utilisateur du serveur web :

```bash
sudo crontab -u www-data -e
```

Ajoutez cette ligne :

```bash
* * * * * php /var/www/clientxcms/artisan schedule:run >> /dev/null 2>&1
```

Pour traiter les tâches en arrière-plan, installez Supervisor :

```bash
sudo apt install supervisor -y
sudo nano /etc/supervisor/conf.d/clientxcms-worker.conf
```

Ajoutez la configuration suivante :

```ini
[program:clientxcms-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/clientxcms/artisan queue:work --sleep=3 --tries=3 --timeout=90
directory=/var/www/clientxcms
autostart=true
autorestart=true
user=www-data
numprocs=1
redirect_stderr=true
stdout_logfile=/var/log/clientxcms-worker.log
```

Rechargez Supervisor :

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start clientxcms-worker:*
```

## Finalisation

Ouvrez votre navigateur sur l'URL configurée dans `APP_URL` :

```text
https://votre-domaine.com
```

Suivez l'assistant d'installation, renseignez le nom de votre hébergeur, puis connectez votre licence avec les identifiants OAuth récupérés depuis [l'espace client ClientXCMS](https://clientxcms.com/client/services/).

## Achat d'extension

Si vous achetez une extension et que le message suivant apparaît lors de l'activation :

> **"Le fichier composer.json n'a pas été trouvé."**

Téléchargez l'archive de l'extension depuis l'espace client, puis extrayez-la sur votre instance ClientXCMS.

![Page de téléchargement - Extensions](/img/next_gen/Installation/Selfhosting/download_extension.png)

## Migration depuis une version cloud

Si vous souhaitez reprendre une installation cloud sur votre serveur :

1. Téléchargez une sauvegarde de la base de données depuis l'administration ou PHPMyAdmin.
2. Ouvrez une demande d'aide pour obtenir la clé d'encryption de votre instance cloud.
3. Importez la sauvegarde dans votre base de données locale.
4. Remplacez la clé d'encryption de votre fichier `.env` par celle de l'instance cloud.
5. Exécutez `php artisan migrate --force --seed`.
6. Exécutez `php artisan storage:link`.
7. Créez le fichier `storage/installed` si l'assistant d'installation ne doit pas se relancer.

## Problèmes courants

### Interface Jsonable introuvable

Si vous obtenez l'erreur `Interface "DragonCode/Contracts/Support/Jsonable" not found`, installez la dépendance manquante :

```bash
composer require dragon-code/contracts
php artisan optimize:clear
```

### Thème activé mais non affiché

Si un thème activé ne s'affiche pas, ajoutez cette variable dans `.env` :

```env
APP_REVERSE_PATHS=true
```

Videz ensuite les caches :

```bash
php artisan optimize:clear
```

### Logo ou fichiers uploadés non affichés

Vérifiez le lien de stockage et les permissions :

```bash
php artisan storage:link
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
php artisan cache:clear
```

### Problèmes de permissions dans les logs

Si les fichiers de logs sont créés avec le mauvais utilisateur, réappliquez les permissions :

```bash
sudo chown -R www-data:www-data storage/logs
sudo chmod -R 775 storage/logs
```

Assurez-vous aussi que les tâches cron et Supervisor s'exécutent avec l'utilisateur `www-data`.
