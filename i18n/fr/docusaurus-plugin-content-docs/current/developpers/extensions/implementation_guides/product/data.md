
# Données additionnelles

Le CMS permet de demander des informations supplémentaires lors de la commande d'un produit, telles que le nom de domaine, le mot de passe ou le système d'exploitation. 
Ces données seront transmises lors de la livraison du service.

Interface : `App/Contracts/Store/ProductDataInterface`

Classe abstraite : `App\Abstracts\AbstractProductData`

## Implémentation de la classe de données de produit

```php
<?php
// addons/fund/src/CustomProductData.php
namespace App\Addons\Fund;

use App\Abstracts\AbstractProductData;

class CustomProductData extends AbstractProductData
{
    protected array $parameters = ['password']; // Demande le mot de passe

    /**
     * Valider les données du produit
     */
    public function validate(): array
    {
        return [
            'password' => ['required', 'string', 'min:8'], // Le mot de passe doit être fourni et avoir au moins 8 caractères
        ];
    }

    /**
     * Affiche le formulaire de collecte des informations
     */
    public function render(\App\DTO\Store\ProductDataDTO $productDataDTO)
    {
        $product = $productDataDTO->product;
        return view('fund::product-data', ['data' => $productDataDTO->data]);
    }
}

```
Vous pouvez également utiliser la fonction `primary()` pour définir les paramètres principaux du produit.

```php

    public function primary(ProductDataDTO $productDataDTO): string
    {
        return $this->parameters[0] ?? '';
    }
```

## Vue du formulaire de collecte des données
Vous pouvez créer une vue dans le dossier `addons/fund/views/default/product-data.blade.php` pour afficher le formulaire de collecte des données.
```blade

    @include('shared/password', [
        'label' => __('global.password'),
        'name' => 'password',
        'generate' => true,
        'value' => old('password', $data['password'] ?? null),
    ])
```
## Enregistrement de la classe dans le produit

Pour lier cette classe de collecte de données à un produit, vous devez retourner une instance de cette classe dans la méthode `data()` de la classe de produit :

```php
public function data(?Product $product = null): ?\App\Contracts\Store\ProductDataInterface
{
    return new CustomProductData(); // Retourne la classe de données pour l'hébergement
}
```

### Implémentation pour demander un nom de domaine

Voici un exemple basé sur la collecte du nom de domaine pour un produit d'hébergement web, en utilisant la classe `App\Abstracts\WebHostingProductData`. Héritez-en directement au lieu de `AbstractProductData` quand votre produit nécessite un nom de domaine à la commande - elle implémente déjà les paramètres `domain`, `domain_subdomain` et `subdomain`, avec leurs règles de validation (format FQDN, disponibilité du domaine, collision de sous-domaine) :

```php
namespace App\Addons\Fund;

use App\Abstracts\WebHostingProductData;

class CustomWebHostingProductData extends WebHostingProductData
{
    // Ne surchargez render(), renderAdmin() ou validate() que si vous devez personnaliser le comportement par défaut.
}
```
