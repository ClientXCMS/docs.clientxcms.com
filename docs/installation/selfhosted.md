---
sidebar_position: 5
translated: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Self-hosted

This page guides you through installing ClientXCMS Next Gen on a VPS or dedicated server. It targets a Debian 12 installation with PHP 8.3, MariaDB, and an Apache or Nginx web server.

Self-hosting is recommended if you want to manage the server, updates, backups, and system configuration yourself. If you want a more automated installation, see the [Cloud](./cloud), [Plesk](./plesk), or [Docker](./docker) installation instead.

:::info
This page complements the [technical requirements](./requis). The commands below are intended for Debian 12 and may vary depending on your distribution.
:::

## Prerequisites

Before you begin, make sure you have the following:

- A Debian 12 VPS or dedicated server with SSH access.
- A user that can run `sudo`.
- A domain name pointing to the server.
- An SSL certificate to use ClientXCMS over HTTPS.
- A valid ClientXCMS license.
- Your ClientXCMS OAuth credentials, available from your license management page in the [customer area](https://clientxcms.com/client/services/).
- At least 100 MB of disk space available for the application, excluding backups and customer files.

## Server preparation

Update the server and install the base tools:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ca-certificates apt-transport-https software-properties-common wget curl git unzip nano lsb-release -y
```

Install PHP 8.3 and the required extensions:

```bash
curl -sSL https://packages.sury.org/php/README.txt | sudo bash -x
sudo apt update
sudo apt install php8.3 php8.3-fpm php8.3-cli php8.3-common php8.3-curl php8.3-bcmath php8.3-intl php8.3-mbstring php8.3-mysql php8.3-gd php8.3-xml php8.3-zip php8.3-fileinfo php8.3-opcache -y
```

Check the installed version:

```bash
php -v
```

Install Composer:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
php -r "unlink('composer-setup.php');"
```

Install Node.js LTS with NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
```

Check the available versions:

```bash
node -v
npm -v
composer --version
```

## Retrieving the source code

Create the installation folder:

```bash
sudo mkdir -p /var/www/clientxcms
sudo chown -R $USER:www-data /var/www/clientxcms
cd /var/www/clientxcms
```

<Tabs>
  <TabItem value="archive" label="Recommended release archive">

Download the latest ClientXCMS archive from the [download area](https://clientxcms.com/client/downloads), then upload it to your server, for example to `/tmp/clientxcms.zip`.

Then extract the archive into the installation folder:

```bash
unzip /tmp/clientxcms.zip -d /tmp/clientxcms-release
cd /tmp/clientxcms-release/ClientXCMS-*
cp -R . /var/www/clientxcms/
cd /var/www/clientxcms
```

:::info
The release archive is recommended for production installations because it matches a published version.
:::

  </TabItem>
  <TabItem value="git" label="Advanced Git">

If you prefer working with Git, clone the official repository:

```bash
cd /var/www
git clone https://github.com/ClientXCMS/ClientXCMS.git clientxcms
cd /var/www/clientxcms
```

You can then update the instance with:

```bash
git fetch --all --prune
git checkout master
git pull origin master
```

:::warning
This method follows the repository's main branch. For production use, prefer a stable release archive.
:::

  </TabItem>
</Tabs>

## Web server configuration

The web server must point to the ClientXCMS `public` folder. The examples below do not replace SSL configuration: in production, configure HTTPS with your certificate before finalizing the installation.

<Tabs>
  <TabItem value="nginx" label="Recommended Nginx">

Install Nginx:

```bash
sudo apt install nginx -y
```

Create the vhost:

```bash
sudo nano /etc/nginx/sites-available/clientxcms.conf
```

Configuration example:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
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

Enable the site, then reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/clientxcms.conf /etc/nginx/sites-enabled/clientxcms.conf
sudo nginx -t
sudo systemctl reload nginx
```

  </TabItem>
  <TabItem value="apache" label="Apache">

Install Apache and the PHP module:

```bash
sudo apt install apache2 libapache2-mod-php8.3 -y
sudo a2enmod rewrite
```

Create the vhost:

```bash
sudo nano /etc/apache2/sites-available/clientxcms.conf
```

Configuration example:

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
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

Enable the site, then reload Apache:

```bash
sudo a2ensite clientxcms.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
```

  </TabItem>
</Tabs>

## Database

Install MariaDB:

```bash
sudo apt install mariadb-server -y
sudo mysql_secure_installation
```

Connect to MariaDB:

```bash
sudo mysql
```

Create the database and user:

```sql
CREATE DATABASE clientxcms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'clientxcms'@'localhost' IDENTIFIED BY 'replace_this_password';
GRANT ALL PRIVILEGES ON clientxcms.* TO 'clientxcms'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

:::warning
Replace `replace_this_password` with a strong password and keep it for the `.env` file.
:::

## Environment configuration

Copy the example file:

```bash
cd /var/www/clientxcms
cp .env.example .env
nano .env
```

Fill in the main values:

```env
APP_ENV=production
APP_URL=https://your-domain.com

OAUTH_CLIENT_ID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=clientxcms
DB_USERNAME=clientxcms
DB_PASSWORD=replace_this_password

QUEUE_CONNECTION=database
CACHE_STORE=file
SESSION_DRIVER=file
```

Also configure the mail variables according to your SMTP provider so ClientXCMS can send transactional emails.

:::tip
In `nano`, use `Ctrl + X`, then `Y`, then `Enter` to save and quit.
:::

## ClientXCMS installation

Install the PHP dependencies:

```bash
cd /var/www/clientxcms
composer install --optimize-autoloader --no-dev
```

Initialize Laravel:

```bash
php artisan key:generate
php artisan migrate --force --seed
php artisan storage:link
php artisan optimize:clear
```

Apply the required permissions for the web server:

```bash
sudo chown -R www-data:www-data /var/www/clientxcms/storage /var/www/clientxcms/bootstrap/cache
sudo chmod -R 775 /var/www/clientxcms/storage /var/www/clientxcms/bootstrap/cache
```

## Asset compilation

Install the JavaScript dependencies, then compile the assets:

```bash
cd /var/www/clientxcms
npm install
npm run build
```

:::info
If you install or activate a theme later, run `npm run build` again.
:::

## Scheduled tasks and queues

Add the Laravel scheduler to the web server user's crontab:

```bash
sudo crontab -u www-data -e
```

Add this line:

```bash
* * * * * php /var/www/clientxcms/artisan schedule:run >> /dev/null 2>&1
```

To process background tasks, install Supervisor:

```bash
sudo apt install supervisor -y
sudo nano /etc/supervisor/conf.d/clientxcms-worker.conf
```

Add the following configuration:

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

Reload Supervisor:

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start clientxcms-worker:*
```

## Finalization

Open your browser at the URL configured in `APP_URL`:

```text
https://your-domain.com
```

Follow the installation wizard, enter your hosting company name, then connect your license with the OAuth credentials retrieved from the [ClientXCMS customer area](https://clientxcms.com/client/services/).

## Extension purchase

If you purchase an extension and the following message appears during activation:

> **"The composer.json file was not found."**

Download the extension archive from the customer area, then extract it on your ClientXCMS instance.

![ClientXCMS extensions download page in customer area](/img/next_gen/Installation/Selfhosting/download_extension.png)

## Migration from a cloud version

If you want to migrate a cloud installation to your server:

1. Download a database backup from the administration or PHPMyAdmin.
2. Open a support request to obtain the encryption key of your cloud instance.
3. Import the backup into your local database.
4. Replace the encryption key in your `.env` file with the cloud instance encryption key.
5. Run `php artisan migrate --force --seed`.
6. Run `php artisan storage:link`.
7. Create the `storage/installed` file if the installation wizard should not run again.

## Common problems

### Jsonable interface not found

If you get the `Interface "DragonCode/Contracts/Support/Jsonable" not found` error, install the missing dependency:

```bash
composer require dragon-code/contracts
php artisan optimize:clear
```

### Theme activated but not displayed

If an activated theme is not displayed, add this variable to `.env`:

```env
APP_REVERSE_PATHS=true
```

Then clear the caches:

```bash
php artisan optimize:clear
```

### Logo or uploaded files not displayed

Check the storage link and permissions:

```bash
php artisan storage:link
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
php artisan cache:clear
```

### Permission issues in logs

If log files are created with the wrong user, reapply permissions:

```bash
sudo chown -R www-data:www-data storage/logs
sudo chmod -R 775 storage/logs
```

Also make sure cron tasks and Supervisor run as the `www-data` user.
