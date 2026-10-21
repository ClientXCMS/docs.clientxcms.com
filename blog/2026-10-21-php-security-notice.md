---
title: "PHP Security Notice: Update Your ClientXCMS Server"
slug: /php-security-notice-cve-2026-109618-109619
authors: [martindev]
tags: [security, php, clientxcms, update]
translated: true
---

On October 21, 2026, the PHP project released security fixes for two critical vulnerabilities, **CVE-2026-109618** and **CVE-2026-109619**, both rated **9.2/10 under CVSS v4.0**.

These vulnerabilities may allow an unauthenticated attacker to execute remote code on a server running a vulnerable PHP version. PHP installations serving web requests may be affected, including PHP-FPM, Apache with mod_php, PHP-CGI, FrankenPHP, and LiteSpeed.

:::important This is not a ClientXCMS vulnerability
These vulnerabilities affect the **PHP runtime**, not ClientXCMS itself. A ClientXCMS instance can nevertheless be exposed when it runs on an affected PHP version, just like any other PHP application.
:::

![PHP security notice for CVE-2026-109618 and CVE-2026-109619](/img/blog/php-security-notice/header.png)

<!-- truncate -->

## ClientXCMS Cloud and managed infrastructure

Our **ClientXCMS Cloud offers and infrastructure managed by our teams have been secured**. Customers using these managed services do not need to update PHP themselves.

If you host ClientXCMS on your own VPS, dedicated server, or third-party hosting service, PHP maintenance remains your responsibility. Check your environment and apply the available security updates immediately.

## Patched PHP versions

The following releases include the fixes announced by the PHP project:

- PHP 8.5.12
- PHP 8.4.27
- PHP 8.3.36
- PHP 8.2.35

Earlier releases in these branches must be updated. PHP 8.1 and older are no longer maintained by the PHP project; your distribution or LTS vendor may provide backported fixes, but migrating to a supported branch should be planned.

The [official PHP security advisory](https://www.php.net/archive/2026.php) states that updating is the only complete solution. Temporary mitigations only reduce exposure to specific attack paths.

## How to update PHP

### 1. Check the current version

```bash
php -v
```

Also check the versions used by PHP-FPM, Apache, and every PHP pool on the server. The command-line version may be different from the version actually serving your website.

### 2. Update the installed packages

Before running a system update, follow your usual backup and maintenance procedure.

**Debian / Ubuntu:**

```bash
sudo apt update
sudo apt upgrade
```

**AlmaLinux / Rocky Linux / RHEL:**

```bash
sudo dnf update 'php*'
```

If you use a third-party or vendor repository, confirm that it provides the patched package for your environment. Distribution packages may contain a backported security fix without displaying the exact upstream version number, so consult your vendor's security advisory when necessary.

### 3. Restart the affected services

Restart PHP-FPM or Apache so that the updated binaries are loaded. For example:

```bash
sudo systemctl restart php8.4-fpm
```

Adapt the service name to the PHP version installed on your server. If you use mod_php, restart Apache. Make sure all workers and pools have been restarted.

### 4. Check hosting control panels

If you use Plesk, cPanel, or another panel with its own PHP package management, install the updates supplied by the panel vendor. Check every domain and PHP handler because different websites may use different PHP versions.

### 5. Confirm the update

Run `php -v` again and verify the PHP version used by the website itself. Then test your ClientXCMS administration area, customer area, scheduled tasks, payment flows, and background workers.

## If a patched package is not available yet

Updating remains the only complete solution. While waiting for your vendor's package, the PHP security team recommends temporary measures that reduce exposure without making the installation safe.

For the confirmed session-related attack paths, disable upload progress in the system-level `php.ini`, PHP-FPM pool, or server configuration:

```ini
session.upload_progress.enabled = 0
```

Restart every PHP worker after applying the setting. Do not rely on `ini_set()` or an FPM `.user.ini` file for this mitigation.

Additional temporary measures published by PHP include setting `memory_limit=-1` in a configuration that applications cannot override and, on PHP 8.5, setting `fatal_error_backtraces=0`. These measures have operational consequences and remain incomplete; review the [official advisory](https://www.php.net/archive/2026.php) before applying them.

## Need assistance?

We strongly recommend updating self-hosted servers immediately. If you need help identifying the PHP version used by your instance or validating the update, open a ticket with ClientXCMS support or contact your hosting provider.
