---
translated: true
---
# Migrate Cloud to Self-Hosted
:::info
CLIENTXCMS is becoming an open source, self-hosted, and free software starting September 1, 2025. For current customers, we offer a transition period to migrate to the self-hosted version. This page guides you through the migration process from CLIENTXCMS Cloud to a self-hosted instance. More information about the transition [here](/blog/mise-en-opensource).
:::

1. **Retrieve a backup of the CLIENTXCMS Cloud instance**

   * Log in to the CLIENTXCMS Cloud interface and go to the **Database** section (for example, via `https://mydomain.com/admin/database`).
   * Note the following information (example):

     * **Host (DB\_HOST)**: `ctx-01-pma.clientxcms.com`
     * **Database name (DB\_DATABASE)**: `123456789_DB`
     * **Username (DB\_USERNAME)**: `123456789_User`
     * **Password (DB\_PASSWORD)**: `P@ssw0rdExample`
   * To export the database, you can use phpMyAdmin:
        * Open phpMyAdmin at the provided address (e.g., `https://ctx-01-pma.clientxcms.com/`).
        * Select the database `123456789_DB`.
        * Click **Export**, choose the "SQL" format and click **OK** to download `123456789_DB.sql`.

2. **Retrieve the Laravel application key (APP\_KEY) from the Cloud instance**

   * Open a request with our technical support to obtain the Laravel application key (APP\_KEY) from your Cloud instance.
   * This key is essential to ensure session compatibility, encrypted cookies, and sensitive data between your Cloud instance and the self-hosted instance.
    * The key looks like this: `base64:8fGtY7Qk3hlV6uJd5zR2wT1xYpB9aZfS3eHlCk7mNo=`.
    * Keep this key safe, as it will be used when configuring your self-hosted instance.

3. **Install CLIENTXCMS v2 on your local server**

   * Follow the CLIENTXCMS v2 installation instructions on your local server, as described in the [Self-hosted Installation](/installation/selfhosted) documentation.
   * Make sure your server meets the prerequisites (PHP, MySQL, etc.).
4. **Import your database**:

    __Via phpMyAdmin__:
     1. Log in to phpMyAdmin on your local server (for example `https://your-server/phpmyadmin`).
     2. Select the database `clientxcms_local`.
     3. Click **Import** → **Choose a file** → select `clientxcms_backup_12345.sql` → click **Execute**.
    1. Wait for the import to complete (this may take a few minutes depending on the database size).
    2. Verify that all tables are present (e.g., `customers`, etc.).

    __Via command line__:
    3. Connect to your server via SSH.
    4. Execute the following commands to create the database and import the backup:
     ```bash
     mysql -u root -p clientxcms_local < /path/to/clientxcms_backup_12345.sql
     # Enter LocalPassword when prompted
     ```
     5. Verify that the import was successful by listing the tables:
     ```bash
     mysql -u root -p -e "USE clientxcms_local; SHOW TABLES;"
     # You should see all CLIENTXCMS Cloud tables (e.g., customers, settings.)

5. **Replace the Laravel key in `.env` with the Cloud key**

   * Edit your `.env` file (located for example in `/var/www/clientxcms/.env`) and replace the `APP_KEY` value (temporary key) with the one provided by support. Example:

     ```diff
     - APP_KEY=base64:ABC123ExampleTmpKeyGeneratedByArtisan=
     + APP_KEY=base64:8fGtY7Qk3hlV6uJd5zR2wT1xYpB9aZfS3eHlCk7mNo=
     ```
   * Save the file. Laravel will now use the same key as your Cloud instance, ensuring session compatibility, encrypted cookies, and sensitive data (for example, password hashing).

6. **Verify additional configuration (cache, storage, etc.)**

   * **Folder permissions**:

     ```bash
     # Ensure the web user (www-data or apache) has the rights
     sudo chown -R www-data:www-data /var/www/clientxcms/storage
     sudo chown -R www-data:www-data /var/www/clientxcms/bootstrap/cache
     sudo chmod -R 775 /var/www/clientxcms/storage
     sudo chmod -R 775 /var/www/clientxcms/bootstrap/cache
     ```
   * **Reinstall / refresh Laravel cache**:

     ```bash
     cd /var/www/clientxcms
     # Recreate configuration, route, and view caches
     php artisan config:cache
     php artisan route:cache
     php artisan view:cache
     ```
7. **Test access to the self-hosted instance**

   * Open your browser to the address `https://clientxcms.yourdomain.com` (or `http://` if SSL is not configured).
   * The CLIENTXCMS login page should appear.
   * **Login**: use your exact credentials from the Cloud instance (example):

     * **Email**: `john.doe@example.com`
     * **Password**: the one you defined on Cloud.
   * If you successfully log in, the migration worked.
