---
sidebar_position: 6
---
# Tâches planifiées
Les tâches planifiées permettent de définir les actions récurrentes comme la livraison de service, expiration ou la notification des clients.

## Tâches existantes
Voici une description des tâches planifiées par défaut dans CLIENTXCMS .
### Services delivery
La commande `php artisan services:delivery` permet de livrer les services, renouveller les services en attente de renouvellement.

Récurrence : Toutes les minutes
### Services expire
La commande `php artisan services:expire` permet de vérifier les services qui sont expirés ou doivent être suspendus et les désactiver.

Récurrence : Toutes les minutes
### Services renewals
La commande `php artisan services:renewals` permet de générer les factures de renouvellement des services.

Récurrence : Tout les 3 heures
### Services notifications
La commande `php artisan services:notify-expiration` permet de notifier par e-mail les clients des services qui vont expirer prochainement.

Récurrence : Tout les jours à 9h
### Helpdesk close
La commande `php artisan clientxcms:helpdesk-close` permet de fermer les tickets qui sont en attente de réponse depuis X jours.

Récurrence : Tout les jours à 12h
### Invoice delete
La commande `php artisan clientxcms:invoice-delete` permet de supprimer ou annuler les factures qui sont en attente de paiement depuis X jours.

Récurrence : Tout les jours à minuit
### Purge metadata
La commande `php artisan clientxcms:purge-metadata` permet de supprimer les métadonnées qui sont plus utilisés.

Récurrence : Tout les lundi à minuit

## Créer une tâche planifiée
Pour créer une tâche planifiée, vous devez créer une commande artisan et ajouter la commande dans le fichier `ServiceProvider`. Pour créer la commande artisan veuillez créer une classe qui etends `Command` dans votre dossier extension.
Par exemple : 

```php
<?php
// addons/fund/src/Console/Commands/MyCommand.php
use Illuminate\Console\Command;

class MyCommand extends Command
{
    protected $signature = 'my:command';
    protected $description = 'My command description';

    public function handle()
    {
        // Your code here
    }
}
```
Puis ajoutez la commande dans le fichier `ServiceProvider` de votre extension.

```php
<?php
// addons/fund/src/Providers/FundServiceProvider.php
use \App\Extensions\BaseAddonServiceProvider;
use Illuminate\Support\ServiceProvider;

class FundServiceProvider extends BaseAddonServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                \Addons\Fund\Console\Commands\MyCommand::class,
            ]);
        }
        $this->registerSchedule();
    }

    public function schedule(Schedule $schedule)
    {
        if ($this->app->runningInConsole()) {
            $schedule->command('my:command')->everyMinute()
            ->name('my_command')
            ->sendOutputTo(storage_path('logs/my_command.log'));
        }
    }
}
```
