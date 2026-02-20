---
sidebar_position: 2
translated: true
---
# Configuration File

When creating an extension with the command `php artisan clientxcms:create-extension`, the basic structure is generated and two configuration files are automatically created: `addon.json` and `composer.json`.

## `addon.json` File

The `addon.json` file is used by the CMS to register extension-specific metadata. Here is an example configuration of this file:

```json
{
    "name": "Fund",
    "description": "Fund",
    "uuid": "fund",
    "version": "1.0",
    "author": {
        "name": "MartinDev",
        "email": "contact@clientxcms.com"
    },
    "providers": [
        "App\\Addons\\Fund\\FundServiceProvider"
    ]
}
```

- **name**: The name of the extension.
- **description**: A short description of the extension.
- **uuid**: A unique identifier for the extension. It is imperative that this UUID is **unique** to avoid any conflicts between extensions.
- **version**: Current version of the extension.
- **author**: Information about the extension author, including name and email address.
- **providers**: A list of the extension's *Service Providers*.
- **thumbnail**: URL to the extension logo.

## `composer.json` File

The `composer.json` file is used by Composer to manage extension dependencies and for PHP class autoloading. Here is an example configuration of this file:

```json
{
    "name": "clientxcms/Fund",
    "description": "Fund",
    "type": "clientxcms-addon",
    "require": {
        "php": ">=8.0"
    },
    "config": {
        "optimize-autoloader": true,
        "platform-check": false
    },
    "autoload": {
        "psr-4": {
            "App\\Addons\\Fund\\": "src/",
            "App\\Addons\\Fund\\Database\\Seeders\\": "database/seeders/"
        }
    }
}
```

- **name**: The full name of the extension.
- **description**: A short description of the extension.
- **type**: Defines the extension type.
- **require**: List of minimum required dependencies, for example the minimum PHP version (`>=8.0`).
- **config**: Additional Composer configuration. Here, `optimize-autoloader` is enabled to optimize class autoloading and `platform-check` is disabled to avoid platform compatibility checks.
- **autoload**: Defines the autoloading strategy, specifying the extension namespace (`App\\Addons\\Fund\\`) and the corresponding source folder (`src/`).
