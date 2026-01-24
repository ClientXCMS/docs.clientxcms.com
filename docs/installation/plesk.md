---
sidebar_position: 4
translated: true
---

# Plesk

This page will guide you through the installation of ClientXCMS Next Gen for self-hosted versions on Plesk. Cloud offerings are automatically installed on CLIENTXCMS servers. Cloud installation is available [here](./cloud).

## Subscription and Domain Setup

1. Create a domain name corresponding to your license.
2. If you already have a client area, save the `.env` file in your site root (for migration) and backup all ClientXCMS or WHMCS files.
   :::warning
   Do not delete or modify the old client area database if you want to reimport your customers, invoices, services, product configurations, etc.
   :::
3. If you have Plesk Administrator access, in the side menu, click "Extensions" under "Server Management".
   !["Extensions" menu - Plesk](/img/next_gen/Installation/Plesk/Plesk_extensions_menu.png)
4. Search and install the "Laravel Toolkit" extension if not already done.
   !["Laravel ToolKit" extension - Plesk](/img/next_gen/Installation/Plesk/Plesk_extension_LaravelTK.png)
5. Generate a free SSL certificate via Let's Encrypt.
   ![SSL Certificate - Plesk](/img/next_gen/Installation/Plesk/Plesk_ssl.png)
6. In your domain dashboard, click "PHP" under development tools. Use PHP version **8.3** for optimal compatibility.
   ![PHP version - Plesk](/img/next_gen/Installation/Plesk/Plesk_PHP83.png)

## Laravel Environment Installation

1. Return to your domain management. Under the "Get Started" menu, select "Laravel".
   ![Laravel environment - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_env.png)
2. Click "Install application", choose "Install from remote repository", enter the URL: https://github.com/ClientXCMS/ClientXCMS and confirm.
   ![Laravel installation - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_install.png)
   ![Laravel installation 2 - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_install2.png)
3. Wait for the CLIENTXCMS deployment to complete.

## Database Configuration

1. Create a database in the domain management dashboard, under "Files & Databases" -> "Databases".

   ![Databases - Plesk](/img/next_gen/Installation/Plesk/Plesk_BDDs.png)

2. Use a strong password for security reasons and note the connection information before confirming.
   ![Databases (creation) - Plesk](/img/next_gen/Installation/Plesk/Plesk_DB_create.png)

3. In the Plesk file manager, go to the Laravel project root (default "httpdocs").
4. Rename the `.env.example` file to `.env` or open the file.
   ![.env.example file (rename) - Plesk](/img/next_gen/Installation/Plesk/Plesk_envexample_rename.png)

5. Click on the `.env` file and modify the values:
    - `APP_ENV=production` -> `APP_ENV=production` (keep as production for security)
    - `APP_URL=http://localhost` -> `APP_URL=https://your.domain.com` (enter your client area domain)
    - `DB_DATABASE=laravel` -> Your database name
    - `DB_USERNAME=root` -> Database username
    - `DB_PASSWORD=""` -> Database user password (in "quotes" to avoid syntax errors)

## Environment Initialization Commands

1. Return to the "Get Started" tab then click "Laravel".
   ![Laravel environment - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_env.png)
2. Click on the "Artisan" section.
   ![Laravel environment (management) - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_env_manage.png)
3. Execute the following commands in this order:
    - `key:generate`
    - `migrate --force`
    - `db:seed --force`
    - `storage:link`
      ![Laravel environment (Artisan commands)](/img/next_gen/Installation/Plesk/Plesk_Laravel_ArtisanCMD.png)
4. Click on the "Node.js" section.
5. Select the most recent Node.js version installed on your Plesk server (e.g., Node.js 21).
6. Execute the following commands in this order:
    - `install`
    - `run build`
      ![Laravel environment (Node.js commands)](/img/next_gen/Installation/Plesk/Plesk_Laravel_NodejsCMD.png)

## ClientXCMS Configuration

1. Go to your client area address. You should see an installation page similar to this one:
   ![Installation page - ClientXCMS](/img/next_gen/Installation/ClientX_Install_page.png)

2. Replace "CLIENTXCMS" with your hosting company name.

3. To find the **Client ID** and **Client Secret**, go to the ClientXCMS client area: [https://clientxcms.com/client/services/](https://clientxcms.com/client/services/), in the relevant NextGen license management.
   ![License management - ClientXCMS](/img/next_gen/Installation/ClientX_panel_gestion_licence.png)
   The "**OAuth Client ID**" and "**OAuth Secret**" identifiers are needed to connect the ClientXCMS license to your site. Then click the "Connect" button on your instance.

## Cron Tasks Configuration

1. In the domain management dashboard, click "Scheduled Tasks" under "Tools & Settings".
2. Click "Add a scheduled task".
3. Configure the following cron task to run every minute:
   ```
   * * * * * php /path/to/your/site/artisan schedule:run >> /dev/null 2>&1
   ```
   Replace `/path/to/your/site/` with your actual Laravel project path (e.g., `/var/www/vhosts/yourdomain.com/httpdocs/`).
   ![Scheduled tasks - Plesk](/img/next_gen/Installation/Plesk/Plesk_cron.png)
