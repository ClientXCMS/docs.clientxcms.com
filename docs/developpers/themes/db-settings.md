---
sidebar_position: 5
translated: true
---
# Database Settings

By default, theme configuration is stored in a `config.json` file. This works well for non-translatable settings like colors, layout options, or feature toggles. However, some configuration fields may need to support multiple languages (e.g., a hero title, a subtitle, or footer text).

Database settings allow themes to store specific configuration fields in the database via the `Setting` model, enabling full translation support through the existing `Translatable` trait and the `translated_setting()` helper.

## How It Works

When a theme saves its configuration, the system now splits the data into two storage backends:

1. **Database** (`settings` table): Fields listed in `$dbSettings` are saved via `Setting::updateSettings()` and support per-locale translations.
2. **JSON file** (`config.json`): All remaining fields are saved to the file as before.

```
Save theme configuration
        |
        v
+------------------+
| Validate fields  |
+------------------+
        |
        v
+----------------------------+
| Is the key in dbSettings?  |
+-------+--------------------+
   Yes  |          No
   v    |          v
+-------+--+  +---+----------+
| settings |  | config.json  |
| table    |  | file         |
+----------+  +--------------+
```

## Configuration File

To enable database settings, create a `db_settings.php` file in your theme's `config/` directory:

```
resources/themes/your_theme/
├── config/
│   ├── config.blade.php     # Configuration form
│   ├── config.json          # Non-translatable defaults
│   ├── rules.php            # Validation rules
│   └── db_settings.php      # Keys to store in database
```

The file returns an array of field names that should be stored in the database:

```php
<?php

return [
    'hero_title',
    'hero_subtitle',
    'footer_text',
];
```

These keys must match the field names used in your `config.blade.php` form and `rules.php` validation file.

## Accessing Values

Use the appropriate helper depending on where the value is stored:

```php
// Non-translatable values (from config.json)
{{ theme_config('primary_color') }}

// Translatable values (from database)
{{ translated_setting('hero_title') }}
```

:::tip When to use which helper
- `theme_config()` - For values that are the same across all languages (colors, booleans, numeric values, layout options).
- `translated_setting()` - For values that need to change per locale (titles, descriptions, text content).
:::

## Complete Example

### 1. Define translatable keys

**`config/db_settings.php`**
```php
<?php

return [
    'hero_title',
    'hero_subtitle',
];
```

### 2. Create the configuration form

**`config/config.blade.php`**
```blade
{{-- Translatable fields (stored in database) --}}
@include('shared.text', [
    'name' => 'hero_title',
    'label' => 'Hero Title',
    'value' => translated_setting('hero_title'),
])

@include('shared.text', [
    'name' => 'hero_subtitle',
    'label' => 'Hero Subtitle',
    'value' => translated_setting('hero_subtitle'),
])

{{-- Non-translatable field (stored in config.json) --}}
@include('shared.text', [
    'name' => 'primary_color',
    'label' => 'Primary Color',
    'value' => theme_config('primary_color', '#2c46ba'),
])
```

### 3. Add validation rules

**`config/rules.php`**
```php
<?php

return [
    'hero_title' => 'required|string|max:255',
    'hero_subtitle' => 'required|string|max:500',
    'primary_color' => 'required|string|max:7',
];
```

### 4. Use values in your views

**`views/layouts/front.blade.php`**
```blade
<section class="hero">
    <h1>{{ translated_setting('hero_title') }}</h1>
    <p>{{ translated_setting('hero_subtitle') }}</p>
</section>
```

## Adding Translations

Once a field is stored in the database, translations can be managed through the ClientXCMS admin panel using the built-in translation system. Each `Setting` entry uses the `Translatable` trait, allowing per-locale values to be defined.

:::info
Fields stored in the database will appear in the translation management interface automatically. No additional configuration is required to enable translation for these fields.
:::
