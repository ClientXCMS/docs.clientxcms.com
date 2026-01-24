---
sidebar_position: 3
translated: true
---
# Routes

Route management in ClientXCMS CMS extensions follows the same principle as in **Laravel**. Each extension can define its own routes in separate files, for example in `routes/web.php` for public routes, and `routes/admin.php` for administration routes.

## Route Example

Here is a simple example of a route defined in the `routes/web.php` file of an extension:

```php
<?php
// addons/fund/routes/web.php
use Illuminate\Support\Facades\Route;

Route::get('/fund', function () {
    return view('fund::index');
})->name('fund.index');
```

In this example, a `GET` route is defined for the URL `/fund`, which returns the `fund::index` view. The system will look in the current theme `/resources/themes/{theme}/views/fund/index.blade.php` if it doesn't exist, it will look in your folder `/addons/fund/views/default/index.blade.php`.
We also recommend using Laravel controllers. More information in their own documentation.
## Route Registration

For these routes to be correctly loaded by **CLIENTXCMS**, they must be registered in the extension's `ServiceProvider`. Here is an example of `FundServiceProvider` with route registration:

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
        $this->loadViews(); // Loads views (views/admin and views/default)
        $this->loadTranslations(); // Loads translations (lang/fr and lang/en)
        $this->loadMigrations(); // Loads migrations

        // Administration routes
        \Route::middleware(['web', 'admin'])
            ->prefix(admin_prefix())
            ->name($this->uuid . '.')
            ->group(function () {
                require addon_path($this->uuid, 'routes/admin.php');
            });

        // Public routes
        \Route::middleware(['web'])
            ->name($this->uuid . '.admin.')
            ->group(function () {
                require addon_path($this->uuid, 'routes/web.php');
            });
    }
}
```

## Route Management

This is a convention, it is not mandatory, but strongly recommended.
:::info Convention
- **Administration routes** are loaded from `routes/admin.php`. They use the `web` and `admin` middlewares, and are prefixed with the administration prefix defined by the `admin_prefix()` function.
- **Public routes** are loaded from `routes/web.php` and only use the `web` middleware. They are accessible without particular restrictions.
:::
