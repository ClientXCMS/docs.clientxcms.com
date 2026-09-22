---
sidebar_position: 6
translated: true
---
# Sections
Sections are content elements that can be added to a CLIENTXCMS page. They are controlled by themes and can be customized in the administration interface from the section page in personalization settings: a page picker on the left (e.g. Home, Basket), the list of sections currently on the selected page just below it, and a live preview of the currently selected section on the right, rendered with its actual (or default) content.

## Creating a Custom Section
For custom sections, you can create a `sections.json` file in the `resources/views/sections` folder of your theme. For example, for a `hero` section you can create a file `resources/views/sections/hero.blade.php` with the following content:
```blade
<section class="hero">
    <div class="hero-content">
        <h1>Welcome to {{ setting('app.name') }}</h1>
        <p>This is a default theme</p>
    </div>
</section>
```
And a file `resources/views/sections/sections.json` with the following content:
```json
[
    {
        "path": "sections.hero",
        "uuid": "hero",
        "default": true,
        "thumbnail": "https://via.placeholder.com/150",
        "default_url": "/",
        "section_type": 1
    }
]
```
## Properties

**path**: Section view path

**uuid**: Unique section identifier

**default** (optional): If the section is the default section

**thumbnail** (optional): Section preview image

**default_url** (optional): Default section URL

**section_type**: Section type

**protected** (optional): If the section cannot be removed from the page

## Advanced: Configurable Sections via `sections.php`

The `sections.json` file above only describes static metadata. If your theme's sections need fields that admins can edit from the personalization interface (a badge, a title, a repeatable list of items, an icon picker...), replace `sections.json` with a `sections.php` file in the same `views/sections/` folder.

:::info
`sections.php` and `sections.json` are mutually exclusive: if `views/sections/sections.php` exists, it is loaded and `sections.json` is ignored entirely, even if both files are present.
:::

The file must `return` an array of associative arrays, one per section, in the exact same shape as the JSON format (`path`, `uuid`, `default`, `thumbnail`, `default_url`, `protected`...), plus an optional `fields` key describing the configuration form. Two DTO builders let you generate that array with plain PHP instead of writing it by hand: `App\DTO\Core\Extensions\SectionDefinition` for the section itself, and `App\DTO\Core\Extensions\SectionField` for each configuration field.

### Describing a Section: `SectionDefinition`

| Method | Purpose |
|---|---|
| `SectionDefinition::make(string $uuid)` | Starts a new section definition. |
| `->path(string $path)` | Blade view path rendered for this section (defaults to `sections.{uuid}`). |
| `->default(bool $default = true)` | Marks the section as selected by default on a fresh page. |
| `->defaultUrl(string $url)` | Page URL the section is proposed on by default. |
| `->thumbnail(string $url)` | Preview image shown in the section picker. |
| `->configurable(bool $configurable = true)` | Whether the "configure" form is shown (has no effect if `fields()` is empty). |
| `->protected(bool $protected = true)` | Whether the section can be removed from a page in the admin. Defaults to `true`. |
| `->fields(array $fields)` | Sets the full list of configuration fields, replacing any previous ones. |
| `->field(SectionField $field)` | Appends a single field to the list. |
| `->extensionNeeded(string $extension)` | Ties the section to an extension: it stays visible but greyed out until that extension is enabled. |
| `->toArray()` | Converts the definition to the array format the theme loader expects. |

### Describing a Field: `SectionField`

Each factory method returns a `SectionField` instance; call `->toArray()` on it, or pass it directly to `SectionDefinition::field()` / `->fields()`.

| Factory | Renders as | Notable options |
|---|---|---|
| `SectionField::text($key, $label, $translatable, $hint, $default)` | Single-line text input | `$translatable` makes the value stored per-locale |
| `SectionField::textarea($key, $label, $rows, $translatable, $hint, $default)` | Multi-line text input | `$rows` controls the textarea height |
| `SectionField::icon($key, $label, $default)` | Icon picker (Bootstrap Icons classes) | `$default` (e.g. `bi-star`) |
| `SectionField::number($key, $label, $min, $max, $step, $hint, $default)` | Numeric input | `$min` / `$max` / `$step` |
| `SectionField::boolean($key, $label, $default, $hint)` | Toggle | Stored as `'1'`/`'0'` |
| `SectionField::select($key, $label, $options, $default, $hint)` | Dropdown | `$options` is a `value => label` array |
| `SectionField::color($key, $label, $default, $hint)` | Color picker | |
| `SectionField::url($key, $label, $translatable, $hint, $default)` | URL input | |
| `SectionField::image($key, $label, $hint)` | Media picker | |
| `SectionField::repeater($key, $label, $fields, $min, $max, $hint)` | Repeatable group of sub-fields | `$fields` is an array of `SectionField` (or raw arrays); call `->default([...])` on the result to pre-fill rows |

### Reusable Field Presets

A handful of field groups (a badge/title/subtitle header, a numbered list of features, statistics, testimonials, steps...) repeat across most sections of a theme. Rather than duplicating them field by field, `SectionDefinition` includes the `App\DTO\Core\Extensions\SectionFieldPresets` trait, which exposes them as static methods you can call directly on `SectionDefinition` (or its alias) and spread into `->fields()`:

| Preset | Generates |
|---|---|
| `headerFields()` | `badge` + `title` + `subtitle` |
| `featureFields($count, $withDescription, $iconDefaults)` | `$count` groups of `icon` + `title` (+ `description`) |
| `featureNumberFields($count, $numberDefaults, $iconDefaults)` | `$count` groups of `icon` + `number` + `title` + `description` |
| `statFields($count, $valueDefaults, $labelDefaults)` | `$count` groups of `value` + `label` |
| `testimonialFields($count)` | `$count` groups of `text` + `author` + `role` |
| `stepFields($count, $iconDefaults)` | `$count` groups of `title` + `description` + `icon` |
| `heroCTAFields()` | `primary_cta` + `secondary_cta` |
| `showcaseHeroFields()` | `icon` + `title` + `description` |

This is what keeps a theme with dozens of section variants (grid, cards, carousel, split layout of the same content) from duplicating the same `feature1_icon`, `feature2_icon`... fields dozens of times.

### Worked Example

The example below defines two sections in `resources/themes/your_theme/views/sections/sections.php`: a simple one built from a preset, and a fully custom one using a repeater.

```php
<?php

use App\DTO\Core\Extensions\SectionDefinition as Section;
use App\DTO\Core\Extensions\SectionField as Field;

return [

    // A "logos" section: header preset + a repeatable list of partner logos.
    Section::make('partners_grid')
        ->default()
        ->fields(Section::headerFields())
        ->field(
            Field::repeater('partners', 'Partners', [
                Field::text('name', 'Name', true),
                Field::icon('logo', 'Logo', 'bi-building'),
                Field::url('url', 'Website', false),
            ], min: 1, max: 12)->default([
                ['name' => 'Acme Corp', 'logo' => 'bi-building', 'url' => 'https://example.com'],
                ['name' => 'Globex', 'logo' => 'bi-globe', 'url' => 'https://example.com'],
            ])
        )
        ->toArray(),

    // A "pricing highlight" section, gated behind an extension.
    Section::make('pricing_highlight')
        ->fields([
            ...Section::headerFields(),
            Field::select('plan', 'Highlighted plan', [
                'starter' => 'Starter',
                'pro' => 'Pro',
                'enterprise' => 'Enterprise',
            ], 'pro'),
            Field::boolean('show_badge', 'Show "Most popular" badge', true),
        ])
        ->extensionNeeded('advanced_personalization')
        ->toArray(),
];
```

:::warning
The result of `sections.php` is cached for 7 days under the `themes_sections` key (see `ThemeManager::getThemeSections()`). Nothing in the core invalidates it automatically when the file changes. While developing, clear it explicitly (`php artisan cache:clear`, or `Cache::forget('themes_sections')`) after every edit, otherwise your changes will silently not appear.
:::
