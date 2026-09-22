---
sidebar_position: 1
translated: true
---
# Requirements

This section describes the requirements for installing and using **ClientXCMS**.

## SaaS Installation
Using ClientXCMS in **Software as a Service (SaaS)** mode allows you to use the application directly within the ClientXCMS ecosystem, without having to manage technical aspects such as installation, hosting, or maintenance.

The requirements are as follows:
- have an **account on the ClientXCMS platform**;
- subscribe to an **active plan**.

Plans are available for order at the following address:
[https://clientxcms.com/pricing](https://clientxcms.com/pricing)

## Self-Hosted Installation
ClientXCMS can also be installed **self-hosted (on-premises)**, provided you have:
- a **database**;
- a **compatible PHP version**.

This option requires:
- **basic technical knowledge** in system administration;
- an **active Community plan on the ClientXCMS platform**.

The corresponding plans are available on the following page:
[https://clientxcms.com/pricing](https://clientxcms.com/pricing)

### Technical Requirements
- **Operating System**: any Linux distribution or Windows Server capable of providing the PHP version required below, a compatible database, and Composer. There is no fixed list of "supported" distributions to maintain here - what matters is whether your distribution's package repositories (default or third-party) can provide the required software versions.
- **Disk Space**: minimum **25 GB** required
- **RAM**: minimum **2 GB** (4 GB recommended)

### PHP

The PHP version required by ClientXCMS is declared in the `composer.json` file of the version you are installing (`require.php`) - this is the source of truth, not a version number written on this page. Check it directly in your downloaded copy:

```bash
grep '"php"' composer.json
```

:::warning
Most Linux distributions ship an older PHP version in their default package repository than the one ClientXCMS requires. Rather than compiling PHP from source, use your distribution's official third-party PHP repository: [Sury's repository](https://packages.sury.org/php/) for Debian/Ubuntu, [Remi's repository](https://blog.remirepo.net/) for RHEL/CentOS/Rocky/AlmaLinux.
:::

#### Checking the Installed PHP Version

You can check the PHP version installed on your server using the following command:

```bash
php -v
```

:::warning
An out-of-support PHP version no longer receives security updates. Check your installed version's status on [php.net/supported-versions.php](https://www.php.net/supported-versions.php) and upgrade if it has reached end of life.
:::

#### PHP Extensions

The exact list of required PHP extensions is declared in the `composer.json` file of the version you are installing (`require`, keys prefixed with `ext-`). Check it directly:

```bash
grep '"ext-' composer.json
```

`php-fpm` and `php-opcache` are also recommended for production, even though they are not Composer-declared extensions.

#### Checking Installed PHP Extensions

You can display the list of currently enabled PHP extensions on your server using the following command:

```bash
php -m
```

Or check a specific extension:
```bash
php -m | grep -i "extension_name"
# Example: php -m | grep -i "curl"
```

For PHP installation and its extensions, please refer to the detailed installation guide for your environment:
- [Dedicated Server/VPS Installation](./selfhosted)
- [Plesk Installation](./plesk)
- [Docker Installation](./docker)

### Database

ClientXCMS requires a database to store your application information. It relies on Laravel's database layer, so the minimum supported version for each engine is whatever [Laravel officially supports](https://laravel.com/docs/database#introduction) for the Laravel version declared in `composer.json` - not a version number maintained on this page.

#### MariaDB (Recommended)
MariaDB is the recommended solution for ClientXCMS due to:
- **Optimal performance** with Laravel queries
- **Full compatibility** with the MySQL ecosystem
- **Stability** and long-term support (LTS)
- **Open source** without license restrictions

#### MySQL
Also supported, and offers excellent compatibility.

#### Other Supported Databases
ClientXCMS can work with other Laravel-compatible DBMS:
- **PostgreSQL** (robust alternative)
- **SQLite** (for testing and development only)

:::info Production Recommendation
For a production environment, we strongly recommend **MariaDB** for its proven performance and reliability.
:::

### Web Server

ClientXCMS is compatible with most web servers. It is recommended to use [Apache or Nginx](./selfhosted) or a [Plesk hosting](./plesk).

### Docker
You can also install ClientXCMS via Docker. To do this, you must have Docker and Docker Compose installed on your server. You can follow the Docker installation instructions [here](./docker).
