
# Base de données & migrations

**CLIENTXCMS** permet aux développeurs de gérer facilement les bases de données pour leurs extensions via des migrations. Une fonction spécifique est fournie pour charger ces migrations lors du démarrage de l'extension.

## Charger les migrations

Pour charger les migrations dans une extension, il faut inclure la méthode `loadMigrations()` dans le fichier `ServiceProvider` de l'extension. Voici un exemple de l'utilisation dans la classe `FundServiceProvider` :

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

La fonction `loadMigrations()` assure que les migrations spécifiques à l'extension seront prises en compte par le CMS lors de l'exécution des commandes de migration.

## Créer une migration pour une extension

Pour créer une nouvelle migration pour une extension, vous pouvez utiliser la commande suivante :

```bash
php artisan clientxcms:create-migration-extension
```

Cette commande vous demandera :

- Le **nom de la migration**.
- Le **dossier de migration** où la migration sera créée (logiquement, votre dossier).

Une fois les informations fournies, la migration sera automatiquement générée et prête à être modifiée selon vos besoins.

## Exécuter les migrations pour une extension

Après avoir créé vos migrations, vous pouvez les exécuter en utilisant la commande suivante :

```bash
php artisan clientxcms:db-extension
```

Cette commande vous permettra de sélectionner l'extension pour laquelle vous souhaitez appliquer les migrations. Si vous souhaitez appliquer les migrations pour **toutes les extensions** à la fois, vous pouvez ajouter l'option `--all` :

```bash
php artisan clientxcms:db-extension --all
```