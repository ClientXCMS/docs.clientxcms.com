
# Système de serveur

CLIENTXCMS introduit un système pour gérer la livraison de service avec l'interface `ClientX\ServerTypeInterface`  qui définit les méthodes nécessaires pour la gestion des services. Cette interface permet de typer et de gérer différents aspects des services, comme la création de comptes, la suspension et l'expiration.

### Méthodes

#### `type(): string`

Retourne le type du serveur.

#### `name(): string`

Retourne le nom du type de serveur.

#### `for(): array`

Retourne un tableau des types de produit pour lesquels ce serveur est utilisable.

#### `findServer(OrderItem $item): ?Server`

Trouve le serveur associé à un élément de commande.

#### `testConnection(array $params): ConnectionResponse`

Teste la connexion avec les paramètres fournis et retourne une réponse de connexion.

#### `validate(array $params): Validator`

Valide les paramètres fournis et retourne du validateur.

#### `createAccount(OrderItem $item): string`

Crée un compte associé à l'élément de commande. Retourne "success" en cas de succès ou autre en cas d'échec.

#### `suspendAccount(Service $service): string`

Suspend un compte de service. Retourne "success" en cas de succès ou autre en cas d'échec.

#### `unsuspendAccount(Service $service): string`

Rétablit un compte de service suspendu. Retourne "success" en cas de succès ou autre en cas d'échec.

#### `expireAccount(Service $service): string`

Expire un compte de service. Retourne "success" en cas de succès ou autre en cas d'échec.

#### `terminateAccount(Service $service): string`

**Dépréciée**: Utilisez `expireAccount` à la place. Termine un compte de service. Retourne "success" en cas de succès ou autre en cas d'échec.

#### `changePassword(Service $service, ?string $password = null): string`

Change le mot de passe d'un service. Retourne "success" en cas de succès ou autre en cas d'échec. Si le mot de passe est null, envoie "can" si le serveur supporte le changement de mot de passe du service (par exemple, réinitialisation des accès).

#### `changeName(Service $service, ?string $name = null): ?string`

Change le nom d'un service. Retourne "success" en cas de succès ou autre en cas d'échec.

## Intégration dans le conteneur

Pour utiliser les classes implémentant l' interface `ServerTypeInterface`  vous devez les ajouter dans le conteneur sous la clé `'servers.types'` avec les noms de classes associés.

Exemple de configuration dans le fichier du conteneur du module :

```php
<?php
use function \DI\get;
use function \DI\add;
return [
    // ...
    'servers.types' => [
        add(get(\App\Example\ExampleServerType::class)),
        // Ajoutez d'autres types de serveur ici...
    ],
    // ...
];
```