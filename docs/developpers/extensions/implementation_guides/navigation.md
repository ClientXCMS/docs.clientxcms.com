---
translated: true
---
# Navigation & Menu

Menus are navigation elements added either to the administration interface or the client interface. To add menu items, you must use the **`AdminMenuItem`** class for administration and **`FrontMenuItem`** class for clients. These classes inherit from **`AbstractMenuItem`**, which defines the basic properties of a menu item.
To add them, you must use your extension's **ServiceProvider** in the **`boot()`** method.
## Admin Menu Example


```php
$this->app['extension']->addAdminMenuItem(
    new AdminMenuItem(
        'fund',            // Unique item UUID
        'admin.fund',      // Route
        'bi bi-speedometer2',   // Icon (Bootstrap class)
        'admin.fund.title',// Translation text
        1,                      // Position
        Permission::ALLOWED     // Permission (here everyone can see)
    )
);
```

### Adding a Menu with a Specific Permission

If you want the menu item to only be visible to users with a specific permission, you can define this permission in the last parameter:

```php

use App\Core\Menu\AdminMenuItem;
$this->app['extension']->addAdminMenuItem(
    new AdminMenuItem(
        'fund',              // Unique item UUID
        'admin.fund',        // Route
        'bi bi-gear',            // Icon
        'admin.settings.title',  // Translation text
        2,                       // Position
        'admin.manage_customers'    // Required permission to see this menu
    )
);

```
#### Result
![img](/img/next_gen/developpers/extensions/implementation_guides/navigation_4.png)

:::info TIPS
This will not display the menu, but the user can access the URL directly. To block URL access, you must add a check in the controller.
:::
## Managing Items and Cards in Settings

In most cases, menu items should be added to the **settings page** as **cards** and **items**. This allows you to organize extension settings clearly and hierarchically.

### Example of Adding a Card and Item in Settings

To add a card and item in settings, use the **`addCard()`** and **`addCardItem()`** methods in the **ServiceProvider**:

```php
$this->app['settings']->addCard(
    'fund',                // Card UUID
    'fund::messages.admin.title',         // Card title (language file)
    'fund::messages.admin.subheading',   // Card description
    4,                             // Position
    null,                          // No items for now
    true                           // Card is active
);

$this->app['settings']->addCardItem(
    'fund',                // Card UUID
    'fund',               // Item UUID
    'fund::messages.admin.settings.title',// Item title
    'fund::messages.admin.settings.description', // Item description
    'bi bi-gear',                  // Icon
    [FundAdminController::class, 'showSettings'], // Action or route
    'admin.settings.manage'        // Required permission to see this item
);
```

![img](/img/next_gen/developpers/extensions/implementation_guides/navigation_3.png)

For more information on managing cards and items in settings, see the [dedicated page](../../../settings).

## Managing Widgets in the Admin Dashboard

Widgets allow you to add visual and interactive elements to the admin dashboard. There are two main types of widgets:

- **`AdminCountWidget`**: Displays simple statistics (like the number of users, orders, etc.).
- **`AdminCardWidget`**: Displays more complex widgets with custom content.

### Simple Statistics

This widget is used to display statistics in the admin dashboard.

#### Example: Display Total Number of Clients

```php

use App\Core\Admin\Dashboard\AdminCountWidget;

$this->app['extension']->addAdminCountWidget(
    new AdminCountWidget(
        'total_customers',         // Unique UUID
        'bi bi-people',            // Icon
        'Total Clients',           // Title
        function() { return \App\Models\Account\Customer::where('is_deleted', false)->count(); },            // Displayed value
        'admin.show_customers'     // Required permission to see this widget
    )
);
```
#### Result

![img](/img/next_gen/developpers/extensions/implementation_guides/navigation_2.png)

### Complex Widgets

This widget allows you to display more complex or dynamic information in the admin dashboard.

#### Example: Display the Last 3 Logged-In Users

```php
use App\Core\Admin\Dashboard\AdminCardWidget;

$this->app['extension']->addAdminCardsWidget(
    new AdminCardWidget(
        'last_login',
        function () {
            $invoices = \App\Models\Billing\Invoice::where('paid_at', '!=', null)
                         ->orderBy('created_at', 'desc')
                         ->limit(3)
                         ->get();
            return view('fund_admin::last-transactions', ['transactions' => $invoices]);
        },
        'admin.earn_page', // Permission
        2                             // Number of columns occupied
    )
);
```

In this example, the widget displays a view containing the last 3 logged-in users. The **`last-transactions.blade.php`** view might look like this:

```blade
<div class="card">
    <div class="card-header">
        Latest Fund Additions
    </div>
    <ul class="list-group list-group-flush">
        @foreach($transactions as $transaction)
            <li class="list-group-item">
                {{ $invoice->identifier() }} - {{ $account->created_at->diffForHumans() }}
            </li>
        @endforeach
    </ul>
</div>
```

## Client Menu Example

```php

use App\Core\Menu\FrontMenuItem;
$this->app['extension']->addFrontMenuItem(
    new FrontMenuItem(
        'fund',            // Unique item UUID
        'front.fund',      // Route
        'bi bi-speedometer2',   // Icon (Bootstrap class)
        'front.fund.title',// Translation text
        1,                      // Position
    )
);
```
### Result

![img](/img/next_gen/developpers/extensions/implementation_guides/navigation_1.png)
