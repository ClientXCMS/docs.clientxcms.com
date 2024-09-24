
# Produits & Services

Pour ajouter un nouveau type de produit dans le CMS, les développeurs peuvent implémenter l'interface `ProductTypeInterface` ou utiliser la classe abstraite `AbstractProductType`, qui offre une implémentation de base de cette interface. Cela permet de créer différents types de produits tels que des services, des domaines, des cartes cadeaux, et plus encore.

#### 4.1. Interface : `ProductTypeInterface`

L'interface `ProductTypeInterface` définit les méthodes à implémenter pour chaque type de produit. Voici un aperçu des méthodes clés de l'interface :

- `uuid()`: Retourne l'UUID unique du produit.
- `title()`: Retourne le titre du produit.
- `type()`: Retourne le type de provisionnement du produit. Les types recommandés incluent `service`, `domain`, `license`, et autres.
- `data()`: (Méthode à détailler plus tard) Permet d'ajouter des informations supplémentaires à demander à l'utilisateur lors de la commande.
- `panel()`: Retourne l'interface de provisionnement du panel si nécessaire.
- `server()`: Retourne l'interface de provisionnement du serveur pour les produits de type service.
- `options()`: Retourne un tableau des options supplémentaires pour le produit.
- `config()`: (Méthode à détailler plus tard) Retourne la configuration spécifique du produit.

#### 4.2. Classe abstraite : `AbstractProductType`

La classe `AbstractProductType` fournit une implémentation par défaut de l'interface `ProductTypeInterface`. Elle est conçue pour simplifier le développement en offrant une structure de base pour les méthodes principales, tout en laissant les développeurs personnaliser uniquement les aspects nécessaires.

Voici un exemple de classe abstraite avec des implémentations par défaut des méthodes :

```php
namespace App\Core\Product;

use App\Abstracts\AbstractProductType;
use App\Models\Store\Product;

class CustomProductType extends AbstractProductType
{
    protected string $uuid = 'custom-product-uuid'; // UUID unique du produit
    protected string $title = 'Custom Product'; // Titre du produit
    protected string $type = self::SERVICE; // Type de provisionnement (service)

    /**
     * Retourne des données supplémentaires liées au produit
     */
    public function data(?Product $product = null): ?\App\Contracts\Store\ProductDataInterface
    {
        // Implémentation personnalisée de la méthode data (détails à fournir plus tard)
        return null;
    }

    /**
     * Retourne le type de serveur nécessaire au produit
     */
    public function server(): ?\App\Contracts\Provisioning\ServerTypeInterface
    {
        // Retourne un type de serveur si le produit en nécessite un
        return null;
    }

    /**
     * Retourne les options supplémentaires disponibles pour le produit
     */
    public function options(): array
    {
        return [
            // Exemple d'options supplémentaires
        ];
    }
}
```

Dans cet exemple, nous définissons les propriétés `uuid`, `title`, et `type`, puis nous personnalisons les méthodes pour répondre aux besoins du produit. Les autres méthodes peuvent être implémentées ou laissées avec leur comportement par défaut.

#### 4.3. Enregistrement du produit dans le Service Provider

Une fois la classe de produit définie, elle doit être enregistrée dans le **Service Provider** de l'extension pour que le CMS puisse la reconnaître et l'utiliser.

Voici un exemple d'enregistrement du produit dans le `FundServiceProvider` :

```php
namespace App\Addons\Fund;

use \App\Extensions\BaseAddonServiceProvider;
use App\Services\Core\ProductTypeService;

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
        $this->app(ProductTypeService::class)->add('custom-product-uuid', CustomProductType::class);
    }
}
```

Dans cet exemple, le type de produit `CustomProductType` est enregistré via le service `ProductTypeService`, en utilisant l'UUID unique du produit et la classe correspondante. Cela permet au CMS de lister et d'utiliser ce produit lors de la configuration ou de la gestion des produits dans la boutique.
