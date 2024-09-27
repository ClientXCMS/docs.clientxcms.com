
# Events

Dans **CLIENTXCMS**, vous pouvez tirer parti des [événements Laravel](https://laravel.com/docs/11.x/events) pour exécuter des actions spécifiques en réponse à certaines actions. Un événement permet de déclencher une logique, et un **listener** est attaché pour écouter cet événement et exécuter du code lorsqu'il se produit.

## Liste des événements disponibles

Voici un tableau des événements disponibles dans CLIENTXCMS :

| Catégorie | Événement                        | Nom complet (namespace)                              |
|-----------|----------------------------------|------------------------------------------------------|
| Invoice   | Facture annulée                  | `App\Events\Invoice\InvoiceCancelled`                |
|           | Facture complétée                | `App\Events\Invoice\InvoiceCompleted`                |
|           | Facture créée                    | `App\Events\Invoice\InvoiceCreated`                  |
|           | Échec de la facture              | `App\Events\Invoice\InvoiceFailed`                   |
|           | Facture remboursée               | `App\Events\Invoice\InvoiceRefunded`                 |
| Service   | Service annulé                   | `App\Events\Service\ServiceCancelled`                |
|           | Service créé                     | `App\Events\Service\ServiceCreated`                  |
|           | Service livré                    | `App\Events\Service\ServiceDelivered`                |
|           | Échec de la livraison du service | `App\Events\Service\ServiceDeliveryFailed`           |
|           | Service expiré                   | `App\Events\Service\ServiceExpired`                  |
|           | Service renouvelé                | `App\Events\Service\ServiceRenewed`                  |
|           | Service suspendu                 | `App\Events\Service\ServiceSuspended`                |
|           | Service réactivé                 | `App\Events\Service\ServiceUnsuspended`              |
| Helpdesk  | Ticket client répondu            | `App\Events\Helpdesk\HelpdeskTicketAnsweredCustomer` |
|           | Ticket staff répondu             | `App\Events\Helpdesk\HelpdeskTicketAnsweredStaff`    |
|           | Ticket de support créé           | `App\Events\Helpdesk\HelpdeskTicketCreatedEvent`     |
| Resources | Événement de ressource abstraite | `App\Events\Resources\AbstractResourceEvent`         |
|           | Ressource clonée                 | `App\Events\Resources\ResourceCloneEvent`            |
|           | Ressource créée                  | `App\Events\Resources\ResourceCreatedEvent`          |
|           | Ressource supprimée              | `App\Events\Resources\ResourceDeletedEvent`          |
|           | Ressource mise à jour            | `App\Events\Resources\ResourceUpdatedEvent`          |
| Core      | Paiement finalisé                | `App\Events\Core\CheckoutCompletedEvent`             |
## Utilisation des événements

Une fois qu'un événement est déclenché dans CLIENTXCMS, les listeners enregistrés exécutent leur logique associée. Par exemple, si le listener `App\Events\Invoice\InvoiceCreated` est enclenché, cela enverra l'événement aux listeners enregistrés qui traiteront la suite selon leur logique.

## Écouter un événement

Dans certains cas, au lieu d'enregistrer un listener dans le `EventServiceProvider`, vous pouvez directement utiliser la méthode `Event::listen` dans le **ServiceProvider** de votre extension pour écouter un événement.

### Exemple d'écoute dans le ServiceProvider

Prenons l'exemple de l'événement `InvoiceCompleted`. Vous pouvez l'écouter et exécuter une action dans le `FundServiceProvider` comme suit :

```php
<?php
// addons/fund/src/FundServiceProvider.php
namespace App\Addons\Fund;

use Illuminate\Support\Facades\Event;
use App\Events\InvoiceCompleted;
use App\Addons\Fund\Events\InvoiceCompletedListener;
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
        $this->loadViews();
        $this->loadTranslations();
        $this->loadMigrations();

        // Enregistrement des routes
        \Route::middleware(['web', 'admin'])
            ->prefix(admin_prefix())
            ->name($this->uuid . '.')
            ->group(function () {
                require addon_path($this->uuid, 'routes/admin.php');
            });

        \Route::middleware(['web'])
            ->name($this->uuid . '.')
            ->group(function () {
                require addon_path($this->uuid, 'routes/web.php');
            });

        // Écouter l'événement InvoiceCompleted
        Event::listen(InvoiceCompleted::class, function ($event) {
            // Logique exécutée lors de l'événement InvoiceCompleted
            \Log::info('Invoice has been completed: ' . $event->invoice->id);
        });
    }
}
```

Dans cet exemple, nous utilisons `Event::listen` pour écouter l'événement `InvoiceCompleted`. Chaque fois que cet événement est déclenché, la logique fournie dans le callback est exécutée (ici, un simple log est écrit pour indiquer que la facture a été complétée).

### Création d'un listener dédié

Il est souvent préférable d'extraire la logique d'écoute dans une classe dédiée pour mieux organiser votre code. Pour ce faire, vous pouvez créer un **listener** qui sera appelé lorsque l'événement `InvoiceCompleted` est déclenché.

1. Créez une classe listener appelée `InvoiceCompletedListener`.
2. Implémentez la logique dans cette classe.

Voici à quoi peut ressembler le listener :

```php
<?php
// addons/fund/src/Events/InvoiceCompletedListener.php
namespace App\Addons\Fund\Events;

use App\Events\InvoiceCompleted;

class InvoiceCompletedListener
{
    /**
     * Handle the event.
     *
     * @param  InvoiceCompleted  $event
     * @return void
     */
    public function handle(InvoiceCompleted $event)
    {
        // Logique à exécuter lors de l'événement InvoiceCompleted
        \Log::info('Invoice has been completed by listener: ' . $event->invoice->id);
    }
}
```

Ensuite, modifiez le `FundServiceProvider` pour utiliser ce listener :

```php
public function boot()
{
    $this->loadViews();
    $this->loadTranslations();
    $this->loadMigrations();

    // Enregistrement des routes
    \Route::middleware(['web', 'admin'])
        ->prefix(admin_prefix())
        ->name($this->uuid . '.')
        ->group(function () {
            require addon_path($this->uuid, 'routes/admin.php');
        });

    \Route::middleware(['web'])
        ->name($this->uuid . '.')
        ->group(function () {
            require addon_path($this->uuid, 'routes/web.php');
        });

    // Enregistrer le listener InvoiceCompletedListener pour écouter l'événement InvoiceCompleted
    Event::listen(InvoiceCompleted::class, [InvoiceCompletedListener::class, 'handle']);
}
