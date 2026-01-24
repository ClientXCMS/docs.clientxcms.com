---
sidebar_position: 5
translated: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Self-hosted

This page will guide you through the installation of ClientXCMS Next Gen for self-hosted versions. Cloud offers are automatically installed on CLIENTXCMS servers. Cloud installation is available [here](./cloud).


## Download

You can download the latest version of ClientXCMS NextGen from the [Download area](https://clientxcms.com/client/downloads) or directly from GitHub: [https://github.com/ClientXCMS/ClientXCMS](https://github.com/ClientXCMS/ClientXCMS)
Remember to check the [technical requirements](./requis) before starting the installation and to have a valid license. (see [here](https://clientxcms.com/pricing) to order a license)

![Download page - NextGen](/img/next_gen/Installation/Selfhosting/download_nextgen.png)

:::info
The example below is based on Debian 12, but commands may vary depending on your distribution.
:::
## Installation folder
Create an installation folder for your CMS if you don't already have a web server. You can do this using the following command:
```bash
mkdir /var/www/clientxcms
```
## Downloading the source code

<Tabs>
  <TabItem value="archive" label="ZIP Archive">
Download the latest version of ClientXCMS NextGen directly from GitHub:
```bash
curl -L -o clientxcms.zip https://github.com/ClientXCMS/ClientXCMS/releases/latest
```

Then extract the archive to the installation folder:
```bash
unzip clientxcms.zip -d /var/www/clientxcms
mv /var/www/clientxcms/ClientXCMS-master/* /var/www/clientxcms
rm -r /var/www/clientxcms/ClientXCMS-master
```

:::info
If you haven't installed ZIP, you can install it with the following command:
```bash
sudo apt-get install zip unzip
```
:::
  </TabItem>
  <TabItem value="git" label="Git">
If you prefer working with Git, clone the official repository directly:
```bash
cd /var/www
git clone https://github.com/ClientXCMS/ClientXCMS.git clientxcms
cd /var/www/clientxcms
```

You can then update your instance very easily:
```bash
git pull origin master
```
  </TabItem>
</Tabs>

## Environment setup
Create a `.env` file using the following command:
```bash
  nano /var/www/clientxcms/.env
```
Then copy the content available [in this example file](https://cdn.clientxcms.com/ressources/docs/environment.example.txt) into the `.env` file.

## PHP 8.3 Installation

### Adding the Ondrej repository (Ubuntu/Debian)

<Tabs>
  <TabItem value="ubuntu-debian" label="Ubuntu/Debian">

To install PHP 8.3 on Ubuntu/Debian, first add the Ondrej repository:

```bash
# System update and prerequisites installation
sudo apt update
sudo apt install -y software-properties-common ca-certificates apt-transport-https wget curl lsb-release

# Adding the Ondrej repository for PHP 8.3
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
```

### PHP 8.3 and extensions installation

Install PHP 8.3 with all extensions required by ClientXCMS:

```bash
# PHP 8.3 and essential extensions installation
sudo apt install -y php8.3 php8.3-fpm php8.3-cli php8.3-common \
    php8.3-bcmath php8.3-curl php8.3-dom php8.3-gd php8.3-intl \
    php8.3-libxml php8.3-mbstring php8.3-openssl php8.3-pdo \
    php8.3-pdo-mysql php8.3-simplexml php8.3-xml php8.3-zip \
    php8.3-opcache
```

  </TabItem>
  <TabItem value="centos-rhel" label="CentOS/RHEL/Rocky">

For CentOS, RHEL, or Rocky Linux, use the Remi repository:

```bash
# Prerequisites and Remi repository installation
sudo dnf install -y epel-release
sudo dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Enabling PHP 8.3 module
sudo dnf module reset php -y
sudo dnf module enable php:remi-8.3 -y

# PHP 8.3 and extensions installation
sudo dnf install -y php php-fpm php-common php-bcmath php-curl \
    php-dom php-gd php-intl php-libxml php-mbstring php-openssl \
    php-pdo php-pdo-mysql php-simplexml php-xml php-zip php-opcache
```

  </TabItem>
</Tabs>

### Verifying the installation

Verify that PHP 8.3 is correctly installed:

```bash
php --version
```

You should see output similar to:
```
PHP 8.3.x (cli) (built: ...)
```

### Recommended PHP configuration

Modify the PHP configuration file to optimize performance:

```bash
# For PHP-FPM
sudo nano /etc/php/8.3/fpm/php.ini

# For PHP-CLI
sudo nano /etc/php/8.3/cli/php.ini
```

Recommended settings:
```ini
memory_limit = 512M
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 300
max_input_vars = 3000
opcache.enable = 1
opcache.memory_consumption = 128
opcache.max_accelerated_files = 10000
```

## Composer Installation
To install Composer, you can use the following command:
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```
You can now install the project dependencies using the following command:
```bash
./composer.phar install --optimize-autoloader --no-dev
```
## MySQL Setup

:::info
We will install MariaDB, which is an enhanced version of MySQL.
:::

To install the MySQL server, you can use the following command:
```bash
sudo apt-get install mariadb-server
```
When prompted, confirm the installation by typing Y, then ENTER.

Once the installation is complete, it is recommended to run a security script, pre-installed with MySQL. This script will remove some insecure default settings and lock down access to your database system. Run the interactive script by executing:
```bash
sudo mysql_secure_installation
```
Answer the following questions according to your needs:
- Press Enter if you haven't set one previously
- Set a root password for MySQL
- Remove anonymous user > Y
- Disallow remote login to the database > Y
- Remove test database > Y
- Reload privileges > Y

You can now connect to MySQL using the following command:
```bash
mysql -u root -p
```
## Web server setup

<Tabs>
  <TabItem value="apache" label="Apache">
:::info
Here, we do not cover how to install an SSL certificate.
:::

  To install Apache, you can use the following command:
```bash
sudo apt-get install apache2 libapache2-mod-php
```
To enable the rewrite module, you can use the following command:
```bash
sudo a2enmod rewrite
```
To add a virtual host, you can use the following command:
```bash
sudo nano /etc/apache2/sites-available/clientxcms.conf
```
#### Configuration file example
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
To enable the vhost, you can use the following command:
```bash
sudo a2ensite clientxcms.conf
```
To make sure the configuration file is correct, you can use the following command:
```bash
sudo apache2ctl configtest
```
To restart Apache, you can use the following command:
```bash
sudo systemctl restart apache2
```
  </TabItem>
  <TabItem value="nginx" label="Nginx">
:::info
Here, we do not cover how to install an SSL certificate.
:::
  To install Nginx, you can use the following command:
```bash
sudo apt-get install nginx php8.3-fpm
```
To add a virtual host, you can use the following command:
```bash
sudo nano /etc/nginx/sites-available/clientxcms.conf
```
#### Configuration file example
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
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
To enable the vhost, you can use the following command:
```bash
sudo ln -s /etc/nginx/sites-available/clientxcms.conf /etc/nginx/sites-enabled/
```
To make sure the configuration file is correct, you can use the following command:
```bash
sudo nginx -t
```
To restart Nginx, you can use the following command:
```bash
sudo systemctl restart nginx
```
  </TabItem>
</Tabs>

## Database configuration
To configure the database, you can use the following command:
```bash
mysql -u root -p
```
Create a database and user using the following commands. We recommend replacing the password with a more secure one:
```sql
CREATE DATABASE clientxcms;
CREATE USER clientxcms@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON clientxcms.* TO clientxcms@localhost;
FLUSH PRIVILEGES;
```
You can now exit MySQL using the following command:
```sql
exit
```

You can now modify the database connection information in the `.env` file using the following command:
```bash
nano .env
```

Then modify the database connection information:
```env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=clientxcms
DB_USERNAME=clientxcms
DB_PASSWORD=password
```

## Other configurations
To generate an application key, you can use the following command:
```bash
php artisan key:generate
```
To migrate the database, you can use the following command:
```bash
php artisan migrate --force --seed
```
To link the storage folder, you can use the following command:
```bash
php artisan storage:link
```
To add the correct permissions, you can use the following command:
```bash
sudo chmod -R 775 storage bootstrap/cache
```

## Assets
:::info
The first part covers Node.js installation, but if you already have it installed, you can skip to compiling the assets.
:::

First, we need to install NVM, which is a Node.js version manager. To do this, run the following command:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

Then, you can download and install Node.js (you may need to restart the terminal):
```bash
nvm install 18
```

Now verify that the correct version of Node.js is installed with this command:
```bash
node -v
```
This should display `v18.20.4`, which is the current LTS version of Node.js version 18.

<br />

To compile the assets, you can use the following commands:
```bash
npm install
npm run build
```

## Scheduled tasks
To configure scheduled tasks, you can use the following command:
```bash
crontab -e
```
Then add the following line:
```bash
* * * * * php /var/www/clientxcms/artisan schedule:run >> /dev/null 2>&1
```


## Laravel Queues Configuration

Laravel uses a queue system to execute tasks in the background, which improves performance by avoiding synchronous processing.
In your `.env` file, configure the queue driver according to your environment:

```env
QUEUE_CONNECTION=database
```

Available options are:
- `sync`: Executes jobs immediately (not in background).
- `database`: Uses the database to store jobs.
- `redis`: Uses Redis for more performant queue management.
- `sqs`: Uses Amazon SQS.

Make sure your application uses the correct driver.

If you want to ensure the worker always runs, use `supervisor`. Install it first:

```bash
sudo apt update
sudo apt install supervisor
```

Then, create a configuration file `/etc/supervisor/conf.d/clientxcms-worker.conf`:

```ini
[program:clientxcms-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/clientxcms/artisan queue:work --sleep=3 --tries=3 --timeout=90
autostart=true
autorestart=true
numprocs=1
redirect_stderr=true
stdout_logfile=/var/log/clientxcms-worker.log
```

Reload and start Supervisor:

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start clientxcms-worker:*
```

## ClientXCMS Configuration

1. Go to your customer area address. You should see an installation page similar to this one:
   ![Installation page - ClientXCMS](/img/next_gen/Installation/ClientX_Install_page.png)

2. Replace "CLIENTXCMS" with your hosting company trade name.

3. To find the **Client ID** and **Client Secret**, go to the ClientXCMS customer area: [https://clientxcms.com/client/services/](https://clientxcms.com/client/services/), in the management of the relevant NextGen license.
   ![License management - Plesk](/img/next_gen/Installation/ClientX_panel_gestion_licence.png)
   The "**OAuth Client ID**" and "**OAuth Secret**" credentials are required to connect the ClientXCMS license to your site. Then click the "Login" button on your instance.


## Extension purchase
If you purchase extensions in the meantime and get the following error message when you want to activate them:

> **"The composer.json file was not found."**

You can download the extension archive from the download page of the customer area. You can then extract it to your ClientXCMS instance.
![Download page - Extensions](/img/next_gen/Installation/Selfhosting/download_extension.png)

:::info
For themes, you need to run the `npm run build` command again to activate them.
:::
## Migration from a cloud version
If you want to migrate a cloud installation to your server, you can follow these steps:
1. Download a backup of your database from the PHPMyAdmin interface on the database page of the administration.
2. Open a support request to obtain the encryption key of your cloud instance.
3. Import the backup into your local database.
4. Modify the `.env` file to match your encryption key with the encryption key of your cloud instance.
5. Run the command `php artisan migrate --force --seed` to update your database.
6. Run the command `php artisan storage:link` to link the storage folder.
7. Create a `storage/installed` file to indicate that the installation is complete.
8. You can now access your local instance.

## Common problems

### Interface not found Jsonable

If you get the following error:
"Interface "DragonCode/Contracts/Support/Jsonable" not found"
You can fix it by running the command:
```bash
composer require dragon-code/contracts
```

### Theme activated but not displayed on the interface

If you have activated a theme but it is not displayed on the interface, you can add the following variable in the `.env` file:
```env
APP_REVERSE_PATHS=true
```

This is because PHP doesn't read files the same way on every server. This variable fixes this issue.


### Logo not displaying on the interface

If you don't get an error when adding your logo, you may have a permission issue on the storage folder. You can fix this issue by running the following command:
```bash
sudo chmod -R 775 storage
```

If you have issues from one day to the next, you probably have a cache problem. You can fix it by running the following command:
```bash
php artisan cache:clear
```
or you can check the permissions of your cache folder (storage/framework/cache).

### Permission issues on the logs folder
If you regularly have permission issues in the logs folder, this is probably because you ran commands with a different user than the one used by the web server (www-data on Debian/Ubuntu). To fix this issue, you can run the following command to set the correct permissions:
```bash
sudo chmod -R 775 storage/logs
```

This can also come from cron jobs running with a different user. Make sure permissions are correctly set for all users who might access these files.
