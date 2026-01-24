---
sidebar_position: 1
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

## On-Premise Installation
ClientXCMS can also be installed **on-premise (self-hosted)**, provided you have:
- a **database**;
- a **compatible PHP version**.

This option requires:
- **basic technical knowledge** in system administration;
- an **active Community plan on the ClientXCMS platform**.

The corresponding plans are available on the following page:
[https://clientxcms.com/pricing](https://clientxcms.com/pricing)

### Technical Requirements
- **Operating System**: Linux (Ubuntu 22.04+, Debian 11+, CentOS 8+) or Windows Server
- **Disk Space**: minimum **25 GB** required
- **RAM**: minimum **2 GB** (4 GB recommended)

:::info CTXHosting
You can rent a **preconfigured and optimized** virtual machine for ClientXCMS.
We recommend checking out our [CTXHosting](https://ctxhosting.fr) project.
:::


### PHP

ClientXCMS requires **PHP 8.1 or higher** to run.
However, it is **strongly recommended to use PHP 8.3 or higher** to benefit from the latest improvements in **performance**, **security**, and **compatibility**.

PHP 8.3 receives **security fixes until December 31, 2027**.
After this date, it is recommended to migrate to **another PHP version** to continue receiving security updates.

To check currently supported and recommended PHP versions, please visit the official website:
https://www.php.net/supported-versions.php

#### Checking the Installed PHP Version

You can check the PHP version installed on your server using the following command:

```bash
php -v
```

:::warning End of Life for PHP 8.1
PHP 8.1 will reach its end of life (EOL) starting January 2026.
This means it will no longer receive security updates or official patches.

It is strongly advised to update your PHP environment to ensure the security and stability of your application.
:::

#### PHP Extensions

ClientXCMS requires several **PHP extensions** to function properly.
Make sure the following extensions are **installed and enabled** on your server:

**Essential Extensions:**

*Extensions required by ClientXCMS:*
- **php-dom** - DOM/XML document manipulation
- **php-gd** - Image manipulation and generation (QR codes, captchas)
- **php-intl** - Internationalization functions (ICU)
- **php-libxml** - Base XML library
- **php-simplexml** - Simplified XML data processing
- **php-zip** - Archive compression and decompression

*Standard Laravel extensions (included with php-common):*
- **php-common** (includes: ctype, fileinfo, json, tokenizer, filter)
- **php-curl** - HTTP/HTTPS communication and external APIs
- **php-mbstring** - Multi-byte string support (UTF-8)
- **php-bcmath** - Arbitrary precision mathematical calculations
- **php-openssl** - SSL/TLS encryption and certificates
- **php-pdo** - Database access interface
- **php-pdo-mysql** - MySQL/MariaDB driver for PDO
- **php-xml** - Additional XML support

*Recommended extensions:*
- **php-fpm** - FastCGI process manager (production)
- **php-opcache** - Opcode cache for better performance

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

For PHP 8.3 installation and its extensions, please refer to the detailed installation guide for your environment:
- [Dedicated Server/VPS Installation](./selfhosted)
- [Plesk Installation](./plesk)
- [Docker Installation](./docker)

### Database

ClientXCMS requires a database to store your application information.

#### MariaDB (Recommended)
**MariaDB 10.11+** is the recommended solution for ClientXCMS due to:
- **Optimal performance** with Laravel queries
- **Full compatibility** with the MySQL ecosystem
- **Stability** and long-term support (LTS)
- **Open source** without license restrictions

#### MySQL
**MySQL 8.0.38+** is also supported and offers excellent compatibility.

#### Other Supported Databases
ClientXCMS can work with other Laravel-compatible DBMS:
- **PostgreSQL 15+** (robust alternative)
- **SQLite** (for testing and development only)

:::info Production Recommendation
For a production environment, we strongly recommend **MariaDB** for its proven performance and reliability.
:::

### Web Server
ClientXCMS is compatible with most web servers. It is recommended to use [Apache or Nginx](./selfhosted) or a [Plesk hosting](./plesk).
### Docker
You can also install ClientXCMS via Docker. To do this, you must have Docker and Docker Compose installed on your server. You can follow the Docker installation instructions [here](./docker).
