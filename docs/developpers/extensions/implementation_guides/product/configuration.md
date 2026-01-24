---
translated: true
---
# Configuration

Products can have configurations that control performance parameters like memory or RAM. They subsequently allow delivering services based on this configuration.

Interface: `App/Contracts/Store/ProductConfigInterface`

Abstract Class: `App/Abstracts/AbstractConfig`

## Creating the Class

The `App/Contracts/Store/ProductConfigInterface` interface defines the methods each configuration class must implement to manage product configuration. The main methods are:

- `validate()`: Defines validation rules for the configuration.
- `render()`: Returns the HTML form to display and modify the product configuration.
- `storeConfig()`: Saves configurations to the database.
- `updateConfig()`: Updates existing configurations in the database.
- `deleteConfig()`: Deletes the configuration associated with a product.
- `getConfig()`: Retrieves a product's configuration.
- `cloneConfig()`: Clones a configuration from one product to another.

```php
<?php
// addons/fund/src/CustomProductConfig.php
namespace App\Addons\Fund;

use App\Abstracts\AbstractConfig;
use App\Models\Store\Product;
use App\Models\Provisioning\Server;

class CustomProductConfig extends AbstractConfig
{
    protected string $type = 'custom-product';
    protected string $model = \App\Addons\Fund\Models\GameserverConfigModel::class;

    /**
     * Render the configuration form for a specific product
     */
    public function render(Product $product)
    {
        $context = [
            'servers' => $this->servers, // Available servers
            'config' => $this->getConfig($product->id, new $this->model), // Existing configuration or new instance
        ];

        return view('fund_admin::product-config', $context);
    }

    /**
     * Validate configuration data
     */
    public function validate(): array
    {
        return [
            'memory' => 'required|numeric|min:512',
            'cpu' => 'required|numeric|min:1',
            'disk' => 'required|numeric|min:10',
            'server_id' => 'required|exists:servers,id',
        ];
    }

    /**
     * Save configuration for a product
     */
    public function storeConfig(Product $product, array $parameters)
    {
        $this->model::create($parameters + ['product_id' => $product->id]);
    }

    /**
     * Update configuration for a product
     */
    public function updateConfig(Product $product, array $parameters)
    {
        $this->model::where('product_id', $product->id)->update($parameters);
    }
}
```

## Creating the Migration

Use the following artisan command to create a migration for the game server configuration table:

```bash
php artisan clientxcms:create-migration-extension
```

When the command asks for the migration name, enter:

```
CreateGameserverConfigTable
```

Then, in the generated migration file, define the table structure by adding a **`product_id`** field to link with products:

```php
// database/migrations/2022_01_01_000000_create_gameserver_config_table.php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameserverConfigTable extends Migration
{
    public function up()
    {
        Schema::create('gameserver_configs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade'); // Link to products table
            $table->integer('memory');
            $table->integer('cpu');
            $table->integer('disk');
            $table->foreignId('server_id')->constrained('servers')->onDelete('cascade'); // Link to servers table
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gameserver_configs');
    }
}
```
## Configuration Form View
You can create a view in the `addons/fund/views/admin/product-config.blade.php` folder to display the configuration form:

```blade
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
        @include("admin/shared/input", ['name' => 'memory', 'label' => __('provisioning.memory'), 'value' => $config->memory, 'help' => __('provisioning.in_gb'), 'type' => 'number','step' => '0.1', 'min' => 0])
    </div>
    <div>
        @include("admin/shared/input", ['name' => 'disk', 'label' => __('provisioning.disk'), 'value' => $config->disk, 'help' => __('provisioning.in_gb'), 'type' => 'number', 'step' => '0.1', 'min' => 0])
    </div>
    <div>
        @include("admin/shared/input", ['name' => 'cpu', 'label' => __('provisioning.cpu'), 'value' => $config->cpu, 'type' => 'number'])
    </div>
</div>
```
## Creating the Associated Model

Create a model to represent the game server configuration. We recommend naming this model **`GameserverConfigModel`** for clarity:

```php
namespace App\Addons\Fund\Models;

use Illuminate\Database\Eloquent\Model;

class GameserverConfigModel extends Model
{
    protected $table = 'gameserver_configs'; // Table name

    protected $fillable = [
        'product_id',
        'memory',
        'cpu',
        'disk',
        'server_id',
    ];

    public function product()
    {
        return $this->belongsTo(\App\Models\Store\Product::class);
    }

    public function server()
    {
        return $this->belongsTo(\App\Models\Provisioning\Server::class);
    }
}
```

## Registering the Class in the Product

Once the configuration class and model are created, you must associate this configuration with the product by registering it in the **`config()`** method of the product class. Here's an example:

```php
public function config(): ?\App\Contracts\Store\ProductConfigInterface
{
    return new \App\Addons\Fund\GameserverConfig(); // Returns the configuration class for this product
}
```

This allows the CMS to use the configuration when managing products, displaying the configuration form and validating data when creating or modifying a product.
