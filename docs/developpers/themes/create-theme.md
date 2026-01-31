---
sidebar_position: 2
translated: true
---
# Creating a Theme
When creating a theme, it is strongly recommended to enable debugging and the development environment to see errors in your theme. To enable debugging, you must add the keys `APP_DEBUG=true` and `APP_ENV=local` in the `.env` file of your installation.
```env
APP_DEBUG=true
APP_ENV=local
```
## Theme Structure
```bash
resources/themes/
└── theme_name/
    ├── assets/
    │   ├── css/
    │   │   └── app.css <!-- Your main css file -->
    │   ├── js/
    │   │   └── app.js <!-- Your main js file -->
    │   └── images/
    ├── config/
    │   └── config.json
    │   └── config.blade.php
    │   └── rules.php
    ├── database/
    │   └── seeders/
    │       └── ThemeNameSeeder.php
    ├── lang/
    │   └── fr/
    │       └── messages.php
    ├── views/
    │   ├── layouts/
    │   │   └── auth.blade.php <!-- Layout for authentication pages -->
    │   │   └── client.blade.php <!-- Layout for client pages -->
    │   │   └── front.blade.php <!-- Layout for front pages -->
    └── theme.json
    └── menus.json
```
## Theme Creation Command
To create a theme, you can use the `clientxcms:create-theme` command from the artisan CLI.
```bash
php artisan clientxcms:create-theme
```
The command will ask you for the theme name and will create the theme structure for you based on your answers.
![clientxcms:create-theme command](/img/next_gen/developpers/themes/cli.png)
## Theme File
The `theme.json` file is the theme configuration file. It contains the theme information.
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
  "supported_options": {
    "menu_dropdown": true,
    "multi_footer_columns": true
  },
  "default_theme_mode": "dark",
  "demo": "https://demo.clientxcms.com",
  "seeder": {
    "file": "database/seeders/ExampleSeeder.php",
    "class": "Database\\Seeders\\ExampleSeeder"
  }
}
```
### Adding a Preview Image
You can add a preview image for your theme by adding a `screenshot.png` file in the `resources/themes/theme_name/` folder.

## Technology
We use the [Blade](https://laravel.com/docs/11.x/blade) template engine for views. For assets, we use [vite](https://vitejs.dev/) with [preline](https://preline.io/) based on [tailwindcss](https://tailwindcss.com/).
You are free to use whatever technologies you want for your theme in terms of CSS.

You can run the following command to compile your theme's assets.
```bash
npm run dev
```

## Theme Views
Theme views allow you to customize the appearance of your website. You can modify theme views by editing files in the `resources/themes/theme_name/views/` folder of your installation.
We recommend not modifying the default theme files. You can override them by creating a child theme.

If you are not familiar with Blade, you can consult the Blade [documentation](https://laravel.com/docs/11.x/blade) to learn their syntax for conditions, loops, etc.
:::info Information
If you haven't implemented a view in your theme, the default theme will be used.
:::

### Asset Management
Assets are managed by [vite](https://vitejs.dev/). You can add your css and js files in the `resources/themes/theme_name/css/` and `resources/themes/theme_name/js/` folders of your installation.
You can use the following example to add your css files.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import 'bootstrap-icons/font/bootstrap-icons.min.css';
@import 'flatpickr/dist/flatpickr.min.css';
```

You can add your CSS and Javascript file imports in your blade files with the @vite() function in your header for example as shown below.
```blade
@vite('resources/themes/yourtheme/css/app.scss')
```
