---
translated: true
sidebar_position: 1
---

# PHPMyAdmin Installation

phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB. Frequently used operations (managing databases, tables, columns, relations, indexes, users, permissions, etc.) can be performed via the user interface, while you still have the ability to directly execute any SQL statement.

It is often used for game server hosting with the [Pterodactyl](../../extensions/modules/Pterodactyl) panel.

This page is intended for installing this software.

## Connection
Open software like [Putty](https://www.puttygen.com/) or [Termius](https://termius.com/) and connect to your server. Then copy/paste the following command to install directly in the pterodactyl public folder.

## Installing dependencies
Run this command to install all required dependencies for PHPMyAdmin.
```
apt-get install wget php php-cgi php-mysqli php-pear php-mbstring libapache2-mod-php php-common php-phpseclib php-mysql -y```
```
### Installation in a folder

#### Installing files

```
cd /var/www/pterodactyl/public
apt-get install zip unzip
wget https://files.phpmyadmin.net/phpMyAdmin/5.2.0/phpMyAdmin-5.2.0-all-languages.zip
unzip phpMyAdmin-5.2.0-all-languages.zip
rm phpMyAdmin-5.2.0-all-languages.zip
mv phpMyAdmin-5.2.0-all-languages/ phpmyadmin/
cd phpmyadmin/
cp config.sample.inc.php config.inc.php
```
#### PHPMyAdmin Configuration

Open the config.inc.php file via command line or SFTP
```
nano config.inc.php
```
and at `$cfg['blowfish_secret']`, modify the line to this:

`$cfg['blowfish_secret'] =  ->     = 'tsje8870s78b441s7e7du2bg7l51yjd9';`

:::info Information
For better security, we strongly recommend generating a different character string than the one on this page; it just needs to be 32 characters long.
:::

### Installation on a subdomain
#### Creating the subdomain
Add an A record with this information in your DNS zone:
- Type: A
- Name: phpmyadmin
- IPv4: Your pterodactyl IP
![img](https://media.discordapp.net/attachments/475073153509490689/1040939792348749874/image.png)
#### Installing files

```
cd /var/www/
apt-get install zip unzip
wget https://files.phpmyadmin.net/phpMyAdmin/5.2.0/phpMyAdmin-5.2.0-all-languages.zip
unzip phpMyAdmin-5.2.0-all-languages.zip
rm phpMyAdmin-5.2.0-all-languages.zip
mv phpMyAdmin-5.2.0-all-languages/ phpmyadmin/
cd phpmyadmin/
cp config.sample.inc.php config.inc.php
```
#### Creating the Vhost
##### Apache
```bash
cd /etc/apache2/sites-available/
```
```bash
nano phpmyadmin.exemple.com.conf
```

###### Configuration file example
```bash
<VirtualHost *:80>
    ServerAdmin admin@example.com
    ServerName phpmyadmin.example.com
    ServerAlias www.phpmyadmin.example.com
    DocumentRoot /var/www/phpmyadmin/public

    <Directory /var/www/phpmyadmin/public/>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Order allow,deny
            allow from all
            Require all granted
    </Directory>

    LogLevel debug
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
```dockerfile
a2ensite phpmyadmin.exemple.com.conf
```
Finally, restart your Apache server for your changes to take effect.

```sudo service apache2 restart```

#### Nginx
Connect via SSH to your virtual machine and run these commands
```bash
cd /etc/nginx/conf.d/
```
```bash
nano phpmyadmin.exemple.com.conf
```
##### Configuration file example
```bash
server {
    listen 80;
    listen [::]:80;
    server_name phpmyadmin.exemple.com;
    root /var/www/phpmyadmin;

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Finally, restart your Nginx server for your changes to take effect.

```sudo service nginx restart```
#### PHPMyAdmin Configuration

Open the config.inc.php file via command line or SFTP
```
nano config.inc.php
```
and at `$cfg['blowfish_secret']`, modify the line to this:

`$cfg['blowfish_secret'] =  ->     = 'tsje8870s78b441s7e7du2bg7l51yjd9';`

:::info Information
For better security, we strongly recommend generating a different character string than the one on this page; it just needs to be 32 characters long.
:::
