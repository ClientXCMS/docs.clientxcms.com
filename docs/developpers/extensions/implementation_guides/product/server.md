---
translated: true
---
# Server
Servers allow interacting with different APIs for **delivery**, **suspension**, or **expiration** of services.


Interface: `\App\Contracts\Provisioning\ServerTypeInterface`

Abstract Class: `\App\Abstracts\AbstractServerType`

## Creating the Class

The `App\Contracts\Provisioning\ServerTypeInterface` interface must be implemented to create a new server class.
The main methods to implement are:

- **`uuid()`**: Returns the unique UUID of the server type (same as the product).
- **`title()`**: Returns the title of the server type.
- **`findServer()`**: Finds a server associated with a product to deliver the service.
- **`createAccount()`**: Creates an account on the server for a service.
- **`suspendAccount()`**: Suspends the account on the server.
- **`unsuspendAccount()`**: Reactivates the account.
- **`expireAccount()`**: Expires the account.
- **`onRenew()`**: Action triggered when a service is renewed.
- **`upgradeService()`**: Allows updating a service.
- **addOption()**: Adds an option to a service.
- **`getSupportedOptions()`**: Returns the options supported by the server.

```php
<?php
// App\Contracts\Provisioning\CustomGameServerType.php
namespace App\Addons\Fund;

use App\Abstracts\AbstractServerType;
use App\DTO\Provisioning\ServiceStateChangeDTO;
use App\Models\Provisioning\Service;
use App\Models\Billing\ConfigOption;

class CustomGameServerType extends AbstractServerType
{
    protected string $uuid = 'gameserver';
    protected string $title = 'gameserver';

    /**
     * Create an account on the server
     */
    public function createAccount(Service $service): ServiceStateChangeDTO
    {
        // Logic to create account on remote API
        // Return service state change
        $data = $service->data; // Data from order
        $config = \App\Addons\Fund\Models\GameServerConfig::where('product_id', $service->product_id)->first(); // Product configuration
        return new ServiceStateChangeDTO($service, true, 'Account created successfully');
    }

    /**
     * Suspend an account on the server
     */
    public function suspendAccount(Service $service): ServiceStateChangeDTO
    {
        // Logic to suspend account
        return new ServiceStateChangeDTO($service, true, 'Account suspended');
    }

    /**
     * Reactivate an account on the server
     */
    public function unsuspendAccount(Service $service): ServiceStateChangeDTO
    {
        // Logic to reactivate account
        return new ServiceStateChangeDTO($service, true, 'Account unsuspended');
    }

    /**
     * Expire an account on the server
     */
    public function expireAccount(Service $service): ServiceStateChangeDTO
    {
        // Logic to expire account
        return new ServiceStateChangeDTO($service, true, 'Account expired');
    }

    /**
     * Test server connection
     */
    public function testConnection(array $params): \App\DTO\Provisioning\ConnectionResponse
    {
        // Connection test logic
        return new \App\DTO\Provisioning\ConnectionResponse(200, 'Connection successful');
    }

    public function upgradeService(Service $service, Product $product): ServiceStateChangeDTO
    {
        return new ServiceStateChangeDTO($service, true, 'Service upgraded');
    }

    public function addOption(Service $service, ConfigOption $configOption): ServiceStateChangeDTO
    {
        return new ServiceStateChangeDTO($service, true, 'Option added');
    }

    public function getSupportedOptions(): array
    {
        return [
            'additional_ip' => 'Additional IP',
            'additional_storage' => 'Additional Storage',
        ];
    }
}
```
## Registering the Class in the Product

To associate this server management class with a product, you must implement the **`server()`** method in the product class.

```php
public function server(): ?\App\Contracts\Provisioning\ServerTypeInterface
{
    return new \App\Fund\CustomGameServerType(); // Associates the CustomGameServerType server type with the product
}
```
