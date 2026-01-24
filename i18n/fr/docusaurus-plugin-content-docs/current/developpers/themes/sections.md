---
sidebar_position: 5
---
# Sections
Les sections sont des éléments de contenu qui peuvent être ajoutés à une page CLIENTXCMS. Elles sont pilotées par les thèmes et peuvent être personnalisées dans l'interface d'administration depuis la page section dans les paramètres de personalisation.
![Sections](/img/next_gen/developpers/themes/section_admin.png)

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
        "thumbnail": "https://via.placeholder.com/150", // Image de prévisualisation hébergée
        "default_url": "/", // URL par défaut
        "section_type": 1,
    }
]
```
## Propriétés

**path** : Chemin de la vue de la section

**uuid** : Identifiant unique de la section

**default** (faculatif): Si la section est la section par défaut

**thumbnail**(faculatif) : Image de prévisualisation de la section

**default_url**(faculatif) : URL par défaut de la section

**section_type** : Type de section


