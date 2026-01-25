---
translated: true
---
# Events

In **CLIENTXCMS**, you can leverage [Laravel events](https://laravel.com/docs/11.x/events) to execute specific actions in response to certain actions. An event triggers logic, and a **listener** is attached to listen for that event and execute code when it occurs.

## List of Available Events

Here is a table of events available in CLIENTXCMS:

| Category  | Event                            | Full Name (namespace)                                |
|-----------|----------------------------------|------------------------------------------------------|
| Invoice   | Invoice cancelled                | `App\Events\Invoice\InvoiceCancelled`                |
|           | Invoice completed                | `App\Events\Invoice\InvoiceCompleted`                |
|           | Invoice created                  | `App\Events\Invoice\InvoiceCreated`                  |
|           | Invoice failed                   | `App\Events\Invoice\InvoiceFailed`                   |
|           | Invoice refunded                 | `App\Events\Invoice\InvoiceRefunded`                 |
| Service   | Service cancelled                | `App\Events\Service\ServiceCancelled`                |
|           | Service created                  | `App\Events\Service\ServiceCreated`                  |
|           | Service delivered                | `App\Events\Service\ServiceDelivered`                |
|           | Service delivery failed          | `App\Events\Service\ServiceDeliveryFailed`           |
|           | Service expired                  | `App\Events\Service\ServiceExpired`                  |
|           | Service renewed                  | `App\Events\Service\ServiceRenewed`                  |
|           | Service suspended                | `App\Events\Service\ServiceSuspended`                |
|           | Service unsuspended              | `App\Events\Service\ServiceUnsuspended`              |
| Helpdesk  | Customer ticket answered         | `App\Events\Helpdesk\HelpdeskTicketAnsweredCustomer` |
|           | Staff ticket answered            | `App\Events\Helpdesk\HelpdeskTicketAnsweredStaff`    |
|           | Support ticket created           | `App\Events\Helpdesk\HelpdeskTicketCreatedEvent`     |
| Resources | Abstract resource event          | `App\Events\Resources\AbstractResourceEvent`         |
|           | Resource cloned                  | `App\Events\Resources\ResourceCloneEvent`            |
|           | Resource created                 | `App\Events\Resources\ResourceCreatedEvent`          |
|           | Resource deleted                 | `App\Events\Resources\ResourceDeletedEvent`          |
|           | Resource updated                 | `App\Events\Resources\ResourceUpdatedEvent`          |
| Core      | Payment completed                | `App\Events\Core\CheckoutCompletedEvent`             |
## Using Events

Once an event is triggered in CLIENTXCMS, registered listeners execute their associated logic. For example, if the `App\Events\Invoice\InvoiceCreated` listener is triggered, it will send the event to registered listeners who will process it according to their logic.

## Listening to an Event

In some cases, instead of registering a listener in the `EventServiceProvider`, you can directly use the `Event::listen` method in your extension's **ServiceProvider** to listen for an event.

### Example of Listening in the ServiceProvider

Let's take the example of the `InvoiceCompleted` event. You can listen for it and execute an action in the `FundServiceProvider` as follows:

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

        // Route registration
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

        // Listen for the InvoiceCompleted event
        Event::listen(InvoiceCompleted::class, function ($event) {
            // Logic executed when InvoiceCompleted event occurs
            \Log::info('Invoice has been completed: ' . $event->invoice->id);
        });
    }
}
```

In this example, we use `Event::listen` to listen for the `InvoiceCompleted` event. Each time this event is triggered, the logic provided in the callback is executed (here, a simple log is written to indicate that the invoice has been completed).

### Creating a Dedicated Listener

It is often preferable to extract the listening logic into a dedicated class to better organize your code. To do this, you can create a **listener** that will be called when the `InvoiceCompleted` event is triggered.

1. Create a listener class called `InvoiceCompletedListener`.
2. Implement the logic in this class.

Here is what the listener might look like:

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
        // Logic to execute when InvoiceCompleted event occurs
        \Log::info('Invoice has been completed by listener: ' . $event->invoice->id);
    }
}
```

Then, modify the `FundServiceProvider` to use this listener:

```php
public function boot()
{
    $this->loadViews();
    $this->loadTranslations();
    $this->loadMigrations();

    // Route registration
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

    // Register the InvoiceCompletedListener to listen for the InvoiceCompleted event
    Event::listen(InvoiceCompleted::class, [InvoiceCompletedListener::class, 'handle']);
}
```
