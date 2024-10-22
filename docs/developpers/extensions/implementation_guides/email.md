# Envoie d'email & Notifications

ClientXCMS utilise le système de notification de Laravel pour envoyer des emails aux utilisateurs et aux administrateurs. Les notifications permettent de personnaliser les messages envoyés par email en utilisant des **modèles CLIENTXCMS**. 
Pour plus de détails sur la configuration des mails dans Laravel, consultez la documentation officielle [ici](https://laravel.com/docs/11.x/mail#introduction)

## Configuration

Avant d'envoyer des mails, il est essentiel de configurer les services de messagerie. 
Vous pouvez configurer les paramètres de mail dans la [section mail](../../../settings/core/mail.md) de l'administration.


## Création d'une notification avec un modèle d'email

Pour envoyer des emails avec un modèle personnalisé, nous pouvons utiliser une **Notification** dans Laravel. Voici un exemple d'implémentation de la classe **`FundMail`**, qui utilise un modèle pour envoyer un email.

Voici un exemple de classe de notification :

```php
<?php
// addons/fund/src/Notifications/FundMail.php
namespace App\Addons\Fund\Notifications;

use App\Models\Admin\EmailTemplate;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;
use App\Models\Billing\Invoice;

class FundMail extends Notification
{
    use Queueable, SerializesModels;

    private Invoice $invoice;

    public function __construct(Invoice $invoice)
    {
        $this->invoice = $invoice;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        // Contexte utilisé dans le modèle de mail
        $context = [
            'invoice' => $this->invoice,
        ];
        $route = route('front.invoice.show', $this->invoice->idn true);
        return EmailTemplate::getMailMessage("fund", $route, $context, $notifiable);
    }
}
```

Dans cet exemple, nous utilisons **`EmailTemplate::getMailMessage()`** pour envoyer l'email en fonction d'un modèle spécifique nommé **"fund"**. Le contexte personnalisé est passé au modèle via un tableau **`$context`** qui contient des informations comme une facture.

## Envoie d'une notification 

Pour envoyer cette notification, il suffit d'utiliser la méthode **`notify()`** sur une instance de modèle, tel qu'un client ou un administrateur.
Voici un exemple d'envoi de notification :
```php
$service->customer->notify(new FundMail($invoice));
```
Dans cet exemple, un email est envoyé au client lorsque le service est livré, en utilisant la notification **`FundMail`**.

## Création d'un modèle d'email
Pour créer un modèle d'email, vous devez ajouter une nouvelle entrée dans le fichier `emails.json` de votre extension. Voici un exemple de fichier `emails.json` :

```json
{
    "fund": {
        "fr_FR": {
            "subject": "Facture payée",
            "button": "Voir la facture",
            "body": "Veuillez cliquer sur le bouton ci-dessous pour voir votre facture.\n<strong>Total</strong>: {{ formatted_price($invoice->total, $invoice->currency) }} <br/>\n@foreach($invoice->items as $item)\n<strong>Nom</strong> : {{ $item->name }} <br/>\n<strong>Prix </strong> : {{ formatted_price($item->price(), $invoice->currency) }} <br/>\n@endforeach"
        },
        "en_GB": {
            "subject": "Your invoice has been paid",
            "button": "View invoice",
            "body": "Please click the button below to view your invoice.\n<strong>Total</strong>: {{ formatted_price($invoice->total, $invoice->currency) }} <br/>\n@foreach($invoice->items as $item)\n<strong>Name</strong> : {{ $item->name }} <br/>\n<strong>Price </strong> : {{ formatted_price($item->price(), $invoice->currency) }} <br/>\n@endforeach"
        }
    },
```
Puis vous pouvez l'importer avec la commande suivante : 
```bash
php artisan db:seed --class=EmailTemplateSeeder
```