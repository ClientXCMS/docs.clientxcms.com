
### 5. Gestion des données de produits avec `ProductDataInterface`

Le CMS permet de demander des informations supplémentaires lors de la commande d'un produit, telles que le nom de domaine, le mot de passe ou le système d'exploitation. Cela se fait en implémentant l'interface `ProductDataInterface`, qui est responsable de la collecte, validation et rendu de ces données supplémentaires.

#### Exemple : Collecte des données pour l'hébergement web

Voici un exemple basé sur la collecte du nom de domaine pour un produit d'hébergement web, en utilisant la classe `WebHostingProductData`.

##### 5.1. Implémentation de la classe de données de produit

```php
namespace App\Core\Product\Data;

use App\Abstracts\WebHostingProductData;

class HostingProductData extends WebHostingProductData
{
    protected array $parameters = ['domain', 'password']; // Demande le domaine et le mot de passe

    /**
     * Valider les données du produit
     */
    public function validate(): array
    {
        return [
            'domain' => ['required', 'string', 'regex:/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'], // Valide le format du nom de domaine
            'password' => ['required', 'string', 'min:8'], // Le mot de passe doit être fourni et avoir au moins 8 caractères
        ];
    }

    /**
     * Affiche le formulaire de collecte des informations
     */
    public function render(\App\DTO\Store\ProductDataDTO $productDataDTO)
    {
        return view('products.hosting.data', ['data' => $productDataDTO->parameters]);
    }
}
```

Dans cet exemple :

- `parameters` définit les champs que nous souhaitons collecter (ici, le **domaine** et le **mot de passe**).
- `validate()` définit les règles de validation, par exemple, pour le format du domaine et la longueur minimale du mot de passe.
- `render()` génère le formulaire HTML à afficher pour la collecte des informations nécessaires.

##### 5.2. Utilisation de la classe dans la fonction `data` du produit

Pour lier cette classe de collecte de données à un produit, vous devez retourner une instance de cette classe dans la méthode `data()` de la classe de produit :

```php
public function data(?Product $product = null): ?\App\Contracts\Store\ProductDataInterface
{
    return new HostingProductData(); // Retourne la classe de données pour l'hébergement
}
```

Cela permet d'afficher automatiquement le formulaire de collecte d'informations supplémentaires lors de la commande d'un produit d'hébergement.
