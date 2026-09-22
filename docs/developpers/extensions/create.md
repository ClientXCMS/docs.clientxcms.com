---
sidebar_position: 1
translated: true
---
# Creating an Addon or Module

To create a new addon or module, you can use the following artisan command:

```bash
php artisan clientxcms:create-extension
```

When executing this command, several questions will be asked, including:

- **Name**: The name of the addon or module
- **UUID**: A unique identifier that you must provide. **Warning**: this UUID must be unique.
- **Description**: A short description, defaults to "This is a new extension." if left empty.
- **Type**: Define whether you are creating an *addon* or a *module*.
- **Author name / email**: Used in `addon.json`/`module.json` and `composer.json`.
- **Use of migrations**: Creates a `database/migrations` folder.
- **Use of models**: Creates a `src/Models` folder.
- **Use of controllers**: Creates a `src/Controllers` folder (asked with a default of yes).
- **Use of lang files**: Creates `lang/en` and `lang/fr` folders with an empty `lang.php` each.
- **Use of routes**: If enabled, asks separately whether to generate `routes/web.php`, `routes/api.php`, and `routes/admin.php`.
- **Use of views**: Creates `views/default` and `views/admin` folders (asked with a default of yes).

### Creation via CLI with options

To create an addon or module without going through the interactive questions, you can use the following command:

```bash
php artisan clientxcms:create-extension \
  --name="My addon" \
  --uuid="my-addon" \
  --description="My addon description" \
  --type="addon" \
  --author-name="Your Name" \
  --author-email="you@example.com" \
  --migrations=1 \
  --models=1 \
  --controllers=1 \
  --lang=1 \
  --routes=1 \
  --web=1 \
  --api=0 \
  --admin=1 \
  --views=1
```

### Option Details

* `--name`: displayed addon/module name.
* `--uuid`: unique addon/module identifier.
* `--description`: short description stored in `addon.json`/`module.json`.
* `--type`: addon/module type. Possible values: `addon` or `module`. Defaults to `addon`.
* `--author-name` / `--author-email`: author metadata stored in `addon.json`/`module.json` and `composer.json`.
* `--migrations`: creates the `database/migrations` folder.
* `--models`: creates the `src/Models` folder.
* `--controllers`: creates the `src/Controllers` folder.
* `--lang`: creates the `lang/en` and `lang/fr` translation folders.
* `--routes`: creates the `routes` folder. Requires `--web`, `--api`, and/or `--admin` to actually generate the corresponding route files.
* `--web` / `--api` / `--admin`: generate `routes/web.php`, `routes/api.php`, `routes/admin.php` respectively (only taken into account when `--routes=1`).
* `--views`: creates the `views/default` and `views/admin` folders.

:::info
There is no `--database` option: use `--migrations` and `--models` instead.
:::

### Structure of an Addon

Here is the structure of a real, public addon - [`idea`](https://github.com/ClientXCMS/addon-idea) - which matches almost exactly what the create command scaffolds by default:

```
/addons/idea
│
├── lang/
│   ├── en/
│   └── fr/
├── database/
│   ├── migrations/
│   └── seeders/
│
├── views/
│   ├── admin/
│   └── default/
│
├── routes/
│   ├── admin.php
│   └── web.php
│
├── src/
│   ├── Controllers/
│   ├── Models/
│   └── IdeaServiceProvider.php
│
├── addon.json
└── composer.json
```

- **lang/**: Contains translation files, one folder per language.
- **database/**: Contains migrations, and seeders when the addon registers one via `addSeeder()` (see [Creating an Addon or Module - Option details](#option-details)).
- **views/admin**: Contains the administration views for the addon/module.
- **views/default**: Contains the addon/module views.
- **routes/**: Contains route files specific to the addon/module. Administration routes are defined in `admin.php`, and public routes in `web.php`.
- **src/**: Contains the main files of the addon/module - controllers, models, and the service provider. `Models` and `Controllers` are the two subfolders scaffolded by the create command, and stay sufficient for a simple addon like `idea`.
- **addon.json|module.json**: Main configuration file of the addon/module, containing metadata and information needed by the CMS to recognize and load it.
- **composer.json**: Standard Composer file for managing the addon/module's dependencies.
- **permissions.json** (optional): File containing permissions specific to the addon/module, when it needs its own permission set. More information about permissions [here](/developpers/extensions/definitions/permissions).

As an addon grows, it typically adds more `src/` subfolders on top of `Controllers`/`Models` - `Http/`, `Commands/`, `Listeners/`, `DTO/`, `Services/`... See the real [`fund`](https://github.com/ClientXCMS/addon-fund) addon for an example of that growth, and the [Products & Services guide](./implementation_guides/product/) for its product/panel/config classes.
