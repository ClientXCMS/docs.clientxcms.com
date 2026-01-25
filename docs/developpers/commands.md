---
translated: true
---
# Commands
### **ClientXCMS**

| Command                                 | Description                                                                 | Parameters                                                                                                      |
|:----------------------------------------|:----------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| `clientxcms:admin-autologin`            | Creates an automatic login link for an administrator.                       | `--email`, `--expire`, `--unique`                                                                               |
| `clientxcms:check-renew`                | Checks license renewal.                                                     | -                                                                                                               |
| `clientxcms:create-api-key`             | Creates an API key.                                                         | `name`, `email`, `--type`, `--permissions`                                                                      |
| `clientxcms:create-extension`           | Creates a new extension.                                                    | -                                                                                                               |
| `clientxcms:create-migration-extension` | Creates a new migration for an extension.                                   | `--model`                                                                                                       |
| `clientxcms:create-swagger`             | Creates a Swagger documentation file.                                       | -                                                                                                               |
| `clientxcms:create-theme`               | Creates a new theme.                                                        | -                                                                                                               |
| `clientxcms:db-extension`               | Runs migrations for an extension.                                           | `--action`, `--extension`, `--all`                                                                              |
| `clientxcms:helpdesk-close`             | Closes support tickets.                                                     | -                                                                                                               |
| `clientxcms:index-invoice`              | Reindexes invoices.                                                         | -                                                                                                               |
| `clientxcms:install-admin`              | Creates an administrator user.                                              | `--email`, `--password`, `--firstname`, `--lastname`                                                            |
| `clientxcms:install-db`                 | Installs the database (deletes existing tables).                            | `--username`, `--password`, `--database`, `--host`, `--port`                                                    |
| `clientxcms:install-oauth-client`       | Installs the OAuth client.                                                  | `--client_id`, `--client_secret`                                                                                |
| `clientxcms:invoice-delete`             | Deletes pending invoices when using pro-forma billing.                      | -                                                                                                               |
| `clientxcms:last-logged-admin`          | Displays a table of the last administrator logins.                          | -                                                                                                               |
| `clientxcms:on-update`                  | Command to execute during an update.                                        | -                                                                                                               |
| `clientxcms:purge-basket`               | Purges unused baskets from the database.                                    | `batchSize`                                                                                                     |
| `clientxcms:purge-metadata`             | Fixes special characters in the database.                                   | `batchSize`                                                                                                     |
| `clientxcms:telemetry`                  | Sends anonymized telemetry data.                                            | -                                                                                                               |
| `clientxcms:update-admin`               | Updates an administrator user.                                              | `id`, `--email`, `--password`, `--firstname`, `--lastname`                                                      |
| `clientxcms:update-version`             | Command to execute during an update.                                        | -                                                                                                               |
| `clientxcms:v1-migrate`                 | Migrates data from ClientXCMS v1.                                           | `--dbname`, `--host`, `--username`, `--password`, `--port`, `--force`, `--all`, `--products`, `--support`, etc. |
| `clientxcms:whmcs-migrate`              | Migrates data from WHMCS.                                                   | `--dbname`, `--host`, `--username`, `--password`, `--port`, `--force`, `--key`, `--all`, `--products`, etc.     |

### **Services**

| Command                      | Description                                                           | Parameters |
|:-----------------------------|:----------------------------------------------------------------------|:-----------|
| `services:expire`            | Expires services that have reached their due date.                    | -          |
| `services:notify-expiration` | Notifies users of the upcoming expiration of their services.          | -          |
| `services:renewals`          | Creates invoices for services to be renewed.                          | -          |

### **Translations**

| Command                     | Description                                              | Parameters |
|:----------------------------|:---------------------------------------------------------|:-----------|
| `translations:export`       | Exports French translations to a JSON file.              | `--path`   |
| `translations:import-file`  | Imports translations from a JSON file.                   | `--path`   |
| `translations:import-files` | Imports translations from a ZIP file.                    | `--path`   |
