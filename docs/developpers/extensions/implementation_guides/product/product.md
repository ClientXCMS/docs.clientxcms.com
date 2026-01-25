---
translated: true
---

# Products & Services

Products and services are essential elements of any online store. They define the available offers for customers and provisioning options for administrators. Within the extension, products and services are managed via specific classes that define the characteristics and behaviors of each product type.

:::info
This section is major as it allows you to define:
- automation of product creation with servers
- product configuration
- order data management
- options management
:::
Interface: `App/Contracts/Store/ProductTypeInterface`

Abstract Class: `App/Abstracts/AbstractProductType`
## Creating the Class

The `App/Contracts/Store/ProductTypeInterface` interface defines the methods to implement for each product type. Here's an overview of the key methods of the interface:

- `uuid()`: Returns the unique UUID of the product.
- `title()`: Returns the product title.
- `type()`: Returns the product provisioning type.
- `data()`: Allows adding additional information to request from the user during ordering.
- `panel()`: Returns the panel provisioning interface if needed.
- `server()`: Returns the server provisioning interface for service-type products.
- `options()`: Returns an array of additional options for the product.
- `config()`: Returns the product-specific configuration.

Here's an example abstract class with default method implementations:

```php
// addons/fund/src/CustomProductType
namespace App\Addons\Fund;

use App\Abstracts\AbstractProductType;
use App\Models\Store\Product;

class CustomProductType extends AbstractProductType
{
    protected string $uuid = 'custom-product'; // Unique product UUID
    protected string $title = 'Custom Product'; // Product title
    protected string $type = self::SERVICE; // Provisioning type (service)


    public function panel(): ?\App\Contracts\Provisioning\PanelProvisioningInterface
    {
        return new CustomProductData();
    }

    /**
     * Returns the product configuration class
     */
    public function config(?Product $product = null): ?\App\Contracts\Store\ProductConfigInterface
    {
        return new CustomProductConfig(); // Or null
    }
    /**
     * Returns additional data related to the product
     */
    public function data(?Product $product = null): ?\App\Contracts\Store\ProductDataInterface
    {
        return new CustomProductData(); // Or null
    }

    /**
     * Returns the server type required for the product
     */
    public function server(): ?\App\Contracts\Provisioning\ServerTypeInterface
    {
        // Returns a product class implementation if the product requires one
        return new CustomProductServer(); // or null
    }

    /**
     * Not yet implemented
     */
    public function options(): array
    {
        return [
        ];
    }
}
```

The `CustomProductData` and `CustomProductServer` classes must be implemented to handle product data and provisioning. They will be defined in the following sections.

## Registering the Product in the Service Provider

Once the product class is defined, it must be registered in the extension's **Service Provider** so the CMS can recognize and use it.

```php
namespace App\Addons\Fund;

use \App\Extensions\BaseAddonServiceProvider;
use App\Addons\Fund\CustomProductType;

class FundServiceProvider extends BaseAddonServiceProvider
{
    protected string $uuid = 'fund';

    public function register()
    {
        //
    }

    public function boot()
    {
        // Register the new product type
        $this->registerProductTypes();
    }


    public function productsTypes(): array
    {
        return [
            CustomProductType::class,
        ];
    }
}
```
