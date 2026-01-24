---
translated: true
---
# Settings

In **ClientXCMS**, you can add **cards** and **items** to the settings interface to manage extension configurations or specific settings on the settings page.

## Adding a Card

A card represents a section in settings. You can add a card in your **ServiceProvider** using the `addCard()` method. This method defines the title, description, and display order of the card in settings.

Here's an example of adding a card in the `boot()` method of the extension's **ServiceProvider**:

```php
public function boot(): void
{
    if (!is_installed()) {
        return;
    }

    // Add a card with UUID 'fund', title and sub-description defined in translation files
    $this->app['settings']->addCard(
        'fund',                             // Unique card UUID
        'fund::messages.admin.title',       // Card title (defined in language files)
        'fund::messages.admin.subheading',  // Card description (language files)
        4,                                  // Display order
        null,                               // Item list (null to inject automatically)
        true,                               // Indicates the card is active
        1                                   // Card width (1 by default, 2, 4, 8)
    );
}
```

In this example, the `addCard()` method adds a card named "fund", with its title and description defined in translation files, and a position (order) of 4 in the interface.

## Adding an Item (Card Item)

An item is an element within a card that links to either a view or an action. To add an item, use the `addCardItem()` method.

Here's an example of adding an item to the "fund" card:

```php
public function boot(): void
{
    if (!is_installed()) {
        return;
    }

    // Add the card
    $this->app['settings']->addCard('fund', 'fund::messages.admin.title', 'fund::messages.admin.subheading', 4, null, true);

    // Add an item to the 'fund' card
    $this->app['settings']->addCardItem(
        'fund',                                // Card UUID
        'fund',                                // Item UUID
        'fund::messages.admin.settings.title', // Item title
        'fund::messages.admin.settings.description',  // Item description
        'bi bi-gear',                  // Item icon (Bootstrap class)
        [FundAdminController::class, 'showSettings'], // Action or route (controller method here)
        Permission::MANAGE_SETTINGS            // Required permission to display the item
    );
}
```

In this example, the item links to the `showFund` action of the `FundAdminController`, which displays a dedicated view in the extension administration.

![img](/img/next_gen/developpers/extensions/implementation_guides/navigation_3.png)

## Method Signatures

Here are the signatures of the two methods `addCard()` and `addCardItem()` used in the examples above:

```php
// Add a card to the settings interface
public function addCard(
    string $uuid,        // Unique card identifier
    string $name,        // Card title (language file)
    string $description, // Card description (language file)
    int $order,          // Display order in the card list
    ?Collection $items = null, // Collection of items to display
    bool $is_active = true,    // Indicates if the card is active
    int $size = 1          // Card size (1, 2, 4, 8) 1 by default
): void

// Add an item to an existing card
public function addCardItem(
    string $card_uuid,  // UUID of the card to add the item to
    string $uuid,       // Unique item identifier
    string $name,       // Item title (language file)
    string $description, // Item description (language file)
    string $icon,       // Item icon (Bootstrap or other icon)
    $action,            // Action or callable (route or controller method)
    ?string $permission = null // Required permission to access the item
): void
```

## Creating a Controller for the Item

In the controller, you can define the logic to execute when the user accesses this item. Here's an example method in the `FundAdminController` that displays a view:

```php
<?php
// addons/fund/src/Http/Controllers/FundAdminController.php
namespace App\Addons\Fund\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin\Settings;

class FundAdminController
{
    public function showSettings()
    {
        // Return a specific view in admin for the "fund" extension
        return view('fund_admin::settings');
    }

    public function updateSettings(Request $request)
    {
        // Validate form data
        $validated = $request->validate([
            'fund_key_1' => 'required|string',
        ]);
        Settings::updateSettings($validated);
        return redirect()->back()->with('success', __('fund::admin.settings.success'));
    }
}
```
## Item Route
You must define a route to save the extension settings. Here's an example route in the extension's routes file in `routes/admin.blade.php`:

```php
// addons/fund/routes/admin.blade.php
use App\Addons\Fund\Controllers\FundAdminController;
Route::put('settings', [FundAdminController::class, 'updateSettings'])->name('settings');
```
## Item View
You must create a view for the item in your extension's views directory. Here's an example `settings.blade.php` view:

```blade
<!-- addons/fund/views/admin/settings.blade.php -->
@extends('admin.settings.sidebar')
@section('title', __('fund::admin.settings.title'))
@section('setting')
    <div class="card">
        <div class="flex justify-between">

        <h4 class="font-semibold uppercase text-gray-600 dark:text-gray-400">
            {{ __('fund::admin.settings.title') }}
        </h4>
            <form method="POST" action="{{ route('fund.admin.settings') }}">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        @include('shared/input', ['name' => 'fund_key_1', 'label' => __('fund::admin.settings.key_1'), 'value' => setting('fund_key_1')])
                    </div>
                </div>
                    <button type="submit" class="btn btn-primary">{{ __('global.save') }}</button>
            </form>
        </div>
    </div>
@endsection
```
You can find more information about [form field options](/developpers/themes/forms) in the theme documentation.

You can then retrieve the setting with the `setting('fund_key_1')` function in your view or controller.
