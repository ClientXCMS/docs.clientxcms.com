---
translated: true
---
# Sending Emails & Notifications

ClientXCMS uses Laravel's notification system to send emails to users and administrators. Notifications allow you to customize messages sent via email using **CLIENTXCMS templates**.
For more details on configuring mail in Laravel, see the official documentation [here](https://laravel.com/docs/11.x/mail#introduction)

## Configuration

Before sending emails, it's essential to configure the mail services.
You can configure mail settings in the [mail section](/settings/core/mail) of the administration.


## Creating a Notification with an Email Template

To send emails with a custom template, we can use a **Notification** in Laravel. Here's an example implementation of the **`FundMail`** class, which uses a template to send an email.

Here's an example notification class:

```php
<?php
// addons/fund/src/Notifications/FundMail.php
namespace App\Addons\Fund\Notifications;

use App\Models\Admin\EmailTemplate;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;
use App\Models\Billing\Invoice;
use Illuminate\Contracts\Queue\ShouldQueue;

class FundMail extends Notification implements ShouldQueue
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
        // Context used in the email template
        $context = [
            'invoice' => $this->invoice,
        ];
        $route = route('front.invoice.show', $this->invoice->idn true);
        return EmailTemplate::getMailMessage("fund", $route, $context, $notifiable);
    }
}
```

### Disabling Email Saving

By default, sent emails are saved in the database. To disable this feature, you can add the **`disabled_save`** metadata to the email.
For example:

```php
        $context = [
            'invoice' => $this->invoice,
        ];
        $route = route('front.invoice.show', $this->invoice->idn true);
        $mail = EmailTemplate::getMailMessage("fund", $route, $context, $notifiable);
        $mail->metadata('disable_save', true);
        return $mail;
```

This prevents storing emails in the database for anyone without a customer account (e.g., Staff, Non-customer).

In this example, we use **`EmailTemplate::getMailMessage()`** to send the email based on a specific template named **"fund"**. The custom context is passed to the template via a **`$context`** array that contains information like an invoice.

## Sending a Notification

To send this notification, simply use the **`notify()`** method on a model instance, such as a customer or administrator.
Here's an example of sending a notification:
```php
$service->customer->notify(new FundMail($invoice));
```
In this example, an email is sent to the customer when the service is delivered, using the **`FundMail`** notification.

## Creating an Email Template
To create an email template, you need to add a new entry in your extension's `emails.json` file. Here's an example `emails.json` file:

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
  }
}
```
Then you can import it with the following command:
```bash
php artisan db:seed --class=EmailTemplateSeeder
```
