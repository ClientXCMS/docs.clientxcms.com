---
sidebar_position: 5
translated: true
---
# Seeders

Themes can define Laravel seeders to populate the database with initial data when running `php artisan db:seed`. This is useful for creating default menu links, sections, sample content, or any data your theme depends on.

## Configuration

To register a seeder, add a `seeder` entry to your theme's `theme.json`:

```json
{
  "uuid": "mytheme",
  "name": "My Theme",
  "version": "1.0",
  "seeder": {
    "file": "database/seeders/MyThemeSeeder.php",
    "class": "Database\\Seeders\\MyThemeSeeder"
  }
}
```

| Key | Description |
|-----|-------------|
| `seeder.file` | Path to the seeder file, relative to the theme root directory |
| `seeder.class` | Fully qualified class name of the seeder |

## Theme Structure

With a seeder, your theme directory should look like this:

```
resources/themes/mytheme/
├── config/
├── database/
│   └── seeders/
│       └── MyThemeSeeder.php
├── lang/
├── views/
├── theme.json
└── menus.json
```

## Creating a Seeder

A theme seeder is a standard Laravel seeder class. Place it in the `database/seeders/` directory of your theme:

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Personalization\MenuLink;

class MyThemeSeeder extends Seeder
{
    public function run(): void
    {
        MenuLink::firstOrCreate(
            ['url' => '/about'],
            ['title' => 'About Us', 'type' => 'front', 'position' => 10]
        );

        MenuLink::firstOrCreate(
            ['url' => '/contact'],
            ['title' => 'Contact', 'type' => 'front', 'position' => 20]
        );
    }
}
```

## Running the Seeder

Theme seeders are automatically registered when the theme is active. Run the standard artisan command:

```bash
php artisan db:seed
```

The theme seeder will be executed alongside all other registered seeders (modules, addons, etc.).

:::warning Important
Use `firstOrCreate()` or `updateOrCreate()` instead of `create()` in your seeders. This prevents duplicate entries if the seeder is run multiple times.
:::

:::tip
The seeder only runs when the theme is active. If you switch themes, the previous theme's seeder will not be executed.
:::
