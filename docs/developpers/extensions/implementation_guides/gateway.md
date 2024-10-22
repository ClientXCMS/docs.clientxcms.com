
# Passerelle de paiement
Les passerelles de paiement permettent d'ajouter de nouveau moyens de paiement à votre espace client. Pour une intégration réussie, il est nécessaire de suivre une structure cohérente et de respecter l'interface fournis par CLIENTXCMS. Nous allons voir étape par étape comment implémenter une nouvelle passerelle de paiement.

Interface : `App/Contracts/Store/GatewayTypeInterface`

Class abstraite : `App/Abstracts/AbstractGatewayType`
### Création de la classe

Nous avons besoin de créer une nouvelle classe qui étend `App/Abstracts/AbstractGatewayType` et implémente `App/Contracts/Store/GatewayTypeInterface`. Cette classe contiendra les méthodes nécessaires pour gérer les paiements, les configurations, et les validations.

```php
<?php
// addons/fund/src/FundType.php
namespace App\Addons\Fund;

class FundType extends AbstractGatewayType
{
    const UUID = 'fund'; // UUID unique de la passerelle
    protected string $name = 'Fund'; // Nom de la passerelle
    protected string $uuid = self::UUID; // UUID utilisé dans le CMS
    protected string $image = 'fund.png'; // Chemin de l'image affichée dans l'interface
    protected string $icon = 'bi bi-currency-dollar'; // Icône Bootstrap utilisée pour représenter la passerelle
    
}
```

### Implémentation des méthodes de paiement

La méthode `createPayment()` permet de créer un paiement et de rediriger l'utilisateur vers l'URL de retour ou d'annulation après la tentative de paiement. Elle prend comme paramètres une facture (`App\Models\Billing\Invoice`), une passerelle (`App\Models\Billing\Gateway`), la requête HTTP (`Illuminate\Http\Request`), et les **URI** de redirection (`App\DTO\Core\Gateway\GatewayUriDTO`).

```php

    public function createPayment(Invoice $invoice, Gateway $gateway, Request $request, GatewayUriDTO $dto)
    {
        // Création du paiement via l'API de la passerelle de paiement
        $transactionId = "ctx-" . \Str::uuid(); 
        $amount = $invoice->total;
        $array = [
          'return_url' => $dto->returnUri,
          'cancel_url' => $dto->cancelUri,
        ];
        $redirectUrl = $dto->returnUri;
        // Renvoie vers l'URL de la passerelle
        return redirect($redirectUrl); // Redirige vers l'URL de retour une fois le paiement initié
    }
```

Ici, l'UUID de la transaction est généré, et l'utilisateur est redirigé vers la page définie par `$dto->returnUri` après la création du paiement.

La méthode `processPayment()` traite le paiement une fois que l'utilisateur revient sur le site après avoir interagi avec la passerelle de paiement (par exemple, après avoir été redirigé depuis le prestataire de paiement externe).

```php
public function processPayment(Invoice $invoice, Gateway $gateway, Request $request, GatewayUriDTO $dto)
{
    if ($invoice->total > $invoice->customer->balance) {
        $invoice->fail(); // Si le solde est insuffisant, la facture échoue
    } else {
        $invoice->customer->balance -= $invoice->total; // Déduit le montant du solde du client
        $invoice->customer->save(); // Sauvegarde les changements
        $invoice->complete(); // Marque la facture comme payée
    }
    return redirect()->route('front.invoices.show', $invoice->id); // Redirige vers l'interface client
}
```

## Configuration et de validation

La méthode `configForm()` permet de générer le formulaire de configuration pour la passerelle, qui sera affiché dans la section **"Boutique"** des paramètres du CMS. Ce formulaire peut être personnalisé pour chaque passerelle afin de permettre la configuration des clés API ou autres paramètres.

```php
public function configForm(array $context = [])
{
    return view('fund_admin::gateway'); 
}
```

```blade
<div class="grid md:grid-cols-2 gap-4 grid-cols-1">
    <div>
        @include('admin/shared/password', ['name' => 'secret_key', 'label' => __('admin.settings.store.gateways.fields.client_id'), 'value' => env('FUND_SECRET_KEY')])
    </div>
    <div>
        @include('admin/shared/password', ['name' => 'public_key', 'label' => __('admin.settings.store.gateways.fields.client_secret'), 'value' => env('FUND_PUBLIC_KEY')])
    </div>
</div>
```

La méthode `saveConfig()` est utilisée pour sauvegarder les paramètres de configuration de la passerelle.

```php
public function saveConfig(array $data)
{
    // Utiliser EnvEditor pour mettre à jour les variables d'environnement
    EnvEditor::updateEnv([
        'FUND_SECRET_KEY' => $data['secret_key'],
        'FUND_PUBLIC_KEY' => $data['public_key'],
    ]);
}
```

Enfin, la méthode `validate()` permet de valider les données de configuration avant leur sauvegarde. Par exemple, pour valider les clés API :

```php
public function validate(): array
{
    return [
        'secret_key' => ['required', 'string'],
        'public_key' => ['required', 'string'],
    ];
}
```
## Enregistrement de la passerelle dans le Service Provider

Une fois que la passerelle de paiement est créée, il est nécessaire de l'enregistrer dans le **Service Provider** de votre extension pour que le CMS puisse la reconnaître et l'utiliser. Cela se fait dans la méthode `boot()` du **Service Provider**.

Exemple d'enregistrement de la passerelle **FundType** dans le `FundServiceProvider` :

```php
<?php
// addons/fund/src/FundServiceProvider.php
namespace App\Addons\Fund;

use \App\Extensions\BaseAddonServiceProvider;
use App\Services\Core\PaymentTypeService;

class FundServiceProvider extends BaseAddonServiceProvider
{
    protected string $uuid = 'fund';
    
    public function register()
    {
        //
    }

    public function boot()
    {
        // Enregistrer la passerelle de paiement FundType
        $this->app(PaymentTypeService::class)->add(FundType::UUID, FundType::class);
    }
}
```
Il vous faudra également créer un seeders pour ajouter la passerelle dans la base de données.
Pour cela, créez un fichier `FundSeeder.php` dans le dossier `database/seeders` de votre extension :
```php
<?php
// addons/fund/database/seeders/FundSeeder.php
namespace App\Addons\Fund\Database\Seeders;

use App\Models\Billing\Gateway;
use Illuminate\Database\Seeder;
use App\Addons\Fund\FundType;

class FundSeeder extends Seeder
{
    public function run()
    {
        
        Gateway::updateOrCreate([
            'name' => 'Fund',
            'uuid' => FundType::UUID,
            'status' => 'unreferenced',
        ]);
    }
}
```
Enfin, ajoutez le seeder dans votre **Service Provider** pour qu'il soit exécuté lors de l'installation de l'extension :
```php
<?php
// addons/fund/src/FundServiceProvider.php
namespace App\Addons\Fund;

use \App\Extensions\BaseAddonServiceProvider;

class FundServiceProvider extends BaseAddonServiceProvider
{
    protected string $uuid = 'fund';
    
    public function register()
    {
        //
    }

    public function boot()
    {
        $this->loadMigrations();
        $this->addSeeder(FundSeeder::class);
    }
}
```

## Activation de la passerelle
Vous devriez maintenant voir la passerelle de paiement **Fund** dans la section **"Boutique"** des paramètres du CMS. Vous pouvez activer la passerelle et la configurer en fonction de vos besoins.
