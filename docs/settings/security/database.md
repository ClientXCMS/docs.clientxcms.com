---
translated: true
sidebar_position: 2
---
# Database

In **CLIENTXCMS**, **database** management is a critical aspect of your platform's maintenance and security.
The objective is essential: **provide secure access to system data** and **enable advanced maintenance operations** while **preserving data integrity**. This section gives experienced administrators the tools needed to maintain and update their installation.

This page requires enhanced authentication and offers database management tools for advanced users.

You can access database management from:

`Settings` > `Security` > `Database`

![Database management interface](/img/next_gen/settings/security/database/database.png)

:::warning Secure Access Required
This page requires **re-authentication** with your administrator password to access sensitive database information.
:::

## Why manage the database?

Direct database management is useful for:

* **Checking connection settings** in case of technical problems
* **Performing migrations** during updates or extension installations
* **Initializing data** with system seeders
* **Diagnosing problems** with structure or data

:::tip Tip
It's like having access to your car's engine 🔧 — powerful, but requires expertise to avoid damage.
:::

## Connection Information

### Access Settings

This section displays the connection information for your MySQL/MariaDB database:

**Database Server** | (address)
The address of the server hosting your database (localhost, IP, or hostname).

**Database Name** | (name)
The name of the database containing all CLIENTXCMS tables.

**Username** | (user)
The identifier used to connect to the database.

**Password** | (hidden by default)
The connection password, hidden by default for security reasons.
Hover over the field with your mouse to temporarily reveal the password.

### PHPMyAdmin Access

**Web management interface** | (access button)
Direct access to PHPMyAdmin for visual management of your database.

:::info PHPMyAdmin Availability
PHPMyAdmin access is **only available for cloud instances** hosted by ClientXCMS. For self-hosted installations, use your own management interface.
:::

### Secure Usage

- **Never share** this connection information
- **Use a VPN** if you need remote access
- **Make backups** before any critical operation
- **Limit access** to experienced administrators only

## Database Migrations

### What is a migration?

Migrations are scripts that modify your database structure:

- Adding new tables
- Modifying existing columns
- Creating indexes for performance
- Updating the schema for new features

### Running Migrations

**Module Selection** | (dropdown menu)
Choose the module or extension for which to run migrations:

- **Core**: Main ClientXCMS system migrations
- **Extensions**: Migrations specific to installed modules

**Migration Process**:

1. Select the appropriate module
2. Click **"Migrate"** to start the operation
3. Monitor the output for any errors
4. Verify your system is working properly

![Migration result](/img/next_gen/settings/security/database/migrate.png)

:::warning Attention - Critical Operation
Migrations modify your database structure. This operation is **irreversible** and can cause malfunctions if improperly executed.

**Mandatory prerequisites**:

- Complete database backup
- Validated test environment
- Database administration knowledge
:::

### When to Use Migrations

- **System update**: After a ClientXCMS version upgrade
- **Extension installation**: To prepare the database for new features
- **Structure correction**: To resolve schema problems
- **Optimization**: To add performance indexes

## Database Seeders

### Seeder Principle

Seeders initialize your database with default data:

- Standard system settings
- Demonstration data
- Default configuration values
- Reference data (countries, currencies, etc.)

### Running Seeders

**Seeding Process**:

1. Click the **"Seed"** button
2. The operation runs all available seeders
3. Default data is inserted into the appropriate tables
4. Check the logs to confirm success

![Seeding result](/img/next_gen/settings/security/database/seed.png)

:::warning Attention - Existing Data
Seeders can **overwrite or duplicate** existing data. Use this feature only:

- On a fresh installation
- After backing up your data
- If you understand the impact on your current data
:::

### Seeder Use Cases

- **Initial installation**: To populate an empty database
- **Reset**: To restore default settings
- **Development**: To create a test environment
- **Demonstration**: To generate example data

:::tip Remember
Database management requires expertise and caution. These tools are powerful but can damage your installation if misused. If in doubt, consult an experienced administrator or technical support.
:::
