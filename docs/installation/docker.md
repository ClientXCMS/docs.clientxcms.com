---
sidebar_position: 6
translated: true
---

# Docker

This page explains how to install ClientXCMS with Docker Compose. This method prepares the required services in containers and keeps data persistent after a server restart.

:::info
The example below is based on Ubuntu/Debian. Commands may vary depending on your distribution.
:::

## Prerequisites

Before you begin, make sure you have the following:

- A clean Linux server with SSH access and a user that can run `sudo`.
- Ports `80` and `443` open if you use a domain name and HTTPS.
- A domain name pointing to your server for a production installation.
- Your ClientXCMS OAuth credentials, available from your license management page in the [customer area](https://clientxcms.com/client/services/).

## Docker installation

First, update the server and install the base tools:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install git nano curl -y
```

Then install Docker with the official script:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Check that Docker Compose is available:

```bash
docker compose version
```

## Retrieving ClientXCMS

Create the installation folder, then clone the official repository:

```bash
sudo mkdir -p /var/www
cd /var/www
sudo git clone https://github.com/ClientXCMS/ClientXCMS.git clientxcms
cd clientxcms
```

Prepare the configuration files from the provided examples:

```bash
sudo cp docker-compose.example.yml docker-compose.yml
sudo cp .env.example .env
```

## Environment configuration

Open the `.env` file:

```bash
sudo nano .env
```

At minimum, fill in your installation URL and the OAuth credentials for your license:

```env
APP_ENV=production
APP_URL=https://your-domain.com

OAUTH_CLIENT_ID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret
```

Keep the database values intended for Docker, because the application service connects to the MySQL container through Docker's internal network:

```env
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=clientxcms
DB_USERNAME=clientxcms
DB_PASSWORD=clientxcms
```

:::tip
In `nano`, use `Ctrl + X`, then `Y`, then `Enter` to save and quit.
:::

## Docker Compose file check

Before starting the containers, open the `docker-compose.yml` file:

```bash
sudo nano docker-compose.yml
```

Check that `APP_URL` is injected from the `.env` file, without a hardcoded default value:

```yaml
environment:
  APP_URL: "${APP_URL}"
  APP_ENV: "${APP_ENV:-production}"
```

:::warning
Do not define `APP_URL` in two different places. The value used by ClientXCMS must come from the `.env` file, otherwise you may run into license, session, or OAuth authentication errors.
:::

If you use custom modules or extensions, also check that the modules volume points to the correct folder inside the container:

```yaml
services:
  app:
    volumes:
      - ./modules:/app/modules
      - ./storage:/var/www/html/storage
```

If your installation has module permission issues after a restart, you can add an `entrypoint` that fixes permissions before starting the application:

```yaml
services:
  app:
    entrypoint: ["/bin/sh", "-c", "chmod -R 777 /app/modules && chown -R www-data:www-data /app/modules && exec /bin/ash .github/docker/entrypoint.sh supervisord -n -c /etc/supervisord.conf"]
```

:::info
The application folder inside the container is `/app` for modules. The volume must therefore point to `/app/modules`, not `/var/www/html/modules`.
:::

## Domain and SSL configuration

If the `docker-compose.yml` file contains a Let's Encrypt configuration, set your email address in the proxy environment variables:

```yaml
- LETSENCRYPT_EMAIL=admin@your-domain.com
```

Your `APP_URL` must match the domain used by the proxy, for example:

```env
APP_URL=https://your-domain.com
```

:::warning
For a production installation, avoid using a direct IP address. Use a domain name with HTTPS so session cookies work correctly.
:::

## Starting the containers

Start ClientXCMS and the related services in the background:

```bash
sudo docker compose up -d
```

On the first startup, wait about 30 seconds so the database can initialize correctly. You can check the container status with:

```bash
sudo docker compose ps
```

## ClientXCMS initialization

Then run the Laravel commands inside the `app` container:

```bash
sudo docker compose exec app php artisan key:generate
sudo docker compose exec app php artisan optimize:clear
sudo docker compose exec app php artisan clientxcms:install-admin
```

The last command creates the administrator account. Follow the instructions displayed in your terminal.

If the application key is not written automatically to `.env`, display it and add it manually to the `APP_KEY` variable:

```bash
sudo docker compose exec app php artisan key:generate --show
```

:::info
If your `docker-compose.yml` file uses another service name instead of `app`, replace `app` with the name displayed by `sudo docker compose ps`.
:::

## Panel access

Once the installation is complete, open the address configured in `APP_URL`, then access the admin panel:

```text
https://your-domain.com/admin/login
```

Log in with the administrator account created earlier. The OAuth credentials entered in the `.env` file allow ClientXCMS to validate your license.

## Installing a custom module

Copy the module folder into the `modules` folder of your installation:

```bash
cd /var/www/clientxcms
sudo mkdir -p modules
```

Then check that the module is visible from the container:

```bash
sudo docker compose exec app ls /app/modules
```

ClientXCMS stores active modules in the database. If a module placed in the `modules` folder does not appear in the administration, add it to the `modules` table by adapting the values to its `module.json` file:

```bash
sudo docker compose exec app php artisan tinker --execute="
DB::table('modules')->insert([
    'name' => 'ModuleName',
    'uuid' => 'module-uuid',
    'version' => '1.0',
    'enabled' => 1,
    'provider' => 'App\\\\Modules\\\\ModuleName\\\\ModuleNameServiceProvider',
    'created_at' => now(),
    'updated_at' => now(),
]);
"
```

Then regenerate the autoload files and clear the caches:

```bash
sudo docker compose exec app composer dump-autoload
sudo docker compose exec app php artisan optimize:clear
```

## Updating the installation

To update the code and restart the containers:

```bash
cd /var/www/clientxcms
sudo git pull
sudo docker compose pull
sudo docker compose up -d --build
sudo docker compose exec app php artisan optimize:clear
```

## Troubleshooting

### Local or IP address login

If you install ClientXCMS without a domain name, for example with an `http://` URL, your browser may block session cookies. This can cause a `419 Page Expired` error when logging in.

In that case, use a local configuration in `.env`:

```env
APP_ENV=local
APP_URL=http://your-ip
SESSION_DRIVER=cookie
SESSION_SECURE_COOKIE=false
SESSION_SECURE=false
```

If these variables are not passed to the container, add them to the `environment` section of the `app` service in `docker-compose.yml`:

```yaml
environment:
  APP_URL: "${APP_URL}"
  SESSION_DRIVER: "${SESSION_DRIVER:-file}"
  SESSION_SECURE_COOKIE: "${SESSION_SECURE_COOKIE:-false}"
  SESSION_SECURE: "${SESSION_SECURE:-false}"
```

Then restart the containers:

```bash
sudo docker compose up -d
```

If you changed `.env` after starting the container and the changes are not taken into account, copy the file into the container and clear the Laravel configuration:

```bash
sudo docker compose cp .env app:/var/www/html/.env
sudo docker compose exec app php artisan optimize:clear
```

### "Token has been revoked" error

This error usually means the OAuth credentials are missing, invalid, or Laravel is still using old configuration values.

First, check the `.env` file:

```env
OAUTH_CLIENT_ID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret
```

Then reload the configuration:

```bash
sudo docker compose exec app php artisan config:clear
sudo docker compose exec app php artisan cache:clear
```

### Viewing logs

If there is a problem during startup or installation, view the logs:

```bash
sudo docker compose logs -f
```
