---
sidebar_position: 6
---
# Sections
Les sections sont des éléments de contenu qui peuvent être ajoutés à une page CLIENTXCMS. Elles sont pilotées par les thèmes et peuvent être personnalisées dans l'interface d'administration depuis la page section dans les paramètres de personnalisation : un sélecteur de page à gauche (ex. Accueil, Panier), la liste des sections présentes sur la page sélectionnée juste en dessous, et un aperçu en direct de la section actuellement sélectionnée à droite, rendu avec son contenu réel (ou par défaut).

## Création d'une section personnalisée
Pour des sections personnalisées vous pouvez créer un fichier `sections.json` dans le dossier `resources/views/sections` de votre thème. Par exemple, pour une section `hero` vous pouvez créer un fichier `resources/views/sections/hero.blade.php` avec le contenu suivant :
```blade
<section class="hero">
    <div class="hero-content">
        <h1>Bienvenue sur {{ setting('app.name') }}</h1>
        <p>Ceci est un thème par défault</p>
    </div>
</section>
```
Et un fichier `resources/views/sections/sections.json` avec le contenu suivant :
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
## Propriétés

**path** : Chemin de la vue de la section

**uuid** : Identifiant unique de la section

**default** (facultatif) : Si la section est la section par défaut

**thumbnail** (facultatif) : Image de prévisualisation de la section

**default_url** (facultatif) : URL par défaut de la section

**section_type** : Type de section

**protected** (facultatif) : Si la section ne peut pas être retirée de la page

## Avancé : sections configurables via `sections.php`

Le fichier `sections.json` ci-dessus ne décrit que des métadonnées statiques. Si les sections de votre thème ont besoin de champs modifiables par les administrateurs depuis l'interface de personnalisation (un badge, un titre, une liste répétable d'éléments, un sélecteur d'icône...), remplacez `sections.json` par un fichier `sections.php` dans le même dossier `views/sections/`.

:::info
`sections.php` et `sections.json` s'excluent mutuellement : si `views/sections/sections.php` existe, il est chargé et `sections.json` est totalement ignoré, même si les deux fichiers sont présents.
:::

Le fichier doit `return` un tableau de tableaux associatifs, un par section, avec exactement la même forme que le format JSON (`path`, `uuid`, `default`, `thumbnail`, `default_url`, `protected`...), plus une clé `fields` optionnelle décrivant le formulaire de configuration. Deux builders DTO permettent de générer ce tableau en PHP classique plutôt qu'à la main : `App\DTO\Core\Extensions\SectionDefinition` pour la section elle-même, et `App\DTO\Core\Extensions\SectionField` pour chaque champ de configuration.

### Décrire une section : `SectionDefinition`

| Méthode | Rôle |
|---|---|
| `SectionDefinition::make(string $uuid)` | Démarre une nouvelle définition de section. |
| `->path(string $path)` | Chemin de la vue Blade rendue pour cette section (par défaut `sections.{uuid}`). |
| `->default(bool $default = true)` | Marque la section comme sélectionnée par défaut sur une page neuve. |
| `->defaultUrl(string $url)` | URL de page sur laquelle la section est proposée par défaut. |
| `->thumbnail(string $url)` | Image de prévisualisation affichée dans le sélecteur de sections. |
| `->configurable(bool $configurable = true)` | Affiche ou non le formulaire "configurer" (sans effet si `fields()` est vide). |
| `->protected(bool $protected = true)` | Si la section peut être retirée d'une page depuis l'admin. Vaut `true` par défaut. |
| `->fields(array $fields)` | Définit la liste complète des champs de configuration, en remplaçant les précédents. |
| `->field(SectionField $field)` | Ajoute un seul champ à la liste. |
| `->extensionNeeded(string $extension)` | Lie la section à une extension : elle reste visible mais grisée tant que l'extension n'est pas activée. |
| `->toArray()` | Convertit la définition au format tableau attendu par le chargeur de thème. |

### Décrire un champ : `SectionField`

Chaque méthode statique renvoie une instance `SectionField` ; appelez `->toArray()` dessus, ou passez-la directement à `SectionDefinition::field()` / `->fields()`.

| Fabrique | Rendu | Options notables |
|---|---|---|
| `SectionField::text($key, $label, $translatable, $hint, $default)` | Champ texte sur une ligne | `$translatable` stocke la valeur par langue |
| `SectionField::textarea($key, $label, $rows, $translatable, $hint, $default)` | Champ texte multiligne | `$rows` contrôle la hauteur |
| `SectionField::icon($key, $label, $default)` | Sélecteur d'icône (classes Bootstrap Icons) | `$default` (ex. `bi-star`) |
| `SectionField::number($key, $label, $min, $max, $step, $hint, $default)` | Champ numérique | `$min` / `$max` / `$step` |
| `SectionField::boolean($key, $label, $default, $hint)` | Interrupteur | Stocké en `'1'`/`'0'` |
| `SectionField::select($key, $label, $options, $default, $hint)` | Liste déroulante | `$options` est un tableau `valeur => libellé` |
| `SectionField::color($key, $label, $default, $hint)` | Sélecteur de couleur | |
| `SectionField::url($key, $label, $translatable, $hint, $default)` | Champ URL | |
| `SectionField::image($key, $label, $hint)` | Sélecteur de média | |
| `SectionField::repeater($key, $label, $fields, $min, $max, $hint)` | Groupe répétable de sous-champs | `$fields` est un tableau de `SectionField` (ou de tableaux bruts) ; appelez `->default([...])` sur le résultat pour préremplir des lignes |

### Presets de champs réutilisables

Quelques groupes de champs (un en-tête badge/titre/sous-titre, une liste numérotée de fonctionnalités, des statistiques, des témoignages, des étapes...) se répètent sur la plupart des sections d'un thème. Plutôt que de les dupliquer champ par champ, `SectionDefinition` intègre le trait `App\DTO\Core\Extensions\SectionFieldPresets`, qui les expose comme méthodes statiques appelables directement sur `SectionDefinition` (ou son alias) et à répartir dans `->fields()` :

| Preset | Génère |
|---|---|
| `headerFields()` | `badge` + `title` + `subtitle` |
| `featureFields($count, $withDescription, $iconDefaults)` | `$count` groupes de `icon` + `title` (+ `description`) |
| `featureNumberFields($count, $numberDefaults, $iconDefaults)` | `$count` groupes de `icon` + `number` + `title` + `description` |
| `statFields($count, $valueDefaults, $labelDefaults)` | `$count` groupes de `value` + `label` |
| `testimonialFields($count)` | `$count` groupes de `text` + `author` + `role` |
| `stepFields($count, $iconDefaults)` | `$count` groupes de `title` + `description` + `icon` |
| `heroCTAFields()` | `primary_cta` + `secondary_cta` |
| `showcaseHeroFields()` | `icon` + `title` + `description` |

C'est ce qui évite qu'un thème avec des dizaines de variantes de sections (grille, cartes, carrousel, mise en page fractionnée du même contenu) ne duplique les mêmes champs `feature1_icon`, `feature2_icon`... des dizaines de fois.

### Exemple complet

L'exemple ci-dessous définit deux sections dans `resources/themes/votre_theme/views/sections/sections.php` : une simple construite à partir d'un preset, et une entièrement personnalisée utilisant un repeater.

```php
<?php

use App\DTO\Core\Extensions\SectionDefinition as Section;
use App\DTO\Core\Extensions\SectionField as Field;

return [

    // Une section "logos" : preset d'en-tête + liste répétable de logos partenaires.
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

    // Une section "mise en avant tarifaire", conditionnée à une extension.
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
Le résultat de `sections.php` est mis en cache pendant 7 jours sous la clé `themes_sections` (voir `ThemeManager::getThemeSections()`). Rien dans le core ne l'invalide automatiquement quand le fichier change. Pendant le développement, videz-le explicitement (`php artisan cache:clear`, ou `Cache::forget('themes_sections')`) après chaque modification, sinon vos changements n'apparaîtront pas, silencieusement.
:::
