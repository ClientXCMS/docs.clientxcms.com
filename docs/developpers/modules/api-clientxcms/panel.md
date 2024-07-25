# Panel de gestion

Ce système permet à vos clients de pouvoir gérer leur service facilement.
### `render(RendererInterface $renderer, Service $service): string`

Cette méthode rend la vue twig de l'interface utilisateur pour un service spécifique.

```php
public function render(RendererInterface $renderer, Service $service): string;
```

### `renderAdmin(RendererInterface $renderer, Service $service): string`

Cette méthode rend la vue twig de l'interface d'administration pour un service spécifique.


### `getTabs(Service $service): array`

Cette méthode retourne un tableau des onglets disponibles pour un service spécifique. Chaque onglet peut être un simple élément ou un tableau avec un titre et une URL.

#### Exemple d'implémentation de `getTabs(Service $service): array`

Voici un exemple d'implémentation de la méthode `getTabs` qui retourne les onglets "Graphiques" et "Console" pour un service :

```php
public function getTabs(Service $service): array
{
    return [
        'graph' => 'Graphiques',
        'console' => [
            'title' => 'Console',
            'url' => '/Proxmox/VNC/' . $service->getId() . '?type=vnc',
        ],
    ];
}
```
## Intégration dans le conteneur

Pour utiliser les classes implémentant l' interface `PanelInterface`  vous devez les ajouter dans le conteneur sous la clé `'panel.list'` avec les noms de classes associés et les types de produits dédiés.

Exemple de configuration dans le fichier du conteneur du module :

```php
<?php
use function \DI\get;
use function \DI\add;
return [
    // ...
    'panel.list' => [
        add([\App\Example\ExamplePanel::class => ['example']]),
        // Ajoutez d'autres types de panel ici...
    ],
    // ...
];