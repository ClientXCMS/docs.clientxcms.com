
# Produits & Services

Les produits et services sont des éléments essentiels de toute boutique en ligne. Ils définissent les offres disponibles pour les clients et les options de provisionnement pour les administrateurs. Dans le cadre de l'extension, les produits et services sont gérés via des classes spécifiques qui définissent les caractéristiques et les comportements de chaque type de produit.

:::info
Cette section est majeure puisqu'elle permet de définir : 
- l'automatisation de la création de produit avec les serveurs
- la configuration du produit
- la gestion des données à la commande
- la gestion des options
:::
Interface : `App/Contracts/Store/ProductTypeInterface`

Classe abstraite : `App/Abstracts/AbstractProductType`
## Création de la classe

L'interface `App/Contracts/Store/ProductTypeInterface` définit les méthodes à implémenter pour chaque type de produit. Voici un aperçu des méthodes clés de l'interface :

- `uuid()`: Retourne l'UUID unique du produit.
- `title()`: Retourne le titre du produit.
- `type()`: Retourne le type de provisionnement du produit..
- `data()`: Permet d'ajouter des informations supplémentaires à demander à l'utilisateur lors de la commande.
- `panel()`: Retourne l'interface de provisionnement du panel si nécessaire.
- `server()`: Retourne l'interface de provisionnement du serveur pour les produits de type service.
- `options()`: Retourne un tableau des options supplémentaires pour le produit.
- `config()`: Retourne la configuration spécifique du produit.

Voici un exemple de classe abstraite avec des implémentations par défaut des méthodes :

```php
// addons/fund/src/CustomProductType
namespace App\Addons\Fund;

use App\Abstracts\AbstractProductType;
use App\Models\Store\Product;

class CustomProductType extends AbstractProductType
{
    protected string $uuid = 'custom-product'; // UUID unique du produit
    protected string $title = 'Custom Product'; // Titre du produit
    protected string $type = self::SERVICE; // Type de provisionnement (service)


    public function panel(): ?\App\Contracts\Provisioning\PanelProvisioningInterface
    {
        return new CustomProductData();
    }
    
    /**
     * Retourne la classe de configuration du produit
     */
    public function config(?Product $product = null): ?\App\Contracts\Store\ProductConfigInterface
    {
        return new CustomProductConfig(); // Ou null
    }
    /**
     * Retourne des données supplémentaires liées au produit
     */
    public function data(?Product $product = null): ?\App\Contracts\Store\ProductDataInterface
    {
        return new CustomProductData(); // Ou null
    }

    /**
     * Retourne le type de serveur nécessaire au produit
     */
    public function server(): ?\App\Contracts\Provisioning\ServerTypeInterface
    {
        // Retourne une implémentation de la classe produit si le produit en nécessite un
        return new CustomProductServer(); // ou null
    }

    /**
     * Pour l'instant n'est encore implémenté
     */
    public function options(): array
    {
        return [
        ];
    }
}
```

Les classes `CustomProductData` et `CustomProductServer` doivent être implémentées pour gérer les données et le provisionnement du produit. Elle seront définies dans les sections suivantes.

## Enregistrement du produit dans le Service Provider

Une fois la classe de produit définie, elle doit être enregistrée dans le **Service Provider** de l'extension pour que le CMS puisse la reconnaître et l'utiliser.

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
        // Enregistrement du nouveau type de produit
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