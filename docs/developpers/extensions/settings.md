# Paramètres

Dans **ClientXCMS**, il est possible d'ajouter des **cards** (cartes) et des **items** (éléments) dans l'interface des paramètres pour permettre la gestion d'extensions ou de configurations spécifiques dans la page paramètres.

## Ajout d'une carte (card)

Une carte représente une section dans les paramètres. Vous pouvez ajouter une carte dans votre **ServiceProvider** en utilisant la méthode `addCard()`. Cette méthode permet de définir le titre, la description et l'ordre d'affichage de la carte dans les paramètres.

Voici un exemple d'ajout d'une carte dans la méthode `boot()` du **ServiceProvider** de l'extension :

```php
public function boot(): void
{
    if (!is_installed()) {
        return;
    }

    // Ajoute une carte avec l'UUID 'fund', le titre et la sous-description définis dans les fichiers de traduction
    $this->app['settings']->addCard(
        'fund',                             // UUID unique de la carte
        'fund::messages.admin.title',       // Titre de la carte (défini dans les fichiers de langue)
        'fund::messages.admin.subheading',  // Description de la carte (fichiers de langue)
        4,                                  // Ordre d'affichage
        null,                               // Liste d'items (null pour les injecter automatiquement)
        true,                               // Indique que la carte est active
        1                                   // Priorité de la carte
    );
}
```

Dans cet exemple, la méthode `addCard()` ajoute une carte intitulée "fund", avec son titre et sa description définis dans les fichiers de traduction, et une position (ordre) de 4 dans l'interface.

## Ajout d'un item (card item)

Un item est un élément au sein d'une carte qui renvoie soit à une vue, soit à une action. Pour ajouter un item, utilisez la méthode `addCardItem()`.

Voici un exemple d'ajout d'un item dans la carte "fund" :

```php
public function boot(): void
{
    if (!is_installed()) {
        return;
    }

    // Ajoute la carte
    $this->app['settings']->addCard('fund', 'fund::messages.admin.title', 'fund::messages.admin.subheading', 4, null, true, 1);

    // Ajoute un item dans la carte 'fund'
    $this->app['settings']->addCardItem(
        'fund',                                // UUID de la carte
        'fund',                                // UUID de l'item
        'fund::messages.admin.settings.title', // Titre de l'item
        'fund::messages.admin.settings.description',  // Description de l'item
        'bi bi-gear',                  // Icône de l'item (classe bootstrap)
        [FundAdminController::class, 'showSettings'], // Action ou route (ici méthode du contrôleur)
        Permission::MANAGE_SETTINGS            // Permission nécessaire pour afficher l'item
    );
}
```

Dans cet exemple, l'item renvoie à l'action `showFund` du `FundAdminController`, qui affiche une vue dédiée dans l'administration de l'extension.

## Signature des méthodes

Voici la signature des deux méthodes `addCard()` et `addCardItem()` utilisées dans les exemples ci-dessus :

```php
// Ajoute une carte dans l'interface de paramètres
public function addCard(
    string $uuid,        // Identifiant unique de la carte
    string $name,        // Titre de la carte (fichier de langue)
    string $description, // Description de la carte (fichier de langue)
    int $order,          // Ordre d'affichage dans la liste des cartes
    ?Collection $items = null, // Collection des items à afficher
    bool $is_active = true,    // Indique si la carte est active
    int $priority = 1          // Priorité d'affichage
): void

// Ajoute un item dans une carte existante
public function addCardItem(
    string $card_uuid,  // UUID de la carte dans laquelle ajouter l'item
    string $uuid,       // Identifiant unique de l'item
    string $name,       // Titre de l'item (fichier de langue)
    string $description, // Description de l'item (fichier de langue)
    string $icon,       // Icône de l'item (icon Bootstrap ou autre)
    $action,            // Action ou callable (route ou méthode de contrôleur)
    ?string $permission = null // Permission requise pour accéder à l'item
): void
```

## Créer un contrôleur pour l'item

Dans le contrôleur, vous pouvez définir la logique à exécuter lorsque l'utilisateur accède à cet item. Voici un exemple de méthode dans le `FundAdminController` qui affiche une vue :

```php
<?php
// addons/fund/src/Http/Controllers/FundAdminController.php
namespace App\Addons\Fund\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin\Settings;

class FundAdminController
{
    public function showSettings()
    {
        // Retourne une vue spécifique dans l'admin pour l'extension "fund"
        return view('fund_admin::settings');
    }

    public function updateSettings(Request $request)
    {
        // Valide les données du formulaire
        $validated = $request->validate([
            'fund_key_1' => 'required|string',
        ]);
        Settings::updateSettings($validated);
        return redirect()->back()->with('success', __('fund::admin.settings.success'));
    }
}
```
## Route de l'item
Vous devez définir une route pour sauvegarder les paramètres de l'extension. Voici un exemple de route dans le fichier de routes de l'extension dans le fichier `routes/admin.blade.php` :

```php
// addons/fund/routes/admin.blade.php
use App\Addons\Fund\Controllers\FundAdminController;
Route::put('settings', [FundAdminController::class, 'updateSettings'])->name('settings');
```
## Vue de l'item
Vous devez créer une vue pour l'item dans le répertoire de vues de votre extension. Voici un exemple de vue `settings.blade.php` :

```blade
<!-- addons/fund/views/admin/settings.blade.php -->
@extends('admin.settings.sidebar')
@section('title', __('fund::admin.settings.title'))
@section('setting')
    <div class="card">
        <div class="flex justify-between">

        <h4 class="font-semibold uppercase text-gray-600 dark:text-gray-400">
            {{ __('fund::admin.settings.title') }}
        </h4>
            <form method="POST" action="{{ route('fund.admin.settings') }}">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        @include('shared/input', ['name' => 'fund_key_1', 'label' => __('fund::admin.settings.key_1'), 'value' => setting('fund_key_1')])
                    </div>
                </div>
                    <button type="submit" class="btn btn-primary">{{ __('global.save') }}</button>
            </form>
        </div>
    </div>
@endsection
```
Vous pouvez avoir plus d'informations sur les options sur les [champs possibles des formulaires](../themes/forms.md) dans la documentation thème.