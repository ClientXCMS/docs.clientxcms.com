---
sidebar_position: 5
---
# Seeders

Les thèmes peuvent définir des seeders Laravel pour peupler la base de données avec des données initiales lors de l'exécution de `php artisan db:seed`. C'est utile pour créer des liens de menu par défaut, des sections, du contenu d'exemple, ou toute donnée dont votre thème dépend.

## Configuration

Pour enregistrer un seeder, ajoutez une entrée `seeder` dans le fichier `theme.json` de votre thème :

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

| Clé | Description |
|-----|-------------|
| `seeder.file` | Chemin vers le fichier seeder, relatif au répertoire racine du thème |
| `seeder.class` | Nom complet de la classe du seeder (fully qualified class name) |

## Structure du thème

Avec un seeder, le répertoire de votre thème devrait ressembler à ceci :

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

## Créer un seeder

Un seeder de thème est une classe Laravel standard. Placez-le dans le répertoire `database/seeders/` de votre thème :

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
            ['title' => 'À propos', 'type' => 'front', 'position' => 10]
        );

        MenuLink::firstOrCreate(
            ['url' => '/contact'],
            ['title' => 'Contact', 'type' => 'front', 'position' => 20]
        );
    }
}
```

## Exécuter le seeder

Les seeders de thème sont automatiquement enregistrés lorsque le thème est actif. Exécutez la commande artisan standard :

```bash
php artisan db:seed
```

Le seeder du thème sera exécuté en même temps que tous les autres seeders enregistrés (modules, addons, etc.).

:::warning Important
Utilisez `firstOrCreate()` ou `updateOrCreate()` au lieu de `create()` dans vos seeders. Cela évite les doublons si le seeder est exécuté plusieurs fois.
:::

:::tip
Le seeder ne s'exécute que lorsque le thème est actif. Si vous changez de thème, le seeder du thème précédent ne sera pas exécuté.
:::
