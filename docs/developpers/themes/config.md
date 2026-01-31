---
sidebar_position: 4
translated: true
---
# Theme Configuration

You can add configuration to your theme by creating a `config.blade.php` file in the `resources/themes/theme_name/config/` folder of your installation.
```blade
@include('shared.text', ['name' => 'config_1', 'label' => 'Configuration 1', 'value' => ''])
```

## Configuration Validation
You can validate the configuration by creating a `rules.php` file in the `resources/themes/theme_name/config/` folder of your installation.
```php
<?php
return [
    'config_1' => 'required|string',
];
```
You can check the [Laravel documentation](https://laravel.com/docs/11.x/validation) for more information on validation.
## Configuration Storage
The theme configuration is stored in a `config.json` file in the `resources/themes/theme_name/config/` folder of your installation.
```json
{
    "config_1": "value"
}
```
You can also define default values in the `config.json` file of your theme.
```json
{
    "config_1": "value",
    "config_2": "value"
}
```

To retrieve the configuration in your theme, you can use the `theme_config` method.
```php
{{ theme_config('config_1') }}
```

:::tip Translatable Configuration
If you need some configuration fields to support multiple languages, you can store them in the database instead of `config.json`. See [Database Settings](./db-settings.md) for details.
:::
