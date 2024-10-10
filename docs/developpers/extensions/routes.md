---
sidebar_position: 3
---
# Routes

La gestion des routes dans les extensions du CMS ClientXCMS suit le même principe que dans **Laravel**. Chaque extension peut définir ses propres routes dans des fichiers séparés, par exemple dans `routes/web.php` pour les routes publiques, et `routes/admin.php` pour les routes d'administration.

## Exemple de route

Voici un exemple simple de route définie dans le fichier `routes/web.php` d'une extension :

```php
<?php
// addons/fund/routes/web.php
use Illuminate\Support\Facades\Route;

Route::get('/fund', function () {
    return view('fund::index');
})->name('fund.index');
```

Dans cet exemple, une route `GET` est définie pour l'URL `/fund`, qui retourne la vue `fund::index`. Le système va chercher dans le thème actuel `/resources/themes/{theme}/views/fund/index.blade.php` si celui-ci n’existe pas, il ira chercher dans votre dossier `/addons/fund/views/default/index.blade.php`.
Nous conseillons par ailleurs l'utilisation des controllers de laravel. Plus d'informations sur leur propre documentation
## Enregistrement des routes

Pour que ces routes soient correctement chargées par **CLIENTXCMS**, il faut les enregistrer dans le `ServiceProvider` de l'extension. Voici un exemple de `FundServiceProvider` avec l'enregistrement des routes :

```php
<?php
// addons/fund/src/FundServiceProvider.php
namespace App\Addons\Fund;

use \App\Extensions\BaseAddonServiceProvider;

class FundServiceProvider extends BaseAddonServiceProvider
{
    protected string $uuid = 'fund';

    public function register()
    {
        //
    }

    public function boot()
    {
        $this->loadViews(); // Permet de charger les vues (views/admin et views/default)
        $this->loadTranslations(); // Permet de charger les traductions (lang/fr et lang/en)
        $this->loadMigrations(); // Permet de charger les migrations

        // Routes d'administration
        \Route::middleware(['web', 'admin'])
            ->prefix(admin_prefix())
            ->name($this->uuid . '.')
            ->group(function () {
                require addon_path($this->uuid, 'routes/admin.php');
            });

        // Routes publiques
        \Route::middleware(['web'])
            ->name($this->uuid . '.admin.')
            ->group(function () {
                require addon_path($this->uuid, 'routes/web.php');
            });
    }
}
```

## Gestion des routes

Ceci est convention, elle n'est pas obligatoire, mais fortement recommandée.
:::info Convention
- Les **routes d'administration** sont chargées depuis `routes/admin.php`. Elles utilisent les middlewares `web` et `admin`, et sont préfixées avec le préfixe d'administration défini par la fonction `admin_prefix()`.
- Les **routes publiques** sont chargées depuis `routes/web.php` et utilisent uniquement le middleware `web`. Elles sont accessibles sans restrictions particulières.
:::