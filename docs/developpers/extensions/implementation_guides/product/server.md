# Serveur
Les serveurs permettent d'intéragir avec différentes API pour la **livraison**, la **suspension** ou l'**expiration** des services. 


Interface : `\App\Contracts\Provisioning\ServerTypeInterface`

Class abstraite : `\App\Abstracts\AbstractServerType`

## Création de la classe

L'interface `App\Contracts\Provisioning\ServerTypeInterface` doit être implémentée pour créer une nouvelle classe de serveur. 
Les principales méthodes à implémenter sont :

- **`uuid()`** : Retourne l'UUID unique du type de serveur (le même que le produit).
- **`title()`** : Retourne le titre du type de serveur.
- **`findServer()`** : Trouve un serveur associé à un produit pour livrer le service.
- **`createAccount()`** : Crée un compte sur le serveur pour un service.
- **`suspendAccount()`** : Suspend le compte sur le serveur.
- **`unsuspendAccount()`** : Réactive le compte.
- **`expireAccount()`** : Expire le compte.
- **`onRenew()`** : Action déclenchée lors du renouvellement d'un service.
- **`upgradeService()`** : Permet de mettre à jour un service (pas encore utilisé).
- **`downgradeService()`** : Permet de rétrograder un service (pas encore utilisé).


```php
<?php 
// App\Contracts\Provisioning\CustomGameServerType.php
namespace App\Addons\Fund;

use App\Abstracts\AbstractServerType;
use App\DTO\Provisioning\ServiceStateChangeDTO;
use App\Models\Provisioning\Service;

class CustomGameServerType extends AbstractServerType
{
    protected string $uuid = 'gameserver';
    protected string $title = 'gameserver';

    /**
     * Crée un compte sur le serveur
     */
    public function createAccount(Service $service): ServiceStateChangeDTO
    {
        // Logique pour créer le compte sur l'API distance
        // Retourner l'état de changement de service
        $data = $service->data; // Données lors de la commande
        $config = \App\Addons\Fund\Models\GameServerConfig::where('product_id', $service->product_id)->first(); // Configuration du produit
        return new ServiceStateChangeDTO($service, true, 'Account created successfully');
    }

    /**
     * Suspend un compte sur le serveur
     */
    public function suspendAccount(Service $service): ServiceStateChangeDTO
    {
        // Logique pour suspendre le compte
        return new ServiceStateChangeDTO($service, true, 'Account suspended');
    }

    /**
     * Réactive un compte sur le serveur
     */
    public function unsuspendAccount(Service $service): ServiceStateChangeDTO
    {
        // Logique pour réactiver le compte
        return new ServiceStateChangeDTO($service, true, 'Account unsuspended');
    }

    /**
     * Expire un compte sur le serveur
     */
    public function expireAccount(Service $service): ServiceStateChangeDTO
    {
        // Logique pour expirer le compte
        return new ServiceStateChangeDTO($service, true, 'Account expired');
    }

    /**
     * Teste la connexion au serveur
     */
    public function testConnection(array $params): \App\DTO\Provisioning\ConnectionResponse
    {
        // Logique de test de connexion
        return new \App\DTO\Provisioning\ConnectionResponse(200, 'Connection successful');
    }
}
```
## Enregister de la classe dans le produit

Pour associer cette classe de gestion de serveurs à un produit, vous devez implémenter la méthode **`server()`** dans la classe du produit.

```php
public function server(): ?\App\Contracts\Provisioning\ServerTypeInterface
{
    return new \App\Fund\CustomGameServerType(); // Associe le type de serveur CustomGameServerType au produit
}
