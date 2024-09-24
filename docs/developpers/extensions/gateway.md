
# Passerelle de paiement

Pour créer une nouvelle passerelle de paiement dans le CMS, vous devez vous baser sur la classe `AbstractGatewayType` et l'interface `GatewayTypeInterface`. Ces classes fournissent une structure de base pour que chaque passerelle suive un modèle cohérent.

### Création d'une passerelle de paiement à partir de la classe abstraite

Voici comment étendre la classe `AbstractGatewayType` et implémenter les principales méthodes nécessaires à la création d'une nouvelle passerelle de paiement. Nous allons prendre l'exemple de la classe `BalanceType`, qui permet d'effectuer des paiements via un solde interne du client.

#### 2.1. Déclaration de la classe et des propriétés

Dans l'exemple ci-dessous, nous déclarons les propriétés essentielles de la passerelle : le nom, l'UUID, l'image et l'icône.

```php
class BalanceType extends AbstractGatewayType
{
    const UUID = 'balance'; // UUID unique de la passerelle
    protected string $name = 'Balance'; // Nom de la passerelle
    protected string $uuid = self::UUID; // UUID utilisé dans le CMS
    protected string $image = 'balance-icon.png'; // Chemin de l'image affichée dans l'interface
    protected string $icon = 'bi bi-currency-dollar'; // Icône Bootstrap utilisée pour représenter la passerelle
}
```

Ces propriétés sont essentielles pour l'intégration et l'affichage correct de la passerelle dans le CMS.

#### 2.2. Implémentation des méthodes de paiement

##### `createPayment`

La méthode `createPayment()` permet de créer un paiement et de rediriger l'utilisateur vers l'URL de retour ou d'annulation après la tentative de paiement. Elle prend comme paramètres une facture (`Invoice`), une passerelle (`Gateway`), la requête HTTP (`Request`), et les **URI** de redirection (`GatewayUriDTO`).

Voici comment elle est implémentée dans la passerelle **Balance** :

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

##### `processPayment`

La méthode `processPayment()` traite le paiement une fois que l'utilisateur revient sur le site après avoir interagi avec la passerelle de paiement (par exemple, après avoir été redirigé depuis le prestataire de paiement externe).

Exemple d'implémentation :

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

Cette méthode vérifie si le client a suffisamment de solde pour payer la facture. Si oui, elle met à jour son solde et marque la facture comme complétée.

#### 2.3. Méthodes de configuration et de validation

##### `configForm()`

La méthode `configForm()` permet de générer le formulaire de configuration pour la passerelle, qui sera affiché dans la section **"Boutique"** des paramètres du CMS. Ce formulaire peut être personnalisé pour chaque passerelle afin de permettre la configuration des clés API ou autres paramètres.

Exemple :

```php
public function configForm(array $context = [])
{
    return view('fund_admin::gateway'); 
}
```

Voici un exemple de vue de configuration dans un fichier Blade :

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

##### `saveConfig()`

La méthode `saveConfig()` est utilisée pour sauvegarder les paramètres de configuration de la passerelle.

Exemple :

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

##### `validate()`

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

---

## 3. Enregistrement de la passerelle dans le Service Provider

Une fois que la passerelle de paiement est créée, il est nécessaire de l'enregistrer dans le **Service Provider** de votre extension pour que le CMS puisse la reconnaître et l'utiliser. Cela se fait dans la méthode `boot()` du **Service Provider**.

Exemple d'enregistrement de la passerelle **BalanceType** dans le `FundServiceProvider` :

```php
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

Dans cet exemple, la passerelle `FundType` est enregistrée via le service `PaymentTypeService`, en utilisant l'UUID et la classe de la passerelle. Cela permet au CMS de lister et d'utiliser cette nouvelle passerelle lors de la configuration des méthodes de paiement.

---

Ceci termine la section sur la création et l'enregistrement d'une passerelle de paiement. Si tu souhaites continuer avec d'autres sujets ou ajustements, fais-le moi savoir !
