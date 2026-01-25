---
translated: true
---
# Management Panel
The CMS allows adding **advanced management panels** for services, giving users the ability to manage and interact with their services through specific graphical interfaces. The panel can include multiple **tabs** (sub-pages) to structure the different possible actions.

Interface: `App/Contracts/Provisioning/PanelProvisioningInterface`

Abstract Class: `App/Abstracts/AbstractPanelProvisioning`
## Creating the Class

The `App/Contracts/Provisioning/PanelProvisioningInterface` interface defines the methods that must be implemented to create a service management panel. Each **tab** represents a sub-page of the panel, allowing users to perform specific actions on their service.

The main methods to implement are:

- `uuid()`: Returns the unique UUID of the panel.
- `tabs()`: Returns an array of **tabs** as `ProvisioningTabDTO` objects that define the panel's sub-pages.
- `render()`: Handles the panel rendering for the user.
- `renderAdmin()`: Handles the panel rendering in administration.
- `permissions()`: Defines the permissions required to access the panel. (Not yet implemented)

```php
<?php
// addons/fund/src/CustomProductPanel.php
namespace App\Addons\Fund;

use App\Abstracts\AbstractPanelProvisioning;
use App\DTO\Provisioning\ProvisioningTabDTO;
use App\Models\Provisioning\Service;

class CustomProductPanel extends AbstractPanelProvisioning
{
    protected string $uuid = 'gameserver'; // Unique panel UUID

    /**
     * Define the tabs (sub-pages) for the panel
     */
    public function tabs(Service $service): array
    {
        return [
            new ProvisioningTabDTO([
                'title' => 'Console',
                'permission' => $this->uuid . '.panel.console',
                'icon' => '<i class="bi bi-terminal"></i>',
                'uuid' => 'console',
                'active' => true,
            ])
        ];
    }

    /**
     * Render the panel for the user
     */
    public function render(Service $service, array $permissions = [])
    {
        $data = [
            'service' => $service,
            'permissions' => $permissions,
        ];

        if (!$service->server) {
            \Session::flash('error', 'Server not found');
            return '';
        }

        // Logic to get server information
        $serverInfo = $this->getServerInfo($service);

        $data['serverInfo'] = $serverInfo;
        return view('gamepanel::panel.index', $data); // Panel view
    }

    /**
     * Logic to retrieve server information
     */
    protected function getServerInfo(Service $service)
    {
        // Example logic to get server information
        return [
            'cpu' => '25%',
            'ram' => '4 GB',
            'uptime' => '72 hours',
        ];
    }

    /**
     * Custom tab for the console
     */
    public function renderConsole(Service $service)
    {
        $serverInfo = $this->getServerInfo($service);
        return view('gamepanel::panel.console', ['serverInfo' => $serverInfo]);
    }

    /**
     * Render the panel in administration
     */
    public function renderAdmin(Service $service)
    {
        return $this->render($service, ['*']); // Display all permissions
    }
}
```
## Panel View
You can create a view in the `addons/fund/views/default/panel/index.blade.php` folder to display the service management panel. This view can include tabs to navigate between the different sub-pages of the panel.

```blade
Info: {{ $serverInfo['cpu'] }} CPU, {{ $serverInfo['ram'] }} RAM, Uptime: {{ $serverInfo['uptime'] }}
```
## Console View
You can create a view in the `addons/fund/views/default/panel/console.blade.php` folder to display the game server console. This view can include an interactive terminal to allow users to interact with their server.

```blade
<div class="console">
    <pre>Server console...</pre>
</div>
```

## Registering the Class in the Product

Once the panel is created, you can associate it with a product via the `panel()` method in the product class. Here's how to integrate it into a product class:

```php
public function panel(): ?\App\Contracts\Provisioning\PanelProvisioningInterface
{
    return new GameServerPanel(); // Returns the panel associated with the product
}
```
