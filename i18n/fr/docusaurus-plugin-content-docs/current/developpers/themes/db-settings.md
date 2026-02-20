---
sidebar_position: 5
---
# Configuration en base de données

Par défaut, la configuration d'un thème est stockée dans un fichier `config.json`. Cela fonctionne bien pour les paramètres non traduisibles comme les couleurs, les options de mise en page ou les toggles de fonctionnalités. Cependant, certains champs de configuration peuvent nécessiter un support multilingue (par exemple un titre de hero, un sous-titre ou un texte de pied de page).

Les paramètres en base de données permettent aux thèmes de stocker des champs de configuration spécifiques dans la base de données via le modèle `Setting`, offrant un support complet de traduction grâce au trait `Translatable` et au helper `translated_setting()`.

## Fonctionnement

Lorsqu'un thème sauvegarde sa configuration, le système sépare les données en deux backends de stockage :

1. **Base de données** (table `settings`) : Les champs listés dans `$dbSettings` sont sauvegardés via `Setting::updateSettings()` et supportent les traductions par locale.
2. **Fichier JSON** (`config.json`) : Tous les autres champs sont sauvegardés dans le fichier comme auparavant.

```
Sauvegarde de la configuration du thème
        |
        v
+---------------------+
| Validation des      |
| champs              |
+---------------------+
        |
        v
+-------------------------------+
| La clé est dans dbSettings ?  |
+-------+-----------------------+
   Oui  |          Non
   v    |          v
+-------+--+  +---+----------+
| table    |  | fichier      |
| settings |  | config.json  |
+----------+  +--------------+
```

## Fichier de configuration

Pour activer les paramètres en base de données, créez un fichier `db_settings.php` dans le dossier `config/` de votre thème :

```
resources/themes/votre_theme/
├── config/
│   ├── config.blade.php     # Formulaire de configuration
│   ├── config.json          # Valeurs par défaut non traduisibles
│   ├── rules.php            # Règles de validation
│   └── db_settings.php      # Clés à stocker en base de données
```

Le fichier retourne un tableau de noms de champs qui doivent être stockés en base de données :

```php
<?php

return [
    'hero_title',
    'hero_subtitle',
    'footer_text',
];
```

Ces clés doivent correspondre aux noms de champs utilisés dans votre formulaire `config.blade.php` et votre fichier de validation `rules.php`.

## Accéder aux valeurs

Utilisez le helper approprié en fonction de l'endroit où la valeur est stockée :

```php
// Valeurs non traduisibles (depuis config.json)
{{ theme_config('primary_color') }}

// Valeurs traduisibles (depuis la base de données)
{{ translated_setting('hero_title') }}
```

:::tip Quel helper utiliser ?
- `theme_config()` - Pour les valeurs identiques dans toutes les langues (couleurs, booléens, valeurs numériques, options de mise en page).
- `translated_setting()` - Pour les valeurs qui doivent changer selon la locale (titres, descriptions, contenu textuel).
:::

## Exemple complet

### 1. Définir les clés traduisibles

**`config/db_settings.php`**
```php
<?php

return [
    'hero_title',
    'hero_subtitle',
];
```

### 2. Créer le formulaire de configuration

**`config/config.blade.php`**
```blade
{{-- Champs traduisibles (stockés en base de données) --}}
@include('shared.text', [
    'name' => 'hero_title',
    'label' => 'Titre du hero',
    'value' => translated_setting('hero_title'),
])

@include('shared.text', [
    'name' => 'hero_subtitle',
    'label' => 'Sous-titre du hero',
    'value' => translated_setting('hero_subtitle'),
])

{{-- Champ non traduisible (stocké dans config.json) --}}
@include('shared.text', [
    'name' => 'primary_color',
    'label' => 'Couleur principale',
    'value' => theme_config('primary_color', '#2c46ba'),
])
```

### 3. Ajouter les règles de validation

**`config/rules.php`**
```php
<?php

return [
    'hero_title' => 'required|string|max:255',
    'hero_subtitle' => 'required|string|max:500',
    'primary_color' => 'required|string|max:7',
];
```

### 4. Utiliser les valeurs dans les vues

**`views/layouts/front.blade.php`**
```blade
<section class="hero">
    <h1>{{ translated_setting('hero_title') }}</h1>
    <p>{{ translated_setting('hero_subtitle') }}</p>
</section>
```

## Ajouter des traductions

Une fois qu'un champ est stocké en base de données, les traductions peuvent être gérées via le panneau d'administration ClientXCMS grâce au système de traduction intégré. Chaque entrée `Setting` utilise le trait `Translatable`, permettant de définir des valeurs par locale.

:::info
Les champs stockés en base de données apparaissent automatiquement dans l'interface de gestion des traductions. Aucune configuration supplémentaire n'est nécessaire pour activer la traduction de ces champs.
:::
