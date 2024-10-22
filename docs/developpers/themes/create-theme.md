---
sidebar_position: 2
---
# Création d'un thème
Lorsque vous créez un thème, il est fortement recommandé d'activer le débogage et l'environment de développement pour voir les erreurs de votre thème. Pour activer le débogage, vous devez ajouter la clé `APP_DEBUG=true` et `APP_ENV=local` dans le fichier `.env` de votre installation.
```env
APP_DEBUG=true
APP_ENV=local
```
## Structure d'un thème
```bash
resources/themes/
└── theme_name/
    ├── assets/
    │   ├── css/
    │   │   └── app.css <!-- Votre fichier css principal -->
    │   ├── js/
    │   │   └── app.js <!-- Votre fichier js principal -->
    │   └── images/
    ├── config/
    │   └── config.json
    │   └── config.blade.php
    │   └── rules.blade.php
    ├── lang/
    │   └── fr/
    │       └── messages.php
    ├── views/
    │   ├── layouts/
    │   │   └── auth.blade.php <!-- Layout pour les pages d'authentification -->
    │   │   └── client.blade.php <!-- Layout pour les pages client -->
    │   │   └── front.blade.php <!-- Layout pour les pages front -->
    └── theme.json
```
## Commande de création d'un thème
Pour créer un thème, vous pouvez utiliser la commande `clientxcms:create-theme` de l'artisan CLI.
```bash
php artisan clientxcms:create-theme
```
La commande vous demandera le nom du thème et créera la structure du thème pour vous selon vos réponses.
![Commande clientxcms:create-theme](/img/next_gen/developpers/themes/cli.png)
## Fichier du thème
Le fichier `theme.json` est le fichier de configuration du thème. Il contient les informations du thème.
```json
{
  "uuid": "example",
  "name": "Example",
  "description": "This is an example theme",
  "version": "1.0",
  "author": {
    "name": "ClientXCMS",
    "email": "contact@clientxcms.com"
  },
  "demo": "https://demo.clientxcms.com"
}
```
### Ajouter une image de prévisualisation
Vous pouvez ajouter une image de prévisualisation pour votre thème en ajoutant un fichier `screenshot.png` dans le dossier `resources/themes/theme_name/`.

## Technologie
Nous utilisons le moteur de modèle [Blade](https://laravel.com/docs/11.x/blade) pour les vues. Pour les assets, nous utilisons [vite](https://vitejs.dev/). avec [preline](https://preline.io/) basé sur [tailwindcss](https://tailwindcss.com/).
Vous êtes libre d'utiliser les technologies que vous souhaitez pour votre thème en termes de CSS.

Vous pouvez lancez la commande suivante pour compiler les assets de votre thème.
```bash
npm run dev
```

## Vue du thème
Les vues du thème permettent de personnaliser l'apparence de votre site web. Vous pouvez modifier les vues du thème en modifiant les fichiers dans le dossier `resources/themes/theme_name/views/` de votre installation.
Nous conseillons de ne pas modifier les fichiers du thème par défaut. Vous pouvez l'écraser en créant un thème enfant.

Si vous n'êtes pas habitué à Blade, vous pouvez consulter la [documentation](https://laravel.com/docs/11.x/blade) de Blade pour vous adapter à leur syntaxe de condition, boucle, etc.
:::info Information
Si vous avez pas implémenté une vue dans votre thème, le thème par défaut sera utilisé.
:::

### Gestions des assets
Les assets sont géré par [vite](https://vitejs.dev/). Vous pouvez ajouter vos fichiers css et js dans le dossier `resources/themes/theme_name/css/` et `resources/themes/theme_name/js/` de votre installation.
Vous pouvez reprendre l'exemple suivant pour ajouter vos fichiers css.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import 'bootstrap-icons/font/bootstrap-icons.min.css';
@import 'flatpickr/dist/flatpickr.min.css';
```

Vous pouvez rajouter vos importations de fichiers CSS et Javascript dans vos fichiers blade avec la function @vite() dans votre header par exemplecomme ci-dessous.
```blade
@vite('resources/themes/yourtheme/css/app.scss')
```