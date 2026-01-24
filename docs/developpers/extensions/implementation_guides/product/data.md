---
translated: true
---

# Additional Data

The CMS allows requesting additional information when ordering a product, such as domain name, password, or operating system.
This data will be transmitted during service delivery.

Interface: `App/Contracts/Store/ProductDataInterface`

Abstract Class: `App\Abstracts\AbstractProductData`

## Implementing the Product Data Class

```php
<?php
// addons/fund/src/CustomProductData.php
namespace App\Addons\Fund;

use App\Abstracts\AbstractProductData;

class CustomProductData extends AbstractProductData
{
    protected array $parameters = ['password']; // Request password

    /**
     * Validate product data
     */
    public function validate(): array
    {
        return [
            'password' => ['required', 'string', 'min:8'], // Password must be provided and have at least 8 characters
        ];
    }

    /**
     * Display the information collection form
     */
    public function render(\App\DTO\Store\ProductDataDTO $productDataDTO)
    {
        $product = $productDataDTO->product;
        return view('fund::product-data', ['data' => $productDataDTO->data]);
    }
}

```
You can also use the `primary()` function to define the product's main parameters.

```php

    public function primary(ProductDataDTO $productDataDTO): string
    {
        return $this->parameters[0] ?? '';
    }
```

## Data Collection Form View
You can create a view in the `addons/fund/views/default/product-data.blade.php` folder to display the data collection form.
```blade

    @include('shared/password', [
        'label' => __('global.password'),
        'name' => 'password',
        'generate' => true,
        'value' => old('password', $data['password'] ?? null),
    ])
```
## Registering the Class in the Product

To link this data collection class to a product, you must return an instance of this class in the `data()` method of the product class:

```php
public function data(?Product $product = null): ?\App\Contracts\Store\ProductDataInterface
{
    return new CustomProductData(); // Returns the data class for hosting
}
```

### Implementation for Requesting a Domain Name

Here's an example based on domain name collection for a web hosting product, using the `App\Abstracts\WebHostingProductData` class.
