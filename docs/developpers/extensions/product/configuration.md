
### 7. Gestion de la configuration des produits avec `ProductConfigInterface`

Le CMS permet aux développeurs de gérer des configurations spécifiques pour chaque type de produit, comme la configuration d'un serveur ou d'autres options spécifiques. Ces configurations sont associées aux produits via une table de base de données contenant les détails nécessaires.

#### 7.1. Interface : `ProductConfigInterface`

L'interface `ProductConfigInterface` définit les méthodes que chaque classe de configuration doit implémenter pour gérer la configuration des produits. Les méthodes principales sont :

- `validate()`: Définit les règles de validation pour la configuration.
- `render()`: Retourne le formulaire HTML pour afficher et modifier la configuration du produit.
- `storeConfig()`: Permet de sauvegarder les configurations dans la base de données.
- `updateConfig()`: Met à jour les configurations existantes dans la base de données.
- `deleteConfig()`: Supprime la configuration associée à un produit.
- `getConfig()`: Récupère la configuration d'un produit.
- `cloneConfig()`: Permet de cloner une configuration d'un produit vers un autre.

#### 7.2. Exemple : Classe de configuration pour un serveur de jeu

Voici un exemple d'implémentation basé sur la configuration d'un **serveur de jeu**.

##### 7.2.1. Implémentation de la classe `GameserverConfig`

```php
namespace App\Core\GameConfig;

use App\Abstracts\AbstractConfig;
use App\Models\Store\Product;
use App\Models\Provisioning\Server;

class GameserverConfig extends AbstractConfig
{
    protected string $type = 'gameserver';
    protected string $model = \App\Core\GameConfig\Models\GameserverConfigModel::class;

    /**
     * Rendre le formulaire de configuration pour un produit spécifique
     */
    public function render(Product $product)
    {
        $context = [
            'servers' => $this->servers, // Les serveurs disponibles
            'config' => $this->getConfig($product->id, new $this->model), // La configuration existante ou une nouvelle instance
        ];

        return view('gameserver_admin::product-config', $context);
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

##### Explication :

1. **render()** : Génère le formulaire HTML pour la configuration du produit, incluant les options de mémoire, CPU, disque, et serveur associé.
2. **validate()** : Définit les règles de validation pour les champs de la configuration.
3. **storeConfig()** et **updateConfig()** : Gèrent la création et la mise à jour des configurations dans la base de données.

---

Cela conclut la section sur la gestion des panels et des configurations de produits. Si tu souhaites plus d'informations ou continuer avec une autre section, fais-le moi savoir !