
Cela complète la section sur la gestion des produits et des données de produits dans le CMS. Si tu veux plus d'informations ou continuer avec une autre section, fais-le moi savoir !
### 6. Gestion des panels de services avec `PanelProvisioningInterface`

Le CMS permet d'ajouter des **panels de gestion avancée** sur les services, offrant ainsi aux utilisateurs la possibilité de gérer et d'interagir avec leurs services via des interfaces graphiques spécifiques. Le panel peut inclure plusieurs **tabs** (sous-pages) pour structurer les différentes actions possibles.

#### 6.1. Interface : `PanelProvisioningInterface`

L'interface `PanelProvisioningInterface` définit les méthodes qui doivent être implémentées pour créer un panel de gestion de service. Chaque **tab** représente une sous-page du panel, permettant aux utilisateurs d'effectuer des actions spécifiques sur leur service.

Les principales méthodes à implémenter sont :

- `uuid()`: Retourne l'UUID unique du panel.
- `tabs()`: Retourne un tableau de **tabs** sous forme d'objets `ProvisioningTabDTO` qui définissent les sous-pages du panel.
- `render()`: Gère le rendu du panel pour l'utilisateur.
- `renderAdmin()`: Gère le rendu du panel dans l'administration.
- `permissions()`: Définit les permissions nécessaires pour accéder au panel.

#### 6.2. Classe abstraite : `AbstractPanelProvisioning`

La classe `AbstractPanelProvisioning` fournit une base pour implémenter un panel de service. Les développeurs peuvent se concentrer sur la personnalisation du panel en utilisant les méthodes fournies.

#### 6.3. Exemple : Panel de gestion d'un service de jeu vidéo

Dans cet exemple, nous allons créer un panel de gestion pour un service de jeu vidéo, basé sur l'implémentation de **Pterodactyl**.

```php
namespace App\Core\GamePanel;

use App\Abstracts\AbstractPanelProvisioning;
use App\DTO\Provisioning\ProvisioningTabDTO;
use App\Models\Provisioning\Service;

class GameServerPanel extends AbstractPanelProvisioning
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
            ]),
            new ProvisioningTabDTO([
                'title' => 'Fichiers',
                'permission' => $this->uuid . '.panel.files',
                'icon' => '<i class="bi bi-folder"></i>',
                'uuid' => 'files',
                'active' => false,
            ]),
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

#### Explications :

1. **UUID et Tabs** :
    - La méthode `tabs()` retourne un tableau d'objets `ProvisioningTabDTO`. Chaque **tab** représente une sous-page du panel avec des propriétés comme `uuid`, `title`, `icon`, et `permission`.
    - Exemple de tabs dans cet exemple :
        - **Console** : Affiche la console du serveur.
        - **Fichiers** : Accès aux fichiers du serveur.

2. **Rendu des Tabs** :
    - Chaque tab peut être rendu à l'aide de la méthode `render{uuid}()`. Par exemple, pour la tab **Console**, on utilise `renderConsole()` pour afficher les informations de la console du serveur.
    - Cette méthode est appelée dynamiquement grâce au `uuid` de la tab, ce qui permet d'organiser facilement plusieurs sous-pages.

3. **Permissions** :
    - La méthode `permissions()` retourne les permissions requises pour accéder aux différentes sections du panel.

4. **Rendu pour l'administration** :
    - `renderAdmin()` affiche une version du panel accessible aux administrateurs avec toutes les permissions.

#### 6.4. Utilisation dans un produit

Une fois le panel créé, vous pouvez l'associer à un produit via la méthode `panel()` dans la classe du produit. Voici comment l'intégrer dans une classe de produit :

```php
public function panel(): ?\App\Contracts\Provisioning\PanelProvisioningInterface
{
    return new GameServerPanel(); // Retourne le panel associé au produit
}
```

Cela permet au CMS de reconnaître le panel et de l'afficher pour les services associés à ce produit.

---
