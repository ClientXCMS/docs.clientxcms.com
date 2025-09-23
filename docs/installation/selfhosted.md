---
sidebar_position: 5
---
# Autohébergement

Cette page vous guidera dans l'installation de ClientXCMS Next Gen pour les versions autohébergées. Les offres Cloud sont installées automatiquement sur les serveurs de CLIENTXCMS. L'installation est disponible [ici](./cloud).


## Téléchargement

Vous pouvez télécharger la dernière version de ClientXCMS NextGen depuis [L'espace téléchargement](https://clientxcms.com/client/downloads) ou depuis github directement : [https://github.com/ClientXCMS/ClientXCMS](https://github.com/ClientXCMS/ClientXCMS) 
N'oubliez pas de vérifier les [prérequis techniques](./requis) avant de commencer l'installation aini que d'avoir une licence valide. (voir [ici](https://clientxcms.com/pricing) pour commander une licence)

![Page de téléchargement - NextGen](/img/next_gen/Installation/Selfhosting/download_nextgen.png)

:::info
L'exemple ci-dessous est basé sur Debian 12, mais les commandes peuvent varier en fonction de votre distribution.
:::
## Dossier d'installation
Créez un dossier d'installation pour votre CMS si vous n'avez pas encore de serveur web. Vous pouvez le faire en utilisant la commande suivante :
```bash
mkdir /var/www/clientxcms
```
## Téléchargement de l'archive
unzip clientxcms.zip -d /var/www/clientxcms

Téléchargez la dernière version de ClientXCMS NextGen directement depuis GitHub avec la commande suivante :
```bash
curl -L -o clientxcms.zip https://github.com/ClientXCMS/ClientXCMS/archive/refs/heads/master.zip
```

Puis extrayez l'archive dans le dossier d'installation :
```bash
unzip clientxcms.zip -d /var/www/clientxcms
mv /var/www/clientxcms/ClientXCMS-master/* /var/www/clientxcms
rm -r /var/www/clientxcms/ClientXCMS-master
```

:::info
Si vous n'avez pas installé ZIP, vous pouvez l'installer avec la commande suivante :
```bash
sudo apt-get install zip unzip
```
:::

## Mise en place de l'environnement
Créez un fichier `.env` en utilisant la commande suivante :
```bash
  nano /var/www/clientxcms/.env
```
Puis copiez le contenu disponible [dans ce fichier d'exemple](https://cdn.clientxcms.com/ressources/docs/environment.example.txt) dans le fichier `.env`.

## Mise en place de PHP & Composer
Pour installer PHP, vous pouvez utiliser la commande suivante :
```bash
sudo apt-get update
sudo apt-get install ca-certificates apt-transport-https software-properties-common wget curl lsb-release
curl -sSL https://packages.sury.org/php/README.txt | sudo bash -x
sudo apt-get update
sudo apt-get install php8.3-common php8.3-curl php8.3-bcmath php8.3-intl php8.3-mbstring php8.3-xmlrpc php8.3-mcrypt php8.3-mysql php8.3-gd php8.3-xml php8.3-cli php8.3-zip
```
Pour installer Composer, vous pouvez utiliser la commande suivante :
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```
Vous pouvez maintenant installer les dépendances du projet en utilisant la commande suivante :
```bash
./composer.phar install --optimize-autoloader --no-dev
```
## Mise en place de MySQL

:::info
Nous allons installer MariaDB, qui est une version améliorée de MySQL.
:::

Pour installer le serveur MySQL, vous pouvez utiliser la commande suivante :
```bash
sudo apt-get install mariadb-server
```
Lorsque vous y êtes invité, confirmez l’installation en tapant Y, puis ENTRÉE.

Une fois l’installation terminée, il est recommandé d’exécuter un script de sécurité, préinstallé avec MySQL. Ce script supprimera certains paramètres par défaut peu sûrs et verrouillera l’accès à votre système de base de données. Lancez le script interactif en exécutant :
```bash
sudo mysql_secure_installation
```
Répondez aux questions suivantes en fonction de vos besoins :
- Appuyez sur la touche entrée si vous n’en avez pas défini précédemment
- Définissez un mot de passe root pour MySQL
- Supprimez l’utilisateur anonyme > Y
- Interdisez la connexion à distance à la base de données > Y
- Supprimez la base de données de test > Y
- Rechargez les privilèges > Y

Vous pouvez maintenant vous connecter à MySQL en utilisant la commande suivante :
```bash
mysql -u root -p
```
## Mise en place du serveur web

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apache" label="Apache">
:::info
Ici, nous ne présentons pas comment installer un certificat SSL.
:::

  Pour installer Apache, vous pouvez utiliser la commande suivante :
```bash
sudo apt-get install apache2 libapache2-mod-php
```
Pour activer le module rewrite, vous pouvez utiliser la commande suivante :
```bash
sudo a2enmod rewrite
```
Pour ajouter un hôte virtuel, vous pouvez utiliser la commande suivante :
```bash
sudo nano /etc/apache2/sites-available/clientxcms.conf
```
#### Exemple de fichier de configuration
```bash
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/clientxcms/public
    ServerName domain.fr
    ServerAlias www.domain.fr

        <Directory />
                Options FollowSymLinks
                AllowOverride All
        </Directory>
        <Directory /var/www/clientxcms/public >
                Options FollowSymLinks MultiViews
                Options -Indexes
                AllowOverride All
                Order allow,deny
                allow from all
        </Directory>

    LogLevel debug
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

</VirtualHost>
```
Pour activer le vhost, vous pouvez utiliser la commande suivante :
```bash
sudo a2ensite clientxcms.conf
```
Pour vous assurer que le fichier de configuration est correct, vous pouvez utiliser la commande suivante :
```bash
sudo apache2ctl configtest
```
Pour redémarrer Apache, vous pouvez utiliser la commande suivante :
```bash
sudo systemctl restart apache2
```
  </TabItem>
  <TabItem value="nginx" label="Nginx">
:::info
Ici, nous ne présentons pas comment installer un certificat SSL.
:::
  Pour installer Nginx, vous pouvez utiliser la commande suivante :
```bash
sudo apt-get install nginx php8.2-fpm
```
Pour ajouter un hôte virtuel, vous pouvez utiliser la commande suivante :
```bash
sudo nano /etc/nginx/sites-available/clientxcms.conf
```
#### Exemple de fichier de configuration
```bash
server {
    listen 80;
    server_name domain.fr www.domain.fr;
    root /var/www/clientxcms/public;

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
Pour activer le vhost, vous pouvez utiliser la commande suivante :
```bash
sudo ln -s /etc/nginx/sites-available/clientxcms.conf /etc/nginx/sites-enabled/
```
Pour vous assurer que le fichier de configuration est correct, vous pouvez utiliser la commande suivante :
```bash
sudo nginx -t
```
Pour redémarrer Nginx, vous pouvez utiliser la commande suivante :
```bash
sudo systemctl restart nginx
```
  </TabItem>
</Tabs>

## Configuration de la base de données
Pour configurer la base de données, vous pouvez utiliser la commande suivante :
```bash
mysql -u root -p
```
Créez une base de données et un utilisateur en utilisant les commandes suivantes. Nous vous recommandons de remplacer le mot de passe par un mot de passe plus sécurisé :
```sql
CREATE DATABASE clientxcms;
CREATE USER clientxcms@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON clientxcms.* TO clientxcms@localhost;
FLUSH PRIVILEGES;
```
Vous pouvez maintenant quitter MySQL en utilisant la commande suivante :
```sql
exit
```

Vous pouvez maintenant modifier les informations de connexion à la base de données dans le fichier `.env` en utilisant la commande suivante :
```bash
nano .env
```

Puis modifiez les informations de connexion à la base de données :
```env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=clientxcms
DB_USERNAME=clientxcms
DB_PASSWORD=password
```

## Autres configurations
Pour générer une clé d'application, vous pouvez utiliser la commande suivante :
```bash
php artisan key:generate
```
Pour migrer la base de données, vous pouvez utiliser la commande suivante :
```bash
php artisan migrate --force --seed
```
Pour lier le dossier de stockage, vous pouvez utiliser la commande suivante :
```bash
php artisan storage:link
```
Pour ajouter les bonnes permissions, vous pouvez utiliser la commande suivante :
```bash
sudo chmod -R 775 storage bootstrap/cache
```

## Assets
:::info
La première partie va concerner l'installation de nodejs, mais si vous l'avez déjà installé, vous pouvez passer à la compilation des assets.
:::

Pour commencer, nous devons installer NVM, qui est un gestionnaire de versions de Node.js. Pour ce faire, exécutez la commande suivante :
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

Ensuite, vous pouvez télécharger et installer Node.js (il peut être nécessaire de redémarrer le terminal) : 
```bash
nvm install 18
```

Vérifiez maintenant que la bonne version de Node.js est installée via cette commande :
```bash
node -v
```
Celle-ci devrait afficher `v18.20.4`, qui est la version LTS actuelle de Node.js version 18.

<br />

Pour compiler les assets, vous pouvez utiliser les commandes suivantes :
```bash
npm install
npm run build
```

## Taches planifiées
Pour configurer les tâches planifiées, vous pouvez utiliser la commande suivante :
```bash
crontab -e
```
Puis ajoutez la ligne suivante :
```bash
* * * * * php /var/www/clientxcms/artisan schedule:run >> /dev/null 2>&1
```


## Configuration des Queues Laravel

Laravel utilise un système de files d'attente (queues) pour exécuter des tâches en arrière-plan, ce qui améliore les performances en évitant le traitement synchrone.
Dans votre fichier `.env`, configurez le driver de file d'attente en fonction de votre environnement :

```env
QUEUE_CONNECTION=database
```

Les options disponibles sont :
- `sync` : Exécute les jobs immédiatement (pas en arrière-plan).
- `database` : Utilise la base de données pour stocker les jobs.
- `redis` : Utilise Redis pour une gestion plus performante des queues.
- `sqs` : Utilise Amazon SQS.

Assurez-vous que votre application utilise le bon driver.

Si vous voulez vous assurer que le worker tourne toujours, utilisez `supervisor`. Installez-le d'abord :

```bash
sudo apt update
sudo apt install supervisor
```

Ensuite, créez un fichier de configuration `/etc/supervisor/conf.d/clientxcms-worker.conf` :

```ini
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/clientxcms/artisan queue:work --daemon
autostart=true
autorestart=true
numprocs=1
redirect_stderr=true
stdout_logfile=/var/log/laravel-worker.log
```

Recharge et démarre Supervisor :

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start clientxcms-worker:*
```

## Configuration de ClientXCMS

1. Rendez-vous sur l'adresse de votre espace client. Vous devriez voir une page d'installation similaire à celle-ci :
   ![Page installation - ClientXCMS](/img/next_gen/Installation/ClientX_Install_page.png)

2. Remplacez "CLIENTXCMS" par votre nom commercial d'hébergeur.

3. Pour trouver l'**ID client** et le **Secret client**, allez sur l'espace client ClientXCMS : [https://clientxcms.com/client/services/](https://clientxcms.com/client/services/), dans la gestion de la licence NextGen concernée.
   ![Gestion licence - Plesk](/img/next_gen/Installation/ClientX_panel_gestion_licence.png)
   Les identifiants "**OAuth Client ID**" et "**OAuth Secret**" sont nécessaires pour connecter la licence ClientXCMS à votre site. Cliquez ensuite sur le bouton "Se connecter" sur votre instance.


## Achat d'extension
Si vous achetez des extensions entre-temps et que vous avez le message d'erreur suivant lorsque vous souhaitez les activer :

> **"Le fichier composer.json n'a pas été trouvé."**

Vous pouvez télécharger l'archive de l'extension via la page de téléchargement de l'espace client. Vous pouvez ensuite l'extraire sur votre instance ClientXCMS.
![Page de téléchargement - Extensions](/img/next_gen/Installation/Selfhosting/download_extension.png)

:::info
Pour les thèmes vous devez relancer la commande `npm run build` pour les activer.
:::
## Migration depuis une version cloud
Si vous souhaitez reprendre une installation cloud sur votre serveur, vous pouvez suivre les étapes suivantes :
1. Téléchargez une sauvegarde de votre base de données depuis l'interface PHPMyAdmin depuis la page base de données de l'administration.
2. Ouvrir une demande d'aide pour obtenir la clé d'encryption de votre instance cloud.
3. Importez la sauvegarde dans votre base de données locale.
4. Modifiez le fichier `.env` pour correspondre votre clé d'encryption avec la clé d'encryption de votre instance cloud.
5. Exécutez la commande `php artisan migrate --force --seed` pour mettre à jour votre base de données.
6. Exécutez la commande `php artisan storage:link` pour lier le dossier de stockage.
7. Créez un fichier `storage/installed` pour indiquer que l'installation est terminée.
8. Vous pouvez maintenant accéder à votre instance locale.

## Problèmes courants

### Interface introuvable Jsonable

Si vous avez l'erreur suivante :
"Interface "DragonCode/Contracts/Support/Jsonable" not found"
Vous pouvez la régler en executant la commande : 
```bash
composer require dragon-code/contracts
```

### Thème activé mais non affiché sur l'interface

Si vous avez activé un thème mais qu'il n'est pas affiché sur l'interface, vous pouvez ajouter la variable suivante dans le fichier `.env` :
```env
APP_REVERSE_PATHS=true
```

Cela vient du fait que PHP ne lit pas les fichiers de la même manière sur chaque serveur. Cette variable permet de corriger ce problème.


### Logo non affichage sur l'interface

Si vous avez pas d'erreur à l'ajoût de votre logo, vous avez peut-être un problème de permission sur le dossier de stockage. Vous pouvez régler ce problème en executant la commande suivante :
```bash
sudo chmod -R 775 storage
```

Si vous avez des problèmes du jour au lendemain, vous avez problablement un problème de cache. Vous pouvez le régler en executant la commande suivante :
```bash
php artisan cache:clear
```
ou vous pouvez vérifier les permissions de votre dossier de cache (storage/framework/cache).