---
translated: true
---
# Database & Migrations

**CLIENTXCMS** allows developers to easily manage databases for their extensions via migrations. A specific function is provided to load these migrations when the extension starts.

## Loading Migrations

To load migrations in an extension, you need to include the `loadMigrations()` method in the extension's `ServiceProvider` file. Here is an example of usage in the `FundServiceProvider` class:

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
        $this->loadMigrations();
    }
}
```

The `loadMigrations()` function ensures that extension-specific migrations will be taken into account by the CMS when running migration commands.

## Creating a Migration for an Extension

To create a new migration for an extension, you can use the following command:

```bash
php artisan clientxcms:create-migration-extension
```

This command will ask you for:

- The **migration name**.
- The **migration folder** where the migration will be created (logically, your folder).

Once the information is provided, the migration will be automatically generated and ready to be modified according to your needs.

## Running Migrations for an Extension

After creating your migrations, you can run them using the following command:

```bash
php artisan clientxcms:db-extension
```

This command will allow you to select the extension for which you want to apply the migrations. If you want to apply migrations for **all extensions** at once, you can add the `--all` option:

```bash
php artisan clientxcms:db-extension --all
```

## Seeder
You can also create seeders for your extension. To do this, you can use the `addSeeders()` method in the extension's `ServiceProvider` file. Here is an example of usage in the `FundServiceProvider` class:

```php
<?php
// addons/fund/src/FundServiceProvider.php
namespace App\Addons\Fund;

use \App\Extensions\BaseAddonServiceProvider;
use App\Addons\Fund\Database\Seeders\FundSeeder;
use App\Addons\Fund\Database\Seeders\FundSeeder2;

class FundServiceProvider extends BaseAddonServiceProvider
{
    protected string $uuid = 'fund';

    public function register()
    {
        //
    }

    public function boot()
    {
        $this->loadMigrations();
        $this->addSeeder(FundSeeder::class);
        // or
        $this->addSeeders([FundSeeder::class, FundSeeder2::class]);
        // if you only want it locally
        if (config('app.env') === 'local') {
            $this->addSeeder(FundSeeder::class);
        }
    }
}
```

Then you can create your seeder like this:

```php
<?php
// addons/fund/database/seeders/FundSeeder.php
namespace App\Addons\Fund\Database\Seeders;

use Illuminate\Database\Seeder;

class FundSeeder extends Seeder
{
    public function run()
    {
        // Code
    }
}
```

Finally, you can run seeders for an extension using the following command:

```bash
php artisan db:seed --class=App\Addons\Fund\Database\Seeders\FundSeeder
```

Or for all seeders:

```bash
php artisan db:seed
```
