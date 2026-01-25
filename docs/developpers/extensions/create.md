---
sidebar_position: 1
translated: true
---
# Creating an Extension

To create a new extension, you can use the following artisan command:

```bash
php artisan clientxcms:create-extension
```

When executing this command, several questions will be asked, including:

- **Name**: The name of the extension
- **UUID**: A unique identifier that you must provide. **Warning**: this UUID must be unique.
- **Type**: Define whether the extension is an *addon* or a *module*.
- **Use of routes**: Specify if the extension uses routes.
- **Use of controllers**: Indicate if controllers are needed.
- **Use of a database**: Specify if the extension requires database usage.

#### Structure of an addon

Here is an example of the structure of an addon, based on the `fund` extension:

```
/addons/fund
│
├── lang/
│   ├── en/
│   └── fr/
├── database/
│   ├── migrations/
│   └── seeders/
│
└── views/
│   ├── admin/
│   └── default/
│
├── routes/
│   ├── admin.php
│   └── web.php
│
├── src/
│   ├── Http/
│   └── Models/
│   └── FundServiceProvider.php
│
├── addon.json
└── composer.json
└── permissions.json
```

- **lang/**: Contains translation files for different languages (for example, English `en`, French `fr`).
- **database/**: Contains migrations, seeders, or factories for the extension.
- **views/admin**: Contains the administration views for the extension.
- **views/default**: Contains the extension views.
- **routes/**: Contains route files specific to the extension. Administration routes are defined in `admin.php`, and public routes in `web.php`.
- **src/**: Contains the main files of the extension, such as controllers, models, and the service provider (`FundServiceProvider.php`).
- **addon.json|module.json**: Main configuration file of the addon/module, containing metadata and information needed by the CMS to recognize and load the extension.
- **composer.json**: Standard Composer file for managing extension dependencies.
- **permissions.json**: File containing permissions specific to the extension. More information about permissions [here](/developpers/extensions/definitions/permissions).
