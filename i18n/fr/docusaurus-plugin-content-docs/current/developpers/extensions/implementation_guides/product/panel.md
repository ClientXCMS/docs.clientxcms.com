# Panel de gestion 
Le CMS permet d'ajouter des **panels de gestion avancée** sur les services, offrant ainsi aux utilisateurs la possibilité de gérer et d'interagir avec leurs services via des interfaces graphiques spécifiques. Le panel peut inclure plusieurs **tabs** (sous-pages) pour structurer les différentes actions possibles.

Interface : `App/Contracts/Provisioning/PanelProvisioningInterface`

Class abstraite : `App/Abstracts/AbstractPanelProvisioning`
## Création de la classe

L'interface `App/Contracts/Provisioning/PanelProvisioningInterface` définit les méthodes qui doivent être implémentées pour créer un panel de gestion de service. Chaque **tab** représente une sous-page du panel, permettant aux utilisateurs d'effectuer des actions spécifiques sur leur service.

Les principales méthodes à implémenter sont :

- `uuid()`: Retourne l'UUID unique du panel.
- `tabs()`: Retourne un tableau de **tabs** sous forme d'objets `ProvisioningTabDTO` qui définissent les sous-pages du panel.
- `render()`: Gère le rendu du panel pour l'utilisateur.
- `renderAdmin()`: Gère le rendu du panel dans l'administration.
- `permissions()`: Définit les permissions nécessaires pour accéder au panel. (Pas encore implémenté)

```php
<?php
// addons/fund/src/CustomProductPanel.php
namespace App\Addons\Fund;

use App\Abstracts\AbstractPanelProvisioning;
use App\DTO\Provisioning\ProvisioningTabDTO;
use App\Models\Provisioning\Service;

class CustomProductPanel extends AbstractPanelProvisioning
{
    protected string $uuid = 'gameserver'; // UUID unique du panel

    /**
     * Définit les tabs (sous-pages) pour le panel
     */
    public function tabs(Service $service): array
    {
        return [
            new ProvisioningTabDTO([
                'title' => 'Console',
                'permission' => $this->uuid . '.panel.console',
                'icon' => '<i class="bi bi-terminal"></i>',
                'uuid' => 'console',
                'active' => true,
            ])
        ];
    }

    /**
     * Rendu du panel pour l'utilisateur
     */
    public function render(Service $service, array $permissions = [])
    {
        $data = [
            'service' => $service,
            'permissions' => $permissions,
        ];

        if (!$service->server) {
            \Session::flash('error', 'Serveur non trouvé');
            return '';
        }

        // Logique pour obtenir les informations du serveur
        $serverInfo = $this->getServerInfo($service);

        $data['serverInfo'] = $serverInfo;
        return view('gamepanel::panel.index', $data); // Vue du panel
    }

    /**
     * Logique pour récupérer les informations du serveur
     */
    protected function getServerInfo(Service $service)
    {
        // Exemple de logique pour obtenir les informations du serveur
        return [
            'cpu' => '25%',
            'ram' => '4 GB',
            'uptime' => '72 hours',
        ];
    }

    /**
     * Tab personnalisée pour la console
     */
    public function renderConsole(Service $service)
    {
        $serverInfo = $this->getServerInfo($service);
        return view('gamepanel::panel.console', ['serverInfo' => $serverInfo]);
    }

    /**
     * Rendu du panel dans l'administration
     */
    public function renderAdmin(Service $service)
    {
        return $this->render($service, ['*']); // Affiche toutes les permissions
    }
}
```
## Vue du panel
Vous pouvez créer une vue dans le dossier `addons/fund/views/default/panel/index.blade.php` pour afficher le panel de gestion du service. Cette vue peut inclure des onglets pour naviguer entre les différentes sous-pages du panel.

```blade
Info : {{ $serverInfo['cpu'] }} CPU, {{ $serverInfo['ram'] }} RAM, Uptime : {{ $serverInfo['uptime'] }}
```
## Vue de la console
Vous pouvez créer une vue dans le dossier `addons/fund/views/default/panel/console.blade.php` pour afficher la console du serveur de jeu. Cette vue peut inclure un terminal interactif pour permettre aux utilisateurs d'interagir avec leur serveur.

```blade
<div class="console">
    <pre>Server console...</pre>
</div>
```

## Enregistrement de la classe dans le produit

Une fois le panel créé, vous pouvez l'associer à un produit via la méthode `panel()` dans la classe du produit. Voici comment l'intégrer dans une classe de produit :

```php
public function panel(): ?\App\Contracts\Provisioning\PanelProvisioningInterface
{
    return new GameServerPanel(); // Retourne le panel associé au produit
}
```