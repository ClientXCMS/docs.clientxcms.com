---
sidebar_position: 4
---
# Configuration du thème

Vous pouvez rajouter de la configuration à votre thème en créant un fichier `config.blade.php` dans le dossier `resources/themes/theme_name/config/` de votre installation.
```blade
@include('shared.text', ['name' => 'config_1', 'label' => 'Configuration 1', 'value' => ''])
```

## Validation de la configuration
Vous pouvez valider la configuration en créant un fichier `rules.php` dans le dossier `resources/themes/theme_name/config/` de votre installation.
```php
<?php
return [
    'config_1' => 'required|string',
];
```
Vous pouvez regarder la [documentation de Laravel](https://laravel.com/docs/11.x/validation) pour plus d'informations sur la validation.
## Stockage de la configuration
La configuration du thème est stockée dans un fichier `config.json` dans le dossier `resources/themes/theme_name/config/` de votre installation.
```json
{
    "config_1": "value"
}
```
Vous pouvez par ailleurs définir des valeurs par défaut dans le fichier `config.json` de votre thème.
```json
{
    "config_1": "value",
    "config_2": "value"
}
```

Pour récupérer la configuration dans votre thème, vous pouvez utiliser la méthode `theme_config`.
```php
{{ theme_config('config_1') }}
```
