---
translated: true
---

# Payment Gateway
Payment gateways allow you to add new payment methods to your client area. For successful integration, you need to follow a consistent structure and implement the interface provided by CLIENTXCMS. We will walk through step by step how to implement a new payment gateway.

Interface: `App/Contracts/Store/GatewayTypeInterface`

Abstract Class: `App/Abstracts/AbstractGatewayType`
### Creating the Class

We need to create a new class that extends `App/Abstracts/AbstractGatewayType` and implements `App/Contracts/Store/GatewayTypeInterface`. This class will contain the methods needed to handle payments, configurations, and validations.

```php
<?php
// addons/fund/src/FundType.php
namespace App\Addons\Fund;

class FundType extends AbstractGatewayType
{
    const UUID = 'fund'; // Unique gateway UUID
    protected string $name = 'Fund'; // Gateway name
    protected string $uuid = self::UUID; // UUID used in the CMS
    protected string $image = 'fund.png'; // Image path displayed in the interface
    protected string $icon = 'bi bi-currency-dollar'; // Bootstrap icon used to represent the gateway

}
```

### Implementing Payment Methods

The `createPayment()` method creates a payment and redirects the user to the return or cancel URL after the payment attempt. It takes as parameters an invoice (`App\Models\Billing\Invoice`), a gateway (`App\Models\Billing\Gateway`), the HTTP request (`Illuminate\Http\Request`), and the redirect **URIs** (`App\DTO\Core\Gateway\GatewayUriDTO`).

```php

    public function createPayment(Invoice $invoice, Gateway $gateway, Request $request, GatewayUriDTO $dto)
    {
        // Create payment via the payment gateway API
        $transactionId = "ctx-" . \Str::uuid();
        $amount = $invoice->total;
        $array = [
          'return_url' => $dto->returnUri,
          'cancel_url' => $dto->cancelUri,
        ];
        $redirectUrl = $dto->returnUri;
        // Redirect to the gateway URL
        return redirect($redirectUrl); // Redirects to the return URL once payment is initiated
    }
```

Here, the transaction UUID is generated, and the user is redirected to the page defined by `$dto->returnUri` after payment creation.

The `processPayment()` method processes the payment once the user returns to the site after interacting with the payment gateway (for example, after being redirected from the external payment provider).

```php
public function processPayment(Invoice $invoice, Gateway $gateway, Request $request, GatewayUriDTO $dto)
{
    if ($invoice->total > $invoice->customer->balance) {
        $invoice->fail(); // If balance is insufficient, the invoice fails
    } else {
        $invoice->customer->balance -= $invoice->total; // Deduct the amount from customer balance
        $invoice->customer->save(); // Save changes
        $invoice->complete(); // Mark invoice as paid
    }
    return redirect()->route('front.invoices.show', $invoice->id); // Redirect to client interface
}
```

## Configuration and Validation

The `configForm()` method generates the configuration form for the gateway, which will be displayed in the **"Store"** section of the CMS settings. This form can be customized for each gateway to allow configuration of API keys or other parameters.

```php
public function configForm(array $context = [])
{
    return view('fund_admin::gateway');
}
```

```blade
<div class="grid md:grid-cols-2 gap-4 grid-cols-1">
    <div>
        @include('admin/shared/password', ['name' => 'secret_key', 'label' => __('admin.settings.store.gateways.fields.client_id'), 'value' => env('FUND_SECRET_KEY')])
    </div>
    <div>
        @include('admin/shared/password', ['name' => 'public_key', 'label' => __('admin.settings.store.gateways.fields.client_secret'), 'value' => env('FUND_PUBLIC_KEY')])
    </div>
</div>
```

The `saveConfig()` method is used to save the gateway configuration settings.

```php
public function saveConfig(array $data)
{
    // Use EnvEditor to update environment variables
    EnvEditor::updateEnv([
        'FUND_SECRET_KEY' => $data['secret_key'],
        'FUND_PUBLIC_KEY' => $data['public_key'],
    ]);
}
```

Finally, the `validate()` method validates the configuration data before saving. For example, to validate API keys:

```php
public function validate(): array
{
    return [
        'secret_key' => ['required', 'string'],
        'public_key' => ['required', 'string'],
    ];
}
```
## Registering the Gateway in the Service Provider

Once the payment gateway is created, it needs to be registered in your extension's **Service Provider** so the CMS can recognize and use it. This is done in the `boot()` method of the **Service Provider**.

Example of registering the **FundType** gateway in the `FundServiceProvider`:

```php
<?php
// addons/fund/src/FundServiceProvider.php
namespace App\Addons\Fund;

use \App\Extensions\BaseAddonServiceProvider;
use App\Services\Core\PaymentTypeService;

class FundServiceProvider extends BaseAddonServiceProvider
{
    protected string $uuid = 'fund';

    public function register()
    {
        //
    }

    public function boot()
    {
        // Register the FundType payment gateway
        $this->app(PaymentTypeService::class)->add(FundType::UUID, FundType::class);
    }
}
```
You will also need to create a seeder to add the gateway to the database.
To do this, create a `FundSeeder.php` file in your extension's `database/seeders` folder:
```php
<?php
// addons/fund/database/seeders/FundSeeder.php
namespace App\Addons\Fund\Database\Seeders;

use App\Models\Billing\Gateway;
use Illuminate\Database\Seeder;
use App\Addons\Fund\FundType;

class FundSeeder extends Seeder
{
    public function run()
    {

        Gateway::updateOrCreate([
            'name' => 'Fund',
            'uuid' => FundType::UUID,
            'status' => 'unreferenced',
        ]);
    }
}
```
Finally, add the seeder in your **Service Provider** so it runs during extension installation:
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
        $this->addSeeder(FundSeeder::class);
    }
}
```

## Activating the Gateway
You should now see the **Fund** payment gateway in the **"Store"** section of the CMS settings. You can activate the gateway and configure it according to your needs.
