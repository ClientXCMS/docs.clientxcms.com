---
sidebar_position: 2
---
# Fichier de configuration

Lors de la création d'une extension avec la commande `php artisan clientxcms:create-extension`, la structure de base est générée et deux fichiers de configuration sont automatiquement générés : `addon.json` et `composer.json`.

## Fichier `addon.json`

Le fichier `addon.json` est utilisé par le CMS pour enregistrer les métadonnées spécifiques de l'extension. Voici un exemple de configuration de ce fichier :

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

- **name** : Le nom de l'extension.
- **description** : Une courte description de l'extension.
- **uuid** : Un identifiant unique pour l'extension. Il est impératif que cet UUID soit **unique** afin d'éviter tout conflit entre extensions.
- **version** : Version actuelle de l'extension.
- **author** : Informations sur l'auteur de l'extension, avec son nom et son adresse email.
- **providers** : Une liste des *Service Providers* de l'extension.
- **thumbnail** : URL vers le logo de l’extension.

## Fichier `composer.json`

Le fichier `composer.json` est utilisé par Composer pour gérer les dépendances de l'extension et pour l'autoloading des classes PHP. Voici un exemple de configuration de ce fichier :

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

- **name** : Le nom complet de l'extension.
- **description** : Une courte description de l'extension.
- **type** : Définit le type d'extension.
- **require** : Liste des dépendances minimales requises, par exemple la version PHP minimale (`>=8.0`).
- **config** : Configuration Composer additionnelle. Ici, `optimize-autoloader` est activé pour optimiser le chargement automatique des classes et `platform-check` est désactivé pour éviter les vérifications de compatibilité de la plateforme.
- **autoload** : Définit la stratégie d'autoloading, en spécifiant le namespace de l'extension (`App\\Addons\\Fund\\`) et le dossier source correspondant (`src/`).
