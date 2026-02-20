# Configuration

Les produits peuvent avoir des configurations permettant de contrôler les performances comme la mémoire ou la RAM. Ils permettent par la suite de livrer des services à partir de cette configuration.

Interface : `App/Contracts/Store/ProductConfigInterface`

Classe abstraite : `App/Abstracts/AbstractConfig`

## Création de la classe

L'interface `App/Contracts/Store/ProductConfigInterface` définit les méthodes que chaque classe de configuration doit implémenter pour gérer la configuration des produits. Les méthodes principales sont :

- `validate()`: Définit les règles de validation pour la configuration.
- `render()`: Retourne le formulaire HTML pour afficher et modifier la configuration du produit.
- `storeConfig()`: Permet de sauvegarder les configurations dans la base de données.
- `updateConfig()`: Met à jour les configurations existantes dans la base de données.
- `deleteConfig()`: Supprime la configuration associée à un produit.
- `getConfig()`: Récupère la configuration d'un produit.
- `cloneConfig()`: Permet de cloner une configuration d'un produit vers un autre.

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
     * Rendre le formulaire de configuration pour un produit spécifique
     */
    public function render(Product $product)
    {
        $context = [
            'servers' => $this->servers, // Les serveurs disponibles
            'config' => $this->getConfig($product->id, new $this->model), // La configuration existante ou une nouvelle instance
        ];

        return view('fund_admin::product-config', $context);
    }

    /**
     * Valider les données de la configuration
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
     * Sauvegarder la configuration pour un produit
     */
    public function storeConfig(Product $product, array $parameters)
    {
        $this->model::create($parameters + ['product_id' => $product->id]);
    }

    /**
     * Mettre à jour la configuration pour un produit
     */
    public function updateConfig(Product $product, array $parameters)
    {
        $this->model::where('product_id', $product->id)->update($parameters);
    }
}
```

## Création de la migration

Utilisez la commande artisan suivante pour créer une migration pour la table de configuration du serveur de jeu :

```bash
php artisan clientxcms:create-migration-extension
```

Lorsque la commande demande le nom de la migration, entrez :

```
CreateGameserverConfigTable
```

Ensuite, dans le fichier de migration généré, définissez la structure de la table en ajoutant un champ **`product_id`** pour faire la liaison avec les produits :

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
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade'); // Lien avec la table des produits
            $table->integer('memory');
            $table->integer('cpu');
            $table->integer('disk');
            $table->foreignId('server_id')->constrained('servers')->onDelete('cascade'); // Lien avec la table des serveurs
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gameserver_configs');
    }
}
```
## Vue du formulaire de configuration
Vous pouvez créer une vue dans le dossier `addons/fund/views/admin/product-config.blade.php` pour afficher le formulaire de configuration :

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
## Création du modèle associé

Créez un modèle pour représenter la configuration du serveur de jeu. Nous recommandons de nommer ce modèle **`GameserverConfigModel`** pour plus de clarté :

```php
namespace App\Addons\Fund\Models;

use Illuminate\Database\Eloquent\Model;

class GameserverConfigModel extends Model
{
    protected $table = 'gameserver_configs'; // Nom de la table

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

## Enregistrement de la classe dans le produit

Une fois la classe de configuration et le modèle créé, vous devez associer cette configuration au produit en l'enregistrant dans la méthode **`config()`** de la classe produit. Voici un exemple :

```php
public function config(): ?\App\Contracts\Store\ProductConfigInterface
{
    return new \App\Addons\Fund\GameserverConfig(); // Retourne la classe de configuration pour ce produit
}
```

Cela permet au CMS d'utiliser la configuration lors de la gestion des produits, en affichant le formulaire de configuration et en validant les données lors de la création ou modification d'un produit.
