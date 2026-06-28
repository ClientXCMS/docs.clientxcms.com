---
sidebar_position: 2
translated: true
---

# Installation Script

The **installation script** sets up a complete ClientXCMS stack on a fresh Linux
server with a single command. It installs PHP 8.3, MariaDB, Nginx, Redis and
Node.js, downloads ClientXCMS, configures everything and (optionally) obtains a
Let's Encrypt certificate - then hands over to the web installer for license
activation.

It is the fastest way to self-host. If you prefer to install each component
manually, see [Self-hosted](./selfhosted); for multi-server deployments, see
[Ansible](./ansible).

:::info Community script
This script is community-maintained and distributed separately from the
ClientXCMS core. Always review a script before running it as root. Source:
[github.com/alexwrite/clientxcms-installer](https://github.com/alexwrite/clientxcms-installer)
:::

## Requirements

- A **fresh server** with root access (or `sudo`).
- A valid **Community** (or higher) license - see [Requirements](./requis).
- One of the supported operating systems below.

| Distribution | Versions |
|--------------|----------|
| Debian | 11, 12, 13 |
| Ubuntu | 22.04, 24.04 |
| Rocky Linux / AlmaLinux | 8, 9 |

Architectures: `x86_64` and `arm64`. Minimum 2 GB RAM and 25 GB disk.

:::warning
Run the script on a **dedicated** server. It installs and configures system-wide
services (Nginx, MariaDB, PHP-FPM, Redis); existing sites using these could be
affected.
:::

## Quick start

Run as root (or with `sudo`):

```bash
bash <(curl -sSL https://raw.githubusercontent.com/alexwrite/clientxcms-installer/main/install.sh)
```

Choose **Install ClientXCMS**, then answer the prompts. The script prints a
summary and asks for confirmation before doing anything.

## What it installs

| Step | Detail |
|------|--------|
| Dependencies | PHP 8.3 + required extensions (Sury on Debian, ondrej PPA on Ubuntu, Remi on Rocky/Alma), MariaDB, Nginx, Redis, Node.js 20, Composer, Git |
| Application | `git clone` of ClientXCMS into `/var/www/clientxcms`, `composer install`, `npm run build` |
| Configuration | Writes `.env`, generates `APP_KEY`, wires the database and (optional) Redis drivers |
| Database | Creates the database and user, runs `php artisan migrate --force --seed` and `storage:link` |
| Services | Nginx vhost, scheduler cron, optional systemd queue worker |
| Security | Optional firewall rules and a Let's Encrypt certificate via certbot |

## Interactive options

During the run you will be asked for:

- the **domain name** (FQDN) pointing to the server (or an IP for a local test);
- the default **locale** (`fr` / `en`);
- the **database** name, user and password (leave the password empty to generate a strong one);
- whether to use **Redis** for cache, sessions and queue;
- whether to install a persistent **queue worker** (systemd service);
- whether to open the **firewall** ports 22, 80 and 443;
- whether to obtain a **Let's Encrypt** certificate (the domain must already resolve to the server).

:::info
If obtaining the Let's Encrypt certificate fails (DNS not propagated, ports
closed), the installation still completes - the site stays on HTTP and the
script shows the command to retry certbot later.
:::

## After the script: finish in the browser

Like every self-hosted installation, ClientXCMS is finalised through the **web
installer**, which activates your license online. Once the script completes:

1. Open `http(s)://your-domain`.
2. Follow the wizard: settings → license → admin account.
3. Enter your **OAuth Client ID / Secret** from
   [clientxcms.com/client/services](https://clientxcms.com/client/services/).

## Unattended installation

Every prompt has an environment-variable equivalent, so the installer module can
run non-interactively (CI, provisioning):

```bash
env FQDN=panel.example.com APP_LOCALE=fr \
    MYSQL_DB=clientxcms MYSQL_USER=clientxcms \
    USE_REDIS=true CONFIGURE_WORKER=true \
    CONFIGURE_LETSENCRYPT=true email=admin@example.com \
    bash <(curl -sSL https://raw.githubusercontent.com/alexwrite/clientxcms-installer/main/installers/clientxcms.sh)
```

Leave `MYSQL_PASSWORD` unset to auto-generate one. Other overridable variables
include `INSTALL_DIR`, `CLIENTXCMS_BRANCH`, `PHP_VERSION` and `NODE_VERSION`.

## Uninstall

Re-run the entrypoint and choose **Uninstall**, or run it directly:

```bash
bash <(curl -sSL https://raw.githubusercontent.com/alexwrite/clientxcms-installer/main/installers/uninstall.sh)
```

It removes the application, its services, vhost and cron, and asks before
dropping the database or deleting the files. A final opt-in step can also purge
the whole stack (PHP, MariaDB, Nginx, Redis, Node).
