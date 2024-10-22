# Navigation & Menu

Les menus sont des éléments de navigation ajoutés soit dans l'interface d'administration, soit dans l'interface client. Pour ajouter des éléments de menu, vous devez utiliser les classes **`AdminMenuItem`** pour l'administration et **`FrontMenuItem`** pour les clients. Ces classes héritent de **`AbstractMenuItem`**, qui définit les propriétés de base d'un élément de menu.
Pour les ajouter, vous devez utiliser le **ServiceProvider** de votre extension dans la méthode **`boot()`**.
## Exemple de menu admin


```php
$this->app['extension']->addAdminMenuItem(
    new AdminMenuItem(
        'fund',            // UUID unique de l'item
        'admin.fund',      // Route
        'bi bi-speedometer2',   // Icône (classe Bootstrap)
        'admin.fund.title',// Texte de traduction
        1,                      // Position
        Permission::ALLOWED     // Permission (ici tout le monde peut voir)
    )
);
```

### Ajout d'un menu avec une permission spécifique

Si vous souhaitez que l'élément de menu ne soit visible que par les utilisateurs disposant d'une permission spécifique, vous pouvez définir cette permission dans le dernier paramètre :

```php
$this->app['extension']->addAdminMenuItem(
    new AdminMenuItem(
        'fund',              // UUID unique de l'item
        'admin.fund',        // Route
        'bi bi-gear',            // Icône
        'admin.settings.title',  // Texte de traduction
        2,                       // Position
        'admin.manage_customers'    // Permission requise pour voir ce menu
    )
);
```
:::info TIPS
Cela affichera pas le menu mais l'utilisateur pourra accéder à l'URL directement. Pour bloquer l'accès à l'URL, vous devez ajouter une vérification dans le contrôleur.
:::
##  Gestion des items et cards dans les paramètres

Dans la majorité des cas, les éléments de menu doivent être ajoutés dans la **page des paramètres** sous forme de **cards** et **items**. Cela permet d'organiser les paramètres de l'extension de manière claire et hiérarchisée.

### Exemple d'ajout d'une card et d'un item dans les paramètres

Pour ajouter une card et un item dans les paramètres, utilisez les méthodes **`addCard()`** et **`addCardItem()`** dans le **ServiceProvider** :

```php
$this->app['settings']->addCard(
    'fund',                // UUID de la card
    'fund::messages.admin.title',         // Titre de la card (fichier de langue)
    'fund::messages.admin.subheading',   // Description de la card
    4,                             // Position
    null,                          // Pas d'items pour le moment
    true                           // La card est active
);

$this->app['settings']->addCardItem(
    'fund',                // UUID de la card
    'fund',               // UUID de l'item
    'fund::messages.admin.settings.title',// Titre de l'item
    'fund::messages.admin.settings.description', // Description de l'item
    'bi bi-gear',                  // Icône
    [FundAdminController::class, 'showSettings'], // Action ou route
    'admin.settings.manage'        // Permission requise pour voir cet item
);
```

Pour plus d'informations sur la gestion des cards et des items dans les paramètres, consultez la [page dédié](../settings).

## Gestion des widgets dans le tableau de bord admin

Les widgets permettent d'ajouter des éléments visuels et interactifs sur le tableau de bord admin. Il existe deux types principaux de widgets :

- **`AdminCountWidget`** : Affiche des statistiques simples (comme le nombre d'utilisateurs, commandes, etc.).
- **`AdminCardWidget`** : Affiche des widgets plus complexes avec du contenu personnalisé.

### Statistiques simples

Ce widget est utilisé pour afficher des statistiques dans le tableau de bord admin.

#### Exemple : Afficher le nombre total de clients

```php
$users = \App\Models\Customer::where('is_deleted', false)->count();

$this->app['extension']->addAdminCountWidget(
    new AdminCountWidget(
        'total_customers',         // UUID unique
        'bi bi-people',            // Icône
        'Total Clients',           // Titre
        (string)$users,            // Valeur affichée
        'admin.show_customers'     // Permission requise pour voir ce widget
    )
);
```

### Widgets complexes

Ce widget permet d'afficher des informations plus complexes ou dynamiques dans le tableau de bord admin.

#### Exemple : Afficher les 3 derniers utilisateurs connectés

```php
$this->app['extension']->addAdminCardsWidget(
    new AdminCardWidget(
        'last_login',
        function () {
            $invoices = \App\Models\Billing\Invoice::where('paid_at', '!=', null)
                         ->orderBy('created_at', 'desc')
                         ->limit(3)
                         ->get();
            return view('fund_admin::last-transactions', ['transactions' => $invoices]);
        },
        'admin.earn_page', // Permission
        2                             // Nombre de colonnes occupées
    )
);
```

Dans cet exemple, le widget affiche une vue contenant les 3 derniers utilisateurs connectés. La vue **`last-transactions.blade.php`** peut ressembler à ceci :

```blade
<div class="card">
    <div class="card-header">
        Derniers ajouts de fonds
    </div>
    <ul class="list-group list-group-flush">
        @foreach($transactions as $transaction)
            <li class="list-group-item">
                {{ $invoice->identifier() }} - {{ $account->created_at->diffForHumans() }}
            </li>
        @endforeach
    </ul>
</div>
```
